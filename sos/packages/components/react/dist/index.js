// src/common/typography/recipe.css.ts
import { createRuntimeFn as _7a468 } from "@vanilla-extract/recipes/createRuntimeFn";
var typographyRecipe = _7a468({ defaultClassName: "recipe__4ohxzxr sprinkles_fontSize_16_default__s34pwmc sprinkles_fontWeight_400_default__s34pwm16 sprinkles_lineHeight_20_default__s34pwm1o", variantClassNames: { type: { display1: "sprinkles_fontSize_60_default__s34pwm13 sprinkles_lineHeight_72_default__s34pwm2o", display2: "sprinkles_fontSize_40_default__s34pwm10 sprinkles_lineHeight_48_default__s34pwm2l", title1: "sprinkles_fontSize_34_default__s34pwmx sprinkles_lineHeight_41_default__s34pwm2i", title2: "sprinkles_fontSize_28_default__s34pwmu sprinkles_lineHeight_34_default__s34pwm2f", title3: "sprinkles_fontSize_24_default__s34pwmr sprinkles_lineHeight_30_default__s34pwm2c", heading1: "sprinkles_fontSize_22_default__s34pwmo sprinkles_lineHeight_28_default__s34pwm29", heading2: "sprinkles_fontSize_20_default__s34pwml sprinkles_lineHeight_25_default__s34pwm23", headline: "sprinkles_fontSize_18_default__s34pwmi sprinkles_lineHeight_23_default__s34pwm1x", body1: "sprinkles_fontSize_17_default__s34pwmf sprinkles_lineHeight_22_default__s34pwm1u", body2: "sprinkles_fontSize_16_default__s34pwmc sprinkles_lineHeight_21_default__s34pwm1r", body3: "sprinkles_fontSize_15_default__s34pwm9 sprinkles_lineHeight_20_default__s34pwm1o", label: "sprinkles_fontSize_14_default__s34pwm6 sprinkles_lineHeight_19_default__s34pwm1l", footnote: "sprinkles_fontSize_13_default__s34pwm3 sprinkles_lineHeight_18_default__s34pwm1i", caption: "sprinkles_fontSize_12_default__s34pwm0 sprinkles_lineHeight_16_default__s34pwm1f" }, weight: { regular: "sprinkles_fontWeight_400_default__s34pwm16", bold: "sprinkles_fontWeight_600_default__s34pwm19", extraBold: "sprinkles_fontWeight_700_default__s34pwm1c" }, mode: { "default": "recipe_typographyRecipe_mode_default__4ohxzx19", reading: "recipe_typographyRecipe_mode_reading__4ohxzx1a" } }, defaultVariants: {}, compoundVariants: [[{ type: "body1", mode: "reading" }, "sprinkles_lineHeight_28_default__s34pwm29"], [{ type: "body2", mode: "reading" }, "sprinkles_lineHeight_26_default__s34pwm26"], [{ type: "body3", mode: "reading" }, "sprinkles_lineHeight_24_default__s34pwm20"], [{ type: "label", mode: "reading" }, "sprinkles_lineHeight_22_default__s34pwm1u"], [{ type: "display1", weight: "extraBold" }, "sprinkles_fontWeight_700_default__s34pwm1c"], [{ type: "display2", weight: "extraBold" }, "sprinkles_fontWeight_700_default__s34pwm1c"], [{ type: "title1", weight: "extraBold" }, "sprinkles_fontWeight_700_default__s34pwm1c"], [{ type: "title2", weight: "extraBold" }, "sprinkles_fontWeight_700_default__s34pwm1c"], [{ type: "title3", weight: "extraBold" }, "sprinkles_fontWeight_700_default__s34pwm1c"]] });

// src/common/typography/Typography.tsx
import { jsx } from "react/jsx-runtime";
var Typography = ({
  children,
  type = "body1",
  weight = "regular",
  mode = "default",
  className,
  ...props
}) => {
  const textClass = typographyRecipe({ type, weight, mode });
  return /* @__PURE__ */ jsx("span", { className: `${textClass} ${className || ""}`, ...props, children });
};

// src/layout/block/block.css.ts
var blockStyle = "block_blockStyle__1hej2dv0";

// src/layout/block/Block.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Block = () => {
  return /* @__PURE__ */ jsx2("div", { className: blockStyle, children: "Hello" });
};

// src/header/title/Title.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Title = () => {
  return /* @__PURE__ */ jsx3("h1", { children: "Title" });
};
export {
  Block,
  Title,
  Typography
};
//# sourceMappingURL=index.js.map
