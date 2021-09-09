var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,a=(e,a)=>{for(var o in a||(a={}))n.call(a,o)&&r(e,o,a[o]);if(t)for(var o of t(a))i.call(a,o)&&r(e,o,a[o]);return e};import{s as o,L as l,a as c,r as s,R as m,I as d,F as p,b as x,c as u,d as g,e as f,f as h,g as E,M as b,h as w,i as y,B as v,S as k,j as z,k as S}from"./vendor.3c98261a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const j=o.nav`
  // background: #000;
  background: ${({scrollNav:e})=>e?"#000":"transparent"};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transtion: 0.8s all ease;
  }
`,T=o.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0px 24px;
  max-width: 1100px;
`,L=o(l)`
  color: #fff;
  justify-self: flex-start:
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  // margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover { 
    color: #fff;
  }
`,$=o.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`,O=o.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
`,B=o.li`
  height: 80px;
`,C=o(c)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &.active,
  &:hover {
    color: #fff;
    border-bottom: 3px solid #01b571;
  }
`,F=o.nav`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`,I=o(l)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: inherit;
  }
`,P=({toggle:e})=>{const[t,n]=s.exports.useState(!1),i=()=>{window.scrollY>=80?n(!0):n(!1)};s.exports.useEffect((()=>{window.addEventListener("scroll",i)}),[]);return m.createElement(m.Fragment,null,m.createElement(d.Provider,{value:{color:"#fff"}},m.createElement(j,{scrollNav:t},m.createElement(T,null,m.createElement(L,{to:"/",onClick:()=>{x.scrollToTop()}},"dolla"),m.createElement($,{onClick:e},m.createElement(p,null)),m.createElement(O,null,m.createElement(B,null,m.createElement(C,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80},"About")),m.createElement(B,null,m.createElement(C,{to:"discover",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80},"Discover")),m.createElement(B,null,m.createElement(C,{to:"services",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80},"Services")),m.createElement(B,null,m.createElement(C,{to:"signup",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80},"Sign Up"))),m.createElement(F,null,m.createElement(I,{to:"/signin"},"Sign In"))))))},A=o.footer`
  background-color: #101522;
`,Y=o.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`,D=o.div`
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    padding-top: 32px;
  }
`,M=o.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`,N=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`,U=o.h2`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 16px;
  text-transform: capitalize;
`,_=o(l)`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0.5rem;
  color: #fff;
  text-transform: capitalize;

  &:hover {
    color: #01b571;
    transition: all 0.3s ease-out;
  }
`,V=o.section`
  max-width: 1000px;
  width: 100%;
`,G=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`,H=o(l)`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  margin-bottom: 16px;
  dispaly: flex;
  align-items: center;
`,R=o.small`
  color: #fff;

  @media (max-width: 820px) {
    margin-bottom: 16px;
  }
`,q=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`,W=o.a`
  color: #fff;
  font-size: 24px;
`,J=()=>m.createElement(A,null,m.createElement(Y,null,m.createElement(D,null,m.createElement(M,null,m.createElement(N,null,m.createElement(U,null,"About Us"),m.createElement(_,{to:"/signin"},"How it works"),m.createElement(_,{to:"/signin"},"Testimonials"),m.createElement(_,{to:"/signin"},"Careers"),m.createElement(_,{to:"/signin"},"Investors"),m.createElement(_,{to:"/signin"},"Terms of Service")),m.createElement(N,null,m.createElement(U,null,"Contact us"),m.createElement(_,{to:"/signin"},"How it works"),m.createElement(_,{to:"/signin"},"Contact"),m.createElement(_,{to:"/signin"},"Support"),m.createElement(_,{to:"/signin"},"Destination"),m.createElement(_,{to:"/signin"},"Sponsorships"))),m.createElement(M,null,m.createElement(N,null,m.createElement(U,null,"Videos"),m.createElement(_,{to:"/signin"},"Submit Video"),m.createElement(_,{to:"/signin"},"Ambassadors"),m.createElement(_,{to:"/signin"},"Agency"),m.createElement(_,{to:"/signin"},"Influencer")),m.createElement(N,null,m.createElement(U,null,"Social Media"),m.createElement(_,{to:"/signin"},"Instagram"),m.createElement(_,{to:"/signin"},"Facebook"),m.createElement(_,{to:"/signin"},"Youtube"),m.createElement(_,{to:"/signin"},"Twiter")))),m.createElement(V,null,m.createElement(G,null,m.createElement(H,{to:"/",onClick:()=>{x.scrollToTop()}},"dolla"),m.createElement(R,null," ","dolla © ",(new Date).getFullYear()," All Rights reserved"),m.createElement(q,null,m.createElement(W,{href:"//www.facebook.com",target:"_blank","aria-label":"Facebook"},m.createElement(u,null)),m.createElement(W,{href:"//www.instagram.com",target:"_blank","aria-label":"Instagrm"},m.createElement(g,null)),m.createElement(W,{href:"//www.youtube.com",target:"_blank","aria-label":"Youtube"},m.createElement(f,null)),m.createElement(W,{href:"//www.twitter.com",target:"_blank","aria-label":"Twitter"},m.createElement(h,null)),m.createElement(W,{href:"//www.linkedin.com",target:"_blank","aria-label":"LinkedIn"},m.createElement(E,null)))))));const K=o(c)`
  border-radius: 50px;
  white-space: nowrap;
  padding: ${({big:e})=>e?"14px 48px":"12px 30px"};
  color: ${({primary:e})=>e?"#010606":"#fff"};
  background: ${({primary:e})=>e?"#01b571":"#010606"};
  font-size: ${({fontBig:e})=>e?"20px":"16px"};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({primary:e})=>e?"#010606":"#fff"};
    background: ${({primary:e})=>e?"#fff":"#01bf71"};
  }
