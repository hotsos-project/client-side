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
  Badge: () => Badge,
  Button: () => Button,
  Chips: () => Chips,
  Container: () => Container,
  Headline: () => Headline,
  Icon: () => Icon,
  Input: () => Input,
  InputGroup: () => InputGroup,
  MessageList: () => MessageList,
  Text: () => Text,
  Title: () => Title,
  TopAppBar: () => TopAppBar,
  borderRecipe: () => borderRecipe,
  borderSprinkles: () => borderSprinkles,
  colorSprinkles: () => colorSprinkles,
  layoutSprinkles: () => layoutSprinkles,
  shadowSprinkles: () => shadowSprinkles,
  spacingSprinkles: () => spacingSprinkles,
  typographyRecipe: () => typographyRecipe
});
module.exports = __toCommonJS(src_exports);

// src/style/layout/layoutSprinkles.css.ts
var import_createRuntimeSprinkles = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");
var layoutSprinkles = (0, import_createRuntimeSprinkles.createSprinkles)({ conditions: void 0, styles: { display: { values: { none: { defaultClass: "gzvfb20" }, flex: { defaultClass: "gzvfb21" }, block: { defaultClass: "gzvfb22" }, inline: { defaultClass: "gzvfb23" }, "inline-block": { defaultClass: "gzvfb24" } } }, flexDirection: { values: { row: { defaultClass: "gzvfb25" }, column: { defaultClass: "gzvfb26" } } }, justifyContent: { values: { stretch: { defaultClass: "gzvfb27" }, "flex-start": { defaultClass: "gzvfb28" }, center: { defaultClass: "gzvfb29" }, "flex-end": { defaultClass: "gzvfb2a" }, "space-around": { defaultClass: "gzvfb2b" }, "space-between": { defaultClass: "gzvfb2c" } } }, alignItems: { values: { stretch: { defaultClass: "gzvfb2d" }, "flex-start": { defaultClass: "gzvfb2e" }, center: { defaultClass: "gzvfb2f" }, "flex-end": { defaultClass: "gzvfb2g" } } } } });

