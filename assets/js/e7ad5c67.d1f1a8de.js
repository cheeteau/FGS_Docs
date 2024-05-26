"use strict";(self.webpackChunkfgs_docs=self.webpackChunkfgs_docs||[]).push([[49],{9461:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=s(4848),t=s(8453);const o={},c="Le syst\xe8me HttpProxyService",i={id:"FGS/Systems/HttpProxyService",title:"Le syst\xe8me HttpProxyService",description:"Permet de g\xe9rer les requ\xeates HTTP via un service proxy.",source:"@site/docs/FGS/Systems/HttpProxyService.md",sourceDirName:"FGS/Systems",slug:"/FGS/Systems/HttpProxyService",permalink:"/FGS_Docs/FGS_Docs/FGS/Systems/HttpProxyService",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Le syst\xe8me GUI",permalink:"/FGS_Docs/FGS_Docs/FGS/Systems/GUI"},next:{title:"Le syst\xe8me PlayerStorage",permalink:"/FGS_Docs/FGS_Docs/FGS/Systems/PlayerStorage"}},l={},d=[{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"JSONDecode(JSON: string)",id:"jsondecodejson-string",level:3},{value:"GetAsync(Link: string)",id:"getasynclink-string",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"le-syst\xe8me-httpproxyservice",children:"Le syst\xe8me HttpProxyService"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Permet de g\xe9rer les requ\xeates HTTP via un service proxy."}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h2,{id:"m\xe9thodes",children:"M\xe9thodes"}),"\n",(0,r.jsx)(n.p,{children:"Voici la liste des m\xe9thodes dont vous aurez besoin pour vos scripts."}),"\n",(0,r.jsx)(n.h3,{id:"jsondecodejson-string",children:"JSONDecode(JSON: string)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Param\xe8tres:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["JSON ",(0,r.jsx)(n.code,{children:"@string"})]}),": La cha\xeene JSON \xe0 d\xe9coder."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Cette m\xe9thode d\xe9code une cha\xeene JSON en une table Lua."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Exemple:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local HttpProxyService = self.FGS:GetSystem("HttpProxyService")\r\n\r\nlocal jsonString = \'{"key": "value"}\'\r\nlocal decodedTable = HttpProxyService:JSONDecode(jsonString)\r\nprint(decodedTable.key)  -- Affiche "value"\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h3,{id:"getasynclink-string",children:"GetAsync(Link: string)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Param\xe8tres:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Link ",(0,r.jsx)(n.code,{children:"@string"})]}),": L'URL vers laquelle envoyer la requ\xeate GET."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Cette m\xe9thode envoie une requ\xeate GET asynchrone \xe0 l'URL sp\xe9cifi\xe9e."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Exemple:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local HttpProxyService = self.FGS:GetSystem("HttpProxyService")\r\n\r\nlocal response = HttpProxyService:GetAsync("https://api.example.com/data")\r\nif response then\r\n    print("R\xe9ponse re\xe7ue:", response)\r\nelse\r\n    print("La requ\xeate a \xe9chou\xe9.")\r\nend\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(6540);const t={},o=r.createContext(t);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);