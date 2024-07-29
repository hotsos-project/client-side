"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  classes: () => classes_exports,
  vars: () => variables_exports
});
module.exports = __toCommonJS(src_exports);

// src/variables/index.ts
var variables_exports = {};
__export(variables_exports, {
  color: () => color_exports,
  radius: () => radius_exports,
  shadow: () => shadow_exports,
  spacing: () => spacing_exports,
  typography: () => typography_exports
});

// src/variables/color/index.ts
var color_exports = {};
__export(color_exports, {
  $palette: () => palette_exports,
  $static: () => static_exports
});

// src/variables/color/static/index.ts
var static_exports = {};
__export(static_exports, {
  dark: () => dark_exports,
  light: () => light_exports
});

// src/variables/color/static/light.ts
var light_exports = {};
__export(light_exports, {
  background: () => background,
  blue: () => blue,
  blueGray: () => blueGray,
  color: () => color,
  coolGray: () => coolGray,
  gray: () => gray,
  green: () => green,
  opacityBlack: () => opacityBlack,
  opacityWhite: () => opacityWhite,
  orange: () => orange,
  pink: () => pink,
  text: () => text,
  ui: () => ui
});
var color = {
  black: "#000000",
  white: "#ffffff"
};
var opacityBlack = {
  950: "rgba(0 0 0 / 0.95)",
  900: "rgba(0 0 0 / 0.9)",
  800: "rgba(0 0 0 / 0.8)",
  700: "rgba(0 0 0 / 0.7)",
  600: "rgba(0 0 0 / 0.6)",
  500: "rgba(0 0 0 / 0.5)",
  400: "rgba(0 0 0 / 0.4)",
  300: "rgba(0 0 0 / 0.3)",
  200: "rgba(0 0 0 / 0.2)",
  100: "rgba(0 0 0 / 0.1)",
  50: "rgba(0 0 0 / 0.05)"
};
var opacityWhite = {
  950: "rgba(255 255 255 / 0.95)",
  900: "rgba(255 255 255 / 0.9)",
  800: "rgba(255 255 255 / 0.8)",
  700: "rgba(255 255 255 / 0.7)",
  600: "rgba(255 255 255 / 0.6)",
  500: "rgba(255 255 255 / 0.5)",
  400: "rgba(255 255 255 / 0.4)",
  300: "rgba(255 255 255 / 0.3)",
  200: "rgba(255 255 255 / 0.2)",
  100: "rgba(255 255 255 / 0.1)",
  50: "rgba(255 255 255 / 0.05)"
};
var blue = {
  990: "#000e24",
  950: "#001433",
  900: "#001f4d",
  800: "#002f75",
  700: "#0041a3",
  600: "#0054d1",
  500: "#0066ff",
  400: "#3385ff",
  300: "#66a3ff",
  200: "#99c2ff",
  100: "#cce0ff",
  50: "#e5f0ff",
  10: "#fafcff"
};
var pink = {
  990: "#240004",
  950: "#330005",
  900: "#4d0008",
  800: "#85000d",
  700: "#bd0013",
  600: "#f50019",
  500: "#ff2f44",
  400: "#ff5768",
  300: "#ff808c",
  200: "#ffa8b1",
  100: "#ffccd1",
  50: "#ffe5e8",
  10: "#fffafa"
};
var green = {
  990: "#00240c",
  950: "#003311",
  900: "#004d19",
  800: "#007527",
  700: "#009f36",
  600: "#00c742",
  500: "#00e54d",
  400: "#3ef67b",
  300: "#68f998",
  200: "#9dfbbc",
  100: "#ccffdd",
  50: "#e5ffee",
  10: "#fafffc"
};
var orange = {
  990: "#240d00",
  950: "#331300",
  900: "#4d1c00",
  800: "#752b00",
  700: "#a33c00",
  600: "#d14c00",
  500: "#ff5d00",
  400: "#ff7d33",
  300: "#ff9e66",
  200: "#ffbe99",
  100: "#ffdfcc",
  50: "#ffefe5",
  10: "#fffcfa"
};
var gray = {
  990: "#121212",
  950: "#1a1a1a",
  900: "#262626",
  800: "#3b3b3b",
  700: "#525252",
  600: "#636363",
  500: "#808080",
  400: "#9a9a9a",
  300: "#b3b3b3",
  200: "#cccccc",
  100: "#e6e6e6",
  50: "#f2f2f2",
  10: "#fcfcfc"
};
var coolGray = {
  990: "#101214",
  950: "#171a1d",
  900: "#22252a",
  800: "#353a41",
  700: "#4a515a",
  600: "#5a626d",
  500: "#737e8c",
  400: "#9099a4",
  300: "#abb2bb",
  200: "#c7cbd1",
  100: "#e3e6e9",
  50: "#f1f2f4",
  10: "#fcfcfd"
};
var blueGray = {
  990: "#0e1115",
  950: "#15191f",
  900: "#1f242d",
  800: "#303846",
  700: "#424e62",
  600: "#515e76",
  500: "#677998",
  400: "#8795ad",
  300: "#a5afc1",
  200: "#c2c9d6",
  100: "#e1e5eb",
  50: "#f0f2f5",
  10: "#fcfcfd"
};
var background = {
  normalPrimary: "#ffffff",
  normalSecondary: "#f4f4f5",
  elevatedPrimary: "#ffffff",
  elevatedSecondary: "#f4f4f5"
};
var text = {
  normal: "#1a1a1a",
  assistive: "#808080",
  alternative: "#3b3b3b",
  strong: "#000000"
};
var ui = {
  primaryNormal: "#0066ff",
  accentNormal: "#ffffff",
  stateNormal: "#ffffff"
};

// src/variables/color/static/dark.ts
var dark_exports = {};
__export(dark_exports, {
  background: () => background2,
  blue: () => blue2,
  blueGray: () => blueGray2,
  coolGray: () => coolGray2,
  gray: () => gray2,
  green: () => green2,
  orange: () => orange2,
  pink: () => pink2,
  text: () => text2,
  ui: () => ui2
});
var blue2 = {
  990: "#fafcff",
  950: "#ebf3ff",
  900: "#d1e3ff",
  800: "#a3c8ff",
  700: "#70a9ff",
  600: "#428eff",
  500: "#0f6fff",
  400: "#005ae0",
  300: "#0047b2",
  200: "#003585",
  100: "#002357",
  50: "#00183d",
  10: "#001029"
};
var pink2 = {
  990: "#fffafa",
  950: "#ffebed",
  900: "#ffd1d6",
  800: "#ffb2ba",
  700: "#ff8a96",
  600: "#ff6675",
  500: "#fa4255",
  400: "#f31228",
  300: "#c70519",
  200: "#900412",
  100: "#570009",
  50: "#3d0006",
  10: "#290004"
};
var green2 = {
  990: "#fafffc",
  950: "#ebfff1",
  900: "#d1ffe0",
  800: "#a7fbc3",
  700: "#7bfaa5",
  600: "#4cf684",
  500: "#0ce956",
  400: "#00d146",
  300: "#00ad3b",
  200: "#00852c",
  100: "#00571d",
  50: "#003d14",
  10: "#00290e"
};
var orange2 = {
  990: "#fffcfa",
  950: "#fff2eb",
  900: "#ffe2d1",
  800: "#ffc5a3",
  700: "#ffa470",
  600: "#ff8742",
  500: "#ff670f",
  400: "#e05200",
  300: "#b24100",
  200: "#853000",
  100: "#572000",
  50: "#3d1700",
  10: "#290f00"
};
var gray2 = {
  990: "#fcfcfc",
  950: "#f5f5f5",
  900: "#e8e8e8",
  800: "#d1d1d1",
  700: "#b8b8b8",
  600: "#a1a1a1",
  500: "#878787",
  400: "#6b6b6b",
  300: "#595959",
  200: "#424242",
  100: "#2b2b2b",
  50: "#1f1f1f",
  10: "#141414"
};
var coolGray2 = {
  990: "#fcfcfd",
  950: "#f4f5f6",
  900: "#e6e8ea",
  800: "#cdd0d6",
  700: "#b0b7bf",
  600: "#979faa",
  500: "#7b8693",
  400: "#606a76",
  300: "#505862",
  200: "#3c4149",
  100: "#272b30",
  50: "#1c1e22",
  10: "#121416"
};
var blueGray2 = {
  990: "#fcfcfd",
  950: "#f3f4f7",
  900: "#e4e7ec",
  800: "#c8cfda",
  700: "#aab4c5",
  600: "#8f9cb3",
  500: "#70819e",
  400: "#57667f",
  300: "#48556a",
  200: "#363f4f",
  100: "#232934",
  50: "#191d24",
  10: "#111318"
};
var background2 = {
  normalPrimary: "#18181b",
  normalSecondary: "#101014",
  elevatedPrimary: "#2d2d34",
  elevatedSecondary: "#212126"
};
var text2 = {
  normal: "#fcfcfc",
  assistive: "#878787",
  alternative: "#d1d1d1",
  strong: "#ffffff"
};
var ui2 = {
  primaryNormal: "#0f6fff",
  accentNormal: "#ffffff",
  stateNormal: "#ffffff"
};

// src/variables/color/palette.ts
var palette_exports = {};
__export(palette_exports, {
  background: () => background3,
  blue: () => blue3,
  blueGray: () => blueGray3,
  coolGray: () => coolGray3,
  gray: () => gray3,
  green: () => green3,
  orange: () => orange3,
  pink: () => pink3,
  text: () => text3,
  ui: () => ui3
});
var blue3 = {
  10: "var(--blue-10)",
  50: "var(--blue-50)",
  100: "var(--blue-100)",
  200: "var(--blue-200)",
  300: "var(--blue-300)",
  400: "var(--blue-400)",
  500: "var(--blue-500)",
  600: "var(--blue-600)",
  700: "var(--blue-700)",
  800: "var(--blue-800)",
  900: "var(--blue-900)",
  950: "var(--blue-950)",
  990: "var(--blue-990)"
};
var green3 = {
  10: "var(--green-10)",
  50: "var(--green-50)",
  100: "var(--green-100)",
  200: "var(--green-200)",
  300: "var(--green-300)",
  400: "var(--green-400)",
  500: "var(--green-500)",
  600: "var(--green-600)",
  700: "var(--green-700)",
  800: "var(--green-800)",
  900: "var(--green-900)",
  950: "var(--green-950)",
  990: "var(--green-990)"
};
var pink3 = {
  10: "var(--pink-10)",
  50: "var(--pink-50)",
  100: "var(--pink-100)",
  200: "var(--pink-200)",
  300: "var(--pink-300)",
  400: "var(--pink-400)",
  500: "var(--pink-500)",
  600: "var(--pink-600)",
  700: "var(--pink-700)",
  800: "var(--pink-800)",
  900: "var(--pink-900)",
  950: "var(--pink-950)",
  990: "var(--pink-990)"
};
var orange3 = {
  10: "var(--orange-10)",
  50: "var(--orange-50)",
  100: "var(--orange-100)",
  200: "var(--orange-200)",
  300: "var(--orange-300)",
  400: "var(--orange-400)",
  500: "var(--orange-500)",
  600: "var(--orange-600)",
  700: "var(--orange-700)",
  800: "var(--orange-800)",
  900: "var(--orange-900)",
  950: "var(--orange-950)",
  990: "var(--orange-990)"
};
var gray3 = {
  10: "var(--gray-10)",
  50: "var(--gray-50)",
  100: "var(--gray-100)",
  200: "var(--gray-200)",
  300: "var(--gray-300)",
  400: "var(--gray-400)",
  500: "var(--gray-500)",
  600: "var(--gray-600)",
  700: "var(--gray-700)",
  800: "var(--gray-800)",
  900: "var(--gray-900)",
  950: "var(--gray-950)",
  990: "var(--gray-990)"
};
var coolGray3 = {
  10: "var(--cool-gray-10)",
  50: "var(--cool-gray-50)",
  100: "var(--cool-gray-100)",
  200: "var(--cool-gray-200)",
  300: "var(--cool-gray-300)",
  400: "var(--cool-gray-400)",
  500: "var(--cool-gray-500)",
  600: "var(--cool-gray-600)",
  700: "var(--cool-gray-700)",
  800: "var(--cool-gray-800)",
  900: "var(--cool-gray-900)",
  950: "var(--cool-gray-950)",
  990: "var(--cool-gray-990)"
};
var blueGray3 = {
  10: "var(--blue-gray-10)",
  50: "var(--blue-gray-50)",
  100: "var(--blue-gray-100)",
  200: "var(--blue-gray-200)",
  300: "var(--blue-gray-300)",
  400: "var(--blue-gray-400)",
  500: "var(--blue-gray-500)",
  600: "var(--blue-gray-600)",
  700: "var(--blue-gray-700)",
  800: "var(--blue-gray-800)",
  900: "var(--blue-gray-900)",
  950: "var(--blue-gray-950)",
  990: "var(--blue-gray-990)"
};
var background3 = {
  normalPrimary: "var(--background-normal-primary)",
  normalSecondary: "var(--background-normal-secondary)",
  elevatedPrimary: "var(--background-elevated-primary)",
  elevatedSecondary: "var(--background-elevated-secondary)"
};
var text3 = {
  normal: "var(--text-normal)",
  assistive: "var(--text-assistive)",
  alternative: "var(--text-alternative)",
  strong: "var(--text-strong)"
};
var ui3 = {
  primaryNormal: "var(--ui-primary-normal)",
  accentNormal: "var(--ui-accent-normal)",
  stateNormal: "var(--ui-state-normal)"
};

// src/variables/typography.ts
var typography_exports = {};
__export(typography_exports, {
  fontSize: () => fontSize,
  fontWeight: () => fontWeight,
  lineHeight: () => lineHeight
});
var fontSize = {
  60: "3.75rem",
  40: "2.5rem",
  34: "2.125rem",
  28: "1.75rem",
  24: "1.5rem",
  22: "1.375rem",
  20: "1.25rem",
  18: "1.125rem",
  17: "1.0625rem",
  16: "1rem",
  15: "0.9375rem",
  14: "0.875rem",
  13: "0.8125rem",
  12: "0.75rem"
};
var fontWeight = {
  700: "700",
  600: "600",
  400: "400"
};
var lineHeight = {
  72: "4.5rem",
  48: "3rem",
  41: "2.5625rem",
  34: "2.125rem",
  30: "1.875rem",
  28: "1.75rem",
  26: "1.625rem",
  25: "1.5625rem",
  24: "1.5rem",
  23: "1.4375rem",
  22: "1.375rem",
  21: "1.3125rem",
  20: "1.25rem",
  19: "1.1875rem",
  18: "1.125rem",
  16: "1rem"
};

// src/variables/spacing.ts
var spacing_exports = {};
__export(spacing_exports, {
  spacing: () => spacing
});
var spacing = {
  1: "0.0625rem",
  // 5xs
  2: "0.125rem",
  // 4xs
  4: "0.25rem",
  // 3xs
  6: "0.375rem",
  // 2xs
  8: "0.5rem",
  // xs
  10: "0.625rem",
  // s
  12: "0.75rem",
  // sm
  14: "0.875rem",
  // m
  16: "1rem",
  // base
  18: "1.125rem",
  // ml
  20: "1.25rem",
  // l
  24: "1.5rem",
  // xl
  28: "1.75rem",
  // 2xl
  32: "2rem",
  // 3xl
  36: "2.25rem",
  // 4xl
  40: "2.5rem",
  // 5xl
  44: "2.75rem",
  // 6xl
  48: "3rem",
  // 7xl
  56: "3.5rem",
  // 8xl
  64: "4rem"
  // 9xl
};

// src/variables/radius.ts
var radius_exports = {};
__export(radius_exports, {
  borderRadius: () => borderRadius
});
var borderRadius = {
  none: "0rem",
  // 0px
  xs: "0.125rem",
  // 2px
  s: "0.25rem",
  // 4px
  sm: "0.375rem",
  // 6px
  m: "0.625rem",
  // 10px
  ml: "0.75rem",
  // 12px
  base: "0.5rem",
  // 8px (base)
  l: "1rem",
  // 16px
  xl: "1.5rem",
  // 24px
  "2xl": "2.25rem",
  // 36px
  round: "62.4375rem"
  // 999px (practically full for most elements)
};

// src/variables/shadow.ts
var shadow_exports = {};
__export(shadow_exports, {
  shadow: () => shadow
});
var shadow = {
  xs: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
  s: "0 0 100px 0 rgba(0, 0, 0, 0.1)",
  m: "0 0 32px 0 rgba(0, 0, 0, 0.2)",
  l: "0 10px 100px 0 rgba(0, 0, 0, 0.3)",
  elevatedTop: "0 20px 50px 0 rgba(0, 0, 0, 0.3)"
};

// src/classes/index.ts
var classes_exports = {};
__export(classes_exports, {
  typography: () => typography_exports2
});

// src/classes/typography.ts
var typography_exports2 = {};
__export(typography_exports2, {
  body1: () => body1,
  body2: () => body2,
  body3: () => body3,
  caption: () => caption,
  display1: () => display1,
  display2: () => display2,
  footnote: () => footnote,
  heading1: () => heading1,
  heading2: () => heading2,
  headline: () => headline,
  label: () => label,
  title1: () => title1,
  title2: () => title2,
  title3: () => title3
});
var display1 = {
  regular: {
    fontSize: typography_exports.fontSize[60],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[72]
  },
  bold: {
    fontSize: typography_exports.fontSize[60],
    fontWeight: typography_exports.fontWeight[700],
    lineHeight: typography_exports.lineHeight[72]
  }
};
var display2 = {
  regular: {
    fontSize: typography_exports.fontSize[40],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[48]
  },
  bold: {
    fontSize: typography_exports.fontSize[40],
    fontWeight: typography_exports.fontWeight[700],
    lineHeight: typography_exports.lineHeight[48]
  }
};
var title1 = {
  regular: {
    fontSize: typography_exports.fontSize[34],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[41]
  },
  bold: {
    fontSize: typography_exports.fontSize[34],
    fontWeight: typography_exports.fontWeight[700],
    lineHeight: typography_exports.lineHeight[41]
  }
};
var title2 = {
  regular: {
    fontSize: typography_exports.fontSize[28],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[34]
  },
  bold: {
    fontSize: typography_exports.fontSize[28],
    fontWeight: typography_exports.fontWeight[700],
    lineHeight: typography_exports.lineHeight[34]
  }
};
var title3 = {
  regular: {
    fontSize: typography_exports.fontSize[24],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[30]
  },
  bold: {
    fontSize: typography_exports.fontSize[24],
    fontWeight: typography_exports.fontWeight[700],
    lineHeight: typography_exports.lineHeight[30]
  }
};
var heading1 = {
  regular: {
    fontSize: typography_exports.fontSize[22],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[28]
  },
  bold: {
    fontSize: typography_exports.fontSize[22],
    fontWeight: typography_exports.fontWeight[600],
    lineHeight: typography_exports.lineHeight[28]
  }
};
var heading2 = {
  regular: {
    fontSize: typography_exports.fontSize[20],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[25]
  },
  bold: {
    fontSize: typography_exports.fontSize[20],
    fontWeight: typography_exports.fontWeight[600],
    lineHeight: typography_exports.lineHeight[25]
  }
};
var headline = {
  regular: {
    fontSize: typography_exports.fontSize[18],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[23]
  },
  bold: {
    fontSize: typography_exports.fontSize[18],
    fontWeight: typography_exports.fontWeight[600],
    lineHeight: typography_exports.lineHeight[23]
  }
};
var body1 = {
  regular: {
    fontSize: typography_exports.fontSize[17],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[22]
  },
  bold: {
    fontSize: typography_exports.fontSize[17],
    fontWeight: typography_exports.fontWeight[600],
    lineHeight: typography_exports.lineHeight[22]
  },
  reading: {
    fontSize: typography_exports.fontSize[17],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[28]
  }
};
var body2 = {
  regular: {
    fontSize: typography_exports.fontSize[16],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[21]
  },
  bold: {
    fontSize: typography_exports.fontSize[16],
    fontWeight: typography_exports.fontWeight[600],
    lineHeight: typography_exports.lineHeight[21]
  },
  reading: {
    fontSize: typography_exports.fontSize[16],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[26]
  }
};
var body3 = {
  regular: {
    fontSize: typography_exports.fontSize[15],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[20]
  },
  bold: {
    fontSize: typography_exports.fontSize[15],
    fontWeight: typography_exports.fontWeight[600],
    lineHeight: typography_exports.lineHeight[20]
  },
  reading: {
    fontSize: typography_exports.fontSize[15],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[24]
  }
};
var label = {
  regular: {
    fontSize: typography_exports.fontSize[14],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[19]
  },
  bold: {
    fontSize: typography_exports.fontSize[14],
    fontWeight: typography_exports.fontWeight[600],
    lineHeight: typography_exports.lineHeight[19]
  },
  reading: {
    fontSize: typography_exports.fontSize[14],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[22]
  }
};
var footnote = {
  regular: {
    fontSize: typography_exports.fontSize[13],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[18]
  },
  bold: {
    fontSize: typography_exports.fontSize[13],
    fontWeight: typography_exports.fontWeight[600],
    lineHeight: typography_exports.lineHeight[18]
  }
};
var caption = {
  regular: {
    fontSize: typography_exports.fontSize[12],
    fontWeight: typography_exports.fontWeight[400],
    lineHeight: typography_exports.lineHeight[16]
  },
  bold: {
    fontSize: typography_exports.fontSize[12],
    fontWeight: typography_exports.fontWeight[600],
    lineHeight: typography_exports.lineHeight[16]
  }
};
//# sourceMappingURL=index.cjs.map
