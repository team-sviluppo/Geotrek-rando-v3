if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,t,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const n={uri:location.origin+e.slice(1)};return Promise.all(t.map((e=>{switch(e){case"exports":return a;case"module":return n;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-7640c2d5"],(function(s){"use strict";importScripts("worker-NFLdyq5aPgR_hywss1N46.js","fallback-NFLdyq5aPgR_hywss1N46.js"),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/NFLdyq5aPgR_hywss1N46/_buildManifest.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/NFLdyq5aPgR_hywss1N46/_ssgManifest.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/301-82e5963675ae0cbf5052.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/301-82e5963675ae0cbf5052.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/315-f3285746141660bfb8ee.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/315-f3285746141660bfb8ee.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/332-5dbfc6c376104d361ce7.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/332-5dbfc6c376104d361ce7.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/372-92dd133799be7924c75c.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/372-92dd133799be7924c75c.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/481.d597850d33c13eaed5ab.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/481.d597850d33c13eaed5ab.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/532-270ea5675e3b4cdda8f0.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/532-270ea5675e3b4cdda8f0.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/565-b2d1c0630ebf7fe89747.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/565-b2d1c0630ebf7fe89747.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/592.36fc75a623ceb73455de.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/592.36fc75a623ceb73455de.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/684-ace16e3aafc5e093ae23.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/684-ace16e3aafc5e093ae23.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/693.6d3f52b3377b1cdaa549.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/693.6d3f52b3377b1cdaa549.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/793.e090b96e1a07d73db331.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/793.e090b96e1a07d73db331.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/851.df4d3c7b57341a281b7b.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/851.df4d3c7b57341a281b7b.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/871-3f9a7952807afe1e3706.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/871-3f9a7952807afe1e3706.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/885.41f334c3f15f8d7db994.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/885.41f334c3f15f8d7db994.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/89-9f3330007408fd7be3af.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/89-9f3330007408fd7be3af.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/90-c532cef6baa6f4c8afaf.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/90-c532cef6baa6f4c8afaf.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/953-a0c48f275416ede4f1be.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/953-a0c48f275416ede4f1be.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/973-65a4c6dc9f98ebbc1dc4.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/973-65a4c6dc9f98ebbc1dc4.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/989.16389b6aea3c4c256229.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/989.16389b6aea3c4c256229.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/c158f0e1.4ba109665068858285d6.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/c158f0e1.4ba109665068858285d6.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/c78d26b1-23414a59846d390db80a.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/c78d26b1-23414a59846d390db80a.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/framework-627b804a4ad646905fd7.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/framework-627b804a4ad646905fd7.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/main-0c7fb9c3eb94486857b8.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/main-0c7fb9c3eb94486857b8.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/404-8eadfd8f7d867d427d1e.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/404-8eadfd8f7d867d427d1e.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/_app-1ff1afe6a054b2fd7d71.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/_app-1ff1afe6a054b2fd7d71.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/_error-0d1893399a0206eb70b8.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/_error-0d1893399a0206eb70b8.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/_offline-0c88f4e477fcf37a9287.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/_offline-0c88f4e477fcf37a9287.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/index-b719bceb826c64a6c328.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/index-b719bceb826c64a6c328.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/information/%5BflatPage%5D-ad88b1d30c1779237ad9.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/information/%5BflatPage%5D-ad88b1d30c1779237ad9.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/manifest.json-fa7817834a69bcdc58c2.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/manifest.json-fa7817834a69bcdc58c2.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/offline-899d0c6eb55156c09b79.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/offline-899d0c6eb55156c09b79.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/robots.txt-4135247e393ee18b2919.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/robots.txt-4135247e393ee18b2919.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/search-aa3b8500408c050d9d1c.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/search-aa3b8500408c050d9d1c.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/service/%5BtouristicContent%5D-3af0b94fe08469897fd3.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/service/%5BtouristicContent%5D-3af0b94fe08469897fd3.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/sitemap.xml-a4e23401921938a6e718.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/sitemap.xml-a4e23401921938a6e718.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/trek/%5BdetailsId%5D-122f2564e67d1645bb65.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/pages/trek/%5BdetailsId%5D-122f2564e67d1645bb65.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/webpack-a07a6cddf92bf0c8ecf9.js",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/chunks/webpack-a07a6cddf92bf0c8ecf9.js.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/css/1d91fbc16215aecb4e8e.css",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/css/1d91fbc16215aecb4e8e.css.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/css/504a9f869c02d6d22ed5.css",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/css/504a9f869c02d6d22ed5.css.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/css/c873b05db570f089046c.css",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/css/c873b05db570f089046c.css.map",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/elevation-lime.106f396a2ba1c4544a603d538087cc86.svg",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/elevation-position.254670f7b47d0b46a8aec5fe5584a438.svg",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/elevation-purple.685c0ab78f509da8688f61c975e469c5.svg",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/elevation-pushpin.f2d9b63d0b2797fa3de9ececa6ac3c84.svg",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/elevation-steelblue.f3bbff24162a4ac33867a97cb6079282.svg",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/elevation.106f396a2ba1c4544a603d538087cc86.svg",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/layers-2x.8f2c4d11474275fbc1614b9098334eae.png",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/layers.416d91365b44e4b4f4777663e6f009f3.png",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/marker-icon.2b3e1faf89f94a4835397e7a43b4f77d.png",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/remove.24059db8a65fda711594c4a315cb9943.svg",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/slick.295183786cd8a138986521d9f388a286.woff",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_next/static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf",revision:"NFLdyq5aPgR_hywss1N46"},{url:"/_offline",revision:"NFLdyq5aPgR_hywss1N46"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:t})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[new s.ExpirationPlugin({maxEntries:1,maxAgeSeconds:7776e3}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute("/offline",new s.NetworkFirst({cacheName:"offline",plugins:[new s.ExpirationPlugin({maxEntries:1,maxAgeSeconds:7776e3}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts",plugins:[new s.ExpirationPlugin({maxEntries:8,maxAgeSeconds:31536e3}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:8,maxAgeSeconds:604800}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:128,maxAgeSeconds:7776e3}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:128,maxAgeSeconds:7776e3}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:7776e3}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:7776e3}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\/search.*$/i,new s.NetworkFirst({cacheName:"search-pages",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:604800}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/^(?!.*opentopomap|.*openstreetmap|.*\/trek\/|.*\/service\/).*$/i,new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:512,maxAgeSeconds:7776e3}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET")}));
//# sourceMappingURL=sw.js.map
