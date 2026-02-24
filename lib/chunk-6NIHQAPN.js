import{a as n}from"./chunk-JUKQ2PZF.js";import{a}from"./chunk-BWVHYZ7I.js";import{forwardRef as h}from"react";import y from"clsx";var i={Paragraph:n,Text:a};var f=`@layer components {
  .phantom-input_acVVO {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: var(--space-sm);
    border: none;
  }
  .phantom-input_acVVO > input {
    margin-block: var(--space-sm);
  }
  .phantom-input_acVVO > [role=alert] {
    color: var(--color-critical);
    font-weight: bold;
  }
  .phantom-input_acVVO:last-child {
    margin-bottom: 0;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(f));var m={input:"phantom-input_acVVO"};import{jsx as o,jsxs as g}from"react/jsx-runtime";var _=h(({name:r,type:l="text",label:p,error:t,id:s,fieldClass:c,...d},u)=>{let e=s||r;return g("fieldset",{className:y(m.input,c),children:[p&&o("label",{htmlFor:e,children:p}),o("input",{id:e,name:r,type:l,"aria-invalid":!!t,"aria-describedby":t?`${e}-error`:void 0,ref:u,...d}),t&&o(i.Text,{id:`${e}-error`,role:"alert",children:t})]})});export{i as a,_ as b};
//# sourceMappingURL=chunk-6NIHQAPN.js.map