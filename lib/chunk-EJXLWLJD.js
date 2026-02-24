import{forwardRef as c,useMemo as f}from"react";import v from"clsx";var h=`@keyframes phantom-loading-ring_fkKFX {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@layer components {
  .phantom-loading_ILo6w {
    --loading-width: 100%;
    --loading-height: 100%;
    --loading-size: 64px;
    --loading-min-height: var(--loading-size);
    --loading-thickness: 8px;
    --loading-color: var(--color-primary);
    width: var(--loading-width);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: var(--loading-color);
  }
  .phantom-loading_ILo6w div {
    display: block;
    position: absolute;
    width: var(--loading-size);
    height: var(--loading-size);
    margin: var(--loading-thickness);
    border: var(--loading-thickness) solid var(--loading-color);
    border-radius: 50%;
    animation: phantom-loading-ring_fkKFX 1.5s linear infinite;
    border-color: var(--loading-color) transparent transparent transparent;
  }
  .phantom-loading_ILo6w div:nth-child(1) {
    animation-delay: -0.3s;
  }
  .phantom-loading_ILo6w div:nth-child(2) {
    animation-delay: -0.15s;
  }
  .phantom-loading_ILo6w div:nth-child(3) {
    animation-delay: 0s;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(h));var l={loading:"phantom-loading_ILo6w","loading-ring":"phantom-loading-ring_fkKFX"};import{jsx as n,jsxs as u}from"react/jsx-runtime";var C=c(({size:o,thickness:i,width:a,height:t,minHeight:e,color:r,className:s,style:d,...g},p)=>{let m=f(()=>({"--loading-size":o?`${o}px`:void 0,"--loading-thickness":i?`${i}px`:void 0,"--loading-width":a,"--loading-height":t,"--loading-min-height":e,"--loading-color":r,...d}),[o,i,a,t,e,r,d]);return u("div",{className:v(l.loading,s),style:m,ref:p,role:"status","aria-live":"polite",...g,children:[n("div",{}),n("div",{}),n("div",{})]})});export{C as a};
//# sourceMappingURL=chunk-EJXLWLJD.js.map