if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/animations-BE9kRkUw.js",revision:null},{url:"assets/index-CNC9BkBq.css",revision:null},{url:"assets/index-D9iOalwl.js",revision:null},{url:"assets/ui-Cmh9ljso.js",revision:null},{url:"assets/utils-6ctetNWU.js",revision:null},{url:"assets/vendor-Dgyt88ea.js",revision:null},{url:"index.html",revision:"a59de44ce629b3768650cc828d48990a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.svg",revision:"b3876a35bbe2e6d92b11441ccb291692"},{url:"robots.txt",revision:"b6efc176530086aa0e032a2695faf3d7"},{url:"sitemap.xml",revision:"474d5cc51d3261850eb553123fe21eeb"},{url:"manifest.webmanifest",revision:"4fc43faaccf9456cb4c69775c7c40323"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
