/*! For license information please see b94d8c40bf6285130a733f77c1bf9b2b244856a7-a1ca37540a9702ad4e48.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[482],{5552:function(e,t){!function(e){"use strict";var t,r,n,o,i,s,a,l,c,u,f,p,d,h,g,v,m,x,b,y,w,k,C,O,T,M,S,E=1,P=[],_=[],z=Date.now,A=z(),L=0,R=1,I=function(e){return e},B=function(e){return Math.round(1e5*e)/1e5||0},N=function(){return"undefined"!=typeof window},F=function(){return t||N()&&(t=window.gsap)&&t.registerPlugin&&t},D=function(e){return!!~a.indexOf(e)},W=function(e,t){return~P.indexOf(e)&&P[P.indexOf(e)+1][t]},q=function(e,t){var r=t.s,n=t.sc,o=_.indexOf(e),i=n===xe.sc?1:2;return!~o&&(o=_.push(e)-1),_[o+i]||(_[o+i]=W(e,r)||(D(e)?n:function(t){return arguments.length?e[r]=t:e[r]}))},H=function(e){return W(e,"getBoundingClientRect")||(D(e)?function(){return lt.width=n.innerWidth,lt.height=n.innerHeight,lt}:function(){return ke(e)})},X=function(e,t,r){var o=r.d,i=r.d2,s=r.a;return(s=W(e,"getBoundingClientRect"))?function(){return s()[o]}:function(){return(t?n["inner"+i]:e["client"+i])||0}},Y=function(e,t){return!t||~P.indexOf(e)?H(e):function(){return lt}},j=function(e,t){var r=t.s,o=t.d2,a=t.d,l=t.a;return(r="scroll"+o)&&(l=W(e,r))?l()-H(e)()[a]:D(e)?Math.max(i[r],s[r])-(n["inner"+o]||i["client"+o]||s["client"+o]):e[r]-e["offset"+o]},V=function(e,t){for(var r=0;r<w.length;r+=3)(!t||~t.indexOf(w[r+1]))&&e(w[r],w[r+1],w[r+2])},U=function(e){return"string"==typeof e},Z=function(e){return"function"==typeof e},$=function(e){return"number"==typeof e},G=function(e){return"object"==typeof e},J=function(e){return Z(e)&&e()},K=function(e,t){return function(){var r=J(e),n=J(t);return function(){J(r),J(n)}}},Q=Math.abs,ee="scrollLeft",te="scrollTop",re="left",ne="top",oe="right",ie="bottom",se="width",ae="height",le="Right",ce="Left",ue="Top",fe="Bottom",pe="padding",de="margin",he="Width",ge="Height",ve="px",me={s:ee,p:re,p2:ce,os:oe,os2:le,d:se,d2:he,a:"x",sc:function(e){return arguments.length?n.scrollTo(e,xe.sc()):n.pageXOffset||o[ee]||i[ee]||s[ee]||0}},xe={s:te,p:ne,p2:ue,os:ie,os2:fe,d:ae,d2:ge,a:"y",op:me,sc:function(e){return arguments.length?n.scrollTo(me.sc(),e):n.pageYOffset||o[te]||i[te]||s[te]||0}},be=function(e){return n.getComputedStyle(e)},ye=function(e){return e.style.position="absolute"===be(e).position?"absolute":"relative"},we=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},ke=function(e,r){var n=r&&"matrix(1, 0, 0, 1, 0, 0)"!==be(e)[m]&&t.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),o=e.getBoundingClientRect();return n&&n.progress(0).kill(),o},Ce=function(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0},Oe=function(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r},Te=function(e){return function(r){return t.utils.snap(Oe(e),r)}},Me=function(e){return function(t,r){var n,o=Oe(e);if(o.sort((function(e,t){return e-t})),r.direction>0){for(t-=1e-4,n=0;n<o.length;n++)if(o[n]>=t)return o[n];return o.pop()}for(n=o.length,t+=1e-4;n--;)if(o[n]<=t)return o[n];return o[0]}},Se=function(e,t,r,n){return r.split(",").forEach((function(r){return e(t,r,n)}))},Ee=function(e,t,r){return e.addEventListener(t,r,{passive:!0})},Pe=function(e,t,r){return e.removeEventListener(t,r)},_e={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ze={toggleActions:"play",anticipatePin:0},Ae={top:0,left:0,center:.5,bottom:1,right:1},Le=function(e,t){if(U(e)){var r=e.indexOf("="),n=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in Ae?Ae[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Re=function(e,t,r,n,i,a,l){var c=i.startColor,u=i.endColor,f=i.fontSize,p=i.indent,d=i.fontWeight,h=o.createElement("div"),g=D(r)||"fixed"===W(r,"pinType"),v=-1!==e.indexOf("scroller"),m=g?s:r,x=-1!==e.indexOf("start"),b=x?c:u,y="border-color:"+b+";font-size:"+f+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+(v&&g?"fixed;":"absolute;"),(v||!g)&&(y+=(n===xe?oe:ie)+":"+(a+parseFloat(p))+"px;"),l&&(y+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),h._isStart=x,h.setAttribute("class","gsap-marker-"+e),h.style.cssText=y,h.innerText=t||0===t?e+"-"+t:e,m.children[0]?m.insertBefore(h,m.children[0]):m.appendChild(h),h._offset=h["offset"+n.op.d2],Ie(h,0,n,x),h},Ie=function(e,r,n,o){var i={display:"block"},s=n[o?"os2":"p2"],a=n[o?"p2":"os2"];e._isFlipped=o,i[n.a+"Percent"]=o?-100:0,i[n.a]=o?"1px":0,i["border"+s+he]=1,i["border"+a+he]=0,i[n.p]=r+"px",t.set(e,i)},Be=[],Ne={},Fe=function(){return u||(u=c(Qe))},De=function(){u||(u=c(Qe),L||Ve("scrollStart"),L=z())},We=function(){return!g&&!O&&!o.fullscreenElement&&l.restart(!0)},qe={},He=[],Xe=[],Ye=function(e){var o,i=t.ticker.frame,s=[],a=0;if(S!==i||E){for($e();a<Xe.length;a+=4)(o=n.matchMedia(Xe[a]).matches)!==Xe[a+3]&&(Xe[a+3]=o,o?s.push(a):$e(1,Xe[a])||Z(Xe[a+2])&&Xe[a+2]());for(Ze(),a=0;a<s.length;a++)o=s[a],M=Xe[o],Xe[o+2]=Xe[o+1](e);M=0,r&&Ge(0,1),S=i,Ve("matchMedia")}},je=function e(){return Pe(dt,"scrollEnd",e)||Ge(!0)},Ve=function(e){return qe[e]&&qe[e].map((function(e){return e()}))||He},Ue=[],Ze=function(e){for(var t=0;t<Ue.length;t+=4)e&&Ue[t+3]!==e||(Ue[t].style.cssText=Ue[t+1],Ue[t+2].uncache=1)},$e=function(e,t){var r;for(x=0;x<Be.length;x++)r=Be[x],t&&r.media!==t||(e?r.kill(1):(r.scroll.rec||(r.scroll.rec=r.scroll()),r.revert()));Ze(t),t||Ve("revert")},Ge=function(e,t){if(!L||e){var r=Ve("refreshInit");for(k&&dt.sort(),t||$e(),x=0;x<Be.length;x++)Be[x].refresh();for(r.forEach((function(e){return e&&e.render&&e.render(-1)})),x=Be.length;x--;)Be[x].scroll.rec=0;l.pause(),Ve("refresh")}else Ee(dt,"scrollEnd",je)},Je=0,Ke=1,Qe=function(){var e=Be.length,t=z(),r=t-A>=50,n=e&&Be[0].scroll();if(Ke=Je>n?-1:1,Je=n,r&&(L&&!v&&t-L>200&&(L=0,Ve("scrollEnd")),d=A,A=t),Ke<0){for(x=e;x-- >0;)Be[x]&&Be[x].update(0,r);Ke=1}else for(x=0;x<e;x++)Be[x]&&Be[x].update(0,r);u=0},et=[re,ne,ie,oe,de+fe,de+le,de+ue,de+ce,"display","flexShrink","float","zIndex"],tt=et.concat([se,ae,"boxSizing","max"+he,"max"+ge,"position",de,pe,pe+ue,pe+le,pe+fe,pe+ce]),rt=function(e,t,r){if(it(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}},nt=function(e,t,r,n){if(e.parentNode!==t){for(var o,i=et.length,s=t.style,a=e.style;i--;)s[o=et[i]]=r[o];s.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(s.display="inline-block"),a[ie]=a[oe]="auto",s.overflow="visible",s.boxSizing="border-box",s[se]=Ce(e,me)+ve,s[ae]=Ce(e,xe)+ve,s[pe]=a[de]=a[ne]=a[re]="0",it(n),a[se]=a["max"+he]=r[se],a[ae]=a["max"+ge]=r[ae],a[pe]=r[pe],e.parentNode.insertBefore(t,e),t.appendChild(e)}},ot=/([A-Z])/g,it=function(e){if(e){var r,n,o=e.t.style,i=e.length,s=0;for((e.t._gsap||t.core.getCache(e.t)).uncache=1;s<i;s+=2)n=e[s+1],r=e[s],n?o[r]=n:o[r]&&o.removeProperty(r.replace(ot,"-$1").toLowerCase())}},st=function(e){for(var t=tt.length,r=e.style,n=[],o=0;o<t;o++)n.push(tt[o],r[tt[o]]);return n.t=e,n},at=function(e,t,r){for(var n,o=[],i=e.length,s=r?8:0;s<i;s+=2)n=e[s],o.push(n,n in t?t[n]:e[s+1]);return o.t=e.t,o},lt={left:0,top:0},ct=function(e,t,r,n,o,a,l,c,u,p,d,h){if(Z(e)&&(e=e(c)),U(e)&&"max"===e.substr(0,3)&&(e=h+("="===e.charAt(4)?Le("0"+e.substr(3),r):0)),$(e))l&&Ie(l,r,n,!0);else{Z(t)&&(t=t(c));var g,v,m,x=f(t)[0]||s,b=ke(x)||{},y=e.split(" ");b&&(b.left||b.top)||"none"!==be(x).display||(m=x.style.display,x.style.display="block",b=ke(x),m?x.style.display=m:x.style.removeProperty("display")),g=Le(y[0],b[n.d]),v=Le(y[1]||"0",r),e=b[n.p]-u[n.p]-p+g+o-v,l&&Ie(l,v,n,r-v<20||l._isStart&&v>20),r-=r-v}if(a){var w=e+r,k=a._isStart;h="scroll"+n.d2,Ie(a,w,n,k&&w>20||!k&&(d?Math.max(s[h],i[h]):a.parentNode[h])<=w+1),d&&(u=ke(l),d&&(a.style[n.op.p]=u[n.op.p]-n.op.m-a._offset+ve))}return Math.round(e)},ut=/(?:webkit|moz|length|cssText|inset)/i,ft=function(e,r,n,o){if(e.parentNode!==r){var i,a,l=e.style;if(r===s){for(i in e._stOrig=l.cssText,a=be(e))+i||ut.test(i)||!a[i]||"string"!=typeof l[i]||"0"===i||(l[i]=a[i]);l.top=n,l.left=o}else l.cssText=e._stOrig;t.core.getCache(e).uncache=1,r.appendChild(e)}},pt=function(e,r){var n,o,i=q(e,r),s="_scroll"+r.p2,a=function r(a,l,c,u,f){var p=r.tween,d=l.onComplete,h={};return p&&p.kill(),n=Math.round(c),l[s]=a,l.modifiers=h,h[s]=function(e){return(e=B(i()))!==n&&e!==o&&Math.abs(e-n)>2?(p.kill(),r.tween=0):e=c+u*p.ratio+f*p.ratio*p.ratio,o=n,n=B(e)},l.onComplete=function(){r.tween=0,d&&d.call(p)},p=r.tween=t.to(e,l)};return e[s]=i,e.addEventListener("wheel",(function(){return a.tween&&a.tween.kill()&&(a.tween=0)})),a};me.op=xe;var dt=function(){function e(n,o){r||e.register(t)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(n,o)}return e.prototype.init=function(r,a){if(this.progress=this.start=0,this.vars&&this.kill(1),R){var l,c,u,h,m,b,y,w,O,S,P,_,A,B,N,F,H,V,J,K,ee,te,re,ne,oe,ie,Oe,Se,Ae,Ie,Fe,qe,He,Xe,Ye,Ve,Ue,Ze=(r=we(U(r)||$(r)||r.nodeType?{trigger:r}:r,ze)).horizontal?me:xe,$e=r,Ge=$e.onUpdate,Je=$e.toggleClass,Qe=$e.id,et=$e.onToggle,tt=$e.onRefresh,ot=$e.scrub,lt=$e.trigger,ut=$e.pin,dt=$e.pinSpacing,ht=$e.invalidateOnRefresh,gt=$e.anticipatePin,vt=$e.onScrubComplete,mt=$e.onSnapComplete,xt=$e.once,bt=$e.snap,yt=$e.pinReparent,wt=!ot&&0!==ot,kt=f(r.scroller||n)[0],Ct=t.core.getCache(kt),Ot=D(kt),Tt="pinType"in r?"fixed"===r.pinType:Ot||"fixed"===W(kt,"pinType"),Mt=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],St=wt&&r.toggleActions.split(" "),Et="markers"in r?r.markers:ze.markers,Pt=Ot?0:parseFloat(be(kt)["border"+Ze.p2+he])||0,_t=this,zt=r.onRefreshInit&&function(){return r.onRefreshInit(_t)},At=X(kt,Ot,Ze),Lt=Y(kt,Ot);_t.media=M,gt*=45,Be.push(_t),_t.scroller=kt,_t.scroll=q(kt,Ze),m=_t.scroll(),_t.vars=r,a=a||r.animation,"refreshPriority"in r&&(k=1),Ct.tweenScroll=Ct.tweenScroll||{top:pt(kt,xe),left:pt(kt,me)},_t.tweenTo=l=Ct.tweenScroll[Ze.p],a&&(a.vars.lazy=!1,a._initted||!1!==a.vars.immediateRender&&!1!==r.immediateRender&&a.render(0,!0,!0),_t.animation=a.pause(),a.scrollTrigger=_t,(qe=$(ot)&&ot)&&(Fe=t.to(a,{ease:"power3",duration:qe,onComplete:function(){return vt&&vt(_t)}})),Ae=0,Qe||(Qe=a.vars.id)),bt&&(G(bt)||(bt={snapTo:bt}),"scrollBehavior"in s.style&&t.set(Ot?[s,i]:kt,{scrollBehavior:"auto"}),u=Z(bt.snapTo)?bt.snapTo:"labels"===bt.snapTo?Te(a):"labelsDirectional"===bt.snapTo?Me(a):t.utils.snap(bt.snapTo),He=bt.duration||{min:.1,max:2},He=G(He)?p(He.min,He.max):p(He,He),Xe=t.delayedCall(bt.delay||qe/2||.1,(function(){if(Math.abs(_t.getVelocity())<10&&!v){var e=a&&!wt?a.totalProgress():_t.progress,t=(e-Ie)/(z()-d)*1e3||0,r=Q(t/2)*t/.185,n=e+(!1===bt.inertia?0:r),o=p(0,1,u(n,_t)),i=_t.scroll(),s=Math.round(y+o*B),c=bt,f=c.onStart,h=c.onInterrupt,g=c.onComplete,m=l.tween;if(i<=w&&i>=y&&s!==i){if(m&&!m._initted&&m.data<=Math.abs(s-i))return;l(s,{duration:He(Q(.185*Math.max(Q(n-e),Q(o-e))/t/.05||0)),ease:bt.ease||"power3",data:Math.abs(s-i),onInterrupt:function(){return Xe.restart(!0)&&h&&h(_t)},onComplete:function(){Ae=Ie=a&&!wt?a.totalProgress():_t.progress,mt&&mt(_t),g&&g(_t)}},i,r*B,s-i-r*B),f&&f(_t,l.tween)}}else _t.isActive&&Xe.restart(!0)})).pause()),Qe&&(Ne[Qe]=_t),lt=_t.trigger=f(lt||ut)[0],ut=!0===ut?lt:f(ut)[0],U(Je)&&(Je={targets:lt,className:Je}),ut&&(!1===dt||dt===de||(dt=!(!dt&&"flex"===be(ut.parentNode).display)&&pe),_t.pin=ut,!1!==r.force3D&&t.set(ut,{force3D:!0}),(c=t.core.getCache(ut)).spacer?N=c.pinState:(c.spacer=V=o.createElement("div"),V.setAttribute("class","pin-spacer"+(Qe?" pin-spacer-"+Qe:"")),c.pinState=N=st(ut)),_t.spacer=V=c.spacer,Se=be(ut),ne=Se[dt+Ze.os2],K=t.getProperty(ut),ee=t.quickSetter(ut,Ze.a,ve),nt(ut,V,Se),H=st(ut)),Et&&(A=G(Et)?we(Et,_e):_e,P=Re("scroller-start",Qe,kt,Ze,A,0),_=Re("scroller-end",Qe,kt,Ze,A,0,P),J=P["offset"+Ze.op.d2],O=Re("start",Qe,kt,Ze,A,J),S=Re("end",Qe,kt,Ze,A,J),Tt||(ye(Ot?s:kt),t.set([P,_],{force3D:!0}),ie=t.quickSetter(P,Ze.a,ve),Oe=t.quickSetter(_,Ze.a,ve))),_t.revert=function(e){var t=!1!==e||!_t.enabled,r=g;t!==h&&(t&&(Ve=Math.max(_t.scroll(),_t.scroll.rec||0),Ye=_t.progress,Ue=a&&a.progress()),O&&[O,S,P,_].forEach((function(e){return e.style.display=t?"none":"block"})),t&&(g=1),_t.update(t),g=r,ut&&(t?rt(ut,V,N):(!yt||!_t.isActive)&&nt(ut,V,be(ut),oe)),h=t)},_t.refresh=function(n,o){if(!g&&_t.enabled||o)if(ut&&n&&L)Ee(e,"scrollEnd",je);else{g=1,Fe&&Fe.pause(),ht&&a&&a.progress(0).invalidate(),h||_t.revert();for(var i,l,c,u,f,p,d,v,x,k=At(),T=Lt(),M=j(kt,Ze),E=0,z=0,A=r.end,R=r.endTrigger||lt,I=r.start||(0!==r.start&&lt?ut?"0 0":"0 100%":0),D=lt&&Math.max(0,Be.indexOf(_t))||0,W=D;W--;)(p=Be[W]).end||p.refresh(0,1)||(g=1),(d=p.pin)&&(d===lt||d===ut)&&p.revert();for(y=ct(I,lt,k,Ze,_t.scroll(),O,P,_t,T,Pt,Tt,M)||(ut?-.001:0),Z(A)&&(A=A(_t)),U(A)&&!A.indexOf("+=")&&(~A.indexOf(" ")?A=(U(I)?I.split(" ")[0]:"")+A:(E=Le(A.substr(2),k),A=U(I)?I:y+E,R=lt)),w=Math.max(y,ct(A||(R?"100% 0":M),R,k,Ze,_t.scroll()+E,S,_,_t,T,Pt,Tt,M))||-.001,B=w-y||(y-=.01)&&.001,E=0,W=D;W--;)(d=(p=Be[W]).pin)&&p.start-p._pinPush<y&&(i=p.end-p.start,d===lt&&(E+=i),d===ut&&(z+=i));if(y+=E,w+=E,_t._pinPush=z,O&&E&&((i={})[Ze.a]="+="+E,t.set([O,S],i)),ut)i=be(ut),u=Ze===xe,c=_t.scroll(),te=parseFloat(K(Ze.a))+z,!M&&w>1&&((Ot?s:kt).style["overflow-"+Ze.a]="scroll"),nt(ut,V,i),H=st(ut),l=ke(ut,!0),v=Tt&&q(kt,u?me:xe)(),dt&&((oe=[dt+Ze.os2,B+z+ve]).t=V,(W=dt===pe?Ce(ut,Ze)+B+z:0)&&oe.push(Ze.d,W+ve),it(oe),Tt&&_t.scroll(Ve)),Tt&&((f={top:l.top+(u?c-y:v)+ve,left:l.left+(u?v:c-y)+ve,boxSizing:"border-box",position:"fixed"})[se]=f["max"+he]=Math.ceil(l.width)+ve,f[ae]=f["max"+ge]=Math.ceil(l.height)+ve,f[de]=f[de+ue]=f[de+le]=f[de+fe]=f[de+ce]="0",f[pe]=i[pe],f[pe+ue]=i[pe+ue],f[pe+le]=i[pe+le],f[pe+fe]=i[pe+fe],f[pe+ce]=i[pe+ce],F=at(N,f,yt)),a?(x=a._initted,C(1),a.progress(1,!0),re=K(Ze.a)-te+B+z,B!==re&&F.splice(F.length-2,2),a.progress(0,!0),x||a.invalidate(),C(0)):re=B;else if(lt&&_t.scroll())for(l=lt.parentNode;l&&l!==s;)l._pinOffset&&(y-=l._pinOffset,w-=l._pinOffset),l=l.parentNode;for(W=0;W<D;W++)(p=Be[W].pin)&&(p===lt||p===ut)&&Be[W].revert(!1);_t.start=y,_t.end=w,(m=b=_t.scroll())<Ve&&_t.scroll(Ve),_t.revert(!1),g=0,a&&wt&&a._initted&&a.progress(Ue,!0).render(a.time(),!0,!0),Ye!==_t.progress&&(Fe&&a.totalProgress(Ye,!0),_t.progress=Ye,_t.update()),ut&&dt&&(V._pinOffset=Math.round(_t.progress*re)),tt&&tt(_t)}},_t.getVelocity=function(){return(_t.scroll()-b)/(z()-d)*1e3||0},_t.update=function(e,t){var r,n,o,i,c,u=_t.scroll(),p=e?0:(u-y)/B,h=p<0?0:p>1?1:p||0,v=_t.progress;if(t&&(b=m,m=u,bt&&(Ie=Ae,Ae=a&&!wt?a.totalProgress():h)),gt&&!h&&ut&&!g&&!E&&L&&y<u+(u-b)/(z()-d)*gt&&(h=1e-4),h!==v&&_t.enabled){if(i=(c=(r=_t.isActive=!!h&&h<1)!=(!!v&&v<1))||!!h!=!!v,_t.direction=h>v?1:-1,_t.progress=h,wt||(!Fe||g||E?a&&a.totalProgress(h,!!g):(Fe.vars.totalProgress=h,Fe.invalidate().restart())),ut)if(e&&dt&&(V.style[dt+Ze.os2]=ne),Tt){if(i){if(o=!e&&h>v&&w+1>u&&u+1>=j(kt,Ze),yt)if(e||!r&&!o)ft(ut,V);else{var x=ke(ut,!0),k=u-y;ft(ut,s,x.top+(Ze===xe?k:0)+ve,x.left+(Ze===xe?0:k)+ve)}it(r||o?F:H),re!==B&&h<1&&r||ee(te+(1!==h||o?0:re))}}else ee(te+re*h);bt&&!l.tween&&!g&&!E&&Xe.restart(!0),Je&&(c||xt&&h&&(h<1||!T))&&f(Je.targets).forEach((function(e){return e.classList[r||xt?"add":"remove"](Je.className)})),Ge&&!wt&&!e&&Ge(_t),i&&!g?(n=h&&!v?0:1===h?1:1===v?2:3,wt&&(o=!c&&"none"!==St[n+1]&&St[n+1]||St[n],a&&("complete"===o||"reset"===o||o in a)&&("complete"===o?a.pause().totalProgress(1):"reset"===o?a.restart(!0).pause():a[o]()),Ge&&Ge(_t)),!c&&T||(et&&c&&et(_t),Mt[n]&&Mt[n](_t),xt&&(1===h?_t.kill(!1,1):Mt[n]=0),c||Mt[n=1===h?1:3]&&Mt[n](_t))):wt&&Ge&&!g&&Ge(_t)}Oe&&(ie(u+(P._isFlipped?1:0)),Oe(u))},_t.enable=function(){_t.enabled||(_t.enabled=!0,Ee(kt,"resize",We),Ee(kt,"scroll",De),zt&&Ee(e,"refreshInit",zt),a&&a.add?t.delayedCall(.01,(function(){return y||w||_t.refresh()}))&&(B=.01)&&(y=w=0):_t.refresh())},_t.disable=function(t,r){if(_t.enabled&&(!1!==t&&_t.revert(),_t.enabled=_t.isActive=!1,r||Fe&&Fe.pause(),Ve=0,c&&(c.uncache=1),zt&&Pe(e,"refreshInit",zt),Xe&&(Xe.pause(),l.tween&&l.tween.kill()&&(l.tween=0)),!Ot)){for(var n=Be.length;n--;)if(Be[n].scroller===kt&&Be[n]!==_t)return;Pe(kt,"resize",We),Pe(kt,"scroll",De)}},_t.kill=function(e,t){_t.disable(e,t),Qe&&delete Ne[Qe];var r=Be.indexOf(_t);Be.splice(r,1),r===x&&Ke>0&&x--,a&&(a.scrollTrigger=null,e&&a.render(-1),t||a.kill()),O&&[O,S,P,_].forEach((function(e){return e.parentNode.removeChild(e)})),ut&&(c&&(c.uncache=1),r=0,Be.forEach((function(e){return e.pin===ut&&r++})),r||(c.spacer=0))},_t.enable()}else this.update=this.refresh=this.kill=I},e.register=function(u){if(!r&&(t=u||F(),N()&&window.document&&(n=window,o=document,i=o.documentElement,s=o.body),t&&(f=t.utils.toArray,p=t.utils.clamp,C=t.core.suppressOverwrites||I,t.core.globals("ScrollTrigger",e),s))){c=n.requestAnimationFrame||function(e){return setTimeout(e,16)},Ee(n,"wheel",De),a=[n,o,i,s],Ee(o,"scroll",De);var d,g=s.style,x=g.borderTop;g.borderTop="1px solid #000",d=ke(s),xe.m=Math.round(d.top+xe.sc())||0,me.m=Math.round(d.left+me.sc())||0,x?g.borderTop=x:g.removeProperty("border-top"),h=setInterval(Fe,200),t.delayedCall(.5,(function(){return E=0})),Ee(o,"touchcancel",I),Ee(s,"touchstart",I),Se(Ee,o,"pointerdown,touchstart,mousedown",(function(){return v=1})),Se(Ee,o,"pointerup,touchend,mouseup",(function(){return v=0})),m=t.utils.checkPrefix("transform"),tt.push(m),r=z(),l=t.delayedCall(.2,Ge).pause(),w=[o,"visibilitychange",function(){var e=n.innerWidth,t=n.innerHeight;o.hidden?(b=e,y=t):b===e&&y===t||We()},o,"DOMContentLoaded",Ge,n,"load",function(){return L||Ge()},n,"resize",We],V(Ee)}return r},e.defaults=function(e){for(var t in e)ze[t]=e[t]},e.kill=function(){R=0,Be.slice(0).forEach((function(e){return e.kill(1)}))},e.config=function(e){"limitCallbacks"in e&&(T=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(h)||(h=t)&&setInterval(Fe,t),"autoRefreshEvents"in e&&(V(Pe)||V(Ee,e.autoRefreshEvents||"none"),O=-1===(e.autoRefreshEvents+"").indexOf("resize"))},e.scrollerProxy=function(e,t){var r=f(e)[0],o=_.indexOf(r),a=D(r);~o&&_.splice(o,a?6:2),a?P.unshift(n,t,s,t,i,t):P.unshift(r,t)},e.matchMedia=function(e){var t,r,o,i,s;for(r in e)o=Xe.indexOf(r),i=e[r],M=r,"all"===r?i():(t=n.matchMedia(r))&&(t.matches&&(s=i()),~o?(Xe[o+1]=K(Xe[o+1],i),Xe[o+2]=K(Xe[o+2],s)):(o=Xe.length,Xe.push(r,i,s),t.addListener?t.addListener(Ye):t.addEventListener("change",Ye)),Xe[o+3]=t.matches),M=0;return Xe},e.clearMatchMedia=function(e){e||(Xe.length=0),(e=Xe.indexOf(e))>=0&&Xe.splice(e,4)},e}();dt.version="3.6.1",dt.saveStyles=function(e){return e?f(e).forEach((function(e){if(e&&e.style){var r=Ue.indexOf(e);r>=0&&Ue.splice(r,4),Ue.push(e,e.style.cssText,t.core.getCache(e),M)}})):Ue},dt.revert=function(e,t){return $e(!e,t)},dt.create=function(e,t){return new dt(e,t)},dt.refresh=function(e){return e?We():Ge(!0)},dt.update=Qe,dt.maxScroll=function(e,t){return j(e,t?me:xe)},dt.getScrollFunc=function(e,t){return q(f(e)[0],t?me:xe)},dt.getById=function(e){return Ne[e]},dt.getAll=function(){return Be.slice(0)},dt.isScrolling=function(){return!!L},dt.addEventListener=function(e,t){var r=qe[e]||(qe[e]=[]);~r.indexOf(t)||r.push(t)},dt.removeEventListener=function(e,t){var r=qe[e],n=r&&r.indexOf(t);n>=0&&r.splice(n,1)},dt.batch=function(e,r){var n,o=[],i={},s=r.interval||.016,a=r.batchMax||1e9,l=function(e,r){var n=[],o=[],i=t.delayedCall(s,(function(){r(n,o),n=[],o=[]})).pause();return function(e){n.length||i.restart(!0),n.push(e.trigger),o.push(e),a<=n.length&&i.progress(1)}};for(n in r)i[n]="on"===n.substr(0,2)&&Z(r[n])&&"onRefreshInit"!==n?l(n,r[n]):r[n];return Z(a)&&(a=a(),Ee(dt,"refresh",(function(){return a=r.batchMax()}))),f(e).forEach((function(e){var t={};for(n in i)t[n]=i[n];t.trigger=e,o.push(dt.create(t))})),o},dt.sort=function(e){return Be.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},F()&&t.registerPlugin(dt),e.ScrollTrigger=dt,e.default=dt,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);
//# sourceMappingURL=b94d8c40bf6285130a733f77c1bf9b2b244856a7-a1ca37540a9702ad4e48.js.map