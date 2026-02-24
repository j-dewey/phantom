import{cloneElement as x,forwardRef as u}from"react";import h from"clsx";var f=`@layer components {
  .phantom-icon_ZEVVH {
    --icon-size: 24px;
    display: inline-block;
    font-size: var(--icon-size);
    height: 1em;
    vertical-align: middle;
  }
  .phantom-icon_ZEVVH.phantom-inline_bkaxn {
    --icon-size: 1em;
    height: var(--icon-size);
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(f));var n={icon:"phantom-icon_ZEVVH",inline:"phantom-inline_bkaxn"};var t={small:"18px",regular:"24px",large:"48px",full:"100%"},S=u(({icon:i,size:e,context:r,inline:l=!1,tooltip:o,className:a,style:s,...c},p)=>{let m=e?{"--icon-size":e in t?t[e]:e}:{},d=h(n.icon,{[n.inline]:l},a);return x(i,{className:d,style:{...m,...s},"data-tooltip":o,"data-context":r,role:"img","aria-hidden":o?void 0:!0,"aria-label":o||void 0,ref:p,...c})});export{S as a};
//# sourceMappingURL=chunk-K755NM6N.js.map