(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[899],{899:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>h});r(43);var n=r(475),s=r(551),i=r(446),a=r.n(i),u=r(579);const c=t=>{let{data:e}=t;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("/site").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},o=[{title:"Ai Assist Lab",subtitle:"2015 BVP Hackathon",image:"/images/projects/aiAssistLogo.png",date:"2020-03-20",desc:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f, \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u044e\u0449\u0430\u044f AI \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u043e\u0432 \u0432 \u043a\u0440\u0443\u043f\u043d\u044b\u0435 \u0431\u0438\u0437\u043d\u0435\u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0412 \u0447\u0438\u0441\u043b\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432  Bakai \u0431\u0430\u043d\u043a, \u0420\u0416\u0414, \u0432\u0438\u0437\u043e\u0432\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 \u0418\u043d\u0434\u0438\u0438"}],h=()=>(0,u.jsx)(s.A,{title:"Projects",description:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(n.N_,{to:"/projects",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})}),(0,u.jsx)("p",{children:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u0437\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043d\u0435 \u043d\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0441\u0442\u044b\u0434\u043d\u043e"})]})}),o.map((t=>(0,u.jsx)(c,{data:t},t.title)))]})})},446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",a="hour",u="day",c="week",o="month",h="quarter",d="year",f="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},p=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:p,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+p(n,2,"0")+":"+p(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,o),i=r-s<0,a=e.clone().add(n+(i?-1:1),o);return+(-(n+(r-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:d,w:c,d:u,D:f,h:a,m:i,s:s,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=M;var D="$isDayjsObject",S=function(t){return t instanceof b||!(!t||!t[D])},w=function t(e,r,n){var s;if(!e)return v;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(s=i),r&&(y[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,s=u}return!n&&s&&(v=s),s||!n&&v},j=function(t,e){if(S(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new b(r)},x=g;x.l=w,x.i=S,x.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var p=M.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return x},p.isValid=function(){return!(this.$d.toString()===l)},p.isSame=function(t,e){var r=j(t);return this.startOf(e)<=r&&r<=this.endOf(e)},p.isAfter=function(t,e){return j(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<j(t)},p.$g=function(t,e,r){return x.u(t)?this[e]:this.set(r,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var r=this,n=!!x.u(e)||e,h=x.p(t),l=function(t,e){var s=x.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(u)},$=function(t,e){return x.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,M=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case d:return n?l(1,0):l(31,11);case o:return n?l(1,M):l(0,M+1);case c:var v=this.$locale().weekStart||0,y=(m<v?m+7:m)-v;return l(n?p-y:p+(6-y),M);case u:case f:return $(g+"Hours",0);case a:return $(g+"Minutes",1);case i:return $(g+"Seconds",2);case s:return $(g+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var r,c=x.p(t),h="set"+(this.$u?"UTC":""),l=(r={},r[u]=h+"Date",r[f]=h+"Date",r[o]=h+"Month",r[d]=h+"FullYear",r[a]=h+"Hours",r[i]=h+"Minutes",r[s]=h+"Seconds",r[n]=h+"Milliseconds",r)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===d){var m=this.clone().set(f,1);m.$d[l]($),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[x.p(t)]()},p.add=function(n,h){var f,l=this;n=Number(n);var $=x.p(h),m=function(t){var e=j(l);return x.w(e.date(e.date()+Math.round(t*n)),l)};if($===o)return this.set(o,this.$M+n);if($===d)return this.set(d,this.$y+n);if($===u)return m(1);if($===c)return m(7);var M=(f={},f[i]=e,f[a]=r,f[s]=t,f)[$]||1,p=this.$d.getTime()+n*M;return x.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=x.z(this),i=this.$H,a=this.$m,u=this.$M,c=r.weekdays,o=r.months,h=r.meridiem,d=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},f=function(t){return x.s(i%12||12,t,"0")},$=h||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return u+1;case"MM":return x.s(u+1,2,"0");case"MMM":return d(r.monthsShort,u,o,3);case"MMMM":return d(o,u);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(r.weekdaysMin,e.$W,c,2);case"ddd":return d(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return x.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return x.s(a,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,f,l){var $,m=this,M=x.p(f),p=j(n),g=(p.utcOffset()-this.utcOffset())*e,v=this-p,y=function(){return x.m(m,p)};switch(M){case d:$=y()/12;break;case o:$=y();break;case h:$=y()/3;break;case c:$=(v-g)/6048e5;break;case u:$=(v-g)/864e5;break;case a:$=v/r;break;case i:$=v/e;break;case s:$=v/t;break;default:$=v}return l?$:x.a($)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=w(t,e,!0);return n&&(r.$L=n),r},p.clone=function(){return x.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},M}(),O=b.prototype;return j.prototype=O,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",u],["$M",o],["$y",d],["$D",f]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,b,j),t.$i=!0),j},j.locale=w,j.isDayjs=S,j.unix=function(t){return j(1e3*t)},j.en=y[v],j.Ls=y,j.p={},j}()}}]);
//# sourceMappingURL=899.d0b9a2e4.chunk.js.map