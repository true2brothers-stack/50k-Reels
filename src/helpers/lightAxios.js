function appendParams(url, params) {
    if (!params || typeof params !== 'object') return url;
    const finalUrl = new URL(url, window.location.origin);

    for (const [key, value] of Object.entries(params)) {
        if (value === undefined || value === null) continue;
        if (Array.isArray(value)) {
            value.forEach(item => finalUrl.searchParams.append(key, item));
        } else {
            finalUrl.searchParams.set(key, value);
        }
    }

    return finalUrl.toString();
}

async function parseResponse(response, responseType) {
    if (responseType === 'blob') return response.blob();
    if (responseType === 'arraybuffer') return response.arrayBuffer();

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) return response.json();

    const text = await response.text();
    try {
        return JSON.parse(text);
    } catch {
        return text;
    }
}

function normalizeBody(data, headers = {}) {
    if (!data || data instanceof FormData || data instanceof Blob || typeof data === 'string') return data;
    const normalizedHeaders = Object.keys(headers).reduce((result, key) => {
        result[key.toLowerCase()] = headers[key];
        return result;
    }, {});
    if (normalizedHeaders['content-type']?.includes('application/x-www-form-urlencoded')) return data;
    headers['content-type'] = headers['content-type'] || 'application/json';
    return JSON.stringify(data);
}

function createHttpError(response, data, config) {
    const error = new Error(`Request failed with status code ${response.status}`);
    error.config = config;
    error.response = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
    };
    return error;
}

async function request(config = {}) {
    const {
        url,
        method = 'GET',
        data,
        params,
        headers: rawHeaders = {},
        withCredentials,
        signal,
        responseType,
    } = config;

    const headers = { ...rawHeaders };
    const finalUrl = appendParams(url, params);
    const body = ['GET', 'HEAD'].includes(String(method).toUpperCase()) ? undefined : normalizeBody(data, headers);
    const response = await fetch(finalUrl, {
        method,
        headers,
        body,
        signal,
        credentials: withCredentials ? 'include' : 'same-origin',
    });

    const responseData = await parseResponse(response, responseType);
    const result = {
        data: responseData,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        config,
    };

    if (!response.ok) throw createHttpError(response, responseData, config);
    return result;
}

function createInstance(defaultConfig = {}) {
    const instance = config => request({ ...defaultConfig, ...config });
    instance.get = (url, config = {}) => instance({ ...config, url, method: 'GET' });
    instance.delete = (url, config = {}) => instance({ ...config, url, method: 'DELETE' });
    instance.post = (url, data, config = {}) => instance({ ...config, url, data, method: 'POST' });
    instance.put = (url, data, config = {}) => instance({ ...config, url, data, method: 'PUT' });
    instance.patch = (url, data, config = {}) => instance({ ...config, url, data, method: 'PATCH' });
    instance.create = config => createInstance({ ...defaultConfig, ...config });
    return instance;
}

const lightAxios = createInstance();

export default lightAxios;
