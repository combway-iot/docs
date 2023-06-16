"use strict";(self.webpackChunkcombway_website=self.webpackChunkcombway_website||[]).push([[1403],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),d=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(a),c=n,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return a?r.createElement(k,i(i({ref:e},p),{},{components:a})):r.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[s]="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7487:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={},i="Introduction",o={unversionedId:"user/D1/industrial",id:"user/D1/industrial",title:"Introduction",description:"Industrial Interface",source:"@site/docs/user/D1/industrial.md",sourceDirName:"user/D1",slug:"/user/D1/industrial",permalink:"/zh-Hans/docs/user/D1/industrial",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"System",permalink:"/zh-Hans/docs/user/D1/system"},next:{title:"DTU Serial",permalink:"/zh-Hans/docs/user/D1/serial_dtu"}},u={},d=[{value:"Industrial Interface",id:"industrial-interface",level:2},{value:"DI/DO",id:"dido",level:2},{value:"DI",id:"di",level:3},{value:"DO",id:"do",level:3},{value:"Serial",id:"serial",level:2},{value:"RS485",id:"rs485",level:3},{value:"RS232",id:"rs232",level:3},{value:"Settings",id:"settings",level:3},{value:"DTU Mode",id:"dtu-mode",level:3},{value:"Modbus Slave",id:"modbus-slave",level:3},{value:"Modbus TCP",id:"modbus-tcp",level:4},{value:"Modbus RTU",id:"modbus-rtu",level:4},{value:"Modbus RTU Over TCP",id:"modbus-rtu-over-tcp",level:4},{value:"Modbus Master",id:"modbus-master",level:3},{value:"Channel",id:"channel",level:4}],p={toc:d},s="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("h2",{id:"industrial-interface"},"Industrial Interface"),(0,n.kt)("h2",{id:"dido"},"DI/DO"),(0,n.kt)("p",null,"Digital I/O interface may be used as switch of high level for logical 1 and low level for logical 0."),(0,n.kt)("h3",{id:"di"},"DI"),(0,n.kt)("p",null,"Digital Input."),(0,n.kt)("p",null,"When input event ",(0,n.kt)("inlineCode",{parentName:"p"},"High level/Low level/Counter")," occur what should be done."),(0,n.kt)("h3",{id:"do"},"DO"),(0,n.kt)("p",null,"Digital Output."),(0,n.kt)("h2",{id:"serial"},"Serial"),(0,n.kt)("h3",{id:"rs485"},"RS485"),(0,n.kt)("p",null,"Support half-duplex serial communication distance up to 120m."),(0,n.kt)("h3",{id:"rs232"},"RS232"),(0,n.kt)("p",null,"Support full-duplex serial communication distance up to 20m."),(0,n.kt)("h3",{id:"settings"},"Settings"),(0,n.kt)("p",null,"The following settings are common to all modes of the serial port."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable serial port"),(0,n.kt)("td",{parentName:"tr",align:"left"},"disable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Serial Type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Serial port type (Predefined)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Baud Rate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Serial port baudrate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9600")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data Bits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Serial port data bits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Stop Bits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Serial port stop bits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Parity"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Serial port parity bit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Software Flow Control"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Serial port flow control"),(0,n.kt)("td",{parentName:"tr",align:"left"},"disable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Serial Mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Serial port work mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"transparent")))),(0,n.kt)("p",null,"Serial support three work modes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DTU Mode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Modbus Slave")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Modbus Master"))),(0,n.kt)("h3",{id:"dtu-mode"},"DTU Mode"),(0,n.kt)("p",null,"Monitor the serial status and sync to remote server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"serial_dtu#transparent"},"Transparent")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TCP client"),(0,n.kt)("li",{parentName:"ul"},"UDP client"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"serial_dtu#modbus"},"Modbus"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"serial_dtu#tcp-server"},"TCP Server"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"serial_dtu#udp-server"},"UDP Server"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"serial_dtu#mqtt"},"MQTT")))),(0,n.kt)("h3",{id:"modbus-slave"},"Modbus Slave"),(0,n.kt)("p",null,"Monitor the DI status and change the DO status."),(0,n.kt)("h4",{id:"modbus-tcp"},"Modbus TCP"),(0,n.kt)("p",null,"Define DI/DO ports and monitor the DI status and change the DO status via Modbus TCP."),(0,n.kt)("h4",{id:"modbus-rtu"},"Modbus RTU"),(0,n.kt)("p",null,"Define DI/DO ports and monitor the DI status and change the DO status via Modbus RTU."),(0,n.kt)("h4",{id:"modbus-rtu-over-tcp"},"Modbus RTU Over TCP"),(0,n.kt)("p",null,"Define DI/DO ports and monitor the DI status and change the DO status via Modbus RTU Over TCP."),(0,n.kt)("h3",{id:"modbus-master"},"Modbus Master"),(0,n.kt)("p",null,"Monitor the Modbus Slave and react accordingly."),(0,n.kt)("h4",{id:"channel"},"Channel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Serial"),(0,n.kt)("li",{parentName:"ul"},"TCP")))}m.isMDXComponent=!0}}]);