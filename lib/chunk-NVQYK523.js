import{forwardRef as i}from"react";import d from"clsx";var l=`@layer components {
  .phantom-button_s9NkO, .phantom-clear_KXf-q {
    background: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    font-size: var(--font-size);
    font-family: var(--font-body);
    padding: var(--space-sm);
    margin: 0;
    border-radius: var(--border-radius);
  }
  .phantom-button_s9NkO {
    --button-size: 40px;
    --button-internal: 24px;
    --button-font: var(--font-size-sm);
    width: auto;
    height: var(--button-size);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-sm);
    font-size: var(--button-font);
    font-weight: normal;
    gap: var(--space-xs);
    transition: background var(--transition-medium), transform var(--transition-medium), box-shadow var(--transition-medium), border-color var(--transition-medium), outline var(--transition-medium), color var(--transition-medium);
    border-radius: var(--border-radius);
    --button-default: var(--color-text);
  }
  .phantom-button_s9NkO.phantom-large_e5RyU {
    --button-size: 64px;
    --button-internal: 40px;
    --button-font: var(--font-size-lg);
  }
  .phantom-button_s9NkO.phantom-small_UXjDS {
    --button-size: 32px;
    --button-internal: 12px;
    --button-font: var(--font-size-xs);
  }
  .phantom-button_s9NkO.phantom-full_pIwjn {
    width: 100%;
  }
  .phantom-button_s9NkO span {
    height: var(--button-internal);
    display: flex;
    align-items: center;
    justify-content: center;
    text-wrap: nowrap;
  }
  .phantom-button_s9NkO svg {
    font-size: var(--button-size);
    width: var(--button-internal);
    height: var(--button-internal);
  }
  .phantom-button_s9NkO.phantom-link_879iq {
    text-decoration: none !important;
  }
  .phantom-button_s9NkO.phantom-rounded_eFqXN {
    border-radius: var(--button-size);
    min-width: var(--button-size);
  }
  .phantom-button_s9NkO.phantom-filled_sn44q {
    background-color: var(--context-color, var(--input-background-color));
    color: var(--context-color-text, var(--button-default));
  }
  .phantom-button_s9NkO.phantom-filled_sn44q:not([disabled], .phantom-disabled_kNCyO):hover {
    background-color: var(--context-color-hover, var(--input-background-color-selected));
  }
  .phantom-button_s9NkO.phantom-filled_sn44q:not([disabled], .phantom-disabled_kNCyO):active {
    background-color: var(--context-color-active, var(--input-background-color-selected));
  }
  .phantom-button_s9NkO.phantom-outline_nXZgl {
    background-color: var(--input-background-color);
    border: 1px solid var(--context-color, var(--input-border-color));
    color: var(--context-color, var(--input-text-color));
  }
  .phantom-button_s9NkO.phantom-outline_nXZgl:not([disabled], .phantom-disabled_kNCyO):hover {
    background-color: var(--input-background-color);
  }
  .phantom-button_s9NkO.phantom-outline_nXZgl:not([disabled], .phantom-disabled_kNCyO):active {
    background-color: var(--input-background-color);
  }
  .phantom-button_s9NkO.phantom-outline_nXZgl:not([disabled], .phantom-disabled_kNCyO):hover {
    border-color: var(--context-color-hover, var(--input-color-active));
  }
  .phantom-button_s9NkO.phantom-outline_nXZgl:not([disabled], .phantom-disabled_kNCyO):active {
    border-color: var(--context-color-active, var(--input-color-active));
  }
  .phantom-button_s9NkO.phantom-outline_nXZgl:not([disabled], .phantom-disabled_kNCyO):hover {
    color: var(--context-color-hover, var(--input-text-color));
  }
  .phantom-button_s9NkO.phantom-outline_nXZgl:not([disabled], .phantom-disabled_kNCyO):active {
    color: var(--context-color-active, var(--input-text-color));
  }
  .phantom-button_s9NkO.phantom-ghost_xkNCW {
    border: none;
    background: transparent;
    color: var(--context-color, var(--input-text-color));
  }
  .phantom-button_s9NkO.phantom-ghost_xkNCW:not([disabled], .phantom-disabled_kNCyO):hover {
    background-color: var(--alpha-contrast);
  }
  .phantom-button_s9NkO.phantom-ghost_xkNCW:not([disabled], .phantom-disabled_kNCyO):active {
    background-color: var(--alpha-contrast);
  }
  .phantom-button_s9NkO.phantom-ghost_xkNCW:not([disabled], .phantom-disabled_kNCyO):hover {
    color: var(--context-color-hover, var(--input-text-color));
  }
  .phantom-button_s9NkO.phantom-ghost_xkNCW:not([disabled], .phantom-disabled_kNCyO):active {
    color: var(--context-color-active, var(--input-text-color));
  }
  .phantom-button_s9NkO.phantom-text_2mhib {
    color: var(--context-color, var(--input-text-color));
  }
  .phantom-button_s9NkO.phantom-text_2mhib:not([disabled], .phantom-disabled_kNCyO):hover {
    color: var(--context-color-hover, var(--input-text-color-soft));
  }
  .phantom-button_s9NkO.phantom-text_2mhib:not([disabled], .phantom-disabled_kNCyO):active {
    color: var(--context-color-active, var(--input-text-color-soft));
  }
  .phantom-button_s9NkO:not([disabled], .phantom-disabled_kNCyO):focus {
    outline: none;
  }
  .phantom-button_s9NkO.phantom-loading_uns7f {
    --button-color: var(--button-default);
    --button-secondary-color: var(--button-default);
    display: grid;
    place-items: center;
  }
  .phantom-button_s9NkO.phantom-loading_uns7f > * {
    grid-row: 1;
    grid-column: 1;
  }
  .phantom-button_s9NkO[disabled], .phantom-button_s9NkO.phantom-disabled_kNCyO {
    background-color: var(--input-background-color-disabled);
    border: none;
    color: var(--input-text-color-disabled) !important;
    cursor: not-allowed;
    filter: brightness(var(--filter-disabled-brightness)) saturate(var(--filter-disabled-saturation));
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(l));var t={button:"phantom-button_s9NkO",clear:"phantom-clear_KXf-q",large:"phantom-large_e5RyU",small:"phantom-small_UXjDS",full:"phantom-full_pIwjn",link:"phantom-link_879iq",rounded:"phantom-rounded_eFqXN",filled:"phantom-filled_sn44q",disabled:"phantom-disabled_kNCyO",outline:"phantom-outline_nXZgl",ghost:"phantom-ghost_xkNCW",text:"phantom-text_2mhib",loading:"phantom-loading_uns7f"};import{jsx as s}from"react/jsx-runtime";var b=i(({className:o,children:n,...a},r)=>{let e=d(t.clear,o);return s("button",{className:e,type:"button",ref:r,...a,children:n})});export{t as a,b};
//# sourceMappingURL=chunk-NVQYK523.js.map