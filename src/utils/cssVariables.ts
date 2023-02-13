/*
  This function enable to use js variables in css, very useful 
  for theming and dynamic styling, just like in react.
  
  Example:
  The component: <div use:cssVariables={{ bgColor: 'red' }} class="bg-class" />
  Style usage: <style> .bg-class { background-color: var(--bgColor); } </style>
*/
export function cssVariables(
  node: HTMLElement,
  variables: CssVariablesObject
): { update(variables: CssVariablesObject): void } {
  setCssVariables(node, variables);

  return {
    update(variables: CssVariablesObject) {
      setCssVariables(node, variables);
    },
  };
}

function setCssVariables(node: HTMLElement, variables: CssVariablesObject) {
  for (const name in variables) {
    node.style.setProperty(`--${name}`, variables[name]);
  }
}

type CssVariablesObject = { [key: string]: string };
