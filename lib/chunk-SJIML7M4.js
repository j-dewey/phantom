import{b as r}from"./chunk-GYKAA7LN.js";import{a as n}from"./chunk-F6F7WLJ2.js";import{useEffect as l,useState as p}from"react";import{createPortal as v}from"react-dom";import f from"clsx";var c=`@layer components {
  .phantom-modals_JJ82V {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100%;
    z-index: 101;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    pointer-events: none;
    transition: background-color var(--transition-medium);
  }
  .phantom-modals_JJ82V.phantom-active_dR8Kj {
    visibility: visible;
    pointer-events: all;
    background-color: var(--alpha-contrast);
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(c));var t={modals:"phantom-modals_JJ82V",active:"phantom-active_dR8Kj"};import{jsx as h}from"react/jsx-runtime";var E=({className:a,...i})=>{let[o,d]=p(null),m=n();l(()=>{let e=()=>{d(r())};return window.addEventListener("modal-change",e),()=>{window.removeEventListener("modal-change",e)}},[]),l(()=>{m(!!o)},[o]);let s=f(t.modals,{[t.active]:!!o},a);return v(h("div",{className:s,onScroll:e=>{e.preventDefault()},...i,children:o}),document.getElementById("root"))};export{E as a};
//# sourceMappingURL=chunk-SJIML7M4.js.map