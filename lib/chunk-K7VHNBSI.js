import{forwardRef as u}from"react";import x from"clsx";var y=`@layer components {
  .phantom-figure_h3y9y {
    --image-max-width: 100%;
    max-width: var(--image-max-width);
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space);
  }
  .phantom-figure_h3y9y .phantom-image_7RZs0 {
    width: 100%;
    border-radius: var(--border-radius);
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
    -o-object-fit: cover;
       object-fit: cover;
  }
  .phantom-figure_h3y9y .phantom-image_7RZs0.phantom-border_mybDp {
    border: var(--border-soft);
  }
  .phantom-figure_h3y9y .phantom-image_7RZs0.phantom-round_C4w-j {
    aspect-ratio: 1;
    border-radius: 100%;
  }
  .phantom-figure_h3y9y .phantom-image_7RZs0.phantom-fit_NaNLQ {
    height: 100%;
  }
  .phantom-figure_h3y9y .phantom-caption_q-8HE {
    margin-top: var(--space-sm);
    color: var(--color-text-soft);
    font-size: var(--font-size-sm);
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(y));var e={figure:"phantom-figure_h3y9y",image:"phantom-image_7RZs0",border:"phantom-border_mybDp",round:"phantom-round_C4w-j",fit:"phantom-fit_NaNLQ",caption:"phantom-caption_q-8HE"};import{jsx as a,jsxs as b}from"react/jsx-runtime";var r={xs:"320px",sm:"576px",md:"768px",lg:"980px",xl:"1280px"},R=u(({image:i,alt:m,border:n,round:s,fit:p,maxWidth:o,caption:t,className:d,style:c,...f},g)=>{let h=x(e.image,{[e.border]:n,[e.round]:s,[e.fit]:p},d),l=o?{"--image-max-width":o in r?r[o]:o}:{};return b("figure",{className:e.figure,style:{...l,...c},ref:g,...f,children:[a("img",{src:i,className:h,alt:m}),t&&a("figcaption",{className:e.caption,children:t})]})});export{R as a};
//# sourceMappingURL=chunk-K7VHNBSI.js.map