// src/style/spacing/spacingSprinkles.css.ts
var import_createRuntimeSprinkles2 = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");
var spacingSprinkles = (0, import_createRuntimeSprinkles2.createSprinkles)({ conditions: void 0, styles: { margin: { mappings: ["marginTop", "marginRight", "marginBottom", "marginLeft"] }, padding: { mappings: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"] }, marginX: { mappings: ["marginLeft", "marginRight"] }, marginY: { mappings: ["marginTop", "marginBottom"] }, paddingX: { mappings: ["paddingLeft", "paddingRight"] }, paddingY: { mappings: ["paddingTop", "paddingBottom"] }, marginTop: { values: { "1": { defaultClass: "q5ki0k0" }, "2": { defaultClass: "q5ki0k1" }, "4": { defaultClass: "q5ki0k2" }, "6": { defaultClass: "q5ki0k3" }, "8": { defaultClass: "q5ki0k4" }, "10": { defaultClass: "q5ki0k5" }, "12": { defaultClass: "q5ki0k6" }, "14": { defaultClass: "q5ki0k7" }, "16": { defaultClass: "q5ki0k8" }, "18": { defaultClass: "q5ki0k9" }, "20": { defaultClass: "q5ki0ka" }, "24": { defaultClass: "q5ki0kb" }, "28": { defaultClass: "q5ki0kc" }, "32": { defaultClass: "q5ki0kd" }, "36": { defaultClass: "q5ki0ke" }, "40": { defaultClass: "q5ki0kf" }, "44": { defaultClass: "q5ki0kg" }, "48": { defaultClass: "q5ki0kh" }, "56": { defaultClass: "q5ki0ki" }, "64": { defaultClass: "q5ki0kj" } } }, marginRight: { values: { "1": { defaultClass: "q5ki0kk" }, "2": { defaultClass: "q5ki0kl" }, "4": { defaultClass: "q5ki0km" }, "6": { defaultClass: "q5ki0kn" }, "8": { defaultClass: "q5ki0ko" }, "10": { defaultClass: "q5ki0kp" }, "12": { defaultClass: "q5ki0kq" }, "14": { defaultClass: "q5ki0kr" }, "16": { defaultClass: "q5ki0ks" }, "18": { defaultClass: "q5ki0kt" }, "20": { defaultClass: "q5ki0ku" }, "24": { defaultClass: "q5ki0kv" }, "28": { defaultClass: "q5ki0kw" }, "32": { defaultClass: "q5ki0kx" }, "36": { defaultClass: "q5ki0ky" }, "40": { defaultClass: "q5ki0kz" }, "44": { defaultClass: "q5ki0k10" }, "48": { defaultClass: "q5ki0k11" }, "56": { defaultClass: "q5ki0k12" }, "64": { defaultClass: "q5ki0k13" } } }, marginBottom: { values: { "1": { defaultClass: "q5ki0k14" }, "2": { defaultClass: "q5ki0k15" }, "4": { defaultClass: "q5ki0k16" }, "6": { defaultClass: "q5ki0k17" }, "8": { defaultClass: "q5ki0k18" }, "10": { defaultClass: "q5ki0k19" }, "12": { defaultClass: "q5ki0k1a" }, "14": { defaultClass: "q5ki0k1b" }, "16": { defaultClass: "q5ki0k1c" }, "18": { defaultClass: "q5ki0k1d" }, "20": { defaultClass: "q5ki0k1e" }, "24": { defaultClass: "q5ki0k1f" }, "28": { defaultClass: "q5ki0k1g" }, "32": { defaultClass: "q5ki0k1h" }, "36": { defaultClass: "q5ki0k1i" }, "40": { defaultClass: "q5ki0k1j" }, "44": { defaultClass: "q5ki0k1k" }, "48": { defaultClass: "q5ki0k1l" }, "56": { defaultClass: "q5ki0k1m" }, "64": { defaultClass: "q5ki0k1n" } } }, marginLeft: { values: { "1": { defaultClass: "q5ki0k1o" }, "2": { defaultClass: "q5ki0k1p" }, "4": { defaultClass: "q5ki0k1q" }, "6": { defaultClass: "q5ki0k1r" }, "8": { defaultClass: "q5ki0k1s" }, "10": { defaultClass: "q5ki0k1t" }, "12": { defaultClass: "q5ki0k1u" }, "14": { defaultClass: "q5ki0k1v" }, "16": { defaultClass: "q5ki0k1w" }, "18": { defaultClass: "q5ki0k1x" }, "20": { defaultClass: "q5ki0k1y" }, "24": { defaultClass: "q5ki0k1z" }, "28": { defaultClass: "q5ki0k20" }, "32": { defaultClass: "q5ki0k21" }, "36": { defaultClass: "q5ki0k22" }, "40": { defaultClass: "q5ki0k23" }, "44": { defaultClass: "q5ki0k24" }, "48": { defaultClass: "q5ki0k25" }, "56": { defaultClass: "q5ki0k26" }, "64": { defaultClass: "q5ki0k27" } } }, paddingTop: { values: { "1": { defaultClass: "q5ki0k28" }, "2": { defaultClass: "q5ki0k29" }, "4": { defaultClass: "q5ki0k2a" }, "6": { defaultClass: "q5ki0k2b" }, "8": { defaultClass: "q5ki0k2c" }, "10": { defaultClass: "q5ki0k2d" }, "12": { defaultClass: "q5ki0k2e" }, "14": { defaultClass: "q5ki0k2f" }, "16": { defaultClass: "q5ki0k2g" }, "18": { defaultClass: "q5ki0k2h" }, "20": { defaultClass: "q5ki0k2i" }, "24": { defaultClass: "q5ki0k2j" }, "28": { defaultClass: "q5ki0k2k" }, "32": { defaultClass: "q5ki0k2l" }, "36": { defaultClass: "q5ki0k2m" }, "40": { defaultClass: "q5ki0k2n" }, "44": { defaultClass: "q5ki0k2o" }, "48": { defaultClass: "q5ki0k2p" }, "56": { defaultClass: "q5ki0k2q" }, "64": { defaultClass: "q5ki0k2r" } } }, paddingRight: { values: { "1": { defaultClass: "q5ki0k2s" }, "2": { defaultClass: "q5ki0k2t" }, "4": { defaultClass: "q5ki0k2u" }, "6": { defaultClass: "q5ki0k2v" }, "8": { defaultClass: "q5ki0k2w" }, "10": { defaultClass: "q5ki0k2x" }, "12": { defaultClass: "q5ki0k2y" }, "14": { defaultClass: "q5ki0k2z" }, "16": { defaultClass: "q5ki0k30" }, "18": { defaultClass: "q5ki0k31" }, "20": { defaultClass: "q5ki0k32" }, "24": { defaultClass: "q5ki0k33" }, "28": { defaultClass: "q5ki0k34" }, "32": { defaultClass: "q5ki0k35" }, "36": { defaultClass: "q5ki0k36" }, "40": { defaultClass: "q5ki0k37" }, "44": { defaultClass: "q5ki0k38" }, "48": { defaultClass: "q5ki0k39" }, "56": { defaultClass: "q5ki0k3a" }, "64": { defaultClass: "q5ki0k3b" } } }, paddingBottom: { values: { "1": { defaultClass: "q5ki0k3c" }, "2": { defaultClass: "q5ki0k3d" }, "4": { defaultClass: "q5ki0k3e" }, "6": { defaultClass: "q5ki0k3f" }, "8": { defaultClass: "q5ki0k3g" }, "10": { defaultClass: "q5ki0k3h" }, "12": { defaultClass: "q5ki0k3i" }, "14": { defaultClass: "q5ki0k3j" }, "16": { defaultClass: "q5ki0k3k" }, "18": { defaultClass: "q5ki0k3l" }, "20": { defaultClass: "q5ki0k3m" }, "24": { defaultClass: "q5ki0k3n" }, "28": { defaultClass: "q5ki0k3o" }, "32": { defaultClass: "q5ki0k3p" }, "36": { defaultClass: "q5ki0k3q" }, "40": { defaultClass: "q5ki0k3r" }, "44": { defaultClass: "q5ki0k3s" }, "48": { defaultClass: "q5ki0k3t" }, "56": { defaultClass: "q5ki0k3u" }, "64": { defaultClass: "q5ki0k3v" } } }, paddingLeft: { values: { "1": { defaultClass: "q5ki0k3w" }, "2": { defaultClass: "q5ki0k3x" }, "4": { defaultClass: "q5ki0k3y" }, "6": { defaultClass: "q5ki0k3z" }, "8": { defaultClass: "q5ki0k40" }, "10": { defaultClass: "q5ki0k41" }, "12": { defaultClass: "q5ki0k42" }, "14": { defaultClass: "q5ki0k43" }, "16": { defaultClass: "q5ki0k44" }, "18": { defaultClass: "q5ki0k45" }, "20": { defaultClass: "q5ki0k46" }, "24": { defaultClass: "q5ki0k47" }, "28": { defaultClass: "q5ki0k48" }, "32": { defaultClass: "q5ki0k49" }, "36": { defaultClass: "q5ki0k4a" }, "40": { defaultClass: "q5ki0k4b" }, "44": { defaultClass: "q5ki0k4c" }, "48": { defaultClass: "q5ki0k4d" }, "56": { defaultClass: "q5ki0k4e" }, "64": { defaultClass: "q5ki0k4f" } } }, gap: { values: { "1": { defaultClass: "q5ki0k4g" }, "2": { defaultClass: "q5ki0k4h" }, "4": { defaultClass: "q5ki0k4i" }, "6": { defaultClass: "q5ki0k4j" }, "8": { defaultClass: "q5ki0k4k" }, "10": { defaultClass: "q5ki0k4l" }, "12": { defaultClass: "q5ki0k4m" }, "14": { defaultClass: "q5ki0k4n" }, "16": { defaultClass: "q5ki0k4o" }, "18": { defaultClass: "q5ki0k4p" }, "20": { defaultClass: "q5ki0k4q" }, "24": { defaultClass: "q5ki0k4r" }, "28": { defaultClass: "q5ki0k4s" }, "32": { defaultClass: "q5ki0k4t" }, "36": { defaultClass: "q5ki0k4u" }, "40": { defaultClass: "q5ki0k4v" }, "44": { defaultClass: "q5ki0k4w" }, "48": { defaultClass: "q5ki0k4x" }, "56": { defaultClass: "q5ki0k4y" }, "64": { defaultClass: "q5ki0k4z" } } }, rowGap: { values: { "1": { defaultClass: "q5ki0k50" }, "2": { defaultClass: "q5ki0k51" }, "4": { defaultClass: "q5ki0k52" }, "6": { defaultClass: "q5ki0k53" }, "8": { defaultClass: "q5ki0k54" }, "10": { defaultClass: "q5ki0k55" }, "12": { defaultClass: "q5ki0k56" }, "14": { defaultClass: "q5ki0k57" }, "16": { defaultClass: "q5ki0k58" }, "18": { defaultClass: "q5ki0k59" }, "20": { defaultClass: "q5ki0k5a" }, "24": { defaultClass: "q5ki0k5b" }, "28": { defaultClass: "q5ki0k5c" }, "32": { defaultClass: "q5ki0k5d" }, "36": { defaultClass: "q5ki0k5e" }, "40": { defaultClass: "q5ki0k5f" }, "44": { defaultClass: "q5ki0k5g" }, "48": { defaultClass: "q5ki0k5h" }, "56": { defaultClass: "q5ki0k5i" }, "64": { defaultClass: "q5ki0k5j" } } }, columnGap: { values: { "1": { defaultClass: "q5ki0k5k" }, "2": { defaultClass: "q5ki0k5l" }, "4": { defaultClass: "q5ki0k5m" }, "6": { defaultClass: "q5ki0k5n" }, "8": { defaultClass: "q5ki0k5o" }, "10": { defaultClass: "q5ki0k5p" }, "12": { defaultClass: "q5ki0k5q" }, "14": { defaultClass: "q5ki0k5r" }, "16": { defaultClass: "q5ki0k5s" }, "18": { defaultClass: "q5ki0k5t" }, "20": { defaultClass: "q5ki0k5u" }, "24": { defaultClass: "q5ki0k5v" }, "28": { defaultClass: "q5ki0k5w" }, "32": { defaultClass: "q5ki0k5x" }, "36": { defaultClass: "q5ki0k5y" }, "40": { defaultClass: "q5ki0k5z" }, "44": { defaultClass: "q5ki0k60" }, "48": { defaultClass: "q5ki0k61" }, "56": { defaultClass: "q5ki0k62" }, "64": { defaultClass: "q5ki0k63" } } } } });

// src/style/color/colorSprinkles.css.ts
var import_createRuntimeSprinkles3 = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");
var colorProperties = { conditions: void 0, styles: { color: { values: { black: { defaultClass: "exp0d70" }, white: { defaultClass: "exp0d71" }, opacityBlack50: { defaultClass: "exp0d72" }, opacityBlack100: { defaultClass: "exp0d73" }, opacityBlack200: { defaultClass: "exp0d74" }, opacityBlack300: { defaultClass: "exp0d75" }, opacityBlack400: { defaultClass: "exp0d76" }, opacityBlack500: { defaultClass: "exp0d77" }, opacityBlack600: { defaultClass: "exp0d78" }, opacityBlack700: { defaultClass: "exp0d79" }, opacityBlack800: { defaultClass: "exp0d7a" }, opacityBlack900: { defaultClass: "exp0d7b" }, opacityBlack950: { defaultClass: "exp0d7c" }, opacityWhite50: { defaultClass: "exp0d7d" }, opacityWhite100: { defaultClass: "exp0d7e" }, opacityWhite200: { defaultClass: "exp0d7f" }, opacityWhite300: { defaultClass: "exp0d7g" }, opacityWhite400: { defaultClass: "exp0d7h" }, opacityWhite500: { defaultClass: "exp0d7i" }, opacityWhite600: { defaultClass: "exp0d7j" }, opacityWhite700: { defaultClass: "exp0d7k" }, opacityWhite800: { defaultClass: "exp0d7l" }, opacityWhite900: { defaultClass: "exp0d7m" }, opacityWhite950: { defaultClass: "exp0d7n" }, blue10: { defaultClass: "exp0d7o" }, blue50: { defaultClass: "exp0d7p" }, blue100: { defaultClass: "exp0d7q" }, blue200: { defaultClass: "exp0d7r" }, blue300: { defaultClass: "exp0d7s" }, blue400: { defaultClass: "exp0d7t" }, blue500: { defaultClass: "exp0d7u" }, blue600: { defaultClass: "exp0d7v" }, blue700: { defaultClass: "exp0d7w" }, blue800: { defaultClass: "exp0d7x" }, blue900: { defaultClass: "exp0d7y" }, blue950: { defaultClass: "exp0d7z" }, blue990: { defaultClass: "exp0d710" }, green10: { defaultClass: "exp0d711" }, green50: { defaultClass: "exp0d712" }, green100: { defaultClass: "exp0d713" }, green200: { defaultClass: "exp0d714" }, green300: { defaultClass: "exp0d715" }, green400: { defaultClass: "exp0d716" }, green500: { defaultClass: "exp0d717" }, green600: { defaultClass: "exp0d718" }, green700: { defaultClass: "exp0d719" }, green800: { defaultClass: "exp0d71a" }, green900: { defaultClass: "exp0d71b" }, green950: { defaultClass: "exp0d71c" }, green990: { defaultClass: "exp0d71d" }, pink10: { defaultClass: "exp0d71e" }, pink50: { defaultClass: "exp0d71f" }, pink100: { defaultClass: "exp0d71g" }, pink200: { defaultClass: "exp0d71h" }, pink300: { defaultClass: "exp0d71i" }, pink400: { defaultClass: "exp0d71j" }, pink500: { defaultClass: "exp0d71k" }, pink600: { defaultClass: "exp0d71l" }, pink700: { defaultClass: "exp0d71m" }, pink800: { defaultClass: "exp0d71n" }, pink900: { defaultClass: "exp0d71o" }, pink950: { defaultClass: "exp0d71p" }, pink990: { defaultClass: "exp0d71q" }, orange10: { defaultClass: "exp0d71r" }, orange50: { defaultClass: "exp0d71s" }, orange100: { defaultClass: "exp0d71t" }, orange200: { defaultClass: "exp0d71u" }, orange300: { defaultClass: "exp0d71v" }, orange400: { defaultClass: "exp0d71w" }, orange500: { defaultClass: "exp0d71x" }, orange600: { defaultClass: "exp0d71y" }, orange700: { defaultClass: "exp0d71z" }, orange800: { defaultClass: "exp0d720" }, orange900: { defaultClass: "exp0d721" }, orange950: { defaultClass: "exp0d722" }, orange990: { defaultClass: "exp0d723" }, gray10: { defaultClass: "exp0d724" }, gray50: { defaultClass: "exp0d725" }, gray100: { defaultClass: "exp0d726" }, gray200: { defaultClass: "exp0d727" }, gray300: { defaultClass: "exp0d728" }, gray400: { defaultClass: "exp0d729" }, gray500: { defaultClass: "exp0d72a" }, gray600: { defaultClass: "exp0d72b" }, gray700: { defaultClass: "exp0d72c" }, gray800: { defaultClass: "exp0d72d" }, gray900: { defaultClass: "exp0d72e" }, gray950: { defaultClass: "exp0d72f" }, gray990: { defaultClass: "exp0d72g" }, coolGray10: { defaultClass: "exp0d72h" }, coolGray50: { defaultClass: "exp0d72i" }, coolGray100: { defaultClass: "exp0d72j" }, coolGray200: { defaultClass: "exp0d72k" }, coolGray300: { defaultClass: "exp0d72l" }, coolGray400: { defaultClass: "exp0d72m" }, coolGray500: { defaultClass: "exp0d72n" }, coolGray600: { defaultClass: "exp0d72o" }, coolGray700: { defaultClass: "exp0d72p" }, coolGray800: { defaultClass: "exp0d72q" }, coolGray900: { defaultClass: "exp0d72r" }, coolGray950: { defaultClass: "exp0d72s" }, coolGray990: { defaultClass: "exp0d72t" }, blueGray10: { defaultClass: "exp0d72u" }, blueGray50: { defaultClass: "exp0d72v" }, blueGray100: { defaultClass: "exp0d72w" }, blueGray200: { defaultClass: "exp0d72x" }, blueGray300: { defaultClass: "exp0d72y" }, blueGray400: { defaultClass: "exp0d72z" }, blueGray500: { defaultClass: "exp0d730" }, blueGray600: { defaultClass: "exp0d731" }, blueGray700: { defaultClass: "exp0d732" }, blueGray800: { defaultClass: "exp0d733" }, blueGray900: { defaultClass: "exp0d734" }, blueGray950: { defaultClass: "exp0d735" }, blueGray990: { defaultClass: "exp0d736" }, backgroundNormalPrimary: { defaultClass: "exp0d737" }, backgroundNormalSecondary: { defaultClass: "exp0d738" }, backgroundElevatedPrimary: { defaultClass: "exp0d739" }, backgroundElevatedSecondary: { defaultClass: "exp0d73a" }, textNormal: { defaultClass: "exp0d73b" }, textAssistive: { defaultClass: "exp0d73c" }, textAlternative: { defaultClass: "exp0d73d" }, textStrong: { defaultClass: "exp0d73e" }, uiPrimaryNormal: { defaultClass: "exp0d73f" }, uiAccentNormal: { defaultClass: "exp0d73g" }, uiStateNormal: { defaultClass: "exp0d73h" } } }, backgroundColor: { values: { black: { defaultClass: "exp0d73i" }, white: { defaultClass: "exp0d73j" }, opacityBlack50: { defaultClass: "exp0d73k" }, opacityBlack100: { defaultClass: "exp0d73l" }, opacityBlack200: { defaultClass: "exp0d73m" }, opacityBlack300: { defaultClass: "exp0d73n" }, opacityBlack400: { defaultClass: "exp0d73o" }, opacityBlack500: { defaultClass: "exp0d73p" }, opacityBlack600: { defaultClass: "exp0d73q" }, opacityBlack700: { defaultClass: "exp0d73r" }, opacityBlack800: { defaultClass: "exp0d73s" }, opacityBlack900: { defaultClass: "exp0d73t" }, opacityBlack950: { defaultClass: "exp0d73u" }, opacityWhite50: { defaultClass: "exp0d73v" }, opacityWhite100: { defaultClass: "exp0d73w" }, opacityWhite200: { defaultClass: "exp0d73x" }, opacityWhite300: { defaultClass: "exp0d73y" }, opacityWhite400: { defaultClass: "exp0d73z" }, opacityWhite500: { defaultClass: "exp0d740" }, opacityWhite600: { defaultClass: "exp0d741" }, opacityWhite700: { defaultClass: "exp0d742" }, opacityWhite800: { defaultClass: "exp0d743" }, opacityWhite900: { defaultClass: "exp0d744" }, opacityWhite950: { defaultClass: "exp0d745" }, blue10: { defaultClass: "exp0d746" }, blue50: { defaultClass: "exp0d747" }, blue100: { defaultClass: "exp0d748" }, blue200: { defaultClass: "exp0d749" }, blue300: { defaultClass: "exp0d74a" }, blue400: { defaultClass: "exp0d74b" }, blue500: { defaultClass: "exp0d74c" }, blue600: { defaultClass: "exp0d74d" }, blue700: { defaultClass: "exp0d74e" }, blue800: { defaultClass: "exp0d74f" }, blue900: { defaultClass: "exp0d74g" }, blue950: { defaultClass: "exp0d74h" }, blue990: { defaultClass: "exp0d74i" }, green10: { defaultClass: "exp0d74j" }, green50: { defaultClass: "exp0d74k" }, green100: { defaultClass: "exp0d74l" }, green200: { defaultClass: "exp0d74m" }, green300: { defaultClass: "exp0d74n" }, green400: { defaultClass: "exp0d74o" }, green500: { defaultClass: "exp0d74p" }, green600: { defaultClass: "exp0d74q" }, green700: { defaultClass: "exp0d74r" }, green800: { defaultClass: "exp0d74s" }, green900: { defaultClass: "exp0d74t" }, green950: { defaultClass: "exp0d74u" }, green990: { defaultClass: "exp0d74v" }, pink10: { defaultClass: "exp0d74w" }, pink50: { defaultClass: "exp0d74x" }, pink100: { defaultClass: "exp0d74y" }, pink200: { defaultClass: "exp0d74z" }, pink300: { defaultClass: "exp0d750" }, pink400: { defaultClass: "exp0d751" }, pink500: { defaultClass: "exp0d752" }, pink600: { defaultClass: "exp0d753" }, pink700: { defaultClass: "exp0d754" }, pink800: { defaultClass: "exp0d755" }, pink900: { defaultClass: "exp0d756" }, pink950: { defaultClass: "exp0d757" }, pink990: { defaultClass: "exp0d758" }, orange10: { defaultClass: "exp0d759" }, orange50: { defaultClass: "exp0d75a" }, orange100: { defaultClass: "exp0d75b" }, orange200: { defaultClass: "exp0d75c" }, orange300: { defaultClass: "exp0d75d" }, orange400: { defaultClass: "exp0d75e" }, orange500: { defaultClass: "exp0d75f" }, orange600: { defaultClass: "exp0d75g" }, orange700: { defaultClass: "exp0d75h" }, orange800: { defaultClass: "exp0d75i" }, orange900: { defaultClass: "exp0d75j" }, orange950: { defaultClass: "exp0d75k" }, orange990: { defaultClass: "exp0d75l" }, gray10: { defaultClass: "exp0d75m" }, gray50: { defaultClass: "exp0d75n" }, gray100: { defaultClass: "exp0d75o" }, gray200: { defaultClass: "exp0d75p" }, gray300: { defaultClass: "exp0d75q" }, gray400: { defaultClass: "exp0d75r" }, gray500: { defaultClass: "exp0d75s" }, gray600: { defaultClass: "exp0d75t" }, gray700: { defaultClass: "exp0d75u" }, gray800: { defaultClass: "exp0d75v" }, gray900: { defaultClass: "exp0d75w" }, gray950: { defaultClass: "exp0d75x" }, gray990: { defaultClass: "exp0d75y" }, coolGray10: { defaultClass: "exp0d75z" }, coolGray50: { defaultClass: "exp0d760" }, coolGray100: { defaultClass: "exp0d761" }, coolGray200: { defaultClass: "exp0d762" }, coolGray300: { defaultClass: "exp0d763" }, coolGray400: { defaultClass: "exp0d764" }, coolGray500: { defaultClass: "exp0d765" }, coolGray600: { defaultClass: "exp0d766" }, coolGray700: { defaultClass: "exp0d767" }, coolGray800: { defaultClass: "exp0d768" }, coolGray900: { defaultClass: "exp0d769" }, coolGray950: { defaultClass: "exp0d76a" }, coolGray990: { defaultClass: "exp0d76b" }, blueGray10: { defaultClass: "exp0d76c" }, blueGray50: { defaultClass: "exp0d76d" }, blueGray100: { defaultClass: "exp0d76e" }, blueGray200: { defaultClass: "exp0d76f" }, blueGray300: { defaultClass: "exp0d76g" }, blueGray400: { defaultClass: "exp0d76h" }, blueGray500: { defaultClass: "exp0d76i" }, blueGray600: { defaultClass: "exp0d76j" }, blueGray700: { defaultClass: "exp0d76k" }, blueGray800: { defaultClass: "exp0d76l" }, blueGray900: { defaultClass: "exp0d76m" }, blueGray950: { defaultClass: "exp0d76n" }, blueGray990: { defaultClass: "exp0d76o" }, backgroundNormalPrimary: { defaultClass: "exp0d76p" }, backgroundNormalSecondary: { defaultClass: "exp0d76q" }, backgroundElevatedPrimary: { defaultClass: "exp0d76r" }, backgroundElevatedSecondary: { defaultClass: "exp0d76s" }, textNormal: { defaultClass: "exp0d76t" }, textAssistive: { defaultClass: "exp0d76u" }, textAlternative: { defaultClass: "exp0d76v" }, textStrong: { defaultClass: "exp0d76w" }, uiPrimaryNormal: { defaultClass: "exp0d76x" }, uiAccentNormal: { defaultClass: "exp0d76y" }, uiStateNormal: { defaultClass: "exp0d76z" } } } } };
var colorSprinkles = (0, import_createRuntimeSprinkles3.createSprinkles)(colorProperties);

// src/style/typography/typographyRecipes.css.ts
var import_createRuntimeFn = require("@vanilla-extract/recipes/createRuntimeFn");
var typographyRecipe = (0, import_createRuntimeFn.createRuntimeFn)({ defaultClassName: "ep2f9v0", variantClassNames: { textType: { display1: "ep2f9v1", display2: "ep2f9v2", title1: "ep2f9v3", title2: "ep2f9v4", title3: "ep2f9v5", heading1: "ep2f9v6", heading2: "ep2f9v7", headline: "ep2f9v8", body1: "ep2f9v9", body2: "ep2f9va", body3: "ep2f9vb", label: "ep2f9vc", footnote: "ep2f9vd", caption: "ep2f9ve" }, textMode: { "default": "ep2f9vf", reading: "ep2f9vg", bold: "ep2f9vh" } }, defaultVariants: {}, compoundVariants: [[{ textType: "body1", textMode: "reading" }, "ep2f9vi"], [{ textType: "body2", textMode: "reading" }, "ep2f9vj"], [{ textType: "body3", textMode: "reading" }, "ep2f9vk"], [{ textType: "label", textMode: "reading" }, "ep2f9vl"], [{ textType: "display1", textMode: "bold" }, "ep2f9vm"], [{ textType: "display2", textMode: "bold" }, "ep2f9vn"], [{ textType: "title1", textMode: "bold" }, "ep2f9vo"], [{ textType: "title2", textMode: "bold" }, "ep2f9vp"], [{ textType: "title3", textMode: "bold" }, "ep2f9vq"], [{ textType: "body1", textMode: "bold" }, "ep2f9vr"], [{ textType: "body2", textMode: "bold" }, "ep2f9vs"], [{ textType: "body3", textMode: "bold" }, "ep2f9vt"], [{ textType: "caption", textMode: "bold" }, "ep2f9vu"], [{ textType: "footnote", textMode: "bold" }, "ep2f9vv"], [{ textType: "heading1", textMode: "bold" }, "ep2f9vw"], [{ textType: "heading2", textMode: "bold" }, "ep2f9vx"], [{ textType: "headline", textMode: "bold" }, "ep2f9vy"], [{ textType: "label", textMode: "bold" }, "ep2f9vz"]] });

// src/style/border/borderSprinkles.css.ts
var import_createRuntimeSprinkles4 = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");
var borderSprinkles = (0, import_createRuntimeSprinkles4.createSprinkles)({ conditions: void 0, styles: { borderColor: { values: { black: { defaultClass: "_169vsuk0" }, white: { defaultClass: "_169vsuk1" }, opacityBlack50: { defaultClass: "_169vsuk2" }, opacityBlack100: { defaultClass: "_169vsuk3" }, opacityBlack200: { defaultClass: "_169vsuk4" }, opacityBlack300: { defaultClass: "_169vsuk5" }, opacityBlack400: { defaultClass: "_169vsuk6" }, opacityBlack500: { defaultClass: "_169vsuk7" }, opacityBlack600: { defaultClass: "_169vsuk8" }, opacityBlack700: { defaultClass: "_169vsuk9" }, opacityBlack800: { defaultClass: "_169vsuka" }, opacityBlack900: { defaultClass: "_169vsukb" }, opacityBlack950: { defaultClass: "_169vsukc" }, opacityWhite50: { defaultClass: "_169vsukd" }, opacityWhite100: { defaultClass: "_169vsuke" }, opacityWhite200: { defaultClass: "_169vsukf" }, opacityWhite300: { defaultClass: "_169vsukg" }, opacityWhite400: { defaultClass: "_169vsukh" }, opacityWhite500: { defaultClass: "_169vsuki" }, opacityWhite600: { defaultClass: "_169vsukj" }, opacityWhite700: { defaultClass: "_169vsukk" }, opacityWhite800: { defaultClass: "_169vsukl" }, opacityWhite900: { defaultClass: "_169vsukm" }, opacityWhite950: { defaultClass: "_169vsukn" }, blue10: { defaultClass: "_169vsuko" }, blue50: { defaultClass: "_169vsukp" }, blue100: { defaultClass: "_169vsukq" }, blue200: { defaultClass: "_169vsukr" }, blue300: { defaultClass: "_169vsuks" }, blue400: { defaultClass: "_169vsukt" }, blue500: { defaultClass: "_169vsuku" }, blue600: { defaultClass: "_169vsukv" }, blue700: { defaultClass: "_169vsukw" }, blue800: { defaultClass: "_169vsukx" }, blue900: { defaultClass: "_169vsuky" }, blue950: { defaultClass: "_169vsukz" }, blue990: { defaultClass: "_169vsuk10" }, green10: { defaultClass: "_169vsuk11" }, green50: { defaultClass: "_169vsuk12" }, green100: { defaultClass: "_169vsuk13" }, green200: { defaultClass: "_169vsuk14" }, green300: { defaultClass: "_169vsuk15" }, green400: { defaultClass: "_169vsuk16" }, green500: { defaultClass: "_169vsuk17" }, green600: { defaultClass: "_169vsuk18" }, green700: { defaultClass: "_169vsuk19" }, green800: { defaultClass: "_169vsuk1a" }, green900: { defaultClass: "_169vsuk1b" }, green950: { defaultClass: "_169vsuk1c" }, green990: { defaultClass: "_169vsuk1d" }, pink10: { defaultClass: "_169vsuk1e" }, pink50: { defaultClass: "_169vsuk1f" }, pink100: { defaultClass: "_169vsuk1g" }, pink200: { defaultClass: "_169vsuk1h" }, pink300: { defaultClass: "_169vsuk1i" }, pink400: { defaultClass: "_169vsuk1j" }, pink500: { defaultClass: "_169vsuk1k" }, pink600: { defaultClass: "_169vsuk1l" }, pink700: { defaultClass: "_169vsuk1m" }, pink800: { defaultClass: "_169vsuk1n" }, pink900: { defaultClass: "_169vsuk1o" }, pink950: { defaultClass: "_169vsuk1p" }, pink990: { defaultClass: "_169vsuk1q" }, orange10: { defaultClass: "_169vsuk1r" }, orange50: { defaultClass: "_169vsuk1s" }, orange100: { defaultClass: "_169vsuk1t" }, orange200: { defaultClass: "_169vsuk1u" }, orange300: { defaultClass: "_169vsuk1v" }, orange400: { defaultClass: "_169vsuk1w" }, orange500: { defaultClass: "_169vsuk1x" }, orange600: { defaultClass: "_169vsuk1y" }, orange700: { defaultClass: "_169vsuk1z" }, orange800: { defaultClass: "_169vsuk20" }, orange900: { defaultClass: "_169vsuk21" }, orange950: { defaultClass: "_169vsuk22" }, orange990: { defaultClass: "_169vsuk23" }, gray10: { defaultClass: "_169vsuk24" }, gray50: { defaultClass: "_169vsuk25" }, gray100: { defaultClass: "_169vsuk26" }, gray200: { defaultClass: "_169vsuk27" }, gray300: { defaultClass: "_169vsuk28" }, gray400: { defaultClass: "_169vsuk29" }, gray500: { defaultClass: "_169vsuk2a" }, gray600: { defaultClass: "_169vsuk2b" }, gray700: { defaultClass: "_169vsuk2c" }, gray800: { defaultClass: "_169vsuk2d" }, gray900: { defaultClass: "_169vsuk2e" }, gray950: { defaultClass: "_169vsuk2f" }, gray990: { defaultClass: "_169vsuk2g" }, coolGray10: { defaultClass: "_169vsuk2h" }, coolGray50: { defaultClass: "_169vsuk2i" }, coolGray100: { defaultClass: "_169vsuk2j" }, coolGray200: { defaultClass: "_169vsuk2k" }, coolGray300: { defaultClass: "_169vsuk2l" }, coolGray400: { defaultClass: "_169vsuk2m" }, coolGray500: { defaultClass: "_169vsuk2n" }, coolGray600: { defaultClass: "_169vsuk2o" }, coolGray700: { defaultClass: "_169vsuk2p" }, coolGray800: { defaultClass: "_169vsuk2q" }, coolGray900: { defaultClass: "_169vsuk2r" }, coolGray950: { defaultClass: "_169vsuk2s" }, coolGray990: { defaultClass: "_169vsuk2t" }, blueGray10: { defaultClass: "_169vsuk2u" }, blueGray50: { defaultClass: "_169vsuk2v" }, blueGray100: { defaultClass: "_169vsuk2w" }, blueGray200: { defaultClass: "_169vsuk2x" }, blueGray300: { defaultClass: "_169vsuk2y" }, blueGray400: { defaultClass: "_169vsuk2z" }, blueGray500: { defaultClass: "_169vsuk30" }, blueGray600: { defaultClass: "_169vsuk31" }, blueGray700: { defaultClass: "_169vsuk32" }, blueGray800: { defaultClass: "_169vsuk33" }, blueGray900: { defaultClass: "_169vsuk34" }, blueGray950: { defaultClass: "_169vsuk35" }, blueGray990: { defaultClass: "_169vsuk36" }, backgroundNormalPrimary: { defaultClass: "_169vsuk37" }, backgroundNormalSecondary: { defaultClass: "_169vsuk38" }, backgroundElevatedPrimary: { defaultClass: "_169vsuk39" }, backgroundElevatedSecondary: { defaultClass: "_169vsuk3a" }, textNormal: { defaultClass: "_169vsuk3b" }, textAssistive: { defaultClass: "_169vsuk3c" }, textAlternative: { defaultClass: "_169vsuk3d" }, textStrong: { defaultClass: "_169vsuk3e" }, uiPrimaryNormal: { defaultClass: "_169vsuk3f" }, uiAccentNormal: { defaultClass: "_169vsuk3g" }, uiStateNormal: { defaultClass: "_169vsuk3h" } } }, borderRadius: { values: { none: { defaultClass: "_169vsuk3i" }, xs: { defaultClass: "_169vsuk3j" }, s: { defaultClass: "_169vsuk3k" }, sm: { defaultClass: "_169vsuk3l" }, m: { defaultClass: "_169vsuk3m" }, ml: { defaultClass: "_169vsuk3n" }, base: { defaultClass: "_169vsuk3o" }, l: { defaultClass: "_169vsuk3p" }, xl: { defaultClass: "_169vsuk3q" }, "2xl": { defaultClass: "_169vsuk3r" }, round: { defaultClass: "_169vsuk3s" } } }, borderStyle: { values: { none: { defaultClass: "_169vsuk3t" }, solid: { defaultClass: "_169vsuk3u" }, dashed: { defaultClass: "_169vsuk3v" }, dotted: { defaultClass: "_169vsuk3w" }, "double": { defaultClass: "_169vsuk3x" } } }, borderWidth: { values: { "1": { defaultClass: "_169vsuk3y" }, "2": { defaultClass: "_169vsuk3z" }, "4": { defaultClass: "_169vsuk40" }, "6": { defaultClass: "_169vsuk41" }, "8": { defaultClass: "_169vsuk42" }, "10": { defaultClass: "_169vsuk43" }, "12": { defaultClass: "_169vsuk44" }, "14": { defaultClass: "_169vsuk45" }, "16": { defaultClass: "_169vsuk46" }, "18": { defaultClass: "_169vsuk47" }, "20": { defaultClass: "_169vsuk48" }, "24": { defaultClass: "_169vsuk49" }, "28": { defaultClass: "_169vsuk4a" }, "32": { defaultClass: "_169vsuk4b" }, "36": { defaultClass: "_169vsuk4c" }, "40": { defaultClass: "_169vsuk4d" }, "44": { defaultClass: "_169vsuk4e" }, "48": { defaultClass: "_169vsuk4f" }, "56": { defaultClass: "_169vsuk4g" }, "64": { defaultClass: "_169vsuk4h" } } }, borderBottomColor: { values: { black: { defaultClass: "_169vsuk4i" }, white: { defaultClass: "_169vsuk4j" }, opacityBlack50: { defaultClass: "_169vsuk4k" }, opacityBlack100: { defaultClass: "_169vsuk4l" }, opacityBlack200: { defaultClass: "_169vsuk4m" }, opacityBlack300: { defaultClass: "_169vsuk4n" }, opacityBlack400: { defaultClass: "_169vsuk4o" }, opacityBlack500: { defaultClass: "_169vsuk4p" }, opacityBlack600: { defaultClass: "_169vsuk4q" }, opacityBlack700: { defaultClass: "_169vsuk4r" }, opacityBlack800: { defaultClass: "_169vsuk4s" }, opacityBlack900: { defaultClass: "_169vsuk4t" }, opacityBlack950: { defaultClass: "_169vsuk4u" }, opacityWhite50: { defaultClass: "_169vsuk4v" }, opacityWhite100: { defaultClass: "_169vsuk4w" }, opacityWhite200: { defaultClass: "_169vsuk4x" }, opacityWhite300: { defaultClass: "_169vsuk4y" }, opacityWhite400: { defaultClass: "_169vsuk4z" }, opacityWhite500: { defaultClass: "_169vsuk50" }, opacityWhite600: { defaultClass: "_169vsuk51" }, opacityWhite700: { defaultClass: "_169vsuk52" }, opacityWhite800: { defaultClass: "_169vsuk53" }, opacityWhite900: { defaultClass: "_169vsuk54" }, opacityWhite950: { defaultClass: "_169vsuk55" }, blue10: { defaultClass: "_169vsuk56" }, blue50: { defaultClass: "_169vsuk57" }, blue100: { defaultClass: "_169vsuk58" }, blue200: { defaultClass: "_169vsuk59" }, blue300: { defaultClass: "_169vsuk5a" }, blue400: { defaultClass: "_169vsuk5b" }, blue500: { defaultClass: "_169vsuk5c" }, blue600: { defaultClass: "_169vsuk5d" }, blue700: { defaultClass: "_169vsuk5e" }, blue800: { defaultClass: "_169vsuk5f" }, blue900: { defaultClass: "_169vsuk5g" }, blue950: { defaultClass: "_169vsuk5h" }, blue990: { defaultClass: "_169vsuk5i" }, green10: { defaultClass: "_169vsuk5j" }, green50: { defaultClass: "_169vsuk5k" }, green100: { defaultClass: "_169vsuk5l" }, green200: { defaultClass: "_169vsuk5m" }, green300: { defaultClass: "_169vsuk5n" }, green400: { defaultClass: "_169vsuk5o" }, green500: { defaultClass: "_169vsuk5p" }, green600: { defaultClass: "_169vsuk5q" }, green700: { defaultClass: "_169vsuk5r" }, green800: { defaultClass: "_169vsuk5s" }, green900: { defaultClass: "_169vsuk5t" }, green950: { defaultClass: "_169vsuk5u" }, green990: { defaultClass: "_169vsuk5v" }, pink10: { defaultClass: "_169vsuk5w" }, pink50: { defaultClass: "_169vsuk5x" }, pink100: { defaultClass: "_169vsuk5y" }, pink200: { defaultClass: "_169vsuk5z" }, pink300: { defaultClass: "_169vsuk60" }, pink400: { defaultClass: "_169vsuk61" }, pink500: { defaultClass: "_169vsuk62" }, pink600: { defaultClass: "_169vsuk63" }, pink700: { defaultClass: "_169vsuk64" }, pink800: { defaultClass: "_169vsuk65" }, pink900: { defaultClass: "_169vsuk66" }, pink950: { defaultClass: "_169vsuk67" }, pink990: { defaultClass: "_169vsuk68" }, orange10: { defaultClass: "_169vsuk69" }, orange50: { defaultClass: "_169vsuk6a" }, orange100: { defaultClass: "_169vsuk6b" }, orange200: { defaultClass: "_169vsuk6c" }, orange300: { defaultClass: "_169vsuk6d" }, orange400: { defaultClass: "_169vsuk6e" }, orange500: { defaultClass: "_169vsuk6f" }, orange600: { defaultClass: "_169vsuk6g" }, orange700: { defaultClass: "_169vsuk6h" }, orange800: { defaultClass: "_169vsuk6i" }, orange900: { defaultClass: "_169vsuk6j" }, orange950: { defaultClass: "_169vsuk6k" }, orange990: { defaultClass: "_169vsuk6l" }, gray10: { defaultClass: "_169vsuk6m" }, gray50: { defaultClass: "_169vsuk6n" }, gray100: { defaultClass: "_169vsuk6o" }, gray200: { defaultClass: "_169vsuk6p" }, gray300: { defaultClass: "_169vsuk6q" }, gray400: { defaultClass: "_169vsuk6r" }, gray500: { defaultClass: "_169vsuk6s" }, gray600: { defaultClass: "_169vsuk6t" }, gray700: { defaultClass: "_169vsuk6u" }, gray800: { defaultClass: "_169vsuk6v" }, gray900: { defaultClass: "_169vsuk6w" }, gray950: { defaultClass: "_169vsuk6x" }, gray990: { defaultClass: "_169vsuk6y" }, coolGray10: { defaultClass: "_169vsuk6z" }, coolGray50: { defaultClass: "_169vsuk70" }, coolGray100: { defaultClass: "_169vsuk71" }, coolGray200: { defaultClass: "_169vsuk72" }, coolGray300: { defaultClass: "_169vsuk73" }, coolGray400: { defaultClass: "_169vsuk74" }, coolGray500: { defaultClass: "_169vsuk75" }, coolGray600: { defaultClass: "_169vsuk76" }, coolGray700: { defaultClass: "_169vsuk77" }, coolGray800: { defaultClass: "_169vsuk78" }, coolGray900: { defaultClass: "_169vsuk79" }, coolGray950: { defaultClass: "_169vsuk7a" }, coolGray990: { defaultClass: "_169vsuk7b" }, blueGray10: { defaultClass: "_169vsuk7c" }, blueGray50: { defaultClass: "_169vsuk7d" }, blueGray100: { defaultClass: "_169vsuk7e" }, blueGray200: { defaultClass: "_169vsuk7f" }, blueGray300: { defaultClass: "_169vsuk7g" }, blueGray400: { defaultClass: "_169vsuk7h" }, blueGray500: { defaultClass: "_169vsuk7i" }, blueGray600: { defaultClass: "_169vsuk7j" }, blueGray700: { defaultClass: "_169vsuk7k" }, blueGray800: { defaultClass: "_169vsuk7l" }, blueGray900: { defaultClass: "_169vsuk7m" }, blueGray950: { defaultClass: "_169vsuk7n" }, blueGray990: { defaultClass: "_169vsuk7o" }, backgroundNormalPrimary: { defaultClass: "_169vsuk7p" }, backgroundNormalSecondary: { defaultClass: "_169vsuk7q" }, backgroundElevatedPrimary: { defaultClass: "_169vsuk7r" }, backgroundElevatedSecondary: { defaultClass: "_169vsuk7s" }, textNormal: { defaultClass: "_169vsuk7t" }, textAssistive: { defaultClass: "_169vsuk7u" }, textAlternative: { defaultClass: "_169vsuk7v" }, textStrong: { defaultClass: "_169vsuk7w" }, uiPrimaryNormal: { defaultClass: "_169vsuk7x" }, uiAccentNormal: { defaultClass: "_169vsuk7y" }, uiStateNormal: { defaultClass: "_169vsuk7z" } } }, borderLeftColor: { values: { black: { defaultClass: "_169vsuk80" }, white: { defaultClass: "_169vsuk81" }, opacityBlack50: { defaultClass: "_169vsuk82" }, opacityBlack100: { defaultClass: "_169vsuk83" }, opacityBlack200: { defaultClass: "_169vsuk84" }, opacityBlack300: { defaultClass: "_169vsuk85" }, opacityBlack400: { defaultClass: "_169vsuk86" }, opacityBlack500: { defaultClass: "_169vsuk87" }, opacityBlack600: { defaultClass: "_169vsuk88" }, opacityBlack700: { defaultClass: "_169vsuk89" }, opacityBlack800: { defaultClass: "_169vsuk8a" }, opacityBlack900: { defaultClass: "_169vsuk8b" }, opacityBlack950: { defaultClass: "_169vsuk8c" }, opacityWhite50: { defaultClass: "_169vsuk8d" }, opacityWhite100: { defaultClass: "_169vsuk8e" }, opacityWhite200: { defaultClass: "_169vsuk8f" }, opacityWhite300: { defaultClass: "_169vsuk8g" }, opacityWhite400: { defaultClass: "_169vsuk8h" }, opacityWhite500: { defaultClass: "_169vsuk8i" }, opacityWhite600: { defaultClass: "_169vsuk8j" }, opacityWhite700: { defaultClass: "_169vsuk8k" }, opacityWhite800: { defaultClass: "_169vsuk8l" }, opacityWhite900: { defaultClass: "_169vsuk8m" }, opacityWhite950: { defaultClass: "_169vsuk8n" }, blue10: { defaultClass: "_169vsuk8o" }, blue50: { defaultClass: "_169vsuk8p" }, blue100: { defaultClass: "_169vsuk8q" }, blue200: { defaultClass: "_169vsuk8r" }, blue300: { defaultClass: "_169vsuk8s" }, blue400: { defaultClass: "_169vsuk8t" }, blue500: { defaultClass: "_169vsuk8u" }, blue600: { defaultClass: "_169vsuk8v" }, blue700: { defaultClass: "_169vsuk8w" }, blue800: { defaultClass: "_169vsuk8x" }, blue900: { defaultClass: "_169vsuk8y" }, blue950: { defaultClass: "_169vsuk8z" }, blue990: { defaultClass: "_169vsuk90" }, green10: { defaultClass: "_169vsuk91" }, green50: { defaultClass: "_169vsuk92" }, green100: { defaultClass: "_169vsuk93" }, green200: { defaultClass: "_169vsuk94" }, green300: { defaultClass: "_169vsuk95" }, green400: { defaultClass: "_169vsuk96" }, green500: { defaultClass: "_169vsuk97" }, green600: { defaultClass: "_169vsuk98" }, green700: { defaultClass: "_169vsuk99" }, green800: { defaultClass: "_169vsuk9a" }, green900: { defaultClass: "_169vsuk9b" }, green950: { defaultClass: "_169vsuk9c" }, green990: { defaultClass: "_169vsuk9d" }, pink10: { defaultClass: "_169vsuk9e" }, pink50: { defaultClass: "_169vsuk9f" }, pink100: { defaultClass: "_169vsuk9g" }, pink200: { defaultClass: "_169vsuk9h" }, pink300: { defaultClass: "_169vsuk9i" }, pink400: { defaultClass: "_169vsuk9j" }, pink500: { defaultClass: "_169vsuk9k" }, pink600: { defaultClass: "_169vsuk9l" }, pink700: { defaultClass: "_169vsuk9m" }, pink800: { defaultClass: "_169vsuk9n" }, pink900: { defaultClass: "_169vsuk9o" }, pink950: { defaultClass: "_169vsuk9p" }, pink990: { defaultClass: "_169vsuk9q" }, orange10: { defaultClass: "_169vsuk9r" }, orange50: { defaultClass: "_169vsuk9s" }, orange100: { defaultClass: "_169vsuk9t" }, orange200: { defaultClass: "_169vsuk9u" }, orange300: { defaultClass: "_169vsuk9v" }, orange400: { defaultClass: "_169vsuk9w" }, orange500: { defaultClass: "_169vsuk9x" }, orange600: { defaultClass: "_169vsuk9y" }, orange700: { defaultClass: "_169vsuk9z" }, orange800: { defaultClass: "_169vsuka0" }, orange900: { defaultClass: "_169vsuka1" }, orange950: { defaultClass: "_169vsuka2" }, orange990: { defaultClass: "_169vsuka3" }, gray10: { defaultClass: "_169vsuka4" }, gray50: { defaultClass: "_169vsuka5" }, gray100: { defaultClass: "_169vsuka6" }, gray200: { defaultClass: "_169vsuka7" }, gray300: { defaultClass: "_169vsuka8" }, gray400: { defaultClass: "_169vsuka9" }, gray500: { defaultClass: "_169vsukaa" }, gray600: { defaultClass: "_169vsukab" }, gray700: { defaultClass: "_169vsukac" }, gray800: { defaultClass: "_169vsukad" }, gray900: { defaultClass: "_169vsukae" }, gray950: { defaultClass: "_169vsukaf" }, gray990: { defaultClass: "_169vsukag" }, coolGray10: { defaultClass: "_169vsukah" }, coolGray50: { defaultClass: "_169vsukai" }, coolGray100: { defaultClass: "_169vsukaj" }, coolGray200: { defaultClass: "_169vsukak" }, coolGray300: { defaultClass: "_169vsukal" }, coolGray400: { defaultClass: "_169vsukam" }, coolGray500: { defaultClass: "_169vsukan" }, coolGray600: { defaultClass: "_169vsukao" }, coolGray700: { defaultClass: "_169vsukap" }, coolGray800: { defaultClass: "_169vsukaq" }, coolGray900: { defaultClass: "_169vsukar" }, coolGray950: { defaultClass: "_169vsukas" }, coolGray990: { defaultClass: "_169vsukat" }, blueGray10: { defaultClass: "_169vsukau" }, blueGray50: { defaultClass: "_169vsukav" }, blueGray100: { defaultClass: "_169vsukaw" }, blueGray200: { defaultClass: "_169vsukax" }, blueGray300: { defaultClass: "_169vsukay" }, blueGray400: { defaultClass: "_169vsukaz" }, blueGray500: { defaultClass: "_169vsukb0" }, blueGray600: { defaultClass: "_169vsukb1" }, blueGray700: { defaultClass: "_169vsukb2" }, blueGray800: { defaultClass: "_169vsukb3" }, blueGray900: { defaultClass: "_169vsukb4" }, blueGray950: { defaultClass: "_169vsukb5" }, blueGray990: { defaultClass: "_169vsukb6" }, backgroundNormalPrimary: { defaultClass: "_169vsukb7" }, backgroundNormalSecondary: { defaultClass: "_169vsukb8" }, backgroundElevatedPrimary: { defaultClass: "_169vsukb9" }, backgroundElevatedSecondary: { defaultClass: "_169vsukba" }, textNormal: { defaultClass: "_169vsukbb" }, textAssistive: { defaultClass: "_169vsukbc" }, textAlternative: { defaultClass: "_169vsukbd" }, textStrong: { defaultClass: "_169vsukbe" }, uiPrimaryNormal: { defaultClass: "_169vsukbf" }, uiAccentNormal: { defaultClass: "_169vsukbg" }, uiStateNormal: { defaultClass: "_169vsukbh" } } }, borderRightColor: { values: { black: { defaultClass: "_169vsukbi" }, white: { defaultClass: "_169vsukbj" }, opacityBlack50: { defaultClass: "_169vsukbk" }, opacityBlack100: { defaultClass: "_169vsukbl" }, opacityBlack200: { defaultClass: "_169vsukbm" }, opacityBlack300: { defaultClass: "_169vsukbn" }, opacityBlack400: { defaultClass: "_169vsukbo" }, opacityBlack500: { defaultClass: "_169vsukbp" }, opacityBlack600: { defaultClass: "_169vsukbq" }, opacityBlack700: { defaultClass: "_169vsukbr" }, opacityBlack800: { defaultClass: "_169vsukbs" }, opacityBlack900: { defaultClass: "_169vsukbt" }, opacityBlack950: { defaultClass: "_169vsukbu" }, opacityWhite50: { defaultClass: "_169vsukbv" }, opacityWhite100: { defaultClass: "_169vsukbw" }, opacityWhite200: { defaultClass: "_169vsukbx" }, opacityWhite300: { defaultClass: "_169vsukby" }, opacityWhite400: { defaultClass: "_169vsukbz" }, opacityWhite500: { defaultClass: "_169vsukc0" }, opacityWhite600: { defaultClass: "_169vsukc1" }, opacityWhite700: { defaultClass: "_169vsukc2" }, opacityWhite800: { defaultClass: "_169vsukc3" }, opacityWhite900: { defaultClass: "_169vsukc4" }, opacityWhite950: { defaultClass: "_169vsukc5" }, blue10: { defaultClass: "_169vsukc6" }, blue50: { defaultClass: "_169vsukc7" }, blue100: { defaultClass: "_169vsukc8" }, blue200: { defaultClass: "_169vsukc9" }, blue300: { defaultClass: "_169vsukca" }, blue400: { defaultClass: "_169vsukcb" }, blue500: { defaultClass: "_169vsukcc" }, blue600: { defaultClass: "_169vsukcd" }, blue700: { defaultClass: "_169vsukce" }, blue800: { defaultClass: "_169vsukcf" }, blue900: { defaultClass: "_169vsukcg" }, blue950: { defaultClass: "_169vsukch" }, blue990: { defaultClass: "_169vsukci" }, green10: { defaultClass: "_169vsukcj" }, green50: { defaultClass: "_169vsukck" }, green100: { defaultClass: "_169vsukcl" }, green200: { defaultClass: "_169vsukcm" }, green300: { defaultClass: "_169vsukcn" }, green400: { defaultClass: "_169vsukco" }, green500: { defaultClass: "_169vsukcp" }, green600: { defaultClass: "_169vsukcq" }, green700: { defaultClass: "_169vsukcr" }, green800: { defaultClass: "_169vsukcs" }, green900: { defaultClass: "_169vsukct" }, green950: { defaultClass: "_169vsukcu" }, green990: { defaultClass: "_169vsukcv" }, pink10: { defaultClass: "_169vsukcw" }, pink50: { defaultClass: "_169vsukcx" }, pink100: { defaultClass: "_169vsukcy" }, pink200: { defaultClass: "_169vsukcz" }, pink300: { defaultClass: "_169vsukd0" }, pink400: { defaultClass: "_169vsukd1" }, pink500: { defaultClass: "_169vsukd2" }, pink600: { defaultClass: "_169vsukd3" }, pink700: { defaultClass: "_169vsukd4" }, pink800: { defaultClass: "_169vsukd5" }, pink900: { defaultClass: "_169vsukd6" }, pink950: { defaultClass: "_169vsukd7" }, pink990: { defaultClass: "_169vsukd8" }, orange10: { defaultClass: "_169vsukd9" }, orange50: { defaultClass: "_169vsukda" }, orange100: { defaultClass: "_169vsukdb" }, orange200: { defaultClass: "_169vsukdc" }, orange300: { defaultClass: "_169vsukdd" }, orange400: { defaultClass: "_169vsukde" }, orange500: { defaultClass: "_169vsukdf" }, orange600: { defaultClass: "_169vsukdg" }, orange700: { defaultClass: "_169vsukdh" }, orange800: { defaultClass: "_169vsukdi" }, orange900: { defaultClass: "_169vsukdj" }, orange950: { defaultClass: "_169vsukdk" }, orange990: { defaultClass: "_169vsukdl" }, gray10: { defaultClass: "_169vsukdm" }, gray50: { defaultClass: "_169vsukdn" }, gray100: { defaultClass: "_169vsukdo" }, gray200: { defaultClass: "_169vsukdp" }, gray300: { defaultClass: "_169vsukdq" }, gray400: { defaultClass: "_169vsukdr" }, gray500: { defaultClass: "_169vsukds" }, gray600: { defaultClass: "_169vsukdt" }, gray700: { defaultClass: "_169vsukdu" }, gray800: { defaultClass: "_169vsukdv" }, gray900: { defaultClass: "_169vsukdw" }, gray950: { defaultClass: "_169vsukdx" }, gray990: { defaultClass: "_169vsukdy" }, coolGray10: { defaultClass: "_169vsukdz" }, coolGray50: { defaultClass: "_169vsuke0" }, coolGray100: { defaultClass: "_169vsuke1" }, coolGray200: { defaultClass: "_169vsuke2" }, coolGray300: { defaultClass: "_169vsuke3" }, coolGray400: { defaultClass: "_169vsuke4" }, coolGray500: { defaultClass: "_169vsuke5" }, coolGray600: { defaultClass: "_169vsuke6" }, coolGray700: { defaultClass: "_169vsuke7" }, coolGray800: { defaultClass: "_169vsuke8" }, coolGray900: { defaultClass: "_169vsuke9" }, coolGray950: { defaultClass: "_169vsukea" }, coolGray990: { defaultClass: "_169vsukeb" }, blueGray10: { defaultClass: "_169vsukec" }, blueGray50: { defaultClass: "_169vsuked" }, blueGray100: { defaultClass: "_169vsukee" }, blueGray200: { defaultClass: "_169vsukef" }, blueGray300: { defaultClass: "_169vsukeg" }, blueGray400: { defaultClass: "_169vsukeh" }, blueGray500: { defaultClass: "_169vsukei" }, blueGray600: { defaultClass: "_169vsukej" }, blueGray700: { defaultClass: "_169vsukek" }, blueGray800: { defaultClass: "_169vsukel" }, blueGray900: { defaultClass: "_169vsukem" }, blueGray950: { defaultClass: "_169vsuken" }, blueGray990: { defaultClass: "_169vsukeo" }, backgroundNormalPrimary: { defaultClass: "_169vsukep" }, backgroundNormalSecondary: { defaultClass: "_169vsukeq" }, backgroundElevatedPrimary: { defaultClass: "_169vsuker" }, backgroundElevatedSecondary: { defaultClass: "_169vsukes" }, textNormal: { defaultClass: "_169vsuket" }, textAssistive: { defaultClass: "_169vsukeu" }, textAlternative: { defaultClass: "_169vsukev" }, textStrong: { defaultClass: "_169vsukew" }, uiPrimaryNormal: { defaultClass: "_169vsukex" }, uiAccentNormal: { defaultClass: "_169vsukey" }, uiStateNormal: { defaultClass: "_169vsukez" } } }, borderTopColor: { values: { black: { defaultClass: "_169vsukf0" }, white: { defaultClass: "_169vsukf1" }, opacityBlack50: { defaultClass: "_169vsukf2" }, opacityBlack100: { defaultClass: "_169vsukf3" }, opacityBlack200: { defaultClass: "_169vsukf4" }, opacityBlack300: { defaultClass: "_169vsukf5" }, opacityBlack400: { defaultClass: "_169vsukf6" }, opacityBlack500: { defaultClass: "_169vsukf7" }, opacityBlack600: { defaultClass: "_169vsukf8" }, opacityBlack700: { defaultClass: "_169vsukf9" }, opacityBlack800: { defaultClass: "_169vsukfa" }, opacityBlack900: { defaultClass: "_169vsukfb" }, opacityBlack950: { defaultClass: "_169vsukfc" }, opacityWhite50: { defaultClass: "_169vsukfd" }, opacityWhite100: { defaultClass: "_169vsukfe" }, opacityWhite200: { defaultClass: "_169vsukff" }, opacityWhite300: { defaultClass: "_169vsukfg" }, opacityWhite400: { defaultClass: "_169vsukfh" }, opacityWhite500: { defaultClass: "_169vsukfi" }, opacityWhite600: { defaultClass: "_169vsukfj" }, opacityWhite700: { defaultClass: "_169vsukfk" }, opacityWhite800: { defaultClass: "_169vsukfl" }, opacityWhite900: { defaultClass: "_169vsukfm" }, opacityWhite950: { defaultClass: "_169vsukfn" }, blue10: { defaultClass: "_169vsukfo" }, blue50: { defaultClass: "_169vsukfp" }, blue100: { defaultClass: "_169vsukfq" }, blue200: { defaultClass: "_169vsukfr" }, blue300: { defaultClass: "_169vsukfs" }, blue400: { defaultClass: "_169vsukft" }, blue500: { defaultClass: "_169vsukfu" }, blue600: { defaultClass: "_169vsukfv" }, blue700: { defaultClass: "_169vsukfw" }, blue800: { defaultClass: "_169vsukfx" }, blue900: { defaultClass: "_169vsukfy" }, blue950: { defaultClass: "_169vsukfz" }, blue990: { defaultClass: "_169vsukg0" }, green10: { defaultClass: "_169vsukg1" }, green50: { defaultClass: "_169vsukg2" }, green100: { defaultClass: "_169vsukg3" }, green200: { defaultClass: "_169vsukg4" }, green300: { defaultClass: "_169vsukg5" }, green400: { defaultClass: "_169vsukg6" }, green500: { defaultClass: "_169vsukg7" }, green600: { defaultClass: "_169vsukg8" }, green700: { defaultClass: "_169vsukg9" }, green800: { defaultClass: "_169vsukga" }, green900: { defaultClass: "_169vsukgb" }, green950: { defaultClass: "_169vsukgc" }, green990: { defaultClass: "_169vsukgd" }, pink10: { defaultClass: "_169vsukge" }, pink50: { defaultClass: "_169vsukgf" }, pink100: { defaultClass: "_169vsukgg" }, pink200: { defaultClass: "_169vsukgh" }, pink300: { defaultClass: "_169vsukgi" }, pink400: { defaultClass: "_169vsukgj" }, pink500: { defaultClass: "_169vsukgk" }, pink600: { defaultClass: "_169vsukgl" }, pink700: { defaultClass: "_169vsukgm" }, pink800: { defaultClass: "_169vsukgn" }, pink900: { defaultClass: "_169vsukgo" }, pink950: { defaultClass: "_169vsukgp" }, pink990: { defaultClass: "_169vsukgq" }, orange10: { defaultClass: "_169vsukgr" }, orange50: { defaultClass: "_169vsukgs" }, orange100: { defaultClass: "_169vsukgt" }, orange200: { defaultClass: "_169vsukgu" }, orange300: { defaultClass: "_169vsukgv" }, orange400: { defaultClass: "_169vsukgw" }, orange500: { defaultClass: "_169vsukgx" }, orange600: { defaultClass: "_169vsukgy" }, orange700: { defaultClass: "_169vsukgz" }, orange800: { defaultClass: "_169vsukh0" }, orange900: { defaultClass: "_169vsukh1" }, orange950: { defaultClass: "_169vsukh2" }, orange990: { defaultClass: "_169vsukh3" }, gray10: { defaultClass: "_169vsukh4" }, gray50: { defaultClass: "_169vsukh5" }, gray100: { defaultClass: "_169vsukh6" }, gray200: { defaultClass: "_169vsukh7" }, gray300: { defaultClass: "_169vsukh8" }, gray400: { defaultClass: "_169vsukh9" }, gray500: { defaultClass: "_169vsukha" }, gray600: { defaultClass: "_169vsukhb" }, gray700: { defaultClass: "_169vsukhc" }, gray800: { defaultClass: "_169vsukhd" }, gray900: { defaultClass: "_169vsukhe" }, gray950: { defaultClass: "_169vsukhf" }, gray990: { defaultClass: "_169vsukhg" }, coolGray10: { defaultClass: "_169vsukhh" }, coolGray50: { defaultClass: "_169vsukhi" }, coolGray100: { defaultClass: "_169vsukhj" }, coolGray200: { defaultClass: "_169vsukhk" }, coolGray300: { defaultClass: "_169vsukhl" }, coolGray400: { defaultClass: "_169vsukhm" }, coolGray500: { defaultClass: "_169vsukhn" }, coolGray600: { defaultClass: "_169vsukho" }, coolGray700: { defaultClass: "_169vsukhp" }, coolGray800: { defaultClass: "_169vsukhq" }, coolGray900: { defaultClass: "_169vsukhr" }, coolGray950: { defaultClass: "_169vsukhs" }, coolGray990: { defaultClass: "_169vsukht" }, blueGray10: { defaultClass: "_169vsukhu" }, blueGray50: { defaultClass: "_169vsukhv" }, blueGray100: { defaultClass: "_169vsukhw" }, blueGray200: { defaultClass: "_169vsukhx" }, blueGray300: { defaultClass: "_169vsukhy" }, blueGray400: { defaultClass: "_169vsukhz" }, blueGray500: { defaultClass: "_169vsuki0" }, blueGray600: { defaultClass: "_169vsuki1" }, blueGray700: { defaultClass: "_169vsuki2" }, blueGray800: { defaultClass: "_169vsuki3" }, blueGray900: { defaultClass: "_169vsuki4" }, blueGray950: { defaultClass: "_169vsuki5" }, blueGray990: { defaultClass: "_169vsuki6" }, backgroundNormalPrimary: { defaultClass: "_169vsuki7" }, backgroundNormalSecondary: { defaultClass: "_169vsuki8" }, backgroundElevatedPrimary: { defaultClass: "_169vsuki9" }, backgroundElevatedSecondary: { defaultClass: "_169vsukia" }, textNormal: { defaultClass: "_169vsukib" }, textAssistive: { defaultClass: "_169vsukic" }, textAlternative: { defaultClass: "_169vsukid" }, textStrong: { defaultClass: "_169vsukie" }, uiPrimaryNormal: { defaultClass: "_169vsukif" }, uiAccentNormal: { defaultClass: "_169vsukig" }, uiStateNormal: { defaultClass: "_169vsukih" } } }, borderBottomStyle: { values: { none: { defaultClass: "_169vsukii" }, solid: { defaultClass: "_169vsukij" }, dashed: { defaultClass: "_169vsukik" }, dotted: { defaultClass: "_169vsukil" }, "double": { defaultClass: "_169vsukim" } } }, borderLeftStyle: { values: { none: { defaultClass: "_169vsukin" }, solid: { defaultClass: "_169vsukio" }, dashed: { defaultClass: "_169vsukip" }, dotted: { defaultClass: "_169vsukiq" }, "double": { defaultClass: "_169vsukir" } } }, borderRightStyle: { values: { none: { defaultClass: "_169vsukis" }, solid: { defaultClass: "_169vsukit" }, dashed: { defaultClass: "_169vsukiu" }, dotted: { defaultClass: "_169vsukiv" }, "double": { defaultClass: "_169vsukiw" } } }, borderTopStyle: { values: { none: { defaultClass: "_169vsukix" }, solid: { defaultClass: "_169vsukiy" }, dashed: { defaultClass: "_169vsukiz" }, dotted: { defaultClass: "_169vsukj0" }, "double": { defaultClass: "_169vsukj1" } } }, borderBottomWidth: { values: { "1": { defaultClass: "_169vsukj2" }, "2": { defaultClass: "_169vsukj3" }, "4": { defaultClass: "_169vsukj4" }, "6": { defaultClass: "_169vsukj5" }, "8": { defaultClass: "_169vsukj6" }, "10": { defaultClass: "_169vsukj7" }, "12": { defaultClass: "_169vsukj8" }, "14": { defaultClass: "_169vsukj9" }, "16": { defaultClass: "_169vsukja" }, "18": { defaultClass: "_169vsukjb" }, "20": { defaultClass: "_169vsukjc" }, "24": { defaultClass: "_169vsukjd" }, "28": { defaultClass: "_169vsukje" }, "32": { defaultClass: "_169vsukjf" }, "36": { defaultClass: "_169vsukjg" }, "40": { defaultClass: "_169vsukjh" }, "44": { defaultClass: "_169vsukji" }, "48": { defaultClass: "_169vsukjj" }, "56": { defaultClass: "_169vsukjk" }, "64": { defaultClass: "_169vsukjl" } } }, borderLeftWidth: { values: { "1": { defaultClass: "_169vsukjm" }, "2": { defaultClass: "_169vsukjn" }, "4": { defaultClass: "_169vsukjo" }, "6": { defaultClass: "_169vsukjp" }, "8": { defaultClass: "_169vsukjq" }, "10": { defaultClass: "_169vsukjr" }, "12": { defaultClass: "_169vsukjs" }, "14": { defaultClass: "_169vsukjt" }, "16": { defaultClass: "_169vsukju" }, "18": { defaultClass: "_169vsukjv" }, "20": { defaultClass: "_169vsukjw" }, "24": { defaultClass: "_169vsukjx" }, "28": { defaultClass: "_169vsukjy" }, "32": { defaultClass: "_169vsukjz" }, "36": { defaultClass: "_169vsukk0" }, "40": { defaultClass: "_169vsukk1" }, "44": { defaultClass: "_169vsukk2" }, "48": { defaultClass: "_169vsukk3" }, "56": { defaultClass: "_169vsukk4" }, "64": { defaultClass: "_169vsukk5" } } }, borderRightWidth: { values: { "1": { defaultClass: "_169vsukk6" }, "2": { defaultClass: "_169vsukk7" }, "4": { defaultClass: "_169vsukk8" }, "6": { defaultClass: "_169vsukk9" }, "8": { defaultClass: "_169vsukka" }, "10": { defaultClass: "_169vsukkb" }, "12": { defaultClass: "_169vsukkc" }, "14": { defaultClass: "_169vsukkd" }, "16": { defaultClass: "_169vsukke" }, "18": { defaultClass: "_169vsukkf" }, "20": { defaultClass: "_169vsukkg" }, "24": { defaultClass: "_169vsukkh" }, "28": { defaultClass: "_169vsukki" }, "32": { defaultClass: "_169vsukkj" }, "36": { defaultClass: "_169vsukkk" }, "40": { defaultClass: "_169vsukkl" }, "44": { defaultClass: "_169vsukkm" }, "48": { defaultClass: "_169vsukkn" }, "56": { defaultClass: "_169vsukko" }, "64": { defaultClass: "_169vsukkp" } } }, borderTopWidth: { values: { "1": { defaultClass: "_169vsukkq" }, "2": { defaultClass: "_169vsukkr" }, "4": { defaultClass: "_169vsukks" }, "6": { defaultClass: "_169vsukkt" }, "8": { defaultClass: "_169vsukku" }, "10": { defaultClass: "_169vsukkv" }, "12": { defaultClass: "_169vsukkw" }, "14": { defaultClass: "_169vsukkx" }, "16": { defaultClass: "_169vsukky" }, "18": { defaultClass: "_169vsukkz" }, "20": { defaultClass: "_169vsukl0" }, "24": { defaultClass: "_169vsukl1" }, "28": { defaultClass: "_169vsukl2" }, "32": { defaultClass: "_169vsukl3" }, "36": { defaultClass: "_169vsukl4" }, "40": { defaultClass: "_169vsukl5" }, "44": { defaultClass: "_169vsukl6" }, "48": { defaultClass: "_169vsukl7" }, "56": { defaultClass: "_169vsukl8" }, "64": { defaultClass: "_169vsukl9" } } } } });

// src/style/border/borderRecipes.css.ts
var import_createRuntimeFn2 = require("@vanilla-extract/recipes/createRuntimeFn");
var borderRecipe = (0, import_createRuntimeFn2.createRuntimeFn)({ defaultClassName: "m11rho0", variantClassNames: { borderType: { border: "m11rho1", borderTop: "m11rho2", borderBottom: "m11rho3", borderLeft: "m11rho4", borderRight: "m11rho5" } }, defaultVariants: {}, compoundVariants: [] });

// src/style/shadow/shadowSprinkles.css.ts
var import_createRuntimeSprinkles5 = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");
var shadowSprinkles = (0, import_createRuntimeSprinkles5.createSprinkles)({ conditions: void 0, styles: { boxShadow: { values: { xs: { defaultClass: "_1ybucis0" }, s: { defaultClass: "_1ybucis1" }, m: { defaultClass: "_1ybucis2" }, l: { defaultClass: "_1ybucis3" }, elevatedTop: { defaultClass: "_1ybucis4" } } } } });

// src/common/text/Text.tsx
var import_react = require("react");

// ../../../../../../AppData/Local/Yarn/Berry/cache/clsx-npm-2.1.1-96125b98be-10c0.zip/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// src/common/text/Text.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Text = (0, import_react.forwardRef)(
  ({
    children,
    as: Component = "p",
    textType = "body1",
    textMode = "default",
    color = "textNormal",
    className,
    ...props
  }, ref) => {
    const textClass = typographyRecipe({ textType, textMode });
    const colorClass = colorSprinkles({ color });
    const combinedClass = clsx_default([textClass, colorClass, className]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ref, className: combinedClass, ...props, children });
  }
);

// src/common/container/Container.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Container = (0, import_react2.forwardRef)(
  ({
    children,
    as: Component = "div",
    display,
    flexDirection,
    justifyContent,
    alignItems,
    width,
    height,
    margin,
    padding,
    marginX,
    marginY,
    paddingX,
    paddingY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    gap,
    rowGap,
    columnGap,
    backgroundColor,
    borderRadius,
    borderType,
    borderColor,
    borderStyle,
    borderWidth,
    borderBottomColor,
    borderLeftColor,
    borderRightColor,
    borderTopColor,
    borderBottomStyle,
    borderLeftStyle,
    borderRightStyle,
    borderTopStyle,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderTopWidth,
    boxShadow,
    className,
    ...props
  }, ref) => {
    const layoutClass = layoutSprinkles({ display, flexDirection, justifyContent, alignItems });
    const spacingClass = spacingSprinkles({
      margin,
      padding,
      marginX,
      marginY,
      paddingX,
      paddingY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      gap,
      rowGap,
      columnGap
    });
    const backgroundColorClass = backgroundColor ? colorSprinkles({ backgroundColor }) : "";
    const borderRecipeClass = borderRecipe({ borderType });
    const borderClass = borderSprinkles({
      borderColor,
      borderRadius,
      borderStyle,
      borderWidth,
      borderBottomColor,
      borderLeftColor,
      borderRightColor,
      borderTopColor,
      borderBottomStyle,
      borderLeftStyle,
      borderRightStyle,
      borderTopStyle,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      borderTopWidth
    });
    const shadowClass = shadowSprinkles({ boxShadow });
    const combinedClass = clsx_default([
      layoutClass,
      spacingClass,
      backgroundColorClass,
      borderRecipeClass,
      borderClass,
      shadowClass,
      className
    ]);
    const containerStyle = {
      ...width && { width: typeof width === "string" ? width : `${width}px` },
      ...height && { height: typeof height === "string" ? height : `${height}px` }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Component, { ref, className: combinedClass, style: containerStyle, ...props, children });
  }
);

// src/common/icon/Icon.tsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Icon = (0, import_react3.forwardRef)(
  ({ children, color = "textNormal", size, className, ...props }, ref) => {
    const colorClass = colorSprinkles({ color });
    const iconStyle3 = {
      display: "inline-block",
      ...size && { fontSize: `${size}px` }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "span",
      {
        ref,
        className: clsx_default("material-symbols-outlined", colorClass, className),
        style: iconStyle3,
        ...props,
        children
      }
    );
  }
);

