"use strict";(self.webpackChunkcombway_website=self.webpackChunkcombway_website||[]).push([[4818],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=d(a),u=r,s=c["".concat(p,".").concat(u)]||c[u]||f[u]||l;return a?n.createElement(s,o(o({ref:e},m),{},{components:a})):n.createElement(s,o({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8891:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},o="Unified Cloud",i={unversionedId:"user/D1/cloud",id:"user/D1/cloud",title:"Unified Cloud",description:"We provide a IoT platform for customer to manage devices. On the platform, customer can view",source:"@site/docs/user/D1/cloud.md",sourceDirName:"user/D1",slug:"/user/D1/cloud",permalink:"/zh-Hans/docs/user/D1/cloud",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"VPN",permalink:"/zh-Hans/docs/user/D1/vpn"},next:{title:"OpenWRT Support",permalink:"/zh-Hans/docs/user/D1/openwrt"}},p={},d=[{value:"Combway IoT",id:"combway-iot",level:2},{value:"SD-LAN",id:"sd-lan",level:2},{value:"Azure IoT",id:"azure-iot",level:2},{value:"AWS IoT Core",id:"aws-iot-core",level:2}],m={toc:d},c="wrapper";function f(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unified-cloud"},"Unified Cloud"),(0,r.kt)("p",null,"We provide a IoT platform for customer to manage devices. On the platform, customer can view\nthe device's base information, online status etc. Customer can also change the device configuration\non the platform."),(0,r.kt)("p",null,"We provide an service which we called ",(0,r.kt)("inlineCode",{parentName:"p"},"SD-LAN"),", customer can easily join their network of devices\nfrom different places together. In this way, user can reach any other devices from one of connected device.\nThis make accessing devices at different places very easy, espically for company branches or offices."),(0,r.kt)("h2",{id:"combway-iot"},"Combway IoT"),(0,r.kt)("p",null,"To use Combway IoT platform, your should first register an account on the platform."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Device ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Device serial number, used to differentiate device in cloud"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Binding Code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Device binding code, only used for old cloud platform"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Product"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Device category"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Latitude"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Device location latitude"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Longtitude"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Device location longtitude"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Device ID")," is the only unique identity to differentiate device in the cloud."),(0,r.kt)("p",null,"SEE ",(0,r.kt)("a",{parentName:"p",href:"https://m.combway.com",title:"Combway IoT"},"Combway IoT")),(0,r.kt)("h2",{id:"sd-lan"},"SD-LAN"),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"SD-LAN")," service, it requires at least two gateway device."),(0,r.kt)("p",null,"Please caution: all ",(0,r.kt)("inlineCode",{parentName:"p"},"SD-LAN")," configuration is complished on the cloud platform, device can see\nthe network status, including network list, network connectivity and latency between nodes,\non this device page."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To use other cloud IoT platform, we also provide integrations of well known IoT service provider."),(0,r.kt)("p",null,"Until now, ",(0,r.kt)("inlineCode",{parentName:"p"},"Azure IoT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS IoT Core")," platform had been integrated."),(0,r.kt)("h2",{id:"azure-iot"},"Azure IoT"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable Azure"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable Azure IoT function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"disable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Device ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Device identity"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Device Key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Azure IoT and Device preshared key"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ID Scope"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID scope"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Model ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Model ID"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Report Info"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Report information"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"SEE ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/solutions/iot",title:"Microsoft Azure IoT"},"Azure IoT")),(0,r.kt)("h2",{id:"aws-iot-core"},"AWS IoT Core"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable AWS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable AWS IoT Core function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"disable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AWS Device data endpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Thing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AWS Thing details"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Root CA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AWS Root CA"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Client CRT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AWS Device client Certificate"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Client Key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AWS private key"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Report Info"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Report information"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"SEE ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/iot-core/",title:"AWS IoT Core"},"AWS IoT Core")))}f.isMDXComponent=!0}}]);