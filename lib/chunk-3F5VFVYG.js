import{c as m}from"./chunk-2PEZLTX5.js";import{forwardRef as N,useEffect as p,useState as e}from"react";import{createPortal as C}from"react-dom";import E from"clsx";var w=`@layer components {
  .phantom-banner_YNskk {
    position: fixed;
    top: var(--space-sm);
    left: 50%;
    min-width: min(max(50%, 320px), 95%);
    min-height: 48px;
    z-index: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    background-color: var(--background-overlay);
    border-radius: var(--border-radius);
    border: 1px solid transparent;
    box-shadow: var(--shadow-floating);
    opacity: 0;
    transform: translate(-50%, -120%);
    transition: transform var(--transition-slow), opacity var(--transition-slow);
  }
  .phantom-banner_YNskk[data-state=on] {
    transform: translate(-50%, 0%);
    opacity: 1;
  }
  .phantom-banner_YNskk .phantom-message_F5UHR {
    width: -moz-fit-content;
    width: fit-content;
    font-size: var(--font-size);
    font-weight: bold;
  }
  .phantom-banner_YNskk[data-mode=error] {
    background-color: var(--background-container-critical);
    color: var(--color-text-on-critical);
    border-color: var(--color-critical);
  }
  .phantom-banner_YNskk[data-mode=success] {
    background-color: var(--background-container-positive);
    color: var(--color-text-on-positive);
    border-color: var(--color-positive);
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(w));var r={banner:"phantom-banner_YNskk",message:"phantom-message_F5UHR"};import{jsx as l}from"react/jsx-runtime";var D=N(({notificationLength:d=5e3,concurrentNotificationDelay:f=750,className:u,...b},v)=>{let[t,n]=e(!1),[h,s]=e(!1),[a,g]=e("error"),[i,y]=e(""),[x,c]=e(!1);return p(()=>{let o=()=>{c(!0)};return window.addEventListener("notification-change",o),()=>{window.removeEventListener("notification-change",o)}},[]),p(()=>{if(!t){let o=m();if(!!o){let k=i==o.message&&a==o.type&&a=="error";setTimeout(()=>{g(o.type),y(o.message),t||(n(!0),s(!0),setTimeout(()=>{n(!1)},d))},h&&!k?f:0)}else n(!1),s(!1)}c(!1)},[t,x]),C(l("div",{className:E(r.banner,u),"data-mode":a,"data-state":t?"on":"off",ref:v,role:"banner",...b,children:l("span",{className:r.message,children:i})}),document.getElementById("root"))});export{D as a};
//# sourceMappingURL=chunk-3F5VFVYG.js.map