// src/button/button.css.ts
var baseStyle = "mu0bc60";
var mainTextStyle = "mu0bc6d";
var sizeStyle = { s: "mu0bc61", m: "mu0bc62", l: "mu0bc63" };
var stateStyle = { defaultFill: "mu0bc64", defaultOutline: "mu0bc69", secondaryFill: "mu0bc67", secondaryOutline: "mu0bc6c", tertiaryFill: "mu0bc68", hoverFill: "mu0bc65", hoverOutline: "mu0bc6a", disabledFill: "mu0bc66", disabledOutline: "mu0bc6b" };
var subTextStyle = "mu0bc6e";

// src/button/Button.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Button = ({
  size = "m",
  variant = "primary",
  state = "default",
  design = "fill",
  icon = "add",
  subText = "sub",
  mainText = "Main",
  isLoading = true
}) => {
  const baseClass = baseStyle;
  const sizeClass = sizeStyle[size];
  let stateClass = "";
  if (variant === "secondary" || variant === "tertiary") {
    stateClass = stateStyle[`${variant}${design.charAt(0).toUpperCase() + design.slice(1)}`];
  } else {
    const stateDesignKey = `${state}${design.charAt(0).toUpperCase() + design.slice(1)}`;
    stateClass = stateStyle[stateDesignKey];
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { className: `${baseClass} ${sizeClass} ${stateClass}`, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "material-symbols-outlined", children: icon }),
    subText && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: subTextStyle, children: subText }),
    mainText && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: mainTextStyle, children: mainText }),
    isLoading && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "material-symbols-outlined", children: "refresh" })
  ] });
};

