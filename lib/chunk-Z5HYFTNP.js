import{a as r}from"./chunk-6J2QZ6CL.js";import{forwardRef as f}from"react";import x from"clsx";var g=`@layer components {
  .phantom-header_JN26c {
    width: 100%;
    padding-inline: max((100% - 1280px) / 2, max(5%, 8px));
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    z-index: 100;
  }
  .phantom-header_JN26c.phantom-inline_Q6do1 {
    background: none;
    border: none;
  }
  .phantom-header_JN26c.phantom-fixed_gmBo- {
    position: sticky;
    inset: 0;
  }
  .phantom-header_JN26c.phantom-overlapPage_Mj2zS + main {
    margin-top: calc(-1 * 64px) !important;
  }
  .phantom-header_JN26c.phantom-background_rGgzV {
    background-color: var(--background-content);
    border-bottom: var(--border-soft);
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(g));var e={header:"phantom-header_JN26c",inline:"phantom-inline_Q6do1",fixed:"phantom-fixed_gmBo-",overlapPage:"phantom-overlapPage_Mj2zS",background:"phantom-background_rGgzV"};import{jsx as y}from"react/jsx-runtime";var u=400,k=f(({inline:t=!1,pageSpace:c,hasBackground:p,dynamicSettings:a,children:d,className:i,...m},s)=>{let l=r(),o=a?.enabled&&l>(a.scrollDistance||u),n={inline:o?a.inline:t,pageSpace:o?a.pageSpace:c,hasBackground:o?a.hasBackground:p},h=x(e.header,{[e.inline]:n.inline,[e.fixed]:!n.inline,[e.overlapPage]:n.pageSpace==="overlap",[e.padPage]:n.pageSpace==="pad",[e.background]:n.hasBackground},i);return y("header",{className:h,role:"navigation",ref:s,...m,children:d})});export{k as a};
//# sourceMappingURL=chunk-Z5HYFTNP.js.map