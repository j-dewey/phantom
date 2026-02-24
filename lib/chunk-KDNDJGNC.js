import{a as p}from"./chunk-QE4WPLOX.js";import{forwardRef as b}from"react";import x from"clsx";var u=`@layer components {
  .phantom-section_MARYF {
    width: 100%;
    padding-inline: max((100% - 1280px) / 2, max(5%, 8px));
    --background-image: none;
    --background-color: transparent;
    min-height: 64px;
    padding-block: var(--layout-space-xs);
    flex-grow: 1;
    position: relative;
    color: var(--color-text);
    background-color: var(--background-color);
  }
  .phantom-section_MARYF:not(:last-of-type) {
    flex: 0 0 auto;
  }
  .phantom-section_MARYF:last-of-type {
    flex: 1 0 auto;
  }
  .phantom-section_MARYF.phantom-image_FBvUn {
    background-image: var(--background-image);
  }
  .phantom-section_MARYF.phantom-parallax_kVlu5 {
    background-color: var(--background-container);
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
  }
  .phantom-section_MARYF[data-top-shape], .phantom-section_MARYF[data-bottom-shape] {
    --outset-top: 0px;
    --outset-bottom: 0px;
    --inset-top: 0px;
    --inset-bottom: 0px;
    clip-path: polygon(0 var(--outset-top), 50% var(--inset-top), 100% var(--outset-top), 100% calc(100% - var(--outset-bottom)), 50% calc(100% - var(--inset-bottom)), 0 calc(100% - var(--outset-bottom)));
    padding-top: max(3 * (var(--outset-top) + var(--inset-top)), var(--layout-space-xs));
    padding-bottom: max(2 * (var(--outset-bottom) + var(--inset-bottom)), var(--layout-space-xs));
  }
  .phantom-section_MARYF[data-top-shape][data-top-shape=inset], .phantom-section_MARYF[data-bottom-shape][data-top-shape=inset] {
    --inset-top: 32px;
  }
  .phantom-section_MARYF[data-top-shape][data-top-shape=outset], .phantom-section_MARYF[data-bottom-shape][data-top-shape=outset] {
    --outset-top: 32px;
  }
  .phantom-section_MARYF[data-top-shape][data-bottom-shape=inset], .phantom-section_MARYF[data-bottom-shape][data-bottom-shape=inset] {
    --inset-bottom: 32px;
  }
  .phantom-section_MARYF[data-top-shape][data-bottom-shape=outset], .phantom-section_MARYF[data-bottom-shape][data-bottom-shape=outset] {
    --outset-bottom: 32px;
  }
  @media (max-width: 980px) {
    .phantom-section_MARYF {
      padding-block: var(--space-xl);
    }
  }
  @media (max-width: 768px) {
    .phantom-section_MARYF {
      padding-block: var(--space-lg);
    }
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(u));var o={section:"phantom-section_MARYF",image:"phantom-image_FBvUn",parallax:"phantom-parallax_kVlu5"};import{jsx as g}from"react/jsx-runtime";var k=b(({background:a,backgroundImage:t,parallax:e,edges:n,children:s,className:i,style:c,...r},m)=>{let d=x(o.section,{[o.image]:!!t,[o.parallax]:e},i);a&&t&&console.warn("Section cannot have a background color and background image."),e&&!t&&console.warn("Parallax effect enabled but no background image provided.");let l={"data-top-shape":n?.top,"data-bottom-shape":n?.bottom},h={...a&&{"--background-color":p.color.background[a]},...t&&{"--background-image":`url(${t})`},...c};return g("section",{className:d,style:h,...l,ref:m,...r,children:s})});export{k as a};
//# sourceMappingURL=chunk-KDNDJGNC.js.map