(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["repository"],{"07a0":function(e,t,n){},"405d":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a"),n("b0c0");var r=n("7a23"),a={class:"container"},c={class:"repository_full"},o={class:"repository_full__info--top"},s=Object(r["h"])("label",null," Issue: ",-1),i=Object(r["h"])("label",null," Language: ",-1),u=Object(r["h"])("label",null," Followers: ",-1),l=Object(r["h"])("label",null," License: ",-1);function p(e,t,n,p,b,j){var O=Object(r["z"])("sidebar"),d=Object(r["z"])("PageControl");return Object(r["r"])(),Object(r["e"])("div",a,[Object(r["h"])("div",c,[Object(r["h"])("article",null,[Object(r["h"])("div",o,[Object(r["h"])("h2",null,Object(r["C"])(e.userRepo.full_name),1),Object(r["h"])("p",null,Object(r["C"])(e.userRepo.description),1)])]),Object(r["h"])(O,null,{default:Object(r["F"])((function(){var t;return[Object(r["h"])("p",null,[s,Object(r["g"])(Object(r["C"])(e.userRepo.open_issues_count),1)]),Object(r["h"])("p",null,[i,Object(r["g"])(Object(r["C"])(e.userRepo.language),1)]),Object(r["h"])("p",null,[u,Object(r["g"])(Object(r["C"])(e.userRepo.followers),1)]),Object(r["h"])("p",null,[l,Object(r["g"])(Object(r["C"])(null===(t=e.userRepo.license)||void 0===t?void 0:t.name),1)]),Object(r["h"])("a",{href:e.userRepo.html_url},"Go to Repo",8,["href"])]})),_:1})]),Object(r["h"])(d,{"previous-step":e.previousStep,"next-step":e.nextStep},null,8,["previous-step","next-step"])])}var b=n("1da1"),j=(n("96cf"),n("99af"),n("d994")),O=n("482f");function d(e,t){return f.apply(this,arguments)}function f(){return f=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var a,c,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Object(j["a"])("".concat(O["a"],"/repos/").concat(t,"/").concat(n)),c=a.response,o=a.request,s=Object(r["x"])(!1),!1!==s.value){e.next=6;break}return e.next=5,o();case 5:s.value=!0;case 6:return e.abrupt("return",{userRepo:c});case 7:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}var v=n("6c02"),h=n("6a60"),g=Object(r["i"])({name:"Repository",components:{PageControl:h["a"]},setup:function(){return Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n,a,c,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(v["c"])(),n=Object(v["d"])(),e.next=4,d(t.params.user_name,t.params.repo_name);case 4:return a=e.sent,c=a.userRepo,o=Object(r["v"])({action:function(){n.go(-1)},isDisabled:!1,label:"Go back to User Repositories"}),s=Object(r["v"])({action:function(){n.push("/")},isDisabled:!1,label:"Home"}),e.abrupt("return",{userRepo:c,nextStep:o,previousStep:s});case 9:case"end":return e.stop()}}),e)})))()}});n("42a0");g.render=p;t["default"]=g},"42a0":function(e,t,n){"use strict";n("07a0")},"6a60":function(e,t,n){"use strict";var r=n("7a23"),a={class:"page-control__container"};function c(e,t,n,c,o,s){return Object(r["r"])(),Object(r["e"])("nav",a,[n.previousStep?(Object(r["r"])(),Object(r["e"])("button",{key:0,disabled:n.previousStep.isDisabled,class:"main-cta page-control__previous-step",onClick:t[1]||(t[1]=function(){var e;return n.previousStep.action&&(e=n.previousStep).action.apply(e,arguments)})},Object(r["C"])(n.previousStep.label),9,["disabled"])):Object(r["f"])("",!0),n.nextStep?(Object(r["r"])(),Object(r["e"])("button",{key:1,disabled:n.nextStep.isDisabled,class:"main-cta page-control__next-step",onClick:t[2]||(t[2]=function(){var e;return n.nextStep.action&&(e=n.nextStep).action.apply(e,arguments)})},Object(r["C"])(n.nextStep.label),9,["disabled"])):Object(r["f"])("",!0)])}n("d3b7");var o=function(e){var t=!0;return e.label&&e.label.length||(console.error('Missing required prop "label" inside a "Step" prop'),t=!1),e.action&&"[object Function]"==={}.toString.call(e.action)||(console.error('Missing required prop "action" inside a "Step" prop'),t=!1),"boolean"!==typeof e.isDisabled&&(console.error('Missing required prop "isDisabled" inside a "Step" prop'),t=!1),t},s=o,i={name:"pageControl",props:{nextStep:{type:Object,required:!1,default:null,validator:s},previousStep:{type:Object,required:!1,default:null,validator:s}}};n("b1b0");i.render=c;t["a"]=i},"97ce":function(e,t,n){},b1b0:function(e,t,n){"use strict";n("97ce")}}]);
//# sourceMappingURL=repository.42bda777.js.map