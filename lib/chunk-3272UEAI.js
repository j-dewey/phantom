import{forwardRef as b}from"react";import m from"clsx";var f=`@layer components {
  .phantom-header_C2YHl {
    margin-bottom: 0;
  }
  .phantom-header_C2YHl .phantom-title_YmnPO {
    margin-bottom: 0;
  }
  .phantom-header_C2YHl .phantom-subheading_D-n7H {
    margin-bottom: 0;
    font-weight: normal;
    color: var(--color-text-soft);
  }
  .phantom-header_C2YHl .phantom-title_YmnPO + .phantom-subheading_D-n7H {
    margin-top: var(--space-xs);
  }
  .phantom-soft_StQ3c {
    color: var(--color-text-soft);
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(f));var e={header:"phantom-header_C2YHl",title:"phantom-title_YmnPO",subheading:"phantom-subheading_D-n7H",soft:"phantom-soft_StQ3c"};import{jsx as a,jsxs as C}from"react/jsx-runtime";var p={hero:{heading:"h1",subheading:"h2"},major:{heading:"h2",subheading:"h3"},regular:{heading:"h3",subheading:"h4"},minor:{heading:"h4",subheading:"h5"}},y=b(({subheading:n,align:c,size:g="regular",subheadingSize:H,soft:o,children:t,className:i,style:u,...r},d)=>{let h=p[g].heading,l=p[H||g].subheading,s={textAlign:c,...u};return t&&n?C("header",{className:m(e.header,{[e.soft]:o},i),style:s,...r,ref:d,children:[a(h,{className:e.title,children:t}),a(l,{className:e.subheading,children:n})]}):t?a(h,{className:m(e.title,{[e.soft]:o},i),style:s,...r,ref:d,children:t}):a(l,{className:m(e.subheading,{[e.soft]:o},i),style:s,...r,ref:d,children:n})});export{y as a};
//# sourceMappingURL=chunk-3272UEAI.js.map