`,Q=o.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  postion: relative;
  z-index: 1;

  &:before {
    content: 'hello';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6)
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`,X=o.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Z=o.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
`,ee=o.div`
  z-index: 3;
  max-width: 1200px:
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,te=o.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`,ne=o.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,ie=o.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,re=o(b)`
  margin-left: 8px;
  font-size: 20px;
`,ae=o(w)`
  margin-left: 8px;
  font-size: 20px;
`,oe=()=>{const[e,t]=s.exports.useState(!1),n=()=>t(!e);return m.createElement(Q,{id:"home"},m.createElement(X,null,m.createElement(Z,{autoPlay:!0,loop:!0,muted:!0,src:"/assets/video-03.7a149619.mp4",type:"video/mp4"})),m.createElement(ee,null,m.createElement(te,null,"Virtual Banking Made Easy"),m.createElement(ne,null,"Sign up for a new account today and receive $250 in credit towards your next payment."),m.createElement(ie,null,m.createElement(K,{to:"signup",onMouseEnter:n,onMouseLeave:n,primary:"true",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80},"Get Started ",e?m.createElement(re,null):m.createElement(ae,null)))))},le=o.div`
  color: #fff;
  background: ${({lightBg:e})=>e?"#f9f9f9":"#010606"};

  @media (max-width: 768px) {
    padding: 100px 0px;
  }
`,ce=o.div`
  display: grid;
  justify-content: center;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  margin: auto;
  padding: 0px 24px;
`,se=o.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({imgStart:e})=>e?"'col2 col1'":"'col1 col2'"};
  align-items: center;

  @media (max-width: 768px) {
    grid-template-areas: ${({imgStart:e})=>e?"'col1 col2'":"'col1 col1' 'col2 col2'"};
  }
`,me=o.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`,de=o.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`,pe=o.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;
`,xe=o.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`,ue=o.h2`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText:e})=>e?"#f7f8fa":"#010606"};

  @media (max-width: 480px) {
    font-size: 32px;
  }
`,ge=o.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 28px;
  color: ${({darkText:e})=>e?"#010606":"#fff"};
  text-transform: capitalize;
`,fe=o.div`
  display: flex;
  justify-content: flex-start;
`,he=o.div`
  max-width: 555px;
  height: 100%;
`,Ee=o.img`
  width: 100%;
  margin-bottom: 10px;
  padding-right: 0px;
