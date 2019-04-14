(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{Afsr:function(l,n,u){"use strict";u.r(n);var s=u("CcnG"),a=function(){return function(){}}(),t=function(){return function(){}}(),o=u("pMnS"),b=u("ZYCi"),e=u("Ip0R"),c=s.ob({encapsulation:2,styles:[],data:{}});function p(l){return s.Ib(2,[(l()(),s.qb(0,0,null,null,3,"header",[["class","page__header slds-border_bottom slds-grid slds-wrap slds-m-bottom_medium"]],null,null,null,null,null)),(l()(),s.qb(1,0,null,null,2,"div",[["class","slds-has-flexi-truncate slds-align-middle"]],null,null,null,null,null)),(l()(),s.qb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Get Started"])),(l()(),s.qb(4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["This is an open source project that builds Angular widgets following UX guidelines and using HTML/CSS of Salesforce's Lightnign Design System."])),(l()(),s.qb(6,0,null,null,162,"div",[],null,null,null,null,null)),(l()(),s.qb(7,0,null,null,1,"h2",[["class","callout"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Installation"])),(l()(),s.qb(9,0,null,null,1,"div",[["class","slds-text-heading_small slds-m-top_large slds-m-bottom_small"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Step 1: Installing packages"])),(l()(),s.qb(11,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["You can use either the "])),(l()(),s.qb(13,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["npm"])),(l()(),s.Gb(-1,null,[" or "])),(l()(),s.qb(16,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["yarn"])),(l()(),s.Gb(-1,null,[" command-line tool to install packages."])),(l()(),s.qb(19,0,null,null,8,"pre",[["class","language-clike"],["ngNonBindable",""]],null,null,null,null,null)),(l()(),s.qb(20,0,null,null,7,"code",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["npm install "])),(l()(),s.qb(22,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["--"])),(l()(),s.Gb(-1,null,["save ng"])),(l()(),s.qb(25,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["-"])),(l()(),s.Gb(-1,null,["lightning\n"])),(l()(),s.qb(28,0,null,null,1,"div",[["class","slds-text-heading_small slds-m-top_xx-large slds-m-bottom_small"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Step 2: Installing dependencies"])),(l()(),s.qb(30,0,null,null,14,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Some components rely on "])),(l()(),s.qb(32,0,null,null,1,"a",[["href","https://material.angular.io/cdk/"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Angular CDK"])),(l()(),s.Gb(-1,null,[" to work correctly. If you don't already have "])),(l()(),s.qb(35,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),s.qb(36,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["@angular/cdk"])),(l()(),s.Gb(-1,null,[" as a dependency, you should also install it to your application via "])),(l()(),s.qb(39,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["npm"])),(l()(),s.Gb(-1,null,[" or "])),(l()(),s.qb(42,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["yarn"])),(l()(),s.Gb(-1,null,["."])),(l()(),s.qb(45,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["If you are later going to use Salesforce's LDS SASS files or want to import their CSS from your "])),(l()(),s.qb(47,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["node_modules"])),(l()(),s.Gb(-1,null,[" instead of CDN, you should also install "])),(l()(),s.qb(50,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),s.qb(51,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["@salesforce-ux/design-system"])),(l()(),s.Gb(-1,null,["."])),(l()(),s.qb(54,0,null,null,1,"div",[["class","slds-text-heading_small slds-m-top_xx-large slds-m-bottom_small"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Step 3: Adding styles"])),(l()(),s.qb(56,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Including SLDS CSS files and a small set of structural styles of CDK, is required for your application to work correctly."])),(l()(),s.qb(58,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["If you are using the Angular CLI, you need to add the following to the "])),(l()(),s.qb(60,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["styles"])),(l()(),s.Gb(-1,null,[" array of your "])),(l()(),s.qb(63,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["angular.json"])),(l()(),s.Gb(-1,null,[" file."])),(l()(),s.qb(66,0,null,null,23,"pre",[["class","language-json"],["ngNonBindable",""]],null,null,null,null,null)),(l()(),s.qb(67,0,null,null,22,"code",[],null,null,null,null,null)),(l()(),s.qb(68,0,null,null,1,"span",[["class","token property"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,['"styles"'])),(l()(),s.qb(70,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(73,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["["])),(l()(),s.Gb(-1,null,["\n  "])),(l()(),s.qb(76,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,['"node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css"'])),(l()(),s.qb(78,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n  "])),(l()(),s.qb(81,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,['"node_modules/@angular/cdk/overlay-prebuilt.css"'])),(l()(),s.qb(83,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n  ... any other styles\n"])),(l()(),s.qb(86,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["]"])),(l()(),s.qb(88,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.qb(90,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["If you are not using the CLI, you'll need to add the files listed above to your build tooling or you could also include them via "])),(l()(),s.qb(92,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["<link>"])),(l()(),s.Gb(-1,null,[" elements in your "])),(l()(),s.qb(95,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["index.html"])),(l()(),s.Gb(-1,null,["."])),(l()(),s.qb(98,0,null,null,1,"div",[["class","slds-text-heading_small slds-m-top_xx-large slds-m-bottom_small"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Step 4 (optional): Setup SLDS icons"])),(l()(),s.qb(100,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,[" If you want to use SLDS icons, you must provide a copy of the various sprite files (ie "])),(l()(),s.qb(102,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["@salesforce-ux/design-system/assets/icons/*-sprite/svg/symbols.svg"])),(l()(),s.Gb(-1,null,["), served through your server. If you are using the Angular CLI, here is an example configuration for your "])),(l()(),s.qb(105,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["assets"])),(l()(),s.Gb(-1,null,[" property: "])),(l()(),s.qb(108,0,null,null,49,"pre",[["class","language-json"]],null,null,null,null,null)),(l()(),s.qb(109,0,null,null,48,"code",[],null,null,null,null,null)),(l()(),s.qb(110,0,null,null,1,"span",[["class","token property"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,['"assets"'])),(l()(),s.qb(112,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(115,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["["])),(l()(),s.Gb(-1,null,["\n  "])),(l()(),s.qb(118,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(119,null,["",""])),(l()(),s.Gb(-1,null,["\n    "])),(l()(),s.qb(121,0,null,null,1,"span",[["class","token property"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,['"glob"'])),(l()(),s.qb(123,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(126,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,['"**/*"'])),(l()(),s.qb(128,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n    "])),(l()(),s.qb(131,0,null,null,1,"span",[["class","token property"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,['"input"'])),(l()(),s.qb(133,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(136,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,['"node_modules/@salesforce-ux/design-system/assets/"'])),(l()(),s.qb(138,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n    "])),(l()(),s.qb(141,0,null,null,1,"span",[["class","token property"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,['"output"'])),(l()(),s.qb(143,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(146,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,['"/assets"'])),(l()(),s.Gb(-1,null,["\n  "])),(l()(),s.qb(149,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(150,null,["",""])),(l()(),s.qb(151,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n  ... any other assets\n"])),(l()(),s.qb(154,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["]"])),(l()(),s.qb(156,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.qb(158,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Based on your needs you can change what will be copied from SLDS "])),(l()(),s.qb(160,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["assets"])),(l()(),s.Gb(-1,null,[" folder, and also change the "])),(l()(),s.qb(163,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["output"])),(l()(),s.Gb(-1,null,[" folder, but remember to configure the "])),(l()(),s.qb(166,0,null,null,1,"span",[["class","code"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["svgPath"])),(l()(),s.Gb(-1,null,[" as described below."])),(l()(),s.qb(169,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),s.qb(170,0,null,null,1,"h2",[["class","callout"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Reading the documentation"])),(l()(),s.qb(172,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,[" Each component has API documentation, examples, and a working demo. They can be found "])),(l()(),s.qb(174,0,null,null,2,"a",[["routerLink","/components"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==s.zb(l,175).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a},null,null)),s.pb(175,671744,null,0,b.m,[b.k,b.a,e.k],{routerLink:[0,"routerLink"]},null),(l()(),s.Gb(-1,null,["here"])),(l()(),s.Gb(-1,null,[". "])),(l()(),s.qb(178,0,null,null,108,"div",[],null,null,null,null,null)),(l()(),s.qb(179,0,null,null,1,"h2",[["class","callout"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Usage"])),(l()(),s.qb(181,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Once installed you need to import our main module into your application module. You should end up with code similar to this:"])),(l()(),s.qb(183,0,null,null,103,"pre",[["class","language-typescript"]],null,null,null,null,null)),(l()(),s.qb(184,0,null,null,102,"code",[],null,null,null,null,null)),(l()(),s.qb(185,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["import"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(188,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(189,null,["",""])),(l()(),s.Gb(-1,null,["AppComponent"])),(l()(),s.qb(191,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(192,null,["",""])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(194,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["from"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(197,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["'...'"])),(l()(),s.qb(199,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[";"])),(l()(),s.Gb(-1,null,["\n"])),(l()(),s.qb(202,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["import"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(205,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(206,null,["",""])),(l()(),s.Gb(-1,null,["NglModule"])),(l()(),s.qb(208,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(209,null,["",""])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(211,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["from"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(214,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["'ng-lightning'"])),(l()(),s.qb(216,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[";"])),(l()(),s.Gb(-1,null,["\n\n@"])),(l()(),s.qb(219,0,null,null,1,"span",[["class","token function"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["NgModule"])),(l()(),s.qb(221,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["("])),(l()(),s.qb(223,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(224,null,["",""])),(l()(),s.Gb(-1,null,["\n  imports"])),(l()(),s.qb(226,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(229,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["["])),(l()(),s.qb(231,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["..."])),(l()(),s.qb(233,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,[" NglModule"])),(l()(),s.qb(236,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["]"])),(l()(),s.qb(238,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n  declarations"])),(l()(),s.qb(241,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(244,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["["])),(l()(),s.Gb(-1,null,["AppComponent"])),(l()(),s.qb(247,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(250,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["..."])),(l()(),s.qb(252,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["]"])),(l()(),s.qb(254,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n  bootstrap"])),(l()(),s.qb(257,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(260,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["["])),(l()(),s.Gb(-1,null,["AppComponent"])),(l()(),s.qb(263,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["]"])),(l()(),s.qb(265,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n"])),(l()(),s.qb(268,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(269,null,["",""])),(l()(),s.qb(270,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[")"])),(l()(),s.Gb(-1,null,["\n"])),(l()(),s.qb(273,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["export"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(276,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["class"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(279,0,null,null,1,"span",[["class","token class-name"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["AppModule"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(282,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(283,null,["",""])),(l()(),s.qb(284,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(285,null,["",""])),(l()(),s.Gb(-1,null,["\n"])),(l()(),s.qb(287,0,null,null,94,"div",[],null,null,null,null,null)),(l()(),s.qb(288,0,null,null,1,"h2",[["class","callout"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Configuration"])),(l()(),s.qb(290,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Optionally, you can configure and provide your own default values, using the various injection tokens available."])),(l()(),s.qb(292,0,null,null,87,"pre",[["class","language-typescript"]],null,null,null,null,null)),(l()(),s.qb(293,0,null,null,86,"code",[],null,null,null,null,null)),(l()(),s.qb(294,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["import"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(297,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(298,null,["",""])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(300,0,null,null,1,"span",[["class","token constant"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["NGL_ICON_CONFIG"])),(l()(),s.qb(302,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,[" NglIconConfig "])),(l()(),s.qb(305,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(306,null,["",""])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(308,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["from"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(311,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["'ng-ligthning'"])),(l()(),s.qb(313,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[";"])),(l()(),s.Gb(-1,null,["\n\n@"])),(l()(),s.qb(316,0,null,null,1,"span",[["class","token function"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["NgModule"])),(l()(),s.qb(318,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["("])),(l()(),s.qb(320,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(321,null,["",""])),(l()(),s.Gb(-1,null,["\n  providers"])),(l()(),s.qb(323,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(326,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["["])),(l()(),s.Gb(-1,null,["\n    "])),(l()(),s.qb(329,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["..."])),(l()(),s.qb(331,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n    "])),(l()(),s.qb(334,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(335,null,["",""])),(l()(),s.Gb(-1,null,[" provide"])),(l()(),s.qb(337,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(340,0,null,null,1,"span",[["class","token constant"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["NGL_ICON_CONFIG"])),(l()(),s.qb(342,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,[" useValue"])),(l()(),s.qb(345,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(348,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["<"])),(l()(),s.Gb(-1,null,["NglIconConfig"])),(l()(),s.qb(351,0,null,null,1,"span",[["class","token operator"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[">"])),(l()(),s.qb(353,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(354,null,["",""])),(l()(),s.Gb(-1,null,[" svgPath"])),(l()(),s.qb(356,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[":"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(359,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["'/my/path'"])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(362,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(363,null,["",""])),(l()(),s.Gb(-1,null,[" "])),(l()(),s.qb(365,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(366,null,["",""])),(l()(),s.qb(367,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n  "])),(l()(),s.qb(370,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["]"])),(l()(),s.qb(372,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[","])),(l()(),s.Gb(-1,null,["\n"])),(l()(),s.qb(375,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(376,null,["",""])),(l()(),s.qb(377,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,[")"])),(l()(),s.Gb(-1,null,["\n"])),(l()(),s.qb(380,0,null,null,1,"p",[["class","slds-m-top_medium"]],null,null,null,null,null)),(l()(),s.Gb(-1,null,["Currently available options are documented in the API section of each component on which are available."]))],function(l,n){l(n,175,0,"/components")},function(l,n){l(n,119,0,"{"),l(n,150,0,"}"),l(n,174,0,s.zb(n,175).target,s.zb(n,175).href),l(n,189,0,"{"),l(n,192,0,"}"),l(n,206,0,"{"),l(n,209,0,"}"),l(n,224,0,"{"),l(n,269,0,"}"),l(n,283,0,"{"),l(n,285,0,"}"),l(n,298,0,"{"),l(n,306,0,"}"),l(n,321,0,"{"),l(n,335,0,"{"),l(n,354,0,"{"),l(n,363,0,"}"),l(n,366,0,"}"),l(n,376,0,"}")})}function i(l){return s.Ib(0,[(l()(),s.qb(0,0,null,null,1,"ng-component",[],null,null,null,p,c)),s.pb(1,49152,null,0,a,[],null,null)],null,null)}var G=s.mb("ng-component",a,i,{},{},[]);u.d(n,"NglDemoGetStartedModuleNgFactory",function(){return r});var r=s.nb(t,[],function(l){return s.wb([s.xb(512,s.j,s.cb,[[8,[o.a,G]],[3,s.j],s.x]),s.xb(4608,e.p,e.o,[s.u,[2,e.B]]),s.xb(1073742336,e.c,e.c,[]),s.xb(1073742336,b.n,b.n,[[2,b.t],[2,b.k]]),s.xb(1073742336,t,t,[]),s.xb(1024,b.i,function(){return[[{path:"",component:a}]]},[])])})}}]);