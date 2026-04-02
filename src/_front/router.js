import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"913618c0-9a9b-423c-adfb-0e7a10b3ea25","homePageId":"a26c2e8f-3f5a-4839-ad66-4b54c2b8ecac","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":{},"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"pt","default":true},{"lang":"es","default":false,"isDefaultPath":false}],"background":{"backgroundColor":"#000000"},"workflows":[],"pages":[{"id":"b8ff20fc-5f1e-43ca-86d5-71085c0f326d","linkId":"b8ff20fc-5f1e-43ca-86d5-71085c0f326d","name":"Redirect_bio","folder":"50k_reels/","paths":{"pt":"bio","default":"bio"},"langs":["es","pt"],"cmsDataSetPath":null,"sections":[{"uid":"d9f447e7-ec9a-4a12-a9d7-61a0de94a683","sectionTitle":"Section","linkId":"df77a304-0af5-4799-832e-34a84211c7a3"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a26c2e8f-3f5a-4839-ad66-4b54c2b8ecac","linkId":"a26c2e8f-3f5a-4839-ad66-4b54c2b8ecac","name":"50.000Reelspack","folder":"50k_reels/","paths":{"en":"home","pt":"50000reelspack","default":"50000reelspack"},"langs":["pt","es"],"cmsDataSetPath":null,"sections":[{"uid":"55a55a78-d551-4445-8e5a-4ce217c4bcbb","sectionTitle":"bottonFixed","linkId":"b39239c1-2921-4b33-a32f-06bb19f6149e"},{"uid":"08fcb394-f3b1-44fd-a6e7-3f228c24a16d","sectionTitle":"header","linkId":"64cf9813-9368-4ecc-b2f8-08cae18e4892"},{"uid":"e68ef6d7-0cc1-49fa-b499-1909fc7f1f1e","sectionTitle":"Hero Section","linkId":"46beee72-1826-43cf-85bf-bcf77e502b39"},{"uid":"beb061dc-a0c9-440a-8ed3-7ed4012af872","sectionTitle":"howtoPurchase","linkId":"a627c91a-f5b1-4a80-be67-a01156061908"},{"uid":"8932da02-a454-4393-b8cf-0bc8d3569516","sectionTitle":"3_100x","linkId":"865bd998-e1c0-444d-8068-ee61fc6f8605"},{"uid":"00f28219-a7e8-4736-afa1-ae8232a19281","sectionTitle":"Problem Solution Section","linkId":"ee6eb530-1c78-435f-b54d-0c9be38ddf81"},{"uid":"7380f851-36a3-48a7-bfab-4655bb49925f","sectionTitle":"qualidade","linkId":"a4d90763-97da-4bcc-87b5-974d7e77f930"},{"uid":"dc7b8f29-ee87-4c9a-ae0d-c7a1954fb0fa","sectionTitle":"Problem Solution Section - Copy","linkId":"48b16d51-37d7-4bd3-be5e-b07b35f39b58"},{"uid":"833b0c6a-9b85-420c-9a95-1c7b30f9a28f","sectionTitle":"FAQ Section","linkId":"0e025a7e-e763-491d-8629-690f10f2fc54"},{"uid":"9a22a391-789a-45ca-9d92-0217bc39d4af","sectionTitle":"Footer Section","linkId":"cc8b3a39-fbc8-4118-98c9-b58b8423965a"}],"pageUserGroups":[],"title":{"en":"","es":"50.000 Reels pack | -70% 0FF","fr":"Vide | Commencer à partir de zéro","pt":"50.000 Reels pack | -70% 0FF"},"meta":{"desc":{"es":"🔥 Más de 50.000 Reels de alta calidad, listos para usar en tus redes AHORA","pt":"🔥 Más de 50.000 Reels de alta calidad, listos para usar en tus redes AHORA."},"keywords":{"es":"reels, pack de reels, reels de qualidad, editar reels, editar, reels listos","pt":"reels, pack de reels, reels de qualidad, editar reels, editar, reels listos"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/luxury_pack_edited.png?_wwcv=5"},{"id":"0e965270-558b-410b-b893-61d5bff50ced","linkId":"0e965270-558b-410b-b893-61d5bff50ced","name":"admin","folder":"Admin/","paths":{"pt":"admin/{{param|adm}}","default":"admin/{{param|adm}}"},"langs":["en","pt","es"],"cmsDataSetPath":null,"sections":[{"uid":"3cd4b7c8-3412-45eb-92d9-feff3e96e704","sectionTitle":"Section","linkId":"ae9b6875-9d61-433a-a650-50043edd4c9b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f4f938d8-113b-4be0-ae94-a767fb7cc84d","linkId":"f4f938d8-113b-4be0-ae94-a767fb7cc84d","name":"canceled","folder":"50k_reels/","paths":{"en":"canceled","pt":"canceled","default":"canceled"},"langs":["pt","es"],"cmsDataSetPath":null,"sections":[{"uid":"02e5392b-5ae9-468a-8e58-97fe8682b4a2","sectionTitle":"Section","linkId":"a2b49e09-4e14-4b28-8a6f-68d98d551a91"},{"uid":"ab6464fb-a9e2-4b35-a204-c0d6836be5d5","sectionTitle":"Offer Section","linkId":"e4c966c9-d909-44ad-9466-a9f8dc64bee0"},{"uid":"6d773fee-d352-424c-bc72-3c1a7b9388dd","sectionTitle":"FAQ Section","linkId":"72fbd9fe-ee9e-4029-8b13-7af020414f74"},{"uid":"e6030251-7728-4cd2-848b-b741c0dad2a3","sectionTitle":"Footer Section","linkId":"dea4a517-b2df-49bd-b297-8c6873bc31bd"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"477324e3-c66e-421f-81a2-d0d24b491d6a","linkId":"477324e3-c66e-421f-81a2-d0d24b491d6a","name":"Thankyou_page","folder":"50k_reels/","paths":{"en":"success","pt":"sucess","default":"sucess"},"langs":["pt","es"],"cmsDataSetPath":null,"sections":[{"uid":"453091f1-25ef-4539-a577-d924ab5736e6","sectionTitle":"Page","linkId":"bd4a6c38-4d88-45de-b5f6-de2efcb8befb"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"75b9e021-a5fe-4ae9-8c6a-f4b3e65f2a24","name":"Vimeo","namespace":"vimeo"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 5;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = true;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