`,be=({lightBg:e,id:t,imgStart:n,topLine:i,headline:r,lightText:a,description:o,darkText:l,buttonLabel:c,alt:s,img:d,primary:p})=>m.createElement(m.Fragment,null,m.createElement(le,{lightBg:e,id:t},m.createElement(ce,null,m.createElement(se,{imgStart:n},m.createElement(me,null,m.createElement(pe,null,m.createElement(xe,null,i),m.createElement(ue,{lightText:a},r),m.createElement(ge,{darkText:l},o),m.createElement(fe,null,m.createElement(K,{to:"home",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,primary:p?1:0,smooth:!0,duration:500,spy:!0,exact:"true",offset:-80},c)))),m.createElement(de,null,m.createElement(he,null,m.createElement(Ee,{src:d,alt:s})))))));var we="/assets/svg-2.ed429c45.svg";const ye={id:"about",lightBg:!1,lightText:!0,lightTexDesc:!1,topLine:"Premium Bank",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusing app that allows you to send unlimited transactions without getting charged any fees.",buttonLabel:"Get started",imgStart:!1,img:"/assets/svg-6.ece23e7d.svg",alt:"car",dark:!0,primary:!0,darkText:!1},ve={id:"discover",lightBg:!0,lightText:!1,lightTexDesc:!1,topLine:"Unlimited Access",headline:"Login to your account at any time",description:"We have you covered no matteer where you are located. All you need is an internet connection and a phone or computer.",buttonLabel:"Learn more",imgStart:!1,img:we,alt:"message",dark:!1,primary:!1,darkText:!0},ke={id:"signup",lightBg:!0,lightText:!1,topLine:"Join our team",headline:"create an account is extreamly easy",description:"get everythings set up and ready in under 10 minutes. all you need to do is add you information and you're ready to go.",buttonLabel:"Start now ",imgStart:!1,img:"/assets/svg-4.fd40b2d6.svg",alt:"paper",dark:!1,primary:!1,darkText:!0};const ze=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #010606;
  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  }
`,Se=o.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media (max-width: 1000px) {
    grid-template-columns: repet(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0px 20px;
  }
`,je=o.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 64px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,Te=o.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    tranform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`,Le=o.img`
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
`,$e=o.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`,Oe=o.p`
  font-size: 1rem;
  text-align: center;
`,Be=()=>m.createElement(ze,{id:"services"},m.createElement(je,null,"Our Services"),m.createElement(Se,null,m.createElement(Te,null,m.createElement(Le,{src:"/assets/svg-1.97033d4c.svg"}),m.createElement($e,null,"Reduce Expense"),m.createElement(Oe,null,"We help reduce your fees and increase your overall revenue")),m.createElement(Te,null,m.createElement(Le,{src:we}),m.createElement($e,null,"Virtual Offices"),m.createElement(Oe,null,"You can access our platform online anywhere in the world")),m.createElement(Te,null,m.createElement(Le,{src:"/assets/svg-3.a293a3b9.svg"}),m.createElement($e,null,"Premium Benefits"),m.createElement(Oe,null,"Unlock our special membership acrd that returns 5% cash back.")))),Ce=o.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: ${({isOpen:e})=>e?"0":"-100%"};
  left: 0;
  transition: 0.3s ese-in-out;
  opacity: ${({isOpen:e})=>e?"100%":"0"};
`,Fe=o.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`,Ie=o(y)`
  color: #fff;
`,Pe=o.div`
  color: #fff;
`,Ae=o.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`,Ye=o(c)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: capitalize;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`,De=o.div`
  display: flex;
  justify-content: center;
`,Me=o(l)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`,Ne=({isOpen:e,toggle:t})=>m.createElement(Ce,{isOpen:e,onClick:t},m.createElement(Fe,{onClick:t},m.createElement(Ie,null)),m.createElement(Pe,null,m.createElement(Ae,null,m.createElement(Ye,{onClick:t,to:"home"},"Home"),m.createElement(Ye,{onClick:t,to:"discover"},"Discover"),m.createElement(Ye,{onClick:t,to:"service"},"Services"),m.createElement(Ye,{onClick:t,to:"signup"},"Sign up")),m.createElement(De,null,m.createElement(Me,{to:"/signin"},"Sign In")))),Ue=()=>{const[e,t]=s.exports.useState(!1),n=()=>t(!e);return m.createElement(m.Fragment,null,m.createElement(P,{toggle:n}),m.createElement(Ne,{isOpen:e,toggle:n}),m.createElement(oe,null),m.createElement(be,a({},ye)),m.createElement(be,a({},ve)),m.createElement(Be,null),m.createElement(be,a({},ke)),m.createElement(J,null))},_e=o.div`
  postion: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`,Ve=o.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 400px) {
    height: 80%;
  } ;
`,Ge=o(l)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  &:hover {
    color: inherit;
  }

  @media (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  } ;
`,He=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 480px) {
    padding: 10px;
  }
`,Re=o.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media (max-width: 400px) {
    paddign: 32px;
  }
`,qe=o.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`,We=o.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`,Je=o.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  &:hover,
  &:focus {
    outline: none;
  }
`,Ke=o.button`
  background: #01bf71;
  padding: 16px 0px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
`,Qe=o.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`,Xe=()=>m.createElement(m.Fragment,null,m.createElement(_e,null,m.createElement(Ve,null,m.createElement(Ge,{to:"/"},"Dolla"),m.createElement(He,null,m.createElement(Re,{action:"#"},m.createElement(qe,null,"Sign in to Your Account"),m.createElement(We,{htmlFor:"for"},"Email"),m.createElement(Je,{type:"email",placeholder:"Your Email"}),m.createElement(We,{htmlFor:"for"},"Password"),m.createElement(Je,{type:"password",placeholder:"Your Password",required:!0}),m.createElement(Ke,null,"Submit"),m.createElement(Qe,null,"Forget Password")))))),Ze=()=>(s.exports.useState(!1),m.createElement(m.Fragment,null,m.createElement(Xe,null)));function et(){return m.createElement(v,null,m.createElement(k,null,m.createElement(z,{path:"/",component:Ue,exact:!0}),m.createElement(z,{path:"/signin",component:Ze,exact:!0})))}S.render(m.createElement(et,null),document.getElementById("root"));
