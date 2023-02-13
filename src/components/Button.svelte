<script lang="ts">
  import { Stitch } from "../stitches/stitches.config.js";

  export let label = "Button";
  export let backgroundColor = "red";
  export let primary = false;
  export let size = "medium";

  function cssVariables(node, variables) {
    setCssVariables(node, variables);

    return {
      update(variables) {
        setCssVariables(node, variables);
      },
    };
  }

  function setCssVariables(node, variables) {
    for (const name in variables) {
      node.style.setProperty(`--${name}`, variables[name]);
    }
  }

  const buttonStyles: any = Stitch.css({
    backgroundColor: "gainsboro",
    borderRadius: "9999px",
    fontSize: "13px",
    lineHeight: "1",
    fontWeight: 500,
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "16px",
    paddingRight: "16px",
    border: "0",

    // icon subclass
    "& .icon": {
      color: "var(--shadowColor)",
    },

    // Pseudo-class selector
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 25px var(--shadowColor)",
    },
  });

  let props = {
    color: "red",
  };
</script>

<input type="color" bind:value={props.color} />
<button
  class={buttonStyles}
  on:click
  use:cssVariables={{
    backgroundColor,
    primary: primary ? "red" : "blue",
    size: size === "small" ? "10px" : "20px",
    shadowColor: props.color,
  }}
>
  {label}
  <span class="icon">span</span>
</button>
