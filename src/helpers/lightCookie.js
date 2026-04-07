function normalizeCookieName(name) {
    return encodeURIComponent(String(name));
}

function serializeCookie(name, value, options = {}) {
    let cookie = `${normalizeCookieName(name)}=${encodeURIComponent(value ?? '')}`;

    if (options.expire) {
        const expireValue = options.expire;
        let expiresAt;
        if (typeof expireValue === 'number') {
            expiresAt = new Date(Date.now() + expireValue * 1000);
        } else if (typeof expireValue === 'string' && /^\d+y$/i.test(expireValue)) {
            expiresAt = new Date();
            expiresAt.setFullYear(expiresAt.getFullYear() + parseInt(expireValue, 10));
        } else {
            expiresAt = new Date(expireValue);
        }
        if (!Number.isNaN(expiresAt.getTime())) {
            cookie += `; Expires=${expiresAt.toUTCString()}`;
        }
    }

    cookie += `; Path=${options.path || '/'}`;

    if (options.domain) cookie += `; Domain=${options.domain}`;
    if (options.sameSite) cookie += `; SameSite=${options.sameSite}`;
    if (options.secure) cookie += '; Secure';

    return cookie;
}

export const lightCookie = {
    getCookie(name) {
        const target = `${normalizeCookieName(name)}=`;
        return document.cookie
            .split(';')
            .map(part => part.trim())
            .find(part => part.startsWith(target))
            ?.slice(target.length);
    },
    setCookie(name, value, options = {}) {
        document.cookie = serializeCookie(name, value, options);
    },
    removeCookie(name, options = {}) {
        document.cookie = serializeCookie(name, '', {
            ...options,
            expire: new Date(0),
        });
    },
};

export default {
    install(app) {
        app.config.globalProperties.$cookie = lightCookie;
    },
};
