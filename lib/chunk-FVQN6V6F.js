import{useEffect as l}from"react";import s from"clsx";var c=`@layer components {
  .phantom-page_a5tRD {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .phantom-page_a5tRD > article {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(c));var t={page:"phantom-page_a5tRD"};import{Fragment as f,jsx as d,jsxs as o}from"react/jsx-runtime";var y=({title:e,header:a,footer:n,children:r,className:p,...m})=>{l(()=>{e&&(document.title=e),document.documentElement.scrollTo({top:0,left:0,behavior:"instant"})},[e]);let i=s(t.page,p);return o(f,{children:[a,o("main",{className:i,role:"main",...m,children:[d("article",{children:r}),n]})]})};export{y as a};
//# sourceMappingURL=chunk-FVQN6V6F.js.map