(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{6500:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/boards",function(){return i(8854)}])},8854:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Boards}});var r=i(5893),a=i(7294),n=i(7066);let c=n.Z.create({baseURL:"https://panda-market-api.vercel.app"});var l=i(1657),s=i.n(l),o=i(4636),d=i.n(o);let Dropdown=e=>{let{args:t,handleClickOrder:i,dropdownOpen:n,handleClickOrderOpen:c}=e,l=[...t],[s,o]=(0,a.useState)("최신순"),_=(0,a.useRef)(null),onClick=e=>{let t={최신순:"recent",인기순:"like"}[e];t&&i(t),o(e)},handleClickOutside=e=>{_.current&&!_.current.contains(e.target)&&n&&c()};return(0,a.useEffect)(()=>(n?document.addEventListener("mousedown",handleClickOutside):document.removeEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}),[n]),(0,r.jsxs)("div",{className:d().dropbox,ref:_,children:[(0,r.jsx)("button",{className:d()["dropdown-container"],onClick:c,children:(0,r.jsx)("span",{className:d()["dropdown-current"],children:s})}),(0,r.jsx)("div",{className:"".concat(d()["dropdown-menu"]," ").concat(n?"":d().hidden),children:l.map((e,t)=>(0,r.jsx)("button",{className:d()["dropdown-button"],onClick:()=>onClick(e),value:e,children:e},t))})]})};var _=i(5675),m=i.n(_);let Label=e=>{let{className:t}=e;return(0,r.jsx)("div",{className:t,children:"Best"})};var u=i(1664),h=i.n(u);let ArticleItem=e=>{let{articles:t,option:i}=e,getDate=e=>{let t=new Date(e),i="".concat(t.getFullYear(),". ").concat(String(t.getMonth()+1).padStart(2,"0"),". ").concat(String(t.getDate()).padStart(2,"0"));return i};return(0,r.jsx)("div",{className:"".concat(s()["".concat(i,"-article-item")]),children:t.map(e=>(0,r.jsx)("li",{className:"".concat(s()["".concat(i,"-article-box")]),children:(0,r.jsxs)(h(),{href:"/boards/".concat(e.id),children:[(0,r.jsx)(Label,{className:"".concat(s()["".concat(i,"-label")])}),(0,r.jsxs)("div",{className:"".concat(s()["".concat(i,"-article-title-image")]),children:[(0,r.jsx)("div",{className:"".concat(s()["".concat(i,"-article-title")]),children:e.title}),(0,r.jsx)(m(),{className:"".concat(s()["".concat(i,"-imageBox")]),src:e.image?e.image:"/dummy.png",width:72,height:72,alt:""})]}),(0,r.jsx)("div",{className:"".concat(s()["".concat(i,"-article-info")]),children:(0,r.jsxs)("div",{className:"".concat(s()["".concat(i,"-writer-inner")]),children:[(0,r.jsx)("div",{className:"".concat(s()["".concat(i,"-writer-img")])}),(0,r.jsxs)("div",{className:"".concat(s()["".concat(i,"-writer-nickname")]),children:[e.writer.nickname,(0,r.jsx)("div",{className:"".concat(s()["".concat(i,"-article-like")]),children:e.likeCount})]}),(0,r.jsx)("div",{className:"".concat(s()["".concat(i,"-article-date")]),children:getDate(e.updatedAt)})]})})]})},e.id))})},SearchForm=e=>{let{search:t,handleChangeSearchQuery:i}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("form",{className:s()["search-form"],children:(0,r.jsx)("input",{className:s()["search-input"],type:"text",placeholder:"검색할 상품을 입력해주세요",value:t,onChange:e=>{i(e.target.value)}})})})};function ArticleList(e){var t;let{query:i,handleClickOrder:n,dropdownOpen:l,handleClickOrderOpen:o,handleChangeSearchQuery:d}=e,[_,m]=(0,a.useState)([]),[u,p]=(0,a.useState)(null),[w,g]=(0,a.useState)(!1);async function getArticles(e){let{page:t,pageSize:i,orderBy:r,keyword:a}=e;try{g(!0);let e=await c.get("/articles?page=".concat(t,"&pageSize=").concat(i,"&orderBy=").concat(r,"&keyword=").concat(a)),n=e.data.list;m(n)}catch(e){e instanceof Error&&p(e),console.log("에러가 발생했습니다.")}finally{g(!1)}}return(0,a.useEffect)(()=>{w||getArticles(i)},[i]),(0,r.jsxs)(r.Fragment,{children:[u&&(0,r.jsx)("p",{children:u.message}),(0,r.jsxs)("div",{className:s()["title-wrap"],children:[(0,r.jsx)("h1",{className:s()["section-title"],children:"게시글"}),(0,r.jsx)(h(),{href:"/addItems",className:s()["create-btn"],children:"글쓰기"})]}),(0,r.jsxs)("div",{className:s()["search-order-wrap"],children:[(0,r.jsx)(SearchForm,{search:null!==(t=i.keyword)&&void 0!==t?t:"",handleChangeSearchQuery:d}),(0,r.jsx)(Dropdown,{args:["최신순","인기순"],handleClickOrder:n,dropdownOpen:l,handleClickOrderOpen:o})]}),w?(0,r.jsx)("div",{children:" 로딩중 ... "}):_&&(0,r.jsx)(ArticleItem,{articles:_,option:"main"})]})}function BestArticleList(e){let{query:t}=e,[i,n]=(0,a.useState)([]),[l,o]=(0,a.useState)(null);async function getArticles(e){let{page:t,pageSize:i,orderBy:r}=e;try{let e=await c.get("/articles?page=".concat(t,"&pageSize=").concat(i,"&orderBy=").concat(r)),a=e.data.list;n(a),o(null)}catch(e){e instanceof Error&&o(e),console.log("에러가 발생했습니다.")}finally{}}return(0,a.useEffect)(()=>{getArticles(t)},[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:s()["section-title"],children:"베스트 게시글"}),l&&(0,r.jsx)("p",{children:l.message}),i&&(0,r.jsx)(ArticleItem,{articles:i,option:"best"})]})}var p=i(8121);function Boards(){let[e,t]=(0,a.useState)(!1),[i,n]=(0,a.useState)({page:1,pageSize:10,orderBy:"recent",keyword:""}),c=window.innerWidth,[l,s]=(0,a.useState)(c),o={mobile:1,tablet:2,desktop:3};function getInitialPageSize(e){return e>=992?o.desktop:e>=768&&e<992?o.tablet:o.mobile}let[d,_]=(0,a.useState)({page:1,pageSize:getInitialPageSize(l||c),orderBy:"like"}),getBestArticlePageSize=e=>{let t=getInitialPageSize(e);_(e=>({...e,pageSize:t}))};return(0,a.useEffect)(()=>{let e=(0,p.P)(()=>{let e=window.innerWidth;s(e),getBestArticlePageSize(e)},500);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("section",{className:"section",children:(0,r.jsx)(BestArticleList,{query:d})}),(0,r.jsx)("section",{className:"section",children:(0,r.jsx)(ArticleList,{query:i,handleClickOrder:e=>{n(t=>({...t,orderBy:e})),t(!1)},dropdownOpen:e,handleClickOrderOpen:()=>{t(!e)},handleChangeSearchQuery:e=>{n(t=>({...t,keyword:e}))}})})]})}},1657:function(e){e.exports={"section-title":"ArticleList_section-title__gFHte","create-btn":"ArticleList_create-btn__hw7TC","title-wrap":"ArticleList_title-wrap__YgljP","main-article-box":"ArticleList_main-article-box__mgBkk","main-article-title-image":"ArticleList_main-article-title-image__wZAZc","main-article-title":"ArticleList_main-article-title__dBg0L","main-imageBox":"ArticleList_main-imageBox__3UYjJ","main-article-info":"ArticleList_main-article-info__GCMDH","main-writer-img":"ArticleList_main-writer-img__D4ZBW","main-writer-inner":"ArticleList_main-writer-inner__1JzeW","main-writer-nickname":"ArticleList_main-writer-nickname__2vdG_","main-article-date":"ArticleList_main-article-date__cUlfB","main-article-like":"ArticleList_main-article-like__3ZSWO","search-order-wrap":"ArticleList_search-order-wrap__FWxR6","search-form":"ArticleList_search-form__Fb8Fi","search-input":"ArticleList_search-input__XhNcv","best-article-item":"ArticleList_best-article-item__37Qn9","best-article-box":"ArticleList_best-article-box__XlYCS","best-article-title-image":"ArticleList_best-article-title-image__jbrVE","best-article-title":"ArticleList_best-article-title__u7R4x","best-imageBox":"ArticleList_best-imageBox__lnEjr","best-writer-nickname":"ArticleList_best-writer-nickname__o_4jO","best-article-date":"ArticleList_best-article-date__K1kIu","best-article-like":"ArticleList_best-article-like__d_3hg","best-writer-img":"ArticleList_best-writer-img__fxiFA","best-writer-inner":"ArticleList_best-writer-inner__F5KWd","best-label":"ArticleList_best-label__URB1q","main-label":"ArticleList_main-label__Z6CTp"}},4636:function(e){e.exports={dropbox:"Dropdown_dropbox__K15ww","dropdown-container":"Dropdown_dropdown-container__Kr0JT","dropdown-current":"Dropdown_dropdown-current__TbdF7","dropdown-menu":"Dropdown_dropdown-menu__A1Hz9","dropdown-button":"Dropdown_dropdown-button__4oZk0",hidden:"Dropdown_hidden__iUsb2"}}},function(e){e.O(0,[66,774,888,179],function(){return e(e.s=6500)}),_N_E=e.O()}]);