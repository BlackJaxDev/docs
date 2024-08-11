"use strict";(self.webpackChunkblackjaxdev_github_io=self.webpackChunkblackjaxdev_github_io||[]).push([[9817],{1310:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var s=n(512),i=n(5281),r=n(2802),a=n(8596),l=n(3692),o=n(5999),c=n(4996),d=n(5893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.ZP)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,d.jsx)(l.Z,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function p(e){let{children:t,active:n,index:i,addMicrodata:r}=e;return(0,d.jsxs)("li",{...r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function g(){const e=(0,r.s1)(),t=(0,a.Ns)();return e?(0,d.jsx)("nav",{className:(0,s.Z)(i.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:s,index:n,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:s,children:t.label})},n)}))]})}):null}},4228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});n(7294);var s=n(8264),i=n(2802),r=n(4996),a=n(512),l=n(3692),o=n(8824),c=n(3919),d=n(5999),u=n(2503);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(5893);function b(e){let{href:t,children:n}=e;return(0,h.jsx)(l.Z,{href:t,className:(0,a.Z)("card padding--lg",m.cardContainer),children:n})}function x(e){let{href:t,icon:n,title:s,description:i}=e;return(0,h.jsxs)(b,{href:t,children:[(0,h.jsxs)(u.Z,{as:"h2",className:(0,a.Z)("text--truncate",m.cardTitle),title:s,children:[n," ",s]}),i&&(0,h.jsx)("p",{className:(0,a.Z)("text--truncate",m.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,i.LM)(t),s=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,d.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(x,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(t.docId??void 0);return(0,h.jsx)(x,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(g,{item:t});case"category":return(0,h.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,i.jA)();return(0,h.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,h.jsx)(f,{...e});const s=(0,i.MN)(t);return(0,h.jsx)("section",{className:(0,a.Z)("row",n),children:s.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(v,{item:e})},t)))})}var N=n(49),Z=n(3120),_=n(4364),k=n(1310);const L={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function T(e){let{categoryGeneratedIndex:t}=e;return(0,h.jsx)(s.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,r.ZP)(t.image)})}function I(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.jA)();return(0,h.jsxs)("div",{className:L.generatedIndexPage,children:[(0,h.jsx)(Z.Z,{}),(0,h.jsx)(k.Z,{}),(0,h.jsx)(_.Z,{}),(0,h.jsxs)("header",{children:[(0,h.jsx)(u.Z,{as:"h1",className:L.title,children:t.title}),t.description&&(0,h.jsx)("p",{children:t.description})]}),(0,h.jsx)("article",{className:"margin-top--lg",children:(0,h.jsx)(j,{items:n.items,className:L.list})}),(0,h.jsx)("footer",{className:"margin-top--lg",children:(0,h.jsx)(N.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function y(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(T,{...e}),(0,h.jsx)(I,{...e})]})}},49:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var s=n(5999),i=n(2244),r=n(5893);function a(e){const{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(i.Z,{...t,subLabel:(0,r.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(i.Z,{...n,subLabel:(0,r.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(512),i=n(5999),r=n(5281),a=n(4477),l=n(5893);function o(e){let{className:t}=e;const n=(0,a.E)();return n.badge?(0,l.jsx)("span",{className:(0,s.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,n)=>{n.d(t,{Z:()=>p});n(7294);var s=n(512),i=n(2263),r=n(3692),a=n(5999),l=n(143),o=n(5281),c=n(373),d=n(4477),u=n(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(a.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(r.Z,{to:n,onClick:s,children:(0,u.jsx)(a.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,i.Z)(),{pluginId:a}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,c.J)(a),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.Jo)(a),p=m??(g=x).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(x,{className:t,versionMetadata:n}):null}},2244:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var s=n(512),i=n(3692),r=n(5893);function a(e){const{permalink:t,title:n,subLabel:a,isNext:l}=e;return(0,r.jsxs)(i.Z,{className:(0,s.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},8824:(e,t,n)=>{n.d(t,{c:()=>c});var s=n(7294),i=n(2263);const r=["zero","one","two","few","many","other"];function a(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const i=n.select(t),r=n.pluralForms.indexOf(i);return s[Math.min(r,s.length-1)]}(n,t,e)}}}}]);