import{a as r}from"./chunk-6R562N2M.js";import{a as o}from"./chunk-C2A2LVUC.js";var a=`@layer components {
  .phantom-split_Pr00l {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    gap: var(--space);
  }
  .phantom-split_Pr00l[data-split-side=left] {
    grid-template-columns: auto 1fr;
  }
  .phantom-split_Pr00l[data-split-side=right] {
    grid-template-columns: 1fr auto;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(a));var p={split:"phantom-split_Pr00l"};import{jsx as i}from"react/jsx-runtime";var f=({mainSide:l,asColumn:t,children:e})=>{let{atBreakpoint:n}=o();return e.length!==2?(console.warn("Cannot render Split component with more or less than 2 children"),null):t&&n(t.breakpoint)?i(r,{...t,children:e}):i("div",{className:p.split,"data-split-side":l,role:"region",children:e})};export{f as a};
//# sourceMappingURL=chunk-W4HE43AO.js.map