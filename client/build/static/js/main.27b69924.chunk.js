(this["webpackJsonpreact-cv"]=this["webpackJsonpreact-cv"]||[]).push([[0],{46:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a(7),r=a.n(n),o=a(32),c=a(70),s=a(75),d=(a(39),a(8)),l=a(72),u=a(47),j=a(2),b=function(t){var e=Object(c.a)((function(e){return{containerStyles:{height:"100%",width:"auto",marginTop:t.marginTop},fillerStyles:{width:t.completed+"%",backgroundColor:"#fff",borderRadius:"inherit",textAlign:"right",transition:"width 1s ease-in-out"},labelStyles:{paddingLeft:"auto",paddingRight:"auto",color:"#000",marginTop:0,marginLeft:0,marginRight:e.spacing(1),marginBottom:0,paddingTop:"1px"}}}))();return Object(j.jsx)("div",{className:e.containerStyles,children:Object(j.jsx)("div",{className:e.fillerStyles,children:Object(j.jsxs)(u.a,{className:e.labelStyles,variant:"body1",gutterBottom:!0,children:[t.completed,"%"]})})})},m=function(){var t=Object(i.useState)(30),e=Object(d.a)(t,2),a=e[0],n=e[1],r=Object(i.useState)(!1),o=Object(d.a)(r,2),s=o[0],m=o[1],h=Object(i.useState)(30),g=Object(d.a)(h,2),p=g[0],O=g[1],v=Object(i.useState)(!1),y=Object(d.a)(v,2),x=y[0],f=y[1],B=Math.max(a,p)+"%",N=Object(c.a)((function(t){return{margin:{marginBottom:t.spacing(3)},progressBarContainer:{width:"10%"},innerContainer:{width:B}}}))();return Object(i.useEffect)((function(){m(setInterval((function(){return n((function(t){return t+1}))}),1)),f(setInterval((function(){return O((function(t){return t+1}))}),1))}),[]),110===a&&clearInterval(s),90===p&&clearInterval(x),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{className:N.margin,variant:"h6",gutterBottom:!0,children:"Code snippet no. 1: Fork and adjust generic progress bars, to add progressing percentage"}),Object(j.jsx)(l.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",className:N.progressBarContainer,children:Object(j.jsxs)(l.a,{className:N.innerContainer,item:!0,xs:12,children:[Object(j.jsx)(b,{completed:a,marginTop:0}),Object(j.jsx)(b,{completed:p,marginTop:"16px"})," "]})})]})},h=a(74),g=a(76),p=a(73),O=a(77),v=function(){var t=Object(i.useState)(!1),e=Object(d.a)(t,2),a=e[0],n=e[1],r=Object(c.a)((function(t){return{link:{cursor:"pointer",textDecoration:"underline"},margin:{marginTop:t.spacing(3),marginBottom:t.spacing(3)},dataTitle:{textDecoration:"underline"}}}))();return Object(i.useEffect)((function(){navigator.geolocation.watchPosition((function(t){n(t.coords)}),(function(t){console.warn(t.message),n(t)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{className:r.margin,variant:"h6",gutterBottom:!0,children:"Code snippet no. 2: Getting a user's location"}),Object(j.jsxs)("div",{className:r.margin,children:[Object(j.jsx)(u.a,{variant:"body1",gutterBottom:!0,children:"In Node.js\\Express, you can use 'req.ip' (may be a proxy IP instead), or 'req.header('x-forwarded-for')' to get a user's IP address."}),Object(j.jsxs)(u.a,{variant:"body1",gutterBottom:!0,children:["You can see an exmaple in ",Object(j.jsx)(O.a,{title:"polykick.com GitHub",placement:"top-start",children:Object(j.jsx)(p.a,{className:r.link,color:"textPrimary",onClick:function(){return window.open("https://github.com/O-K-G/polykick/blob/main/server/src/components/routes/fetchCountry.js","_blank","noreferrer")},variant:"body1",children:"this"})})," project of mine."]}),Object(j.jsx)(u.a,{variant:"body1",gutterBottom:!0,children:"Then, using a third party package or API service, you can get some non-accurate geodata."})]}),Object(j.jsxs)("div",{className:r.margin,children:[Object(j.jsx)(u.a,{variant:"body1",gutterBottom:!0,children:"The other option is to get the device location (using GPS, etc'... if available) with 'navigator.geolocation.watchPosition()'."}),Object(j.jsx)(u.a,{variant:"body1",gutterBottom:!0,children:"This is up to the user though to decide if to allow or deny location access."})]}),Object(j.jsxs)("div",{className:r.margin,children:[Object(j.jsx)(u.a,{variant:"body1",gutterBottom:!0,children:"In this example, if you allowed access, you should see your device position."}),Object(j.jsx)(u.a,{variant:"body1",gutterBottom:!0,children:"Otherwise, you'll see an error message."})]}),a.code?Object(j.jsx)(u.a,{variant:"body1",gutterBottom:!0,children:a.message}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{display:"inline",className:r.dataTitle,variant:"body1",gutterBottom:!0,children:"Your latitude:"})," ",Object(j.jsx)(u.a,{display:"inline",variant:"body1",gutterBottom:!0,children:a.latitude?a.latitude:"No data provided from the device"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{display:"inline",className:r.dataTitle,variant:"body1",gutterBottom:!0,children:"Your longitude:"})," ",Object(j.jsx)(u.a,{display:"inline",variant:"body1",gutterBottom:!0,children:a.longitude?a.longitude:"No data provided from the device"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{display:"inline",className:r.dataTitle,variant:"body1",gutterBottom:!0,children:"Latitude and longitude accuracy:"})," ",Object(j.jsx)(u.a,{display:"inline",variant:"body1",gutterBottom:!0,children:a.accuracy?a.accuracy+" m":"No data provided from the device"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{display:"inline",className:r.dataTitle,variant:"body1",gutterBottom:!0,children:"Your altitude:"})," ",Object(j.jsx)(u.a,{display:"inline",variant:"body1",gutterBottom:!0,children:a.altitude?a.altitude:"No data provided from the device"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{display:"inline",className:r.dataTitle,variant:"body1",gutterBottom:!0,children:"Altitude accuracy:"})," ",Object(j.jsx)(u.a,{display:"inline",variant:"body1",gutterBottom:!0,children:a.altitudeAccuracy?a.altitudeAccuracy:"No data provided from the device"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{display:"inline",className:r.dataTitle,variant:"body1",gutterBottom:!0,children:"Your heading:"})," ",Object(j.jsx)(u.a,{display:"inline",variant:"body1",gutterBottom:!0,children:a.heading?a.heading:"No data provided from the device"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{display:"inline",className:r.dataTitle,variant:"body1",gutterBottom:!0,children:"Your speed:"})," ",Object(j.jsx)(u.a,{display:"inline",variant:"body1",gutterBottom:!0,children:a.speed?a.speed:"No data provided from the device"})]})]})]})},y=function(){var t=Object(h.a)("(prefers-color-scheme: dark)"),e=Object(i.useMemo)((function(){return Object(o.a)({palette:{type:t?"dark":"light",background:{default:t?"#000":"#fff"}}})}),[t]),a=Object(c.a)((function(t){return{root:{fontFamily:"Roboto",width:"100%",padding:t.spacing(2)}}}))();return Object(j.jsxs)(s.a,{theme:e,children:[Object(j.jsx)(g.a,{}),Object(j.jsxs)("div",{className:a.root,children:[Object(j.jsx)(m,{}),Object(j.jsx)(v,{})]})]})};r.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.27b69924.chunk.js.map