// src/badge/Badge.tsx
var import_react4 = require("react");

// src/badge/badge.css.ts
var import_createRuntimeFn3 = require("@vanilla-extract/recipes/createRuntimeFn");
var badgeRecipe = (0, import_createRuntimeFn3.createRuntimeFn)({ defaultClassName: "_169vsuk3k", variantClassNames: { size: { s: "q5ki0k3y q5ki0k2u q5ki0k29 q5ki0k3d", m: "q5ki0k3y q5ki0k2u q5ki0k29 q5ki0k3d", l: "q5ki0k3z q5ki0k2v q5ki0k2a q5ki0k3e" }, color: { blue: "exp0d747", pink: "exp0d74x", orange: "exp0d75a", green: "exp0d74k" } }, defaultVariants: { size: "m", color: "blue" }, compoundVariants: [] });

// src/badge/Badge.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Badge = (0, import_react4.forwardRef)(
  ({ children = "text", size = "m", color = "blue", className, ...props }, ref) => {
    const badgeClass = badgeRecipe({ size, color });
    const textType = size === "s" ? "caption" : size === "m" ? "footnote" : "label";
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Container,
      {
        as: "div",
        ref,
        className: clsx_default(badgeClass, className),
        display: "inline-block",
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, { as: "span", textType, color: `${color}500`, children })
      }
    );
  }
);

// src/chips/chips.css.ts
var baseStyle2 = "_136tj0m0";
var sizeStyle2 = { s: "_136tj0m1", m: "_136tj0m2", l: "_136tj0m3" };
var stateStyle2 = { "default": "_136tj0m4", outlinePrimary: "_136tj0m5", outlineSecondary: "_136tj0m6", activePrimary: "_136tj0m7", activeSecondary: "_136tj0m8", disabled: "_136tj0m9" };

// src/chips/Chips.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Chips = ({
  size = "m",
  variant = "primary",
  state = "default",
  content = "Label"
}) => {
  const baseClass = baseStyle2;
  const sizeClass = sizeStyle2[size];
  let stateClass = "";
  if (state === "active") {
    stateClass = variant === "primary" ? stateStyle2.activePrimary : stateStyle2.activeSecondary;
  } else if (state === "outline") {
    stateClass = variant === "primary" ? stateStyle2.outlinePrimary : stateStyle2.outlineSecondary;
  } else {
    stateClass = stateStyle2[state];
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `${baseClass} ${sizeClass} ${stateClass}`, children: content });
};

// src/header/topAppBar.css.ts
var iconWrapperStyle = { inner: "ehsume3", outer: "ehsume4" };
var leftContentStyle = "ehsume1";
var textStyle = "ehsume2";
var topAppBarStyle = "ehsume0";

// src/header/TopAppBar.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var TopAppBar = ({ icon = false }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: topAppBarStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: leftContentStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: iconWrapperStyle.outer, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: iconWrapperStyle.inner, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "material-symbols-outlined", children: "arrow_back" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: textStyle, children: "Title" })
    ] }),
    icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: iconWrapperStyle.outer, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: iconWrapperStyle.inner, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "material-symbols-outlined", children: "add" }) }) })
  ] });
};

// src/header/title/title.css.ts
var titleStyle = "wn34pc1 exp0d76p";

// src/header/title/Title.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var Title = ({ children = "\uC81C\uBAA9", color = "textNormal", className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Text, { className: clsx_default(titleStyle, className), textType: "title2", textMode: "bold", as: "h1", color, ...props, children });
};

// src/header/headline/headline.css.ts
var headlineStyle = "_2svjdp0";
var headlineSubStyle = "_2svjdp2";
var iconStyle = "_2svjdp1";

// src/header/headline/Headline.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var Headline = ({
  mainText = "mainText",
  subText = "subText",
  icon = true,
  color = "textNormal",
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: clsx_default(headlineStyle, className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Text, { textType: "heading2", textMode: "bold", as: "h3", color, children: mainText }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: headlineSubStyle, children: [
      subText && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Text, { textType: "body3", as: "p", color: "textAssistive", children: subText }),
      icon && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: clsx_default("material-symbols-outlined", iconStyle), children: "chevron_right" })
    ] })
  ] });
};

// src/list/message/MessageList.tsx
var import_react5 = require("react");

// src/utils/dateUtils.ts
function formatDate(date) {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return "Invalid Date";
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

// src/list/message/messageList.css.ts
var import_createRuntimeFn4 = require("@vanilla-extract/recipes/createRuntimeFn");
var messageListRecipe = (0, import_createRuntimeFn4.createRuntimeFn)({ defaultClassName: "_1eho89n4", variantClassNames: { variant: { "default": "_1eho89n5", danger: "exp0d74w", warning: "exp0d759" }, mode: { "default": "_1eho89n8", round: "_169vsuk3n" } }, defaultVariants: { variant: "default" }, compoundVariants: [[{ variant: "danger", mode: "round" }, "_169vsuk3y _169vsuk3u _169vsuk1k"]] });

// src/list/message/MessageList.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var colorMap = {
  default: "blue",
  danger: "pink",
  warning: "orange"
};
var MessageList = (0, import_react5.forwardRef)(
  ({
    title = "title",
    date = /* @__PURE__ */ new Date(),
    content = "content",
    isRead = false,
    isChecked = false,
    following = "following",
    variant,
    mode,
    className,
    ...props
  }, ref) => {
    const dateString = formatDate(date);
    const color = colorMap[variant] || "blue";
    const messageListClass = messageListRecipe({ variant, mode });
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      Container,
      {
        ref,
        as: "li",
        className: clsx_default(messageListClass, className),
        display: "flex",
        alignItems: "center",
        paddingX: 16,
        paddingY: 12,
        ...props,
        children: [
          isRead && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Container, { height: "100%", display: "flex", paddingRight: 12, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { color: `${color}500`, size: 8, children: "circle" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Container, { display: "flex", flexDirection: "column", width: "100%", gap: 8, children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Container, { display: "flex", flexDirection: "column", gap: 2, children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Container, { display: "flex", alignItems: "center", height: 24, gap: 8, children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, { as: "h5", textType: "body2", textMode: "bold", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Badge, { color, children: following }),
                isChecked && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { color: `${color}500`, size: 20, children: "verified" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, { textType: "label", color: "textAssistive", children: dateString })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, { textType: "body3", textMode: "reading", children: content })
          ] })
        ]
      }
    );
  }
);

// src/inputs/input/input.css.ts
var buttonStyle = "_1xg7xwl2";
var commonStyle = "_1xg7xwl0";
var divStateStyle = { "default": "_1xg7xwl4 _1xg7xwl3", highlight: "_1xg7xwl5 _1xg7xwl3", warning: "_1xg7xwl6 _1xg7xwl3", disabled: "_1xg7xwl7 _1xg7xwl3" };
var iconStyle2 = "_1xg7xwlb";
var inputStateStyle = { "default": "_1xg7xwl8", highlight: "_1xg7xwl9 _1xg7xwl8", warning: "_1xg7xwl8", disabled: "_1xg7xwla _1xg7xwl8" };
var inputStyle = "_1xg7xwl1";

// src/inputs/input/Input.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var Input = ({
  state = "warning",
  showIcon = true,
  showButton = true,
  className,
  ...props
}) => {
  const commonClass = commonStyle;
  const divStateClass = divStateStyle[state];
  const inputStateClass = inputStateStyle[state];
  const iconClass = iconStyle2;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: `${commonClass} ${divStateClass} ${className || ""}`, ...props, children: [
    showIcon && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: `material-symbols-outlined input-icon ${iconClass}`, children: "search" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { className: `${inputStyle} ${inputStateClass}`, type: "text", placeholder: "Placeholder" }),
    showButton && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: buttonStyle, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "material-symbols-outlined", children: "cancel" }) })
  ] });
};

// src/inputs/group/inputGroup.css.ts
var inputStyle2 = "xr6cd32";
var labeStyle = "xr6cd30";
var starStyle = "xr6cd31";
var warningStyle = "xr6cd33";

// src/inputs/group/inputGroup.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var InputGroup = ({
  state = "default",
  showButton = true,
  showLabel = true,
  labelContent = "label",
  warningContent = "warning text",
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className, ...props, children: [
    showLabel && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: labeStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: labelContent }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: starStyle, children: "*" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: inputStyle2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Input, { state, showIcon: false }),
      showButton && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        Button,
        {
          size: "m",
          variant: "primary",
          state: "default",
          design: "fill",
          icon: "",
          subText: "",
          mainText: "Button",
          isLoading: false
        }
      )
    ] }),
    state === "warning" && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: warningStyle, children: warningContent })
  ] });
};
//# sourceMappingURL=index.cjs.map
