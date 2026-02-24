import{forwardRef as x,useCallback as k,useEffect as C,useMemo as E,useRef as c,useState as w}from"react";import y from"clsx";var _=`@layer components {
  .phantom-toggle_29QMo {
    --toggle-width: auto;
    --toggle-half: auto;
    --toggle-padding: var(--space-xs);
    position: relative;
    width: -moz-fit-content;
    width: fit-content;
    height: 3em;
    overflow: hidden;
    font-weight: bold;
    color: var(--input-text-color);
    background-color: var(--input-background-color);
    border-radius: var(--border-radius);
    font-size: var(--font-size);
    border: var(--input-border);
    transition: outline-color var(--transition-fast), border var(--transition-medium);
  }
  .phantom-toggle_29QMo:hover {
    border-color: var(--input-color-active);
  }
  .phantom-toggle_29QMo[disabled], .phantom-toggle_29QMo.phantom-disabled_uA9Ba {
    background-color: var(--input-background-color-disabled);
    border: none;
    color: var(--input-text-color-disabled);
    cursor: not-allowed;
    filter: brightness(var(--filter-disabled-brightness)) saturate(var(--filter-disabled-saturation));
  }
  .phantom-checkbox_-ufcE {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }
  .phantom-checkbox_-ufcE::before, .phantom-checkbox_-ufcE::after {
    display: none !important;
  }
  .phantom-checkbox_-ufcE[disabled], .phantom-checkbox_-ufcE.phantom-disabled_uA9Ba {
    cursor: not-allowed;
  }
  .phantom-states_quHDF {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius);
    width: var(--toggle-width);
    height: 100%;
    transition: 0.3s ease all;
    z-index: 1;
  }
  .phantom-before_rhuJJ,
  .phantom-indicator_5C0Q-,
  .phantom-after_alUPG {
    padding: var(--toggle-padding);
    border-radius: var(--border-radius);
    transition: 0.3s ease all;
  }
  .phantom-before_rhuJJ,
  .phantom-after_alUPG {
    width: var(--toggle-half);
    text-align: center;
    line-height: 1;
    color: var(--input-text-color);
    z-index: 1;
  }
  .phantom-indicator_5C0Q- {
    position: absolute;
    width: calc(50% - var(--toggle-padding));
    height: calc(100% - 2 * var(--toggle-padding));
    left: var(--toggle-padding);
    background-color: var(--input-color-active);
    z-index: 0;
  }
  .phantom-checkbox_-ufcE:checked + .phantom-states_quHDF .phantom-indicator_5C0Q- {
    left: 50%;
  }
  .phantom-checkbox_-ufcE:checked + .phantom-states_quHDF .phantom-after_alUPG {
    color: var(--input-text-color-active);
  }
  .phantom-checkbox_-ufcE:not(:checked) + .phantom-states_quHDF .phantom-before_rhuJJ {
    color: var(--input-text-color-active);
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_));var e={toggle:"phantom-toggle_29QMo",disabled:"phantom-disabled_uA9Ba",checkbox:"phantom-checkbox_-ufcE",states:"phantom-states_quHDF",before:"phantom-before_rhuJJ",indicator:"phantom-indicator_5C0Q-",after:"phantom-after_alUPG"};import{jsx as o,jsxs as d}from"react/jsx-runtime";var T=x(({checked:s="Yes",notChecked:p="No",defaultState:l=!1,disabled:a=!1,onChange:r,...h},g)=>{let m=k(v=>{r&&r(v.target.checked)},[r]),n=c(null),i=c(null),[t,u]=w(null);C(()=>{!t&&n.current&&i.current&&u(2*Math.max(n.current?.clientWidth,i.current?.clientWidth))},[t]);let f=E(()=>t?{"--toggle-width":`calc(${t}px + 2 * var(--toggle-padding))`,"--toggle-half":"calc(50% - var(--toggle-padding))"}:void 0,[t]),b=y(e.toggle,{[e.disabled]:a});return d("div",{className:b,style:f,role:"switch","aria-checked":l,"aria-disabled":a,...h,children:[o("input",{type:"checkbox",className:e.checkbox,defaultChecked:l,onChange:m,disabled:a,ref:g}),d("div",{className:e.states,style:t?void 0:{visibility:"hidden"},children:[o("span",{ref:n,className:e.before,children:p}),o("span",{className:e.indicator}),o("span",{ref:i,className:e.after,children:s})]})]})});export{T as a};
//# sourceMappingURL=chunk-5Z77PF5W.js.map