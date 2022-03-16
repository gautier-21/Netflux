import{a as I,d as C,_ as p,o as h,c as u,r as v,n as H,M as T,b as _,e as l,w as d,f as B,g as P,v as R,h as c,i as $,T as q,j as g,R as W,F as L,k as w,H as A,t as S,S as j,l as M,N as V,m as G,p as F,q as N,s as z,u as U,x as K}from"./vendor.571d4190.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};J();class Q{constructor(){this.url="https://api.tvmaze.com",this.request={method:"get",url:this.url},this.apiEndpoints={GET_SHOWS:"/shows",GET_SHOW:"/show/{0}",GET_SHOW_AND_EPISODES:"/shows/{0}?embed[]=episodes&embed[]=cast",GET_EPISODE:"/episodes/{0}",SEARCH_SHOWS:"/search/shows?q={0}"}}get(t,r={}){let n=this,o=this.url+t;return n.request.url=X(o,r),I(n.request).then(s=>s.data)}}function X(e,t){let r=e.match(/{\d}/);if(r){if(r.length!=Object.keys(t).length)throw new Error("api.service - Missing request params");r.forEach((n,o)=>{e=e.replace(n,t[o])})}return e}const f=new Q,E=C({id:"show",state:()=>({shows:[],show:[],showComments:[],episode:[],genres:[],searchedShows:[],searchHistory:[],search:""}),getters:{getShows:e=>e.shows,getShow:e=>e.show,getShowComments:e=>e.showComments,getEpisode:e=>e.episode,getShowsHightLight:e=>e.shows.slice(0,10),getShowsExceptHightLight:e=>e.shows.slice(10,50),getShowsByGenre(e){return t=>Object.entries(e.shows).filter(([r,n])=>n.genres.includes(t)).reduce((r,n)=>(r[n[0]]=e.shows[n[0]],r),{})},getCurrentSearch:e=>e.search,getSearchHistory:e=>e.searchHistory,getSearchedShows:e=>e.searchedShows,hasSearch:e=>e.search!=""},actions:{initShows(){this.shows.length<1&&this.requestShows()},initEpisode(e){this.requestEpisode(e)},initShowWithEpisodes(e){this.requestShowWithEpisodes(e)},searchShows(e){e!=""&&e!=this.search&&(this.search=e,this.searchHistory.push(e),this.requestSearchShows())},showAddComment(e){e!==void 0&&e!==""&&this.showComments.push(e)},async requestShows(){this.shows=await f.get(f.apiEndpoints.GET_SHOWS)},async requestShow(e){this.show=await f.get(f.apiEndpoints.GET_SHOW,{0:e})},async requestShowWithEpisodes(e){this.show=await f.get(f.apiEndpoints.GET_SHOW_AND_EPISODES,{0:e})},async requestEpisode(e){this.episode=await f.get(f.apiEndpoints.GET_EPISODE,{0:e})},async requestSearchShows(e){this.searchedShows=await f.get(f.apiEndpoints.SEARCH_SHOWS,{0:e})}}}),k=C({id:"user",state:()=>({showsList:[]}),getters:{getShowsList:e=>e.showsList,getShowsListFirstTen:e=>e.showsList.slice(0,10),hasOneShow:e=>e.showsList.length>0,hasShow:e=>t=>!!e.showsList.find(r=>r.id===t)},actions:{addShow(e){this.hasShow(e.id)||(this.showsList=[...this.showsList,e])},removeShow(e){this.showsList=this.showsList.filter(function(t){return t.id!==e.id})}}});const Y={name:"button-form",props:{type:{type:String,default:"Default"},typeColor:{type:String,default:"Default"}},data(){return{allowedClass:{typeColor:["Default","primary","secondary","correct","incorrect"],type:["Default","large","circle","round"]}}},computed:{classObject(){let e=[];for(const[t,r]of Object.entries(this.$props))r!="Default"&&this.allowedClass[t]&&this.allowedClass[t].includes(r)&&e.push(`btn-${r}`);return e}},mounted(){}};function Z(e,t,r,n,o,s){return h(),u("button",{class:H(["btn",s.classObject])},[v(e.$slots,"default",{},void 0,!0)],2)}var ee=p(Y,[["render",Z],["__scopeId","data-v-f4a8bddc"]]);const te={components:{MagnifyIcon:T},emits:["user:search"],data(){return{active:!1,search:null}},computed:{isOnSearch(){this.search||(this.active=!1)}},methods:{userSearch(){this.active=!1,this.$emit("user:search",this.search),this.search=null}}},se={class:"searchBar"},oe={type:"submit",class:"btn-submit"};function re(e,t,r,n,o,s){const a=_("MagnifyIcon");return h(),u("div",se,[l(q,{name:"switch",mode:"out-in"},{default:d(()=>[o.active?(h(),u("form",{key:0,action:"",onSubmit:t[2]||(t[2]=B(i=>s.userSearch(),["prevent"])),class:"form"},[P(c("input",{type:"text",name:"",id:"","onUpdate:modelValue":t[0]||(t[0]=i=>o.search=i),placeholder:"Search",onMouseleave:t[1]||(t[1]=(...i)=>s.isOnSearch&&s.isOnSearch(...i)),class:"input-search"},null,544),[[R,o.search]]),c("button",oe,[l(a,{size:18})])],32)):(h(),$(a,{key:1,size:24,onClick:t[3]||(t[3]=i=>o.active=!0),onMouseover:t[4]||(t[4]=i=>o.active=!0)}))]),_:1})])}var ne=p(te,[["render",re],["__scopeId","data-v-35b2291e"]]),ie="/netflux/assets/netflux-logo.2d68dc01.png";const ae={name:"Logo"},le={src:ie,alt:"netlux-logo",class:"logo"};function he(e,t,r,n,o,s){return h(),u("img",le)}var ce=p(ae,[["render",he]]);const ue={components:{SearchBar:ne,Logo:ce},setup(){return{showStore:E()}},methods:{newSearch(e){this.showStore.requestSearchShows(e),this.$router.push({name:"shows"})}}},de={class:"header"},_e={class:"header-navigation left"},me=c("span",{style:{"line-height":"0","font-size":"0",color:"transparent"}},"Home",-1),pe=g("Home"),fe=g("Shows"),we=g("My list"),ge={class:"header-navigation right"};function Se(e,t,r,n,o,s){const a=_("Logo"),i=_("RouterLink"),m=_("SearchBar");return h(),u("header",de,[c("div",_e,[l(i,{to:"/"},{default:d(()=>[me,l(a)]),_:1}),c("nav",null,[c("ul",null,[c("li",null,[l(i,{to:"/"},{default:d(()=>[pe]),_:1})]),c("li",null,[l(i,{to:"/shows"},{default:d(()=>[fe]),_:1})]),c("li",null,[l(i,{to:"/my-list"},{default:d(()=>[we]),_:1})])])])]),c("div",ge,[l(m,{"onUser:search":s.newSearch},null,8,["onUser:search"])])])}var ye=p(ue,[["render",Se]]);const ve={},$e={class:"footer"},Le=g("Home"),Ee=g("Shows"),ke=g("My list");function be(e,t,r,n,o,s){const a=_("RouterLink");return h(),u("footer",$e,[c("nav",null,[c("ul",null,[c("li",null,[l(a,{to:"/"},{default:d(()=>[Le]),_:1})]),c("li",null,[l(a,{to:"/shows"},{default:d(()=>[Ee]),_:1})]),c("li",null,[l(a,{to:"/my-list"},{default:d(()=>[ke]),_:1})])])])])}var Oe=p(ve,[["render",be]]);const xe={name:"App",components:{RouterView:W,Header:ye,Footer:Oe},props:{},data(){return{onDesktop:null}},setup(){const e=E(),t=k();return e.initShows(),{showStore:e,userStore:t}},created(){this.checkDevice(),window.addEventListener("resize",this.checkDevice)},methods:{checkDevice(e){this.onDesktop=screen.width>=760}}},Ce={key:1,class:"mobile"},He=c("h1",null,"This app is not available on mobile device or small screen",-1),De=[He];function Ie(e,t,r,n,o,s){const a=_("Header"),i=_("RouterView"),m=_("Footer");return o.onDesktop?(h(),u(L,{key:0},[l(a),c("main",null,[l(i)]),l(m)],64)):(h(),u("div",Ce,De))}var Te=p(xe,[["render",Ie]]);const Be="modulepreload",x={},Pe="/netflux/",y=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${Pe}${n}`,n in x)return;x[n]=!0;const o=n.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Be,o||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),o)return new Promise((i,m)=>{a.addEventListener("load",i),a.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};const Re={name:"section-layer",props:{type:{type:String,default:"Default"},backgroundColor:{type:String,default:"Default"},height:{type:[String,Number],default:"Default"},padding:{type:[Boolean],default:!1},overlay:{type:[Boolean],default:!1}},data(){return{allowedClass:{backgroundColor:["Default","primary","secondary"],type:["Default","splited"],height:["Default","fullHeight","landing"]}}},computed:{classObject(){let e=[];for(const[t,r]of Object.entries(this.$props))r!="Default"&&this.allowedClass[t]&&this.allowedClass[t].includes(r)&&e.push(r);return this.padding&&e.push("p1"),this.overlay&&e.push("overlay"),e}},mounted(){}},qe={class:"half left-section"},We={class:"half right-section"},Ae={key:1,class:"content"};function je(e,t,r,n,o,s){return h(),u("section",{class:H(s.classObject)},[r.type==="splited"?(h(),u(L,{key:0},[c("div",qe,[v(e.$slots,"left")]),c("div",We,[v(e.$slots,"right")])],64)):w("",!0),r.type==="Default"?(h(),u("div",Ae,[v(e.$slots,"default")])):w("",!0)],2)}var Me=p(Re,[["render",je]]),Ve="/netflux/assets/empty-img.04dea8fc.jpg";const Ge={name:"slider-item",components:{HeartIcon:A},props:{wishlist:Boolean,show:{type:Object,default:{name:"Empty",image:null}}},data(){return{hover:!1,isWhishlisted:!1}},computed:{formatedShow(){return this.show.hasOwnProperty("show")?this.show.show:this.show},hasImg(){return!!(this.formatedShow.image&&this.formatedShow.image.medium)}},setup(){return{userStore:k()}},methods:{mouseover:function(){this.hover=!0,this.isWhishlisted=this.userStore.hasShow(this.formatedShow.id)},mouseleave:function(){this.hover=!1},goToShow:function(){this.$router.push(`/show/${this.formatedShow.id}`)},toggleFromMyList:function(){this.isWhishlisted?(this.isWhishlisted=!1,this.userStore.removeShow(this.formatedShow)):(this.isWhishlisted=!0,this.userStore.addShow(this.formatedShow))}}},Fe={class:"slider-item"},Ne=["src","alt"],ze={key:2,class:"card-show-description"},Ue={class:"left"},Ke={key:0},Je={key:1},Qe={class:"right"},Xe={key:1};function Ye(e,t,r,n,o,s){const a=_("HeartIcon");return h(),u("div",Fe,[c("div",{class:"card-show",onMouseover:t[3]||(t[3]=(...i)=>s.mouseover&&s.mouseover(...i)),onMouseleave:t[4]||(t[4]=(...i)=>s.mouseleave&&s.mouseleave(...i))},[c("figure",null,[s.hasImg?(h(),u("img",{key:0,src:s.formatedShow.image.medium,alt:s.formatedShow.name+"-picture",srcset:"",onClick:t[0]||(t[0]=(...i)=>s.goToShow&&s.goToShow(...i))},null,8,Ne)):(h(),u("img",{key:1,src:Ve,class:"notfound-img",alt:"empty-picture",onClick:t[1]||(t[1]=(...i)=>s.goToShow&&s.goToShow(...i))})),o.hover?(h(),u("figcaption",ze,[c("div",Ue,[s.formatedShow.name?(h(),u("p",Ke,S(s.formatedShow.name),1)):w("",!0),s.formatedShow.date?(h(),u("p",Je,S(s.formatedShow.date),1)):w("",!0)]),c("div",Qe,[r.wishlist?(h(),u("button",{key:0,onClick:t[2]||(t[2]=(...i)=>s.toggleFromMyList&&s.toggleFromMyList(...i))},[o.isWhishlisted?(h(),$(a,{key:0,fillColor:"red",title:"Remove from my list"})):(h(),$(a,{key:1,fillColor:"white",title:"Add to my list"}))])):w("",!0),s.formatedShow.rating?(h(),u("p",Xe,S(s.formatedShow.rating.average),1)):w("",!0)])])):w("",!0)])],32)])}var Ze=p(Ge,[["render",Ye],["__scopeId","data-v-b11948f4"]]);const et={name:"Slider",components:{Swiper:j,SwiperSlide:M,SliderItem:Ze},props:{title:String,shows:Object,wishlist:{type:Boolean,default:!0}},setup(){return{modules:[V]}},data(){return{slideByPage:8}},computed:{hasShows(){return this.shows&&Object.keys(this.shows).length>0},hasEnoughtShowsToLoop(){return Object.keys(this.shows).length>this.slideByPage}}},tt=["id"],st={key:0,class:"title"},ot={class:"shows-list-container"};function rt(e,t,r,n,o,s){const a=_("SliderItem"),i=_("swiper-slide"),m=_("Swiper");return h(),u("div",{class:"shows-list",id:Object.keys(this.shows).length},[r.title&&s.hasShows?(h(),u("h2",st,S(r.title),1)):w("",!0),c("div",ot,[l(m,{class:"swiper",slidesPerView:o.slideByPage,slidesPerGroup:o.slideByPage,spaceBetween:24,loop:s.hasEnoughtShowsToLoop,navigation:!0,lazyLoading:!0,modules:n.modules},{default:d(()=>[(h(!0),u(L,null,G(r.shows,O=>(h(),$(i,{key:O.id},{default:d(()=>[l(a,{show:O,wishlist:r.wishlist},null,8,["show","wishlist"])]),_:2},1024))),128))]),_:1},8,["slidesPerView","slidesPerGroup","loop","modules"])])],8,tt)}var nt=p(et,[["render",rt]]);const it={name:"Landing",components:{Button:ee},props:["shows"],data(){return{index:0,show:{id:1,name:"Unknow",summary:"Waiting",image:{original:""}}}},computed:{},mounted(){Object.keys(this.shows).length&&(this.show=this.shows[this.index]),this.startCarrousel()},methods:{startCarrousel(){setInterval(function(){this.next()}.bind(this),5e3)},next(){let e=this.shows.length;this.index<e-1?(this.show=this.shows[this.index],this.index++):this.index=0}},watch:{shows:function(e){e.length>0&&(this.show=this.shows[this.index])}}},at={class:"filter"},lt={class:"content"},ht={class:"title"},ct=["innerHTML"],ut=g("Play"),dt=g("Infos");function _t(e,t,r,n,o,s){const a=_("Button"),i=_("RouterLink");return h(),u("div",{class:"landing-highlight",style:F({backgroundImage:"url("+o.show.image.original+")"})},[c("div",at,[c("div",lt,[c("h2",ht,S(o.show.name),1),c("div",{class:"description",innerHTML:o.show.summary},null,8,ct),l(i,{to:"/show/"+o.show.id},{default:d(()=>[l(a,null,{default:d(()=>[ut]),_:1})]),_:1},8,["to"]),l(i,{to:"/show/"+o.show.id},{default:d(()=>[l(a,{typeColor:"secondary"},{default:d(()=>[dt]),_:1})]),_:1},8,["to"])])])],4)}var mt=p(it,[["render",_t]]);const pt={name:"Home",components:{Section:Me,Slider:nt,Landing:mt},setup(){const e=E(),t=k();return{showStore:e,userStore:t}},data(){return{}},computed:{},mounted(){},methods:{}};function ft(e,t,r,n,o,s){const a=_("Landing"),i=_("Section"),m=_("Slider");return h(),u(L,null,[l(i,{height:"landing"},{default:d(()=>[l(a,{shows:n.showStore.getShowsHightLight},null,8,["shows"])]),_:1}),l(i,{padding:!0,overlay:!0},{default:d(()=>[l(m,{title:"HightLigth",shows:n.showStore.getShowsHightLight},null,8,["shows"])]),_:1}),l(i,{padding:!0},{default:d(()=>[l(m,{title:"Actions :",shows:n.showStore.getShowsByGenre("Action")},null,8,["shows"])]),_:1}),l(i,{padding:!0},{default:d(()=>[l(m,{title:"Comedy :",shows:n.showStore.getShowsByGenre("Comedy")},null,8,["shows"])]),_:1}),l(i,{padding:!0},{default:d(()=>[l(m,{title:"Family :",shows:n.showStore.getShowsByGenre("Family")},null,8,["shows"])]),_:1})],64)}var wt=p(pt,[["render",ft]]);const D=N({history:z("/netflux/"),routes:[{path:"/",name:"home",component:wt},{path:"/shows",name:"shows",component:()=>y(()=>import("./Shows.view.cae1cc31.js"),["assets/Shows.view.cae1cc31.js","assets/vendor.571d4190.js"])},{path:"/show/:id",name:"show",props:!0,component:()=>y(()=>import("./Show.view.3b9d5ecb.js"),["assets/Show.view.3b9d5ecb.js","assets/Show.view.bc341388.css","assets/vendor.571d4190.js"])},{path:"/episode/:id",name:"episode",props:!0,component:()=>y(()=>import("./Episode.view.d9ff8876.js"),["assets/Episode.view.d9ff8876.js","assets/Episode.view.ac8f20bf.css","assets/vendor.571d4190.js"])},{path:"/my-list",name:"myList",component:()=>y(()=>import("./MyList.view.5271707d.js"),["assets/MyList.view.5271707d.js","assets/vendor.571d4190.js"])}]});D.beforeEach(()=>{window.scrollTo(0,0)});const b=U(Te);b.use(K());b.use(D);b.mount("#app");export{Me as S,Ve as _,nt as a,k as b,Ze as c,E as u};
