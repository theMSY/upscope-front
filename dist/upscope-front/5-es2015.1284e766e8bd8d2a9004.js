(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{BCyG:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),r=n("tyNb"),c=n("fXoL"),s=n("AytR"),a=n("tk/3");let o=(()=>{class t{constructor(t){this.httpClient=t}all(){return this.httpClient.get(s.a.url+"/crank-wheel/managers")}url(t){return this.httpClient.post(s.a.url+"/crank-wheel/url",{email:t})}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(a.a))},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function l(t,e){1&t&&(c.Rb(0,"div"),c.Cc(1," Loading Agents...\n"),c.Qb())}const u=function(t){return[t]};function h(t,e){if(1&t&&(c.Rb(0,"div",2),c.Rb(1,"h2"),c.Cc(2),c.Qb(),c.Rb(3,"button",3),c.Cc(4," Watch "),c.Qb(),c.Qb()),2&t){const t=e.$implicit;c.zb(2),c.Dc(t.email),c.zb(1),c.kc("routerLink",c.oc(2,u,"/crank-wheel/watch/"+t.email))}}function b(t,e){if(1&t&&(c.Rb(0,"div"),c.Ac(1,h,5,4,"div",1),c.Qb()),2&t){const t=c.fc();c.zb(1),c.kc("ngForOf",t.managers)}}let f=(()=>{class t{constructor(t){this.crankWheelService=t,this.loading=!0,this.managers=[]}ngOnInit(){this.crankWheelService.all().subscribe(t=>{var e;this.loading=!1,this.managers=null===(e=t)||void 0===e?void 0:e.members})}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(o))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-list"]],decls:2,vars:2,consts:[[4,"ngIf"],["style","display: flex",4,"ngFor","ngForOf"],[2,"display","flex"],["ngbButton","",3,"routerLink"]],template:function(t,e){1&t&&(c.Ac(0,l,2,0,"div",0),c.Ac(1,b,2,1,"div",0)),2&t&&(c.kc("ngIf",e.loading),c.zb(1),c.kc("ngIf",!e.loading&&e.managers))},directives:[i.j,i.i,r.b],styles:[""]}),t})();var d=n("eIep"),p=n("jhN1");function g(t,e){1&t&&(c.Rb(0,"div"),c.Cc(1,"Loading LINK"),c.Qb())}function m(t,e){if(1&t&&(c.Rb(0,"div"),c.Nb(1,"iframe",1),c.Qb()),2&t){const t=c.fc();c.zb(1),c.kc("src",t.sanitizedUrl(t.url),c.uc)}}const v=[{path:"list",component:f},{path:"watch/:email",component:(()=>{class t{constructor(t,e,n,i){this.route=t,this.crankWheelService=e,this.changeDetectorRef=n,this.sanitizer=i,this.loading=!0,this.url=null}ngOnInit(){this.route.paramMap.pipe(Object(d.a)(t=>this.crankWheelService.url(t.get("email")))).subscribe(t=>{this.url=t.url,this.loading=!1,this.changeDetectorRef.markForCheck()})}sanitizedUrl(t){return this.sanitizer.bypassSecurityTrustResourceUrl(this.url)}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(r.a),c.Mb(o),c.Mb(c.h),c.Mb(p.b))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-watch"]],decls:2,vars:2,consts:[[4,"ngIf"],["width","100%","height","500px",3,"src"]],template:function(t,e){1&t&&(c.Ac(0,g,2,0,"div",0),c.Ac(1,m,2,1,"div",0)),2&t&&(c.kc("ngIf",e.loading),c.zb(1),c.kc("ngIf",!e.loading&&e.url))},directives:[i.j],styles:[""],changeDetection:0}),t})()},{path:"",redirectTo:"list"}];let k=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[r.c.forChild(v)],r.c]}),t})();var w=n("1kSV");n.d(e,"CrankWheelModule",(function(){return y}));let y=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[i.b,k,w.a]]}),t})()}}]);