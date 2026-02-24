import{forwardRef as a}from"react";import s from"clsx";var p=`@layer components {
  .phantom-switch_ivdij {
    width: 40px;
    display: inline-block;
    position: relative;
    top: 8px;
  }
  .phantom-switch_ivdij span {
    display: flex;
    align-items: center;
    width: 40px;
    height: calc(1em + 4px + 4px);
    border-radius: calc(1em + 4px + 4px);
    position: relative;
    transition: 0.15s ease;
    pointer-events: none;
    border: var(--input-border);
    background-color: var(--input-background-color-selected);
  }
  .phantom-switch_ivdij span::before {
    content: "";
    display: block;
    position: absolute;
    pointer-events: none;
    height: 1em;
    width: 1em;
    background-color: var(--color-text-inverse);
    border-radius: 50%;
    box-shadow: var(--shadow-subtle);
    transition: 0.15s ease;
    transform: translateX(4px);
  }
  .phantom-switch_ivdij:hover > span {
    border-color: var(--input-color-active);
  }
  .phantom-switch_ivdij input {
    width: 40px;
    height: calc(1em + 4px + 4px);
    font-size: inherit;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    opacity: 0;
  }
  .phantom-switch_ivdij input:checked + span {
    background-color: var(--color-primary);
  }
  .phantom-switch_ivdij input:checked + span::before {
    transform: translateX(calc(100% + 4px));
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(p));var t={switch:"phantom-switch_ivdij"};import{jsx as e,jsxs as c}from"react/jsx-runtime";var w=a(({className:o,style:i,...r},n)=>c("div",{className:s(t.switch,o),style:i,children:[e("input",{type:"checkbox","data-switch":!0,ref:n,role:"switch",...r}),e("span",{})]}));export{w as a};
//# sourceMappingURL=chunk-PBPGP3QT.js.map