(function(e){function t(t){for(var a,o,r=t[0],c=t[1],l=t[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},s={app:0},n=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"01c9":function(e,t,i){e.exports=i.p+"img/big-logo.84d5b300.svg"},"16f6":function(e,t,i){},"17e7":function(e,t,i){e.exports=i.p+"img/zhihu.360b2d82.jpg"},"1a3e":function(e,t,i){"use strict";i("f208")},"2e0d":function(e,t,i){},"328b":function(e,t,i){},3585:function(e,t,i){},4045:function(e,t,i){e.exports=i.p+"img/loading.10647b73.svg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("ac1f"),i("5319"),i("498a");var a=i("96eb"),s=i.n(a);s.a.mock("/api/register","post",(function(e){return console.log(e),s.a.mock({status:200,message:"success"})}));var n=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:"lang-"+e.$i18n.locale,attrs:{id:"app"}},[i("router-view")],1)},r=[],c={name:"App",watch:{$route:function(e,t){/\/zh\//.test(t.path)?this.$i18n.locale="en":this.$i18n.locale="zh"}}},l=c,u=i("2877"),d=Object(u["a"])(l,o,r,!1,null,null,null),m=d.exports,f=i("a925"),p=i("8c4f"),v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-content"},[i("Header"),i("Banner",{on:{clickRegister:e.clickRegister}}),"zh"===e.$i18n.locale?i("Service"):e._e(),"zh"===e.$i18n.locale?i("Team"):e._e(),"zh"===e.$i18n.locale?i("Join"):e._e(),"zh"===e.$i18n.locale?i("Footer"):e._e(),"en"===e.$i18n.locale?i("FooterEN"):e._e(),i("RegisterBox",{attrs:{show:e.registerBoxShow},on:{close:e.registerBoxHide}})],1)},g=[],h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header",style:"background-color: rgba(13,13,70,"+e.headerBgOpacity+");"},[e._m(0),i("ul",{staticClass:"menu"},["zh"===e.$i18n.locale?i("li",{staticClass:"pc-only",on:{click:function(t){return e.goToFloor(".service-floor")}}},[i("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(e.$t("header.service")))])]):e._e(),"zh"===e.$i18n.locale?i("li",{staticClass:"pc-only",on:{click:function(t){return e.goToFloor(".team-floor")}}},[i("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(e.$t("header.team")))])]):e._e(),"zh"===e.$i18n.locale?i("li",{staticClass:"pc-only",on:{click:function(t){return e.goToFloor(".join-floor")}}},[i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.goToFloor(".join-floor")}}},[e._v(e._s(e.$t("header.recruitment")))])]):e._e(),i("li",{on:{click:e.changeLanguage}},[i("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s("zh"===e.$i18n.locale?"EN":"中文"))])])])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"logo",attrs:{href:"/"}},[a("img",{attrs:{src:i("bbfa"),alt:"logo"}})])}],_=i("ed08"),w={data:function(){return{headerBgOpacity:0,language:"zh"}},mounted:function(){this.setHeaderBg(),window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.setHeaderBg()},setHeaderBg:function(){var e=500,t=300,i=.8,a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;a>=t&&a<e+t&&void 0!==this.headerBgOpacity?this.headerBgOpacity=(a-t)/e*i:a<t?this.headerBgOpacity=0:a>=e+t&&(this.headerBgOpacity=i)},goToFloor:function(e){var t=document.querySelector(e),i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(t&&t.getBoundingClientRect){var a=t.getBoundingClientRect().top+i;Object(_["smoothScroll"])(a,(function(){}),600,_["Quad"].easeInOut)}},changeLanguage:function(){var e=this.$route.path;console.log(e),e=/\/zh\//.test(e)?e.replace("/zh/","/"):"/zh"+e,this.$router.push({path:e})}}},C=w,j=(i("a901"),Object(u["a"])(C,h,b,!1,null,null,null)),E=j.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-floor floor-banner"},[a("div",{staticClass:"page-floor-wrapper banner"},[e._m(0),a("div",{staticClass:"banner-big-logo"},[a("div",{staticClass:"banner-logo-container fade"},[a("img",{attrs:{src:i("01c9"),alt:""}}),a("h4",[e._v(e._s(e.$t("banner.slogen")))]),a("div",{staticClass:"register-button",on:{click:e.popupRegisterBox}},[e._v(e._s(e.$t("banner.register")))])])])])])},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"banner-bg"},[a("div",{staticClass:"banner-animation"},[a("img",{staticClass:"bg-main",attrs:{src:i("cc92")}}),a("div",{staticClass:"banner-animation-gradient gradient-1"}),a("div",{staticClass:"banner-animation-gradient gradient-2"}),a("div",{staticClass:"banner-animation-gradient gradient-3"})])])}],k={methods:{popupRegisterBox:function(){this.$emit("clickRegister")}}},A=k,$=(i("71a2"),Object(u["a"])(A,T,y,!1,null,null,null)),S=$.exports,R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-floor service-floor"},[i("div",{staticClass:"page-floor-wrapper service"},[i("div",{staticClass:"service-content fade"},[i("div",{staticClass:"database-benefits"},[i("p",{staticClass:"benefit-1"},[e._v(e._s(e.$t("service.benefit1")))]),i("p",{staticClass:"benefit-2"},[e._v(e._s(e.$t("service.benefit2")))]),i("p",{staticClass:"benefit-3"},[e._v(e._s(e.$t("service.benefit3")))]),i("p",{staticClass:"benefit-4"},[e._v(e._s(e.$t("service.benefit4")))])]),i("div",{staticClass:"database-desc"},[i("strong",[e._v(e._s(e.$t("service.database1")))]),e._v(" "+e._s(e.$t("service.database2"))),i("br"),i("br"),e._v(" "+e._s(e.$t("service.database3"))+" ")])])])])},O=[],N=(i("1a3e"),{}),I=Object(u["a"])(N,R,O,!1,null,null,null),x=I.exports,D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-floor team-floor"},[i("div",{staticClass:"page-floor-wrapper team"},[i("div",{staticClass:"team-title fade"},[i("div",{staticClass:"page-title"},[i("h3",{staticClass:"page-title-text"},[e._v(e._s(e.$t("team.title")))]),i("p",{staticClass:"page-title-p"},[e._v(" "+e._s(e.$t("team.desc"))+" ")])])])])])},P=[],F=(i("f421"),{}),B=Object(u["a"])(F,D,P,!1,null,null,null),L=B.exports,U=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-floor join-floor"},[e._m(0),i("div",{staticClass:"page-floor-wrapper join-us"},[i("div",{staticClass:"join-us-title fade"},[i("h3",[e._v(e._s(e.$t("join.joinus")))]),i("p",[e._v(e._s(e.$t("join.joinusdesc1"))),i("br"),e._v(e._s(e.$t("join.joinusdesc2")))])]),i("div",{staticClass:"join-us-works"},[i("div",{staticClass:"join-us-work fade"},[i("div",{staticClass:"work-detail"},[i("h4",[e._v(e._s(e.$t("join.joinwork4")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc4")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc41")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc42")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc43")))])])]),i("div",{staticClass:"join-us-work fade"},[i("div",{staticClass:"work-detail"},[i("p",[e._v(e._s(e.$t("join.joinworkdesc5")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc51")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc52")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc53")))])])]),i("div",{staticClass:"join-us-work fade"},[i("div",{staticClass:"work-detail"},[i("p",[e._v(e._s(e.$t("join.joinworkdesc6")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc61")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc62")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc63")))]),i("p",[e._v(e._s(e.$t("join.joinworkdesc64")))])])]),i("div",{staticClass:"join-us-work fade no-border"},[i("div",{staticClass:"work-detail"},[i("p",[e._v(e._s(e.$t("join.joinworkdesc7")))]),e._m(1)])])])])])},z=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"join-us-bg"},[i("div",{staticClass:"bg-map"}),i("div",{staticClass:"bg-line"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://www.baidu.com"}},[a("img",{staticClass:"join-qrcode",attrs:{src:i("e660"),alt:""}})])}],M=(i("a824"),{}),H=Object(u["a"])(M,U,z,!1,null,null,null),G=H.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-floor footer-floor"},[a("div",{staticClass:"page-floor-wrapper footer"},[e._m(0),a("div",{staticClass:"footer-wraper"},[a("div",{staticClass:"footer-info"},[a("div",{staticClass:"info-item info-address"},[e._v(" "+e._s(e.$t("footer.address"))+" ")]),a("div",{staticClass:"info-item info-recru"},[a("span",[e._v(e._s(e.$t("footer.email1"))+" hr@singularity-data.com")]),a("br"),a("span",[e._v(e._s(e.$t("footer.email2"))+" contact@singularity-data.com")])])]),a("div",{staticClass:"qr-codes"},[a("div",{staticClass:"qr-code"},[a("img",{attrs:{src:i("17e7"),alt:""}}),a("span",[e._v(e._s(e.$t("footer.zhihu")))])]),a("div",{staticClass:"qr-code"},[a("img",{attrs:{src:i("e660"),alt:""}}),a("span",[e._v(e._s(e.$t("footer.wechat")))])])])]),a("div",{staticClass:"copy-right"},[e._v(" © Copyright 2021 Singularity Data Inc. ")])])])},W=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer-logo"},[a("img",{attrs:{src:i("9b19"),alt:""}})])}],Y=(i("6ab6"),{}),V=Object(u["a"])(Y,q,W,!1,null,"4c71685e",null),J=V.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-floor footer-floor"},[i("div",{staticClass:"page-floor-wrapper footer"},[i("div",{staticClass:"footer-wraper"},[i("div",{staticClass:"footer-info"},[i("div",{staticClass:"info-item info-recru"},[i("span",[e._v(e._s(e.$t("footer.email1"))+" hr@singularity-data.com")]),i("br"),i("span",[e._v(e._s(e.$t("footer.email2"))+" contact@singularity-data.com")])])])]),i("div",{staticClass:"copy-right"},[e._v(" © Copyright 2021 Singularity Data Inc. ")])])])},X=[],Q=(i("f511"),{}),K=Object(u["a"])(Q,Z,X,!1,null,"3a1e8778",null),ee=K.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"register-box"+(e.show?" register-box--active":"")},[a("div",{staticClass:"register-box-bgLayer",on:{click:e.close}}),a("div",{staticClass:"register-box-main"},[a("div",{staticClass:"register-box-form"},[a("div",{staticClass:"rb-form-title"},[e._v(" "+e._s(e.$t("register.title"))+" ")]),a("div",{staticClass:"rb-form-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],attrs:{disabled:""!==e.status,type:"text",name:"firstname",placeholder:e.$t("register.firstname")},domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}})]),a("div",{staticClass:"rb-form-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],attrs:{disabled:""!==e.status,type:"text",name:"lastname",placeholder:e.$t("register.lastname")},domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}})]),a("div",{staticClass:"rb-form-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{disabled:""!==e.status,type:"text",name:"phone",placeholder:e.$t("register.phone")},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),a("div",{staticClass:"rb-form-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{disabled:""!==e.status,type:"text",name:"email",placeholder:e.$t("register.email")},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("span",{class:"email-status"+(e.emailValid?" checked":e.email?" error":"")})]),a("div",{class:"rb-form-submit"+(e.emailValid?" checked":""),on:{click:e.submit}},[e.status?e._e():a("span",[e._v(e._s(e.$t("register.apply")))]),"loading"===e.status?a("img",{staticClass:"loading-picture",attrs:{src:i("4045"),alt:""}}):e._e(),"success"===e.status?a("span",[e._v(e._s(e.$t("register.submit")))]):e._e()]),a("div",{staticClass:"rb-form-cancel",on:{click:e.close}})])])])},ie=[],ae=i("bc3a"),se=i.n(ae),ne={props:{show:Boolean},data:function(){return{firstname:"",lastname:"",phone:"",email:"",status:""}},methods:{close:function(){this.status&&(this.status="",this.firstname="",this.lastname="",this.phone="",this.email=""),this.$emit("close")},submit:function(){var e=this;if(this.emailValid){this.status="loading";var t=this.firstname,i=this.lastname,a=this.phone,s=this.email;se()({url:"/api/register",method:"post",data:{firstname:t,lastname:i,phone:a,email:s}}).then((function(t){200===t.data.status&&setTimeout((function(){e.status="success"}),1e3)}))}}},computed:{emailValid:function(){return!!/^[.A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)}}},oe=ne,re=(i("6369"),Object(u["a"])(oe,te,ie,!1,null,"5fba8583",null)),ce=re.exports,le={name:"App",data:function(){return{registerBoxShow:!1}},components:{Header:E,Banner:S,Service:x,Team:L,Join:G,Footer:J,FooterEN:ee,RegisterBox:ce},mounted:function(){Object(_["listenFade"])(".fade")},methods:{clickRegister:function(){this.registerBoxShow=!0},registerBoxHide:function(){this.registerBoxShow=!1}}},ue=le,de=Object(u["a"])(ue,v,g,!1,null,null,null),me=de.exports;n["a"].use(p["a"]);var fe=[{path:"/",name:"Home",component:me},{path:"/zh",name:"首页",component:me}],pe=new p["a"]({mode:"history",routes:fe}),ve=pe,ge=(i("f5df1"),i("2e0d"),{header:{service:"产品与服务",team:"关于团队",culture:"企业文化",recruitment:"招贤纳士"},banner:{slogen:"奇点无限, 专注于开发下一代云原生流式数据库",register:"注册优先体验"},register:{title:"注册优先体验",firstname:"姓",lastname:"名",phone:"手机号",email:"邮箱",apply:"注册体验",submit:"已提交"},service:{smallTitle:"我们的特色",title:"产品与服务",desc:"奇点无限将帮助用户从不断更新的业务数据中获取最实时且深入的信息用于决策。",more:"了解更多",benefit1:"卓越的数据分析",benefit2:"完整的SQL支持",benefit3:"灵活多样的数据源",benefit4:"有竞争力的服务价格",database1:"Singularity Data致力于开发下一代云原生流式数据库，",database2:"服务于需要超低延迟实时数据分析的应用，如实时消息推荐、实时商业报表、实时性能监控等。如今的数据流处理系统从软件部署、维护、性能优化等多个方面过于繁琐，并且无法很好的高效利用云平台资源。在Singularity Data，我们从0到1构建云原生系统，将传统数据库系统技术与流计算技术相融合，",database3:"为用户打造简单易用的高性能产品。",database4:"我们的产品预计在2022年上线，同时将会在Github上开源代码。"},team:{smallTitle:"我们的团队",title:"我们的团队",desc:"Singularity Data公司由多位数据库系统领域专家创立。在硅谷开发完成系统原型之后，我们于2021年初正式在中国成立公司，并在北京、上海等城市设立研发办公室。我们拥有着与众不同的创业背景。创始人博士毕业于新加坡国⽴⼤学计算机系与卡耐基梅隆大学计算机系，拥有多年工程与科研经验，且常年担任数据库三⼤顶级会议 SIGMOD/VLDB/ICDE 的评审委员会成员。创始工程团队中近70%的成员毕业于威斯康辛大学麦迪逊分校、爱丁堡大学、香港中文大学、清华大学等全球排名前50高校，也曾效⼒于 AWS、Snowflake、Microsoft Azure、Uber 等多家知名科技公司，具有该领域领先的科研能⼒与实践经验。凭借着领先的技术，我们已完成来自于一线风投机构的千万美元级别融资。",positionTitle1:"国际化",positionDesc1:"国际化",positionTitle2:"实战化",positionDesc2:"实战化",more:"了解更多",memberName1:"吴英骏",memberTitle1:"创始人",member1Prof1:"-前Amazon Redshift工程师",member1Prof2:"-前IBM Research Almaden研究员",member1Prof3:"-新加坡国立大学计算机博士",memberName2:"张焕晨",memberTitle2:"联合创始人",member2Prof1:"-清华大学姚班助理教授",member2Prof2:"-Snowflake博士后研究员",member2Prof3:"-卡耐基梅隆大学计算机博士"},join:{joinus:"加入我们",joinusdesc1:"想要在全球范围内将数字梦想变为现实吗？",joinusdesc2:"无论您是要寻找合作机会还是想加入我们团队，我们都热切欢迎。",joinwork1:"高级基础软件工程师",joinworkdesc1:"有领先的分布式系统架构经验并且精通C++或Rust；参与技术设计，项目计划并领导关键项目的研发；有大型数据库，分布式系统，流处理和后端开发相关的经验的极客。",joinwork2:"基础软件工程师",joinworkdesc2:"设计，实践，交付和维护大型C++项目；与其他工程师和产品经理无缝合作；快速迭代产品以满足客户需求。",joinwork3:"流处理的软件工程师",joinworkdesc3:"对于消息队列和流处理系统深入的理解；具有实践数据基础架构的相关经验；流处理/流计算经验比如Kafka, Flink, Spark Streaming等。",joinwork4:"我们提供什么",joinworkdesc4:"技术 & 成长： ",joinworkdesc41:"- 与来自国内外知名高校、行业顶尖的伙伴共同承担具有挑战性和新颖的目标，推动数据行业变革",joinworkdesc42:"- 自由平等、弹性灵活的办公时间和空间，高效开放的办公环境",joinworkdesc43:"- 专属 Mentor 引导，海量学习资料，接触创新技术",joinworkdesc5:"福利 & 待遇：",joinworkdesc51:"- 优于市场水平的现金报酬和可期待空间价值巨大的期权",joinworkdesc52:"- 六险一金（含综合补充医疗保险）、丰富的年假和带薪病假",joinworkdesc53:"- 每周五 Happy Hour、无限零食下午茶、餐补和充满未知的团建",joinworkdesc6:"我们希望你具有什么特质",joinworkdesc61:"- Ownership",joinworkdesc62:"- Leadership",joinworkdesc63:"- Deliver results",joinworkdesc64:"- Standing at the cutting edge",joinworkdesc7:"如果你有梦想在数据库发展史上留下自己的一笔，请扫描或者点击二维码申请加入我们！",apply:"立即申请"},footer:{address:"北京市朝阳区望京国际商业中心F1座4楼",email1:"招聘邮箱",email2:"联系邮箱",zhihu:"知乎",wechat:"微信公众号"}}),he={header:{service:"SERVICE",team:"OUR TEAM",culture:"CULTURE",recruitment:"CAREERS"},banner:{slogen:"THE NEXT-GENERATION STREAMING DATABASE IN THE CLOUD",register:"Register for early access"},register:{title:"Register For Access",firstname:"First Name",lastname:"Last Name",phone:"Phone",email:"Email",apply:"Register",submit:"Success"},service:{smallTitle:"WHAT WE OFFER",title:"PRODUCT AND SERVICE",desc:"WITH SINGULARITY, YOU GET DEEP INSIGHTS FROM YOUR CONSTANTLY-CHANGING DATA IN REAL-TIME.",more:"EXPLORE",benefit1:"ULTRA FAST ANALYTICS",benefit2:"FULL SQL SUPPORT",benefit3:"FLEXIBLE DATA SOURCES",benefit4:"COMPETITIVE PRICING MODEL",database1:"Singularity is a streaming database in the cloud targeting at supporting applications that require ultra low latency for analytical queries.",database2:"With Singularity, you can have your application queries (e.g., from your dashboard, business report, recommendation system) answered correctly in seconds or sub-second even with continuously incoming data changes.",database3:"The key observation is that many real-world applications tend to have fixed query patterns pre-built in their business logic. Taking advantage of this information allows us to speed up those queries by orders of magnitude because we can do the heavy-lifting ahead of time.The key technology here is to update the pre-computed results quickly and efficiently as new data streams come in so that ",database4:"you can make your business decisions with the most up-to-date analysis."},team:{smallTitle:"OUR TEAM",title:"OUR TEAM",desc:"SINGULARITY DATA INC. WAS FOUNDED BY A GROUP OF TALENTED DATABASE RESEARCHERS AND PRACTITIONERS WITH PRIOR EDUCATION AND INDUSTRIAL EXPERIENCES GAINED AT CMU, NUS, TSINGHUA, SNOWFLAKE, AMAZON REDSHIFT, ETC.",positionTitle1:"INTERNATIONAL",positionDesc1:"INTERNATIONAL",positionTitle2:"COMBAT ORIENTED",positionDesc2:"COMBAT ORIENTED",more:"EXPLORE",memberName1:"YINGJUN WU",memberTitle1:"Founder",member1Prof1:"-Former Engineer @ AWS Redshift",member1Prof2:"-Former Researcher @ IBM Research Almaden",member1Prof3:"-Ph.D., National University of Singapore",memberName2:"HUANCHEN ZHANG",memberTitle2:"Co-founder",member2Prof1:"-Assistant Professor @ Tsinghua Yao Class",member2Prof2:"-Postdoc @ Snowflake Inc.",member2Prof3:"-Ph.D., Carnegie Mellon University"},join:{joinus:"JOIN US",joinusdesc1:"Want to make the digital dream a reality on a global scale?",joinusdesc2:"Whether you are looking for cooperation opportunities or want to join our team, we warmly welcome you.",joinwork1:"SENIOR INFRA SOFTWARE ENGINEER",joinworkdesc1:"Experience in leading the design and implementation of system architectures built with C++ or Rust. Experience working with large data sets, distributed systems and streaming systems.",joinwork2:"INFRASTRUCTURE SOFTWARE ENGINEER",joinworkdesc2:"Design, implement, ship and maintain substantial parts of Singularity in C++ or Rust. Collaborate with other engineers and product managers.",joinwork3:"SOFTWARE ENGINEER, STREAMING",joinworkdesc3:"Experience working on and/or a demonstrable understanding of messaging/queuing systems or stream processing systems. Experience working with Kafka, Akka, Spark Streaming, etc.",apply:"APPLY"},footer:{address:"Address",email1:"",email2:"",zhihu:"Zhihu",wechat:"Wechat"}};n["a"].use(f["a"]),n["a"].config.productionTip=!1;var be={zh:ge,en:he},_e=window.location.pathname.replace(/^\/([^/]+).*/i,"$1"),we=new f["a"]({locale:_e.trim().length&&"/"!=_e?"zh":"en",messages:be});new n["a"]({render:function(e){return e(m)},i18n:we,router:ve,mounted:function(){document.dispatchEvent(new Event("render-event"))}}).$mount("#app")},6369:function(e,t,i){"use strict";i("16f6")},"6ab6":function(e,t,i){"use strict";i("cb8a")},"6dbd":function(e,t,i){},"71a2":function(e,t,i){"use strict";i("ee6f")},"847d":function(e,t,i){},"9b19":function(e,t,i){e.exports=i.p+"img/logo.25efd616.svg"},a824:function(e,t,i){"use strict";i("6dbd")},a901:function(e,t,i){"use strict";i("328b")},bbfa:function(e,t,i){e.exports=i.p+"img/header-logo.b7487677.svg"},cb8a:function(e,t,i){},cc92:function(e,t,i){e.exports=i.p+"img/bg-main.ae24cc15.svg"},e660:function(e,t,i){e.exports=i.p+"img/wechat.7d35cd35.jpg"},ed08:function(e,t,i){i("159b");var a,s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n={easeIn:function(e,t,i,a){return i*(e/=a)*e+t},easeOut:function(e,t,i,a){return-i*(e/=a)*(e-2)+t},easeInOut:function(e,t,i,a){return(e/=a/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t}},o=function e(t,i,n,o,r,c){var l=(new Date).getTime()-o,u=!a;if(u&&l<=r){var d=Math.round(c(l,t,i-t,r));document.documentElement.scrollTop=document.body.scrollTop=d,s((function(){e(t,i,n,o,r,c)}))}else u?(document.documentElement.scrollTop=document.body.scrollTop=i,n(!0)):(a=!1,n(!1))},r=function(e,t,i,s){var n=Math.round(document.documentElement.scrollTop||document.body.scrollTop),r=(new Date).getTime(),c=i||2e3;requestAnimationFrame((function(){a=!1,o(n,e,t,r,c,s)}))},c=function(e,t){var i=Date.now();return function(){var a=this,s=arguments,n=Date.now();n-i>=t&&(e.apply(a,s),i=Date.now())}};function l(e,t){var i=null;return function(){i&&clearTimeout(i),i=setTimeout(e,t)}}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=window.innerHeight,a=e&&e.getBoundingClientRect().top+t;return!!(a&&a<i)},d=function(e){var t=c((function(){var t=document.querySelectorAll(e);t.forEach((function(e){u(e)&&e.classList.add("faded")}))}),500),i=l((function(){var t=document.querySelectorAll(e);t.forEach((function(e){u(e)&&e.classList.add("faded")}))}),500);setTimeout((function(){i()}),700),window.addEventListener("scroll",(function(){t(),i()}))};e.exports={smoothScroll:r,debounce:l,throttle:c,isInScreen:u,listenFade:d,rAF:s,Quad:n}},ee6f:function(e,t,i){},f208:function(e,t,i){},f421:function(e,t,i){"use strict";i("3585")},f511:function(e,t,i){"use strict";i("847d")}});
//# sourceMappingURL=app.9a7718bd.js.map