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
  Divider: () => Divider,
  Headline: () => Headline,
  Icon: () => Icon,
  InfoBox: () => InfoBox,
  Input: () => Input,
  InputGroup: () => InputGroup,
  MessageList: () => MessageList,
  SocialContentList: () => SocialContentList,
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

// src/style/layout/sprinkles.css.ts
var import_createRuntimeSprinkles = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");
var layoutSprinkles = (0, import_createRuntimeSprinkles.createSprinkles)({ conditions: void 0, styles: { display: { values: { none: { defaultClass: "_2unefx0" }, flex: { defaultClass: "_2unefx1" }, block: { defaultClass: "_2unefx2" }, inline: { defaultClass: "_2unefx3" }, "inline-block": { defaultClass: "_2unefx4" } } }, flexDirection: { values: { row: { defaultClass: "_2unefx5" }, column: { defaultClass: "_2unefx6" } } }, justifyContent: { values: { stretch: { defaultClass: "_2unefx7" }, "flex-start": { defaultClass: "_2unefx8" }, center: { defaultClass: "_2unefx9" }, "flex-end": { defaultClass: "_2unefxa" }, "space-around": { defaultClass: "_2unefxb" }, "space-between": { defaultClass: "_2unefxc" } } }, alignItems: { values: { stretch: { defaultClass: "_2unefxd" }, "flex-start": { defaultClass: "_2unefxe" }, center: { defaultClass: "_2unefxf" }, "flex-end": { defaultClass: "_2unefxg" } } }, width: { values: { "100%": { defaultClass: "_2unefxh" }, "100vw": { defaultClass: "_2unefxi" }, "100dvw": { defaultClass: "_2unefxj" } } }, height: { values: { "100%": { defaultClass: "_2unefxk" }, "100vh": { defaultClass: "_2unefxl" }, "100dvh": { defaultClass: "_2unefxm" } } } } });

// src/style/spacing/sprinkles.css.ts
var import_createRuntimeSprinkles2 = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");
var spacingSprinkles = (0, import_createRuntimeSprinkles2.createSprinkles)({ conditions: void 0, styles: { margin: { mappings: ["marginTop", "marginRight", "marginBottom", "marginLeft"] }, padding: { mappings: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"] }, marginX: { mappings: ["marginLeft", "marginRight"] }, marginY: { mappings: ["marginTop", "marginBottom"] }, paddingX: { mappings: ["paddingLeft", "paddingRight"] }, paddingY: { mappings: ["paddingTop", "paddingBottom"] }, marginTop: { values: { "1": { defaultClass: "_89s0wz0" }, "2": { defaultClass: "_89s0wz1" }, "4": { defaultClass: "_89s0wz2" }, "6": { defaultClass: "_89s0wz3" }, "8": { defaultClass: "_89s0wz4" }, "10": { defaultClass: "_89s0wz5" }, "12": { defaultClass: "_89s0wz6" }, "14": { defaultClass: "_89s0wz7" }, "16": { defaultClass: "_89s0wz8" }, "18": { defaultClass: "_89s0wz9" }, "20": { defaultClass: "_89s0wza" }, "24": { defaultClass: "_89s0wzb" }, "28": { defaultClass: "_89s0wzc" }, "32": { defaultClass: "_89s0wzd" }, "36": { defaultClass: "_89s0wze" }, "40": { defaultClass: "_89s0wzf" }, "44": { defaultClass: "_89s0wzg" }, "48": { defaultClass: "_89s0wzh" }, "56": { defaultClass: "_89s0wzi" }, "64": { defaultClass: "_89s0wzj" } } }, marginRight: { values: { "1": { defaultClass: "_89s0wzk" }, "2": { defaultClass: "_89s0wzl" }, "4": { defaultClass: "_89s0wzm" }, "6": { defaultClass: "_89s0wzn" }, "8": { defaultClass: "_89s0wzo" }, "10": { defaultClass: "_89s0wzp" }, "12": { defaultClass: "_89s0wzq" }, "14": { defaultClass: "_89s0wzr" }, "16": { defaultClass: "_89s0wzs" }, "18": { defaultClass: "_89s0wzt" }, "20": { defaultClass: "_89s0wzu" }, "24": { defaultClass: "_89s0wzv" }, "28": { defaultClass: "_89s0wzw" }, "32": { defaultClass: "_89s0wzx" }, "36": { defaultClass: "_89s0wzy" }, "40": { defaultClass: "_89s0wzz" }, "44": { defaultClass: "_89s0wz10" }, "48": { defaultClass: "_89s0wz11" }, "56": { defaultClass: "_89s0wz12" }, "64": { defaultClass: "_89s0wz13" } } }, marginBottom: { values: { "1": { defaultClass: "_89s0wz14" }, "2": { defaultClass: "_89s0wz15" }, "4": { defaultClass: "_89s0wz16" }, "6": { defaultClass: "_89s0wz17" }, "8": { defaultClass: "_89s0wz18" }, "10": { defaultClass: "_89s0wz19" }, "12": { defaultClass: "_89s0wz1a" }, "14": { defaultClass: "_89s0wz1b" }, "16": { defaultClass: "_89s0wz1c" }, "18": { defaultClass: "_89s0wz1d" }, "20": { defaultClass: "_89s0wz1e" }, "24": { defaultClass: "_89s0wz1f" }, "28": { defaultClass: "_89s0wz1g" }, "32": { defaultClass: "_89s0wz1h" }, "36": { defaultClass: "_89s0wz1i" }, "40": { defaultClass: "_89s0wz1j" }, "44": { defaultClass: "_89s0wz1k" }, "48": { defaultClass: "_89s0wz1l" }, "56": { defaultClass: "_89s0wz1m" }, "64": { defaultClass: "_89s0wz1n" } } }, marginLeft: { values: { "1": { defaultClass: "_89s0wz1o" }, "2": { defaultClass: "_89s0wz1p" }, "4": { defaultClass: "_89s0wz1q" }, "6": { defaultClass: "_89s0wz1r" }, "8": { defaultClass: "_89s0wz1s" }, "10": { defaultClass: "_89s0wz1t" }, "12": { defaultClass: "_89s0wz1u" }, "14": { defaultClass: "_89s0wz1v" }, "16": { defaultClass: "_89s0wz1w" }, "18": { defaultClass: "_89s0wz1x" }, "20": { defaultClass: "_89s0wz1y" }, "24": { defaultClass: "_89s0wz1z" }, "28": { defaultClass: "_89s0wz20" }, "32": { defaultClass: "_89s0wz21" }, "36": { defaultClass: "_89s0wz22" }, "40": { defaultClass: "_89s0wz23" }, "44": { defaultClass: "_89s0wz24" }, "48": { defaultClass: "_89s0wz25" }, "56": { defaultClass: "_89s0wz26" }, "64": { defaultClass: "_89s0wz27" } } }, paddingTop: { values: { "1": { defaultClass: "_89s0wz28" }, "2": { defaultClass: "_89s0wz29" }, "4": { defaultClass: "_89s0wz2a" }, "6": { defaultClass: "_89s0wz2b" }, "8": { defaultClass: "_89s0wz2c" }, "10": { defaultClass: "_89s0wz2d" }, "12": { defaultClass: "_89s0wz2e" }, "14": { defaultClass: "_89s0wz2f" }, "16": { defaultClass: "_89s0wz2g" }, "18": { defaultClass: "_89s0wz2h" }, "20": { defaultClass: "_89s0wz2i" }, "24": { defaultClass: "_89s0wz2j" }, "28": { defaultClass: "_89s0wz2k" }, "32": { defaultClass: "_89s0wz2l" }, "36": { defaultClass: "_89s0wz2m" }, "40": { defaultClass: "_89s0wz2n" }, "44": { defaultClass: "_89s0wz2o" }, "48": { defaultClass: "_89s0wz2p" }, "56": { defaultClass: "_89s0wz2q" }, "64": { defaultClass: "_89s0wz2r" } } }, paddingRight: { values: { "1": { defaultClass: "_89s0wz2s" }, "2": { defaultClass: "_89s0wz2t" }, "4": { defaultClass: "_89s0wz2u" }, "6": { defaultClass: "_89s0wz2v" }, "8": { defaultClass: "_89s0wz2w" }, "10": { defaultClass: "_89s0wz2x" }, "12": { defaultClass: "_89s0wz2y" }, "14": { defaultClass: "_89s0wz2z" }, "16": { defaultClass: "_89s0wz30" }, "18": { defaultClass: "_89s0wz31" }, "20": { defaultClass: "_89s0wz32" }, "24": { defaultClass: "_89s0wz33" }, "28": { defaultClass: "_89s0wz34" }, "32": { defaultClass: "_89s0wz35" }, "36": { defaultClass: "_89s0wz36" }, "40": { defaultClass: "_89s0wz37" }, "44": { defaultClass: "_89s0wz38" }, "48": { defaultClass: "_89s0wz39" }, "56": { defaultClass: "_89s0wz3a" }, "64": { defaultClass: "_89s0wz3b" } } }, paddingBottom: { values: { "1": { defaultClass: "_89s0wz3c" }, "2": { defaultClass: "_89s0wz3d" }, "4": { defaultClass: "_89s0wz3e" }, "6": { defaultClass: "_89s0wz3f" }, "8": { defaultClass: "_89s0wz3g" }, "10": { defaultClass: "_89s0wz3h" }, "12": { defaultClass: "_89s0wz3i" }, "14": { defaultClass: "_89s0wz3j" }, "16": { defaultClass: "_89s0wz3k" }, "18": { defaultClass: "_89s0wz3l" }, "20": { defaultClass: "_89s0wz3m" }, "24": { defaultClass: "_89s0wz3n" }, "28": { defaultClass: "_89s0wz3o" }, "32": { defaultClass: "_89s0wz3p" }, "36": { defaultClass: "_89s0wz3q" }, "40": { defaultClass: "_89s0wz3r" }, "44": { defaultClass: "_89s0wz3s" }, "48": { defaultClass: "_89s0wz3t" }, "56": { defaultClass: "_89s0wz3u" }, "64": { defaultClass: "_89s0wz3v" } } }, paddingLeft: { values: { "1": { defaultClass: "_89s0wz3w" }, "2": { defaultClass: "_89s0wz3x" }, "4": { defaultClass: "_89s0wz3y" }, "6": { defaultClass: "_89s0wz3z" }, "8": { defaultClass: "_89s0wz40" }, "10": { defaultClass: "_89s0wz41" }, "12": { defaultClass: "_89s0wz42" }, "14": { defaultClass: "_89s0wz43" }, "16": { defaultClass: "_89s0wz44" }, "18": { defaultClass: "_89s0wz45" }, "20": { defaultClass: "_89s0wz46" }, "24": { defaultClass: "_89s0wz47" }, "28": { defaultClass: "_89s0wz48" }, "32": { defaultClass: "_89s0wz49" }, "36": { defaultClass: "_89s0wz4a" }, "40": { defaultClass: "_89s0wz4b" }, "44": { defaultClass: "_89s0wz4c" }, "48": { defaultClass: "_89s0wz4d" }, "56": { defaultClass: "_89s0wz4e" }, "64": { defaultClass: "_89s0wz4f" } } }, gap: { values: { "1": { defaultClass: "_89s0wz4g" }, "2": { defaultClass: "_89s0wz4h" }, "4": { defaultClass: "_89s0wz4i" }, "6": { defaultClass: "_89s0wz4j" }, "8": { defaultClass: "_89s0wz4k" }, "10": { defaultClass: "_89s0wz4l" }, "12": { defaultClass: "_89s0wz4m" }, "14": { defaultClass: "_89s0wz4n" }, "16": { defaultClass: "_89s0wz4o" }, "18": { defaultClass: "_89s0wz4p" }, "20": { defaultClass: "_89s0wz4q" }, "24": { defaultClass: "_89s0wz4r" }, "28": { defaultClass: "_89s0wz4s" }, "32": { defaultClass: "_89s0wz4t" }, "36": { defaultClass: "_89s0wz4u" }, "40": { defaultClass: "_89s0wz4v" }, "44": { defaultClass: "_89s0wz4w" }, "48": { defaultClass: "_89s0wz4x" }, "56": { defaultClass: "_89s0wz4y" }, "64": { defaultClass: "_89s0wz4z" } } }, rowGap: { values: { "1": { defaultClass: "_89s0wz50" }, "2": { defaultClass: "_89s0wz51" }, "4": { defaultClass: "_89s0wz52" }, "6": { defaultClass: "_89s0wz53" }, "8": { defaultClass: "_89s0wz54" }, "10": { defaultClass: "_89s0wz55" }, "12": { defaultClass: "_89s0wz56" }, "14": { defaultClass: "_89s0wz57" }, "16": { defaultClass: "_89s0wz58" }, "18": { defaultClass: "_89s0wz59" }, "20": { defaultClass: "_89s0wz5a" }, "24": { defaultClass: "_89s0wz5b" }, "28": { defaultClass: "_89s0wz5c" }, "32": { defaultClass: "_89s0wz5d" }, "36": { defaultClass: "_89s0wz5e" }, "40": { defaultClass: "_89s0wz5f" }, "44": { defaultClass: "_89s0wz5g" }, "48": { defaultClass: "_89s0wz5h" }, "56": { defaultClass: "_89s0wz5i" }, "64": { defaultClass: "_89s0wz5j" } } }, columnGap: { values: { "1": { defaultClass: "_89s0wz5k" }, "2": { defaultClass: "_89s0wz5l" }, "4": { defaultClass: "_89s0wz5m" }, "6": { defaultClass: "_89s0wz5n" }, "8": { defaultClass: "_89s0wz5o" }, "10": { defaultClass: "_89s0wz5p" }, "12": { defaultClass: "_89s0wz5q" }, "14": { defaultClass: "_89s0wz5r" }, "16": { defaultClass: "_89s0wz5s" }, "18": { defaultClass: "_89s0wz5t" }, "20": { defaultClass: "_89s0wz5u" }, "24": { defaultClass: "_89s0wz5v" }, "28": { defaultClass: "_89s0wz5w" }, "32": { defaultClass: "_89s0wz5x" }, "36": { defaultClass: "_89s0wz5y" }, "40": { defaultClass: "_89s0wz5z" }, "44": { defaultClass: "_89s0wz60" }, "48": { defaultClass: "_89s0wz61" }, "56": { defaultClass: "_89s0wz62" }, "64": { defaultClass: "_89s0wz63" } } } } });

// src/style/color/sprinkles.css.ts
var import_createRuntimeSprinkles3 = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");
var colorProperties = { conditions: void 0, styles: { color: { values: { black: { defaultClass: "_1rmst080" }, white: { defaultClass: "_1rmst081" }, opacityBlack50: { defaultClass: "_1rmst082" }, opacityBlack100: { defaultClass: "_1rmst083" }, opacityBlack200: { defaultClass: "_1rmst084" }, opacityBlack300: { defaultClass: "_1rmst085" }, opacityBlack400: { defaultClass: "_1rmst086" }, opacityBlack500: { defaultClass: "_1rmst087" }, opacityBlack600: { defaultClass: "_1rmst088" }, opacityBlack700: { defaultClass: "_1rmst089" }, opacityBlack800: { defaultClass: "_1rmst08a" }, opacityBlack900: { defaultClass: "_1rmst08b" }, opacityBlack950: { defaultClass: "_1rmst08c" }, opacityWhite50: { defaultClass: "_1rmst08d" }, opacityWhite100: { defaultClass: "_1rmst08e" }, opacityWhite200: { defaultClass: "_1rmst08f" }, opacityWhite300: { defaultClass: "_1rmst08g" }, opacityWhite400: { defaultClass: "_1rmst08h" }, opacityWhite500: { defaultClass: "_1rmst08i" }, opacityWhite600: { defaultClass: "_1rmst08j" }, opacityWhite700: { defaultClass: "_1rmst08k" }, opacityWhite800: { defaultClass: "_1rmst08l" }, opacityWhite900: { defaultClass: "_1rmst08m" }, opacityWhite950: { defaultClass: "_1rmst08n" }, blue10: { defaultClass: "_1rmst08o" }, blue50: { defaultClass: "_1rmst08p" }, blue100: { defaultClass: "_1rmst08q" }, blue200: { defaultClass: "_1rmst08r" }, blue300: { defaultClass: "_1rmst08s" }, blue400: { defaultClass: "_1rmst08t" }, blue500: { defaultClass: "_1rmst08u" }, blue600: { defaultClass: "_1rmst08v" }, blue700: { defaultClass: "_1rmst08w" }, blue800: { defaultClass: "_1rmst08x" }, blue900: { defaultClass: "_1rmst08y" }, blue950: { defaultClass: "_1rmst08z" }, blue990: { defaultClass: "_1rmst0810" }, green10: { defaultClass: "_1rmst0811" }, green50: { defaultClass: "_1rmst0812" }, green100: { defaultClass: "_1rmst0813" }, green200: { defaultClass: "_1rmst0814" }, green300: { defaultClass: "_1rmst0815" }, green400: { defaultClass: "_1rmst0816" }, green500: { defaultClass: "_1rmst0817" }, green600: { defaultClass: "_1rmst0818" }, green700: { defaultClass: "_1rmst0819" }, green800: { defaultClass: "_1rmst081a" }, green900: { defaultClass: "_1rmst081b" }, green950: { defaultClass: "_1rmst081c" }, green990: { defaultClass: "_1rmst081d" }, pink10: { defaultClass: "_1rmst081e" }, pink50: { defaultClass: "_1rmst081f" }, pink100: { defaultClass: "_1rmst081g" }, pink200: { defaultClass: "_1rmst081h" }, pink300: { defaultClass: "_1rmst081i" }, pink400: { defaultClass: "_1rmst081j" }, pink500: { defaultClass: "_1rmst081k" }, pink600: { defaultClass: "_1rmst081l" }, pink700: { defaultClass: "_1rmst081m" }, pink800: { defaultClass: "_1rmst081n" }, pink900: { defaultClass: "_1rmst081o" }, pink950: { defaultClass: "_1rmst081p" }, pink990: { defaultClass: "_1rmst081q" }, orange10: { defaultClass: "_1rmst081r" }, orange50: { defaultClass: "_1rmst081s" }, orange100: { defaultClass: "_1rmst081t" }, orange200: { defaultClass: "_1rmst081u" }, orange300: { defaultClass: "_1rmst081v" }, orange400: { defaultClass: "_1rmst081w" }, orange500: { defaultClass: "_1rmst081x" }, orange600: { defaultClass: "_1rmst081y" }, orange700: { defaultClass: "_1rmst081z" }, orange800: { defaultClass: "_1rmst0820" }, orange900: { defaultClass: "_1rmst0821" }, orange950: { defaultClass: "_1rmst0822" }, orange990: { defaultClass: "_1rmst0823" }, gray10: { defaultClass: "_1rmst0824" }, gray50: { defaultClass: "_1rmst0825" }, gray100: { defaultClass: "_1rmst0826" }, gray200: { defaultClass: "_1rmst0827" }, gray300: { defaultClass: "_1rmst0828" }, gray400: { defaultClass: "_1rmst0829" }, gray500: { defaultClass: "_1rmst082a" }, gray600: { defaultClass: "_1rmst082b" }, gray700: { defaultClass: "_1rmst082c" }, gray800: { defaultClass: "_1rmst082d" }, gray900: { defaultClass: "_1rmst082e" }, gray950: { defaultClass: "_1rmst082f" }, gray990: { defaultClass: "_1rmst082g" }, coolGray10: { defaultClass: "_1rmst082h" }, coolGray50: { defaultClass: "_1rmst082i" }, coolGray100: { defaultClass: "_1rmst082j" }, coolGray200: { defaultClass: "_1rmst082k" }, coolGray300: { defaultClass: "_1rmst082l" }, coolGray400: { defaultClass: "_1rmst082m" }, coolGray500: { defaultClass: "_1rmst082n" }, coolGray600: { defaultClass: "_1rmst082o" }, coolGray700: { defaultClass: "_1rmst082p" }, coolGray800: { defaultClass: "_1rmst082q" }, coolGray900: { defaultClass: "_1rmst082r" }, coolGray950: { defaultClass: "_1rmst082s" }, coolGray990: { defaultClass: "_1rmst082t" }, blueGray10: { defaultClass: "_1rmst082u" }, blueGray50: { defaultClass: "_1rmst082v" }, blueGray100: { defaultClass: "_1rmst082w" }, blueGray200: { defaultClass: "_1rmst082x" }, blueGray300: { defaultClass: "_1rmst082y" }, blueGray400: { defaultClass: "_1rmst082z" }, blueGray500: { defaultClass: "_1rmst0830" }, blueGray600: { defaultClass: "_1rmst0831" }, blueGray700: { defaultClass: "_1rmst0832" }, blueGray800: { defaultClass: "_1rmst0833" }, blueGray900: { defaultClass: "_1rmst0834" }, blueGray950: { defaultClass: "_1rmst0835" }, blueGray990: { defaultClass: "_1rmst0836" }, backgroundNormalPrimary: { defaultClass: "_1rmst0837" }, backgroundNormalSecondary: { defaultClass: "_1rmst0838" }, backgroundElevatedPrimary: { defaultClass: "_1rmst0839" }, backgroundElevatedSecondary: { defaultClass: "_1rmst083a" }, textNormal: { defaultClass: "_1rmst083b" }, textAssistive: { defaultClass: "_1rmst083c" }, textAlternative: { defaultClass: "_1rmst083d" }, textStrong: { defaultClass: "_1rmst083e" }, uiPrimaryNormal: { defaultClass: "_1rmst083f" }, uiAccentNormal: { defaultClass: "_1rmst083g" }, uiStateNormal: { defaultClass: "_1rmst083h" } } }, backgroundColor: { values: { black: { defaultClass: "_1rmst083i" }, white: { defaultClass: "_1rmst083j" }, opacityBlack50: { defaultClass: "_1rmst083k" }, opacityBlack100: { defaultClass: "_1rmst083l" }, opacityBlack200: { defaultClass: "_1rmst083m" }, opacityBlack300: { defaultClass: "_1rmst083n" }, opacityBlack400: { defaultClass: "_1rmst083o" }, opacityBlack500: { defaultClass: "_1rmst083p" }, opacityBlack600: { defaultClass: "_1rmst083q" }, opacityBlack700: { defaultClass: "_1rmst083r" }, opacityBlack800: { defaultClass: "_1rmst083s" }, opacityBlack900: { defaultClass: "_1rmst083t" }, opacityBlack950: { defaultClass: "_1rmst083u" }, opacityWhite50: { defaultClass: "_1rmst083v" }, opacityWhite100: { defaultClass: "_1rmst083w" }, opacityWhite200: { defaultClass: "_1rmst083x" }, opacityWhite300: { defaultClass: "_1rmst083y" }, opacityWhite400: { defaultClass: "_1rmst083z" }, opacityWhite500: { defaultClass: "_1rmst0840" }, opacityWhite600: { defaultClass: "_1rmst0841" }, opacityWhite700: { defaultClass: "_1rmst0842" }, opacityWhite800: { defaultClass: "_1rmst0843" }, opacityWhite900: { defaultClass: "_1rmst0844" }, opacityWhite950: { defaultClass: "_1rmst0845" }, blue10: { defaultClass: "_1rmst0846" }, blue50: { defaultClass: "_1rmst0847" }, blue100: { defaultClass: "_1rmst0848" }, blue200: { defaultClass: "_1rmst0849" }, blue300: { defaultClass: "_1rmst084a" }, blue400: { defaultClass: "_1rmst084b" }, blue500: { defaultClass: "_1rmst084c" }, blue600: { defaultClass: "_1rmst084d" }, blue700: { defaultClass: "_1rmst084e" }, blue800: { defaultClass: "_1rmst084f" }, blue900: { defaultClass: "_1rmst084g" }, blue950: { defaultClass: "_1rmst084h" }, blue990: { defaultClass: "_1rmst084i" }, green10: { defaultClass: "_1rmst084j" }, green50: { defaultClass: "_1rmst084k" }, green100: { defaultClass: "_1rmst084l" }, green200: { defaultClass: "_1rmst084m" }, green300: { defaultClass: "_1rmst084n" }, green400: { defaultClass: "_1rmst084o" }, green500: { defaultClass: "_1rmst084p" }, green600: { defaultClass: "_1rmst084q" }, green700: { defaultClass: "_1rmst084r" }, green800: { defaultClass: "_1rmst084s" }, green900: { defaultClass: "_1rmst084t" }, green950: { defaultClass: "_1rmst084u" }, green990: { defaultClass: "_1rmst084v" }, pink10: { defaultClass: "_1rmst084w" }, pink50: { defaultClass: "_1rmst084x" }, pink100: { defaultClass: "_1rmst084y" }, pink200: { defaultClass: "_1rmst084z" }, pink300: { defaultClass: "_1rmst0850" }, pink400: { defaultClass: "_1rmst0851" }, pink500: { defaultClass: "_1rmst0852" }, pink600: { defaultClass: "_1rmst0853" }, pink700: { defaultClass: "_1rmst0854" }, pink800: { defaultClass: "_1rmst0855" }, pink900: { defaultClass: "_1rmst0856" }, pink950: { defaultClass: "_1rmst0857" }, pink990: { defaultClass: "_1rmst0858" }, orange10: { defaultClass: "_1rmst0859" }, orange50: { defaultClass: "_1rmst085a" }, orange100: { defaultClass: "_1rmst085b" }, orange200: { defaultClass: "_1rmst085c" }, orange300: { defaultClass: "_1rmst085d" }, orange400: { defaultClass: "_1rmst085e" }, orange500: { defaultClass: "_1rmst085f" }, orange600: { defaultClass: "_1rmst085g" }, orange700: { defaultClass: "_1rmst085h" }, orange800: { defaultClass: "_1rmst085i" }, orange900: { defaultClass: "_1rmst085j" }, orange950: { defaultClass: "_1rmst085k" }, orange990: { defaultClass: "_1rmst085l" }, gray10: { defaultClass: "_1rmst085m" }, gray50: { defaultClass: "_1rmst085n" }, gray100: { defaultClass: "_1rmst085o" }, gray200: { defaultClass: "_1rmst085p" }, gray300: { defaultClass: "_1rmst085q" }, gray400: { defaultClass: "_1rmst085r" }, gray500: { defaultClass: "_1rmst085s" }, gray600: { defaultClass: "_1rmst085t" }, gray700: { defaultClass: "_1rmst085u" }, gray800: { defaultClass: "_1rmst085v" }, gray900: { defaultClass: "_1rmst085w" }, gray950: { defaultClass: "_1rmst085x" }, gray990: { defaultClass: "_1rmst085y" }, coolGray10: { defaultClass: "_1rmst085z" }, coolGray50: { defaultClass: "_1rmst0860" }, coolGray100: { defaultClass: "_1rmst0861" }, coolGray200: { defaultClass: "_1rmst0862" }, coolGray300: { defaultClass: "_1rmst0863" }, coolGray400: { defaultClass: "_1rmst0864" }, coolGray500: { defaultClass: "_1rmst0865" }, coolGray600: { defaultClass: "_1rmst0866" }, coolGray700: { defaultClass: "_1rmst0867" }, coolGray800: { defaultClass: "_1rmst0868" }, coolGray900: { defaultClass: "_1rmst0869" }, coolGray950: { defaultClass: "_1rmst086a" }, coolGray990: { defaultClass: "_1rmst086b" }, blueGray10: { defaultClass: "_1rmst086c" }, blueGray50: { defaultClass: "_1rmst086d" }, blueGray100: { defaultClass: "_1rmst086e" }, blueGray200: { defaultClass: "_1rmst086f" }, blueGray300: { defaultClass: "_1rmst086g" }, blueGray400: { defaultClass: "_1rmst086h" }, blueGray500: { defaultClass: "_1rmst086i" }, blueGray600: { defaultClass: "_1rmst086j" }, blueGray700: { defaultClass: "_1rmst086k" }, blueGray800: { defaultClass: "_1rmst086l" }, blueGray900: { defaultClass: "_1rmst086m" }, blueGray950: { defaultClass: "_1rmst086n" }, blueGray990: { defaultClass: "_1rmst086o" }, backgroundNormalPrimary: { defaultClass: "_1rmst086p" }, backgroundNormalSecondary: { defaultClass: "_1rmst086q" }, backgroundElevatedPrimary: { defaultClass: "_1rmst086r" }, backgroundElevatedSecondary: { defaultClass: "_1rmst086s" }, textNormal: { defaultClass: "_1rmst086t" }, textAssistive: { defaultClass: "_1rmst086u" }, textAlternative: { defaultClass: "_1rmst086v" }, textStrong: { defaultClass: "_1rmst086w" }, uiPrimaryNormal: { defaultClass: "_1rmst086x" }, uiAccentNormal: { defaultClass: "_1rmst086y" }, uiStateNormal: { defaultClass: "_1rmst086z" } } } } };
var colorSprinkles = (0, import_createRuntimeSprinkles3.createSprinkles)(colorProperties);

// src/style/typography/recipes.css.ts
var import_createRuntimeFn = require("@vanilla-extract/recipes/createRuntimeFn");
var typographyRecipe = (0, import_createRuntimeFn.createRuntimeFn)({ defaultClassName: "i0cv4o0", variantClassNames: { textType: { display1: "i0cv4o1", display2: "i0cv4o2", title1: "i0cv4o3", title2: "i0cv4o4", title3: "i0cv4o5", heading1: "i0cv4o6", heading2: "i0cv4o7", headline: "i0cv4o8", body1: "i0cv4o9", body2: "i0cv4oa", body3: "i0cv4ob", label: "i0cv4oc", footnote: "i0cv4od", caption: "i0cv4oe" }, textMode: { "default": "i0cv4of", reading: "i0cv4og", bold: "i0cv4oh" }, textAlign: { left: "i0cv4oi", center: "i0cv4oj", right: "i0cv4ok", justify: "i0cv4ol" } }, defaultVariants: {}, compoundVariants: [[{ textType: "body1", textMode: "reading" }, "i0cv4om"], [{ textType: "body2", textMode: "reading" }, "i0cv4on"], [{ textType: "body3", textMode: "reading" }, "i0cv4oo"], [{ textType: "label", textMode: "reading" }, "i0cv4op"], [{ textType: "display1", textMode: "bold" }, "i0cv4oq"], [{ textType: "display2", textMode: "bold" }, "i0cv4or"], [{ textType: "title1", textMode: "bold" }, "i0cv4os"], [{ textType: "title2", textMode: "bold" }, "i0cv4ot"], [{ textType: "title3", textMode: "bold" }, "i0cv4ou"], [{ textType: "body1", textMode: "bold" }, "i0cv4ov"], [{ textType: "body2", textMode: "bold" }, "i0cv4ow"], [{ textType: "body3", textMode: "bold" }, "i0cv4ox"], [{ textType: "caption", textMode: "bold" }, "i0cv4oy"], [{ textType: "footnote", textMode: "bold" }, "i0cv4oz"], [{ textType: "heading1", textMode: "bold" }, "i0cv4o10"], [{ textType: "heading2", textMode: "bold" }, "i0cv4o11"], [{ textType: "headline", textMode: "bold" }, "i0cv4o12"], [{ textType: "label", textMode: "bold" }, "i0cv4o13"]] });

// src/style/border/sprinkles.css.ts
var import_createRuntimeSprinkles4 = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");
var borderSprinkles = (0, import_createRuntimeSprinkles4.createSprinkles)({ conditions: void 0, styles: { borderColor: { values: { black: { defaultClass: "_1bfxj7r0" }, white: { defaultClass: "_1bfxj7r1" }, opacityBlack50: { defaultClass: "_1bfxj7r2" }, opacityBlack100: { defaultClass: "_1bfxj7r3" }, opacityBlack200: { defaultClass: "_1bfxj7r4" }, opacityBlack300: { defaultClass: "_1bfxj7r5" }, opacityBlack400: { defaultClass: "_1bfxj7r6" }, opacityBlack500: { defaultClass: "_1bfxj7r7" }, opacityBlack600: { defaultClass: "_1bfxj7r8" }, opacityBlack700: { defaultClass: "_1bfxj7r9" }, opacityBlack800: { defaultClass: "_1bfxj7ra" }, opacityBlack900: { defaultClass: "_1bfxj7rb" }, opacityBlack950: { defaultClass: "_1bfxj7rc" }, opacityWhite50: { defaultClass: "_1bfxj7rd" }, opacityWhite100: { defaultClass: "_1bfxj7re" }, opacityWhite200: { defaultClass: "_1bfxj7rf" }, opacityWhite300: { defaultClass: "_1bfxj7rg" }, opacityWhite400: { defaultClass: "_1bfxj7rh" }, opacityWhite500: { defaultClass: "_1bfxj7ri" }, opacityWhite600: { defaultClass: "_1bfxj7rj" }, opacityWhite700: { defaultClass: "_1bfxj7rk" }, opacityWhite800: { defaultClass: "_1bfxj7rl" }, opacityWhite900: { defaultClass: "_1bfxj7rm" }, opacityWhite950: { defaultClass: "_1bfxj7rn" }, blue10: { defaultClass: "_1bfxj7ro" }, blue50: { defaultClass: "_1bfxj7rp" }, blue100: { defaultClass: "_1bfxj7rq" }, blue200: { defaultClass: "_1bfxj7rr" }, blue300: { defaultClass: "_1bfxj7rs" }, blue400: { defaultClass: "_1bfxj7rt" }, blue500: { defaultClass: "_1bfxj7ru" }, blue600: { defaultClass: "_1bfxj7rv" }, blue700: { defaultClass: "_1bfxj7rw" }, blue800: { defaultClass: "_1bfxj7rx" }, blue900: { defaultClass: "_1bfxj7ry" }, blue950: { defaultClass: "_1bfxj7rz" }, blue990: { defaultClass: "_1bfxj7r10" }, green10: { defaultClass: "_1bfxj7r11" }, green50: { defaultClass: "_1bfxj7r12" }, green100: { defaultClass: "_1bfxj7r13" }, green200: { defaultClass: "_1bfxj7r14" }, green300: { defaultClass: "_1bfxj7r15" }, green400: { defaultClass: "_1bfxj7r16" }, green500: { defaultClass: "_1bfxj7r17" }, green600: { defaultClass: "_1bfxj7r18" }, green700: { defaultClass: "_1bfxj7r19" }, green800: { defaultClass: "_1bfxj7r1a" }, green900: { defaultClass: "_1bfxj7r1b" }, green950: { defaultClass: "_1bfxj7r1c" }, green990: { defaultClass: "_1bfxj7r1d" }, pink10: { defaultClass: "_1bfxj7r1e" }, pink50: { defaultClass: "_1bfxj7r1f" }, pink100: { defaultClass: "_1bfxj7r1g" }, pink200: { defaultClass: "_1bfxj7r1h" }, pink300: { defaultClass: "_1bfxj7r1i" }, pink400: { defaultClass: "_1bfxj7r1j" }, pink500: { defaultClass: "_1bfxj7r1k" }, pink600: { defaultClass: "_1bfxj7r1l" }, pink700: { defaultClass: "_1bfxj7r1m" }, pink800: { defaultClass: "_1bfxj7r1n" }, pink900: { defaultClass: "_1bfxj7r1o" }, pink950: { defaultClass: "_1bfxj7r1p" }, pink990: { defaultClass: "_1bfxj7r1q" }, orange10: { defaultClass: "_1bfxj7r1r" }, orange50: { defaultClass: "_1bfxj7r1s" }, orange100: { defaultClass: "_1bfxj7r1t" }, orange200: { defaultClass: "_1bfxj7r1u" }, orange300: { defaultClass: "_1bfxj7r1v" }, orange400: { defaultClass: "_1bfxj7r1w" }, orange500: { defaultClass: "_1bfxj7r1x" }, orange600: { defaultClass: "_1bfxj7r1y" }, orange700: { defaultClass: "_1bfxj7r1z" }, orange800: { defaultClass: "_1bfxj7r20" }, orange900: { defaultClass: "_1bfxj7r21" }, orange950: { defaultClass: "_1bfxj7r22" }, orange990: { defaultClass: "_1bfxj7r23" }, gray10: { defaultClass: "_1bfxj7r24" }, gray50: { defaultClass: "_1bfxj7r25" }, gray100: { defaultClass: "_1bfxj7r26" }, gray200: { defaultClass: "_1bfxj7r27" }, gray300: { defaultClass: "_1bfxj7r28" }, gray400: { defaultClass: "_1bfxj7r29" }, gray500: { defaultClass: "_1bfxj7r2a" }, gray600: { defaultClass: "_1bfxj7r2b" }, gray700: { defaultClass: "_1bfxj7r2c" }, gray800: { defaultClass: "_1bfxj7r2d" }, gray900: { defaultClass: "_1bfxj7r2e" }, gray950: { defaultClass: "_1bfxj7r2f" }, gray990: { defaultClass: "_1bfxj7r2g" }, coolGray10: { defaultClass: "_1bfxj7r2h" }, coolGray50: { defaultClass: "_1bfxj7r2i" }, coolGray100: { defaultClass: "_1bfxj7r2j" }, coolGray200: { defaultClass: "_1bfxj7r2k" }, coolGray300: { defaultClass: "_1bfxj7r2l" }, coolGray400: { defaultClass: "_1bfxj7r2m" }, coolGray500: { defaultClass: "_1bfxj7r2n" }, coolGray600: { defaultClass: "_1bfxj7r2o" }, coolGray700: { defaultClass: "_1bfxj7r2p" }, coolGray800: { defaultClass: "_1bfxj7r2q" }, coolGray900: { defaultClass: "_1bfxj7r2r" }, coolGray950: { defaultClass: "_1bfxj7r2s" }, coolGray990: { defaultClass: "_1bfxj7r2t" }, blueGray10: { defaultClass: "_1bfxj7r2u" }, blueGray50: { defaultClass: "_1bfxj7r2v" }, blueGray100: { defaultClass: "_1bfxj7r2w" }, blueGray200: { defaultClass: "_1bfxj7r2x" }, blueGray300: { defaultClass: "_1bfxj7r2y" }, blueGray400: { defaultClass: "_1bfxj7r2z" }, blueGray500: { defaultClass: "_1bfxj7r30" }, blueGray600: { defaultClass: "_1bfxj7r31" }, blueGray700: { defaultClass: "_1bfxj7r32" }, blueGray800: { defaultClass: "_1bfxj7r33" }, blueGray900: { defaultClass: "_1bfxj7r34" }, blueGray950: { defaultClass: "_1bfxj7r35" }, blueGray990: { defaultClass: "_1bfxj7r36" }, backgroundNormalPrimary: { defaultClass: "_1bfxj7r37" }, backgroundNormalSecondary: { defaultClass: "_1bfxj7r38" }, backgroundElevatedPrimary: { defaultClass: "_1bfxj7r39" }, backgroundElevatedSecondary: { defaultClass: "_1bfxj7r3a" }, textNormal: { defaultClass: "_1bfxj7r3b" }, textAssistive: { defaultClass: "_1bfxj7r3c" }, textAlternative: { defaultClass: "_1bfxj7r3d" }, textStrong: { defaultClass: "_1bfxj7r3e" }, uiPrimaryNormal: { defaultClass: "_1bfxj7r3f" }, uiAccentNormal: { defaultClass: "_1bfxj7r3g" }, uiStateNormal: { defaultClass: "_1bfxj7r3h" } } }, borderRadius: { values: { none: { defaultClass: "_1bfxj7r3i" }, xs: { defaultClass: "_1bfxj7r3j" }, s: { defaultClass: "_1bfxj7r3k" }, sm: { defaultClass: "_1bfxj7r3l" }, m: { defaultClass: "_1bfxj7r3m" }, ml: { defaultClass: "_1bfxj7r3n" }, base: { defaultClass: "_1bfxj7r3o" }, l: { defaultClass: "_1bfxj7r3p" }, xl: { defaultClass: "_1bfxj7r3q" }, "2xl": { defaultClass: "_1bfxj7r3r" }, round: { defaultClass: "_1bfxj7r3s" } } }, borderStyle: { values: { none: { defaultClass: "_1bfxj7r3t" }, solid: { defaultClass: "_1bfxj7r3u" }, dashed: { defaultClass: "_1bfxj7r3v" }, dotted: { defaultClass: "_1bfxj7r3w" }, "double": { defaultClass: "_1bfxj7r3x" } } }, borderWidth: { values: { "1": { defaultClass: "_1bfxj7r3y" }, "2": { defaultClass: "_1bfxj7r3z" }, "4": { defaultClass: "_1bfxj7r40" }, "6": { defaultClass: "_1bfxj7r41" }, "8": { defaultClass: "_1bfxj7r42" }, "10": { defaultClass: "_1bfxj7r43" }, "12": { defaultClass: "_1bfxj7r44" }, "14": { defaultClass: "_1bfxj7r45" }, "16": { defaultClass: "_1bfxj7r46" }, "18": { defaultClass: "_1bfxj7r47" }, "20": { defaultClass: "_1bfxj7r48" }, "24": { defaultClass: "_1bfxj7r49" }, "28": { defaultClass: "_1bfxj7r4a" }, "32": { defaultClass: "_1bfxj7r4b" }, "36": { defaultClass: "_1bfxj7r4c" }, "40": { defaultClass: "_1bfxj7r4d" }, "44": { defaultClass: "_1bfxj7r4e" }, "48": { defaultClass: "_1bfxj7r4f" }, "56": { defaultClass: "_1bfxj7r4g" }, "64": { defaultClass: "_1bfxj7r4h" } } }, borderBottomColor: { values: { black: { defaultClass: "_1bfxj7r4i" }, white: { defaultClass: "_1bfxj7r4j" }, opacityBlack50: { defaultClass: "_1bfxj7r4k" }, opacityBlack100: { defaultClass: "_1bfxj7r4l" }, opacityBlack200: { defaultClass: "_1bfxj7r4m" }, opacityBlack300: { defaultClass: "_1bfxj7r4n" }, opacityBlack400: { defaultClass: "_1bfxj7r4o" }, opacityBlack500: { defaultClass: "_1bfxj7r4p" }, opacityBlack600: { defaultClass: "_1bfxj7r4q" }, opacityBlack700: { defaultClass: "_1bfxj7r4r" }, opacityBlack800: { defaultClass: "_1bfxj7r4s" }, opacityBlack900: { defaultClass: "_1bfxj7r4t" }, opacityBlack950: { defaultClass: "_1bfxj7r4u" }, opacityWhite50: { defaultClass: "_1bfxj7r4v" }, opacityWhite100: { defaultClass: "_1bfxj7r4w" }, opacityWhite200: { defaultClass: "_1bfxj7r4x" }, opacityWhite300: { defaultClass: "_1bfxj7r4y" }, opacityWhite400: { defaultClass: "_1bfxj7r4z" }, opacityWhite500: { defaultClass: "_1bfxj7r50" }, opacityWhite600: { defaultClass: "_1bfxj7r51" }, opacityWhite700: { defaultClass: "_1bfxj7r52" }, opacityWhite800: { defaultClass: "_1bfxj7r53" }, opacityWhite900: { defaultClass: "_1bfxj7r54" }, opacityWhite950: { defaultClass: "_1bfxj7r55" }, blue10: { defaultClass: "_1bfxj7r56" }, blue50: { defaultClass: "_1bfxj7r57" }, blue100: { defaultClass: "_1bfxj7r58" }, blue200: { defaultClass: "_1bfxj7r59" }, blue300: { defaultClass: "_1bfxj7r5a" }, blue400: { defaultClass: "_1bfxj7r5b" }, blue500: { defaultClass: "_1bfxj7r5c" }, blue600: { defaultClass: "_1bfxj7r5d" }, blue700: { defaultClass: "_1bfxj7r5e" }, blue800: { defaultClass: "_1bfxj7r5f" }, blue900: { defaultClass: "_1bfxj7r5g" }, blue950: { defaultClass: "_1bfxj7r5h" }, blue990: { defaultClass: "_1bfxj7r5i" }, green10: { defaultClass: "_1bfxj7r5j" }, green50: { defaultClass: "_1bfxj7r5k" }, green100: { defaultClass: "_1bfxj7r5l" }, green200: { defaultClass: "_1bfxj7r5m" }, green300: { defaultClass: "_1bfxj7r5n" }, green400: { defaultClass: "_1bfxj7r5o" }, green500: { defaultClass: "_1bfxj7r5p" }, green600: { defaultClass: "_1bfxj7r5q" }, green700: { defaultClass: "_1bfxj7r5r" }, green800: { defaultClass: "_1bfxj7r5s" }, green900: { defaultClass: "_1bfxj7r5t" }, green950: { defaultClass: "_1bfxj7r5u" }, green990: { defaultClass: "_1bfxj7r5v" }, pink10: { defaultClass: "_1bfxj7r5w" }, pink50: { defaultClass: "_1bfxj7r5x" }, pink100: { defaultClass: "_1bfxj7r5y" }, pink200: { defaultClass: "_1bfxj7r5z" }, pink300: { defaultClass: "_1bfxj7r60" }, pink400: { defaultClass: "_1bfxj7r61" }, pink500: { defaultClass: "_1bfxj7r62" }, pink600: { defaultClass: "_1bfxj7r63" }, pink700: { defaultClass: "_1bfxj7r64" }, pink800: { defaultClass: "_1bfxj7r65" }, pink900: { defaultClass: "_1bfxj7r66" }, pink950: { defaultClass: "_1bfxj7r67" }, pink990: { defaultClass: "_1bfxj7r68" }, orange10: { defaultClass: "_1bfxj7r69" }, orange50: { defaultClass: "_1bfxj7r6a" }, orange100: { defaultClass: "_1bfxj7r6b" }, orange200: { defaultClass: "_1bfxj7r6c" }, orange300: { defaultClass: "_1bfxj7r6d" }, orange400: { defaultClass: "_1bfxj7r6e" }, orange500: { defaultClass: "_1bfxj7r6f" }, orange600: { defaultClass: "_1bfxj7r6g" }, orange700: { defaultClass: "_1bfxj7r6h" }, orange800: { defaultClass: "_1bfxj7r6i" }, orange900: { defaultClass: "_1bfxj7r6j" }, orange950: { defaultClass: "_1bfxj7r6k" }, orange990: { defaultClass: "_1bfxj7r6l" }, gray10: { defaultClass: "_1bfxj7r6m" }, gray50: { defaultClass: "_1bfxj7r6n" }, gray100: { defaultClass: "_1bfxj7r6o" }, gray200: { defaultClass: "_1bfxj7r6p" }, gray300: { defaultClass: "_1bfxj7r6q" }, gray400: { defaultClass: "_1bfxj7r6r" }, gray500: { defaultClass: "_1bfxj7r6s" }, gray600: { defaultClass: "_1bfxj7r6t" }, gray700: { defaultClass: "_1bfxj7r6u" }, gray800: { defaultClass: "_1bfxj7r6v" }, gray900: { defaultClass: "_1bfxj7r6w" }, gray950: { defaultClass: "_1bfxj7r6x" }, gray990: { defaultClass: "_1bfxj7r6y" }, coolGray10: { defaultClass: "_1bfxj7r6z" }, coolGray50: { defaultClass: "_1bfxj7r70" }, coolGray100: { defaultClass: "_1bfxj7r71" }, coolGray200: { defaultClass: "_1bfxj7r72" }, coolGray300: { defaultClass: "_1bfxj7r73" }, coolGray400: { defaultClass: "_1bfxj7r74" }, coolGray500: { defaultClass: "_1bfxj7r75" }, coolGray600: { defaultClass: "_1bfxj7r76" }, coolGray700: { defaultClass: "_1bfxj7r77" }, coolGray800: { defaultClass: "_1bfxj7r78" }, coolGray900: { defaultClass: "_1bfxj7r79" }, coolGray950: { defaultClass: "_1bfxj7r7a" }, coolGray990: { defaultClass: "_1bfxj7r7b" }, blueGray10: { defaultClass: "_1bfxj7r7c" }, blueGray50: { defaultClass: "_1bfxj7r7d" }, blueGray100: { defaultClass: "_1bfxj7r7e" }, blueGray200: { defaultClass: "_1bfxj7r7f" }, blueGray300: { defaultClass: "_1bfxj7r7g" }, blueGray400: { defaultClass: "_1bfxj7r7h" }, blueGray500: { defaultClass: "_1bfxj7r7i" }, blueGray600: { defaultClass: "_1bfxj7r7j" }, blueGray700: { defaultClass: "_1bfxj7r7k" }, blueGray800: { defaultClass: "_1bfxj7r7l" }, blueGray900: { defaultClass: "_1bfxj7r7m" }, blueGray950: { defaultClass: "_1bfxj7r7n" }, blueGray990: { defaultClass: "_1bfxj7r7o" }, backgroundNormalPrimary: { defaultClass: "_1bfxj7r7p" }, backgroundNormalSecondary: { defaultClass: "_1bfxj7r7q" }, backgroundElevatedPrimary: { defaultClass: "_1bfxj7r7r" }, backgroundElevatedSecondary: { defaultClass: "_1bfxj7r7s" }, textNormal: { defaultClass: "_1bfxj7r7t" }, textAssistive: { defaultClass: "_1bfxj7r7u" }, textAlternative: { defaultClass: "_1bfxj7r7v" }, textStrong: { defaultClass: "_1bfxj7r7w" }, uiPrimaryNormal: { defaultClass: "_1bfxj7r7x" }, uiAccentNormal: { defaultClass: "_1bfxj7r7y" }, uiStateNormal: { defaultClass: "_1bfxj7r7z" } } }, borderLeftColor: { values: { black: { defaultClass: "_1bfxj7r80" }, white: { defaultClass: "_1bfxj7r81" }, opacityBlack50: { defaultClass: "_1bfxj7r82" }, opacityBlack100: { defaultClass: "_1bfxj7r83" }, opacityBlack200: { defaultClass: "_1bfxj7r84" }, opacityBlack300: { defaultClass: "_1bfxj7r85" }, opacityBlack400: { defaultClass: "_1bfxj7r86" }, opacityBlack500: { defaultClass: "_1bfxj7r87" }, opacityBlack600: { defaultClass: "_1bfxj7r88" }, opacityBlack700: { defaultClass: "_1bfxj7r89" }, opacityBlack800: { defaultClass: "_1bfxj7r8a" }, opacityBlack900: { defaultClass: "_1bfxj7r8b" }, opacityBlack950: { defaultClass: "_1bfxj7r8c" }, opacityWhite50: { defaultClass: "_1bfxj7r8d" }, opacityWhite100: { defaultClass: "_1bfxj7r8e" }, opacityWhite200: { defaultClass: "_1bfxj7r8f" }, opacityWhite300: { defaultClass: "_1bfxj7r8g" }, opacityWhite400: { defaultClass: "_1bfxj7r8h" }, opacityWhite500: { defaultClass: "_1bfxj7r8i" }, opacityWhite600: { defaultClass: "_1bfxj7r8j" }, opacityWhite700: { defaultClass: "_1bfxj7r8k" }, opacityWhite800: { defaultClass: "_1bfxj7r8l" }, opacityWhite900: { defaultClass: "_1bfxj7r8m" }, opacityWhite950: { defaultClass: "_1bfxj7r8n" }, blue10: { defaultClass: "_1bfxj7r8o" }, blue50: { defaultClass: "_1bfxj7r8p" }, blue100: { defaultClass: "_1bfxj7r8q" }, blue200: { defaultClass: "_1bfxj7r8r" }, blue300: { defaultClass: "_1bfxj7r8s" }, blue400: { defaultClass: "_1bfxj7r8t" }, blue500: { defaultClass: "_1bfxj7r8u" }, blue600: { defaultClass: "_1bfxj7r8v" }, blue700: { defaultClass: "_1bfxj7r8w" }, blue800: { defaultClass: "_1bfxj7r8x" }, blue900: { defaultClass: "_1bfxj7r8y" }, blue950: { defaultClass: "_1bfxj7r8z" }, blue990: { defaultClass: "_1bfxj7r90" }, green10: { defaultClass: "_1bfxj7r91" }, green50: { defaultClass: "_1bfxj7r92" }, green100: { defaultClass: "_1bfxj7r93" }, green200: { defaultClass: "_1bfxj7r94" }, green300: { defaultClass: "_1bfxj7r95" }, green400: { defaultClass: "_1bfxj7r96" }, green500: { defaultClass: "_1bfxj7r97" }, green600: { defaultClass: "_1bfxj7r98" }, green700: { defaultClass: "_1bfxj7r99" }, green800: { defaultClass: "_1bfxj7r9a" }, green900: { defaultClass: "_1bfxj7r9b" }, green950: { defaultClass: "_1bfxj7r9c" }, green990: { defaultClass: "_1bfxj7r9d" }, pink10: { defaultClass: "_1bfxj7r9e" }, pink50: { defaultClass: "_1bfxj7r9f" }, pink100: { defaultClass: "_1bfxj7r9g" }, pink200: { defaultClass: "_1bfxj7r9h" }, pink300: { defaultClass: "_1bfxj7r9i" }, pink400: { defaultClass: "_1bfxj7r9j" }, pink500: { defaultClass: "_1bfxj7r9k" }, pink600: { defaultClass: "_1bfxj7r9l" }, pink700: { defaultClass: "_1bfxj7r9m" }, pink800: { defaultClass: "_1bfxj7r9n" }, pink900: { defaultClass: "_1bfxj7r9o" }, pink950: { defaultClass: "_1bfxj7r9p" }, pink990: { defaultClass: "_1bfxj7r9q" }, orange10: { defaultClass: "_1bfxj7r9r" }, orange50: { defaultClass: "_1bfxj7r9s" }, orange100: { defaultClass: "_1bfxj7r9t" }, orange200: { defaultClass: "_1bfxj7r9u" }, orange300: { defaultClass: "_1bfxj7r9v" }, orange400: { defaultClass: "_1bfxj7r9w" }, orange500: { defaultClass: "_1bfxj7r9x" }, orange600: { defaultClass: "_1bfxj7r9y" }, orange700: { defaultClass: "_1bfxj7r9z" }, orange800: { defaultClass: "_1bfxj7ra0" }, orange900: { defaultClass: "_1bfxj7ra1" }, orange950: { defaultClass: "_1bfxj7ra2" }, orange990: { defaultClass: "_1bfxj7ra3" }, gray10: { defaultClass: "_1bfxj7ra4" }, gray50: { defaultClass: "_1bfxj7ra5" }, gray100: { defaultClass: "_1bfxj7ra6" }, gray200: { defaultClass: "_1bfxj7ra7" }, gray300: { defaultClass: "_1bfxj7ra8" }, gray400: { defaultClass: "_1bfxj7ra9" }, gray500: { defaultClass: "_1bfxj7raa" }, gray600: { defaultClass: "_1bfxj7rab" }, gray700: { defaultClass: "_1bfxj7rac" }, gray800: { defaultClass: "_1bfxj7rad" }, gray900: { defaultClass: "_1bfxj7rae" }, gray950: { defaultClass: "_1bfxj7raf" }, gray990: { defaultClass: "_1bfxj7rag" }, coolGray10: { defaultClass: "_1bfxj7rah" }, coolGray50: { defaultClass: "_1bfxj7rai" }, coolGray100: { defaultClass: "_1bfxj7raj" }, coolGray200: { defaultClass: "_1bfxj7rak" }, coolGray300: { defaultClass: "_1bfxj7ral" }, coolGray400: { defaultClass: "_1bfxj7ram" }, coolGray500: { defaultClass: "_1bfxj7ran" }, coolGray600: { defaultClass: "_1bfxj7rao" }, coolGray700: { defaultClass: "_1bfxj7rap" }, coolGray800: { defaultClass: "_1bfxj7raq" }, coolGray900: { defaultClass: "_1bfxj7rar" }, coolGray950: { defaultClass: "_1bfxj7ras" }, coolGray990: { defaultClass: "_1bfxj7rat" }, blueGray10: { defaultClass: "_1bfxj7rau" }, blueGray50: { defaultClass: "_1bfxj7rav" }, blueGray100: { defaultClass: "_1bfxj7raw" }, blueGray200: { defaultClass: "_1bfxj7rax" }, blueGray300: { defaultClass: "_1bfxj7ray" }, blueGray400: { defaultClass: "_1bfxj7raz" }, blueGray500: { defaultClass: "_1bfxj7rb0" }, blueGray600: { defaultClass: "_1bfxj7rb1" }, blueGray700: { defaultClass: "_1bfxj7rb2" }, blueGray800: { defaultClass: "_1bfxj7rb3" }, blueGray900: { defaultClass: "_1bfxj7rb4" }, blueGray950: { defaultClass: "_1bfxj7rb5" }, blueGray990: { defaultClass: "_1bfxj7rb6" }, backgroundNormalPrimary: { defaultClass: "_1bfxj7rb7" }, backgroundNormalSecondary: { defaultClass: "_1bfxj7rb8" }, backgroundElevatedPrimary: { defaultClass: "_1bfxj7rb9" }, backgroundElevatedSecondary: { defaultClass: "_1bfxj7rba" }, textNormal: { defaultClass: "_1bfxj7rbb" }, textAssistive: { defaultClass: "_1bfxj7rbc" }, textAlternative: { defaultClass: "_1bfxj7rbd" }, textStrong: { defaultClass: "_1bfxj7rbe" }, uiPrimaryNormal: { defaultClass: "_1bfxj7rbf" }, uiAccentNormal: { defaultClass: "_1bfxj7rbg" }, uiStateNormal: { defaultClass: "_1bfxj7rbh" } } }, borderRightColor: { values: { black: { defaultClass: "_1bfxj7rbi" }, white: { defaultClass: "_1bfxj7rbj" }, opacityBlack50: { defaultClass: "_1bfxj7rbk" }, opacityBlack100: { defaultClass: "_1bfxj7rbl" }, opacityBlack200: { defaultClass: "_1bfxj7rbm" }, opacityBlack300: { defaultClass: "_1bfxj7rbn" }, opacityBlack400: { defaultClass: "_1bfxj7rbo" }, opacityBlack500: { defaultClass: "_1bfxj7rbp" }, opacityBlack600: { defaultClass: "_1bfxj7rbq" }, opacityBlack700: { defaultClass: "_1bfxj7rbr" }, opacityBlack800: { defaultClass: "_1bfxj7rbs" }, opacityBlack900: { defaultClass: "_1bfxj7rbt" }, opacityBlack950: { defaultClass: "_1bfxj7rbu" }, opacityWhite50: { defaultClass: "_1bfxj7rbv" }, opacityWhite100: { defaultClass: "_1bfxj7rbw" }, opacityWhite200: { defaultClass: "_1bfxj7rbx" }, opacityWhite300: { defaultClass: "_1bfxj7rby" }, opacityWhite400: { defaultClass: "_1bfxj7rbz" }, opacityWhite500: { defaultClass: "_1bfxj7rc0" }, opacityWhite600: { defaultClass: "_1bfxj7rc1" }, opacityWhite700: { defaultClass: "_1bfxj7rc2" }, opacityWhite800: { defaultClass: "_1bfxj7rc3" }, opacityWhite900: { defaultClass: "_1bfxj7rc4" }, opacityWhite950: { defaultClass: "_1bfxj7rc5" }, blue10: { defaultClass: "_1bfxj7rc6" }, blue50: { defaultClass: "_1bfxj7rc7" }, blue100: { defaultClass: "_1bfxj7rc8" }, blue200: { defaultClass: "_1bfxj7rc9" }, blue300: { defaultClass: "_1bfxj7rca" }, blue400: { defaultClass: "_1bfxj7rcb" }, blue500: { defaultClass: "_1bfxj7rcc" }, blue600: { defaultClass: "_1bfxj7rcd" }, blue700: { defaultClass: "_1bfxj7rce" }, blue800: { defaultClass: "_1bfxj7rcf" }, blue900: { defaultClass: "_1bfxj7rcg" }, blue950: { defaultClass: "_1bfxj7rch" }, blue990: { defaultClass: "_1bfxj7rci" }, green10: { defaultClass: "_1bfxj7rcj" }, green50: { defaultClass: "_1bfxj7rck" }, green100: { defaultClass: "_1bfxj7rcl" }, green200: { defaultClass: "_1bfxj7rcm" }, green300: { defaultClass: "_1bfxj7rcn" }, green400: { defaultClass: "_1bfxj7rco" }, green500: { defaultClass: "_1bfxj7rcp" }, green600: { defaultClass: "_1bfxj7rcq" }, green700: { defaultClass: "_1bfxj7rcr" }, green800: { defaultClass: "_1bfxj7rcs" }, green900: { defaultClass: "_1bfxj7rct" }, green950: { defaultClass: "_1bfxj7rcu" }, green990: { defaultClass: "_1bfxj7rcv" }, pink10: { defaultClass: "_1bfxj7rcw" }, pink50: { defaultClass: "_1bfxj7rcx" }, pink100: { defaultClass: "_1bfxj7rcy" }, pink200: { defaultClass: "_1bfxj7rcz" }, pink300: { defaultClass: "_1bfxj7rd0" }, pink400: { defaultClass: "_1bfxj7rd1" }, pink500: { defaultClass: "_1bfxj7rd2" }, pink600: { defaultClass: "_1bfxj7rd3" }, pink700: { defaultClass: "_1bfxj7rd4" }, pink800: { defaultClass: "_1bfxj7rd5" }, pink900: { defaultClass: "_1bfxj7rd6" }, pink950: { defaultClass: "_1bfxj7rd7" }, pink990: { defaultClass: "_1bfxj7rd8" }, orange10: { defaultClass: "_1bfxj7rd9" }, orange50: { defaultClass: "_1bfxj7rda" }, orange100: { defaultClass: "_1bfxj7rdb" }, orange200: { defaultClass: "_1bfxj7rdc" }, orange300: { defaultClass: "_1bfxj7rdd" }, orange400: { defaultClass: "_1bfxj7rde" }, orange500: { defaultClass: "_1bfxj7rdf" }, orange600: { defaultClass: "_1bfxj7rdg" }, orange700: { defaultClass: "_1bfxj7rdh" }, orange800: { defaultClass: "_1bfxj7rdi" }, orange900: { defaultClass: "_1bfxj7rdj" }, orange950: { defaultClass: "_1bfxj7rdk" }, orange990: { defaultClass: "_1bfxj7rdl" }, gray10: { defaultClass: "_1bfxj7rdm" }, gray50: { defaultClass: "_1bfxj7rdn" }, gray100: { defaultClass: "_1bfxj7rdo" }, gray200: { defaultClass: "_1bfxj7rdp" }, gray300: { defaultClass: "_1bfxj7rdq" }, gray400: { defaultClass: "_1bfxj7rdr" }, gray500: { defaultClass: "_1bfxj7rds" }, gray600: { defaultClass: "_1bfxj7rdt" }, gray700: { defaultClass: "_1bfxj7rdu" }, gray800: { defaultClass: "_1bfxj7rdv" }, gray900: { defaultClass: "_1bfxj7rdw" }, gray950: { defaultClass: "_1bfxj7rdx" }, gray990: { defaultClass: "_1bfxj7rdy" }, coolGray10: { defaultClass: "_1bfxj7rdz" }, coolGray50: { defaultClass: "_1bfxj7re0" }, coolGray100: { defaultClass: "_1bfxj7re1" }, coolGray200: { defaultClass: "_1bfxj7re2" }, coolGray300: { defaultClass: "_1bfxj7re3" }, coolGray400: { defaultClass: "_1bfxj7re4" }, coolGray500: { defaultClass: "_1bfxj7re5" }, coolGray600: { defaultClass: "_1bfxj7re6" }, coolGray700: { defaultClass: "_1bfxj7re7" }, coolGray800: { defaultClass: "_1bfxj7re8" }, coolGray900: { defaultClass: "_1bfxj7re9" }, coolGray950: { defaultClass: "_1bfxj7rea" }, coolGray990: { defaultClass: "_1bfxj7reb" }, blueGray10: { defaultClass: "_1bfxj7rec" }, blueGray50: { defaultClass: "_1bfxj7red" }, blueGray100: { defaultClass: "_1bfxj7ree" }, blueGray200: { defaultClass: "_1bfxj7ref" }, blueGray300: { defaultClass: "_1bfxj7reg" }, blueGray400: { defaultClass: "_1bfxj7reh" }, blueGray500: { defaultClass: "_1bfxj7rei" }, blueGray600: { defaultClass: "_1bfxj7rej" }, blueGray700: { defaultClass: "_1bfxj7rek" }, blueGray800: { defaultClass: "_1bfxj7rel" }, blueGray900: { defaultClass: "_1bfxj7rem" }, blueGray950: { defaultClass: "_1bfxj7ren" }, blueGray990: { defaultClass: "_1bfxj7reo" }, backgroundNormalPrimary: { defaultClass: "_1bfxj7rep" }, backgroundNormalSecondary: { defaultClass: "_1bfxj7req" }, backgroundElevatedPrimary: { defaultClass: "_1bfxj7rer" }, backgroundElevatedSecondary: { defaultClass: "_1bfxj7res" }, textNormal: { defaultClass: "_1bfxj7ret" }, textAssistive: { defaultClass: "_1bfxj7reu" }, textAlternative: { defaultClass: "_1bfxj7rev" }, textStrong: { defaultClass: "_1bfxj7rew" }, uiPrimaryNormal: { defaultClass: "_1bfxj7rex" }, uiAccentNormal: { defaultClass: "_1bfxj7rey" }, uiStateNormal: { defaultClass: "_1bfxj7rez" } } }, borderTopColor: { values: { black: { defaultClass: "_1bfxj7rf0" }, white: { defaultClass: "_1bfxj7rf1" }, opacityBlack50: { defaultClass: "_1bfxj7rf2" }, opacityBlack100: { defaultClass: "_1bfxj7rf3" }, opacityBlack200: { defaultClass: "_1bfxj7rf4" }, opacityBlack300: { defaultClass: "_1bfxj7rf5" }, opacityBlack400: { defaultClass: "_1bfxj7rf6" }, opacityBlack500: { defaultClass: "_1bfxj7rf7" }, opacityBlack600: { defaultClass: "_1bfxj7rf8" }, opacityBlack700: { defaultClass: "_1bfxj7rf9" }, opacityBlack800: { defaultClass: "_1bfxj7rfa" }, opacityBlack900: { defaultClass: "_1bfxj7rfb" }, opacityBlack950: { defaultClass: "_1bfxj7rfc" }, opacityWhite50: { defaultClass: "_1bfxj7rfd" }, opacityWhite100: { defaultClass: "_1bfxj7rfe" }, opacityWhite200: { defaultClass: "_1bfxj7rff" }, opacityWhite300: { defaultClass: "_1bfxj7rfg" }, opacityWhite400: { defaultClass: "_1bfxj7rfh" }, opacityWhite500: { defaultClass: "_1bfxj7rfi" }, opacityWhite600: { defaultClass: "_1bfxj7rfj" }, opacityWhite700: { defaultClass: "_1bfxj7rfk" }, opacityWhite800: { defaultClass: "_1bfxj7rfl" }, opacityWhite900: { defaultClass: "_1bfxj7rfm" }, opacityWhite950: { defaultClass: "_1bfxj7rfn" }, blue10: { defaultClass: "_1bfxj7rfo" }, blue50: { defaultClass: "_1bfxj7rfp" }, blue100: { defaultClass: "_1bfxj7rfq" }, blue200: { defaultClass: "_1bfxj7rfr" }, blue300: { defaultClass: "_1bfxj7rfs" }, blue400: { defaultClass: "_1bfxj7rft" }, blue500: { defaultClass: "_1bfxj7rfu" }, blue600: { defaultClass: "_1bfxj7rfv" }, blue700: { defaultClass: "_1bfxj7rfw" }, blue800: { defaultClass: "_1bfxj7rfx" }, blue900: { defaultClass: "_1bfxj7rfy" }, blue950: { defaultClass: "_1bfxj7rfz" }, blue990: { defaultClass: "_1bfxj7rg0" }, green10: { defaultClass: "_1bfxj7rg1" }, green50: { defaultClass: "_1bfxj7rg2" }, green100: { defaultClass: "_1bfxj7rg3" }, green200: { defaultClass: "_1bfxj7rg4" }, green300: { defaultClass: "_1bfxj7rg5" }, green400: { defaultClass: "_1bfxj7rg6" }, green500: { defaultClass: "_1bfxj7rg7" }, green600: { defaultClass: "_1bfxj7rg8" }, green700: { defaultClass: "_1bfxj7rg9" }, green800: { defaultClass: "_1bfxj7rga" }, green900: { defaultClass: "_1bfxj7rgb" }, green950: { defaultClass: "_1bfxj7rgc" }, green990: { defaultClass: "_1bfxj7rgd" }, pink10: { defaultClass: "_1bfxj7rge" }, pink50: { defaultClass: "_1bfxj7rgf" }, pink100: { defaultClass: "_1bfxj7rgg" }, pink200: { defaultClass: "_1bfxj7rgh" }, pink300: { defaultClass: "_1bfxj7rgi" }, pink400: { defaultClass: "_1bfxj7rgj" }, pink500: { defaultClass: "_1bfxj7rgk" }, pink600: { defaultClass: "_1bfxj7rgl" }, pink700: { defaultClass: "_1bfxj7rgm" }, pink800: { defaultClass: "_1bfxj7rgn" }, pink900: { defaultClass: "_1bfxj7rgo" }, pink950: { defaultClass: "_1bfxj7rgp" }, pink990: { defaultClass: "_1bfxj7rgq" }, orange10: { defaultClass: "_1bfxj7rgr" }, orange50: { defaultClass: "_1bfxj7rgs" }, orange100: { defaultClass: "_1bfxj7rgt" }, orange200: { defaultClass: "_1bfxj7rgu" }, orange300: { defaultClass: "_1bfxj7rgv" }, orange400: { defaultClass: "_1bfxj7rgw" }, orange500: { defaultClass: "_1bfxj7rgx" }, orange600: { defaultClass: "_1bfxj7rgy" }, orange700: { defaultClass: "_1bfxj7rgz" }, orange800: { defaultClass: "_1bfxj7rh0" }, orange900: { defaultClass: "_1bfxj7rh1" }, orange950: { defaultClass: "_1bfxj7rh2" }, orange990: { defaultClass: "_1bfxj7rh3" }, gray10: { defaultClass: "_1bfxj7rh4" }, gray50: { defaultClass: "_1bfxj7rh5" }, gray100: { defaultClass: "_1bfxj7rh6" }, gray200: { defaultClass: "_1bfxj7rh7" }, gray300: { defaultClass: "_1bfxj7rh8" }, gray400: { defaultClass: "_1bfxj7rh9" }, gray500: { defaultClass: "_1bfxj7rha" }, gray600: { defaultClass: "_1bfxj7rhb" }, gray700: { defaultClass: "_1bfxj7rhc" }, gray800: { defaultClass: "_1bfxj7rhd" }, gray900: { defaultClass: "_1bfxj7rhe" }, gray950: { defaultClass: "_1bfxj7rhf" }, gray990: { defaultClass: "_1bfxj7rhg" }, coolGray10: { defaultClass: "_1bfxj7rhh" }, coolGray50: { defaultClass: "_1bfxj7rhi" }, coolGray100: { defaultClass: "_1bfxj7rhj" }, coolGray200: { defaultClass: "_1bfxj7rhk" }, coolGray300: { defaultClass: "_1bfxj7rhl" }, coolGray400: { defaultClass: "_1bfxj7rhm" }, coolGray500: { defaultClass: "_1bfxj7rhn" }, coolGray600: { defaultClass: "_1bfxj7rho" }, coolGray700: { defaultClass: "_1bfxj7rhp" }, coolGray800: { defaultClass: "_1bfxj7rhq" }, coolGray900: { defaultClass: "_1bfxj7rhr" }, coolGray950: { defaultClass: "_1bfxj7rhs" }, coolGray990: { defaultClass: "_1bfxj7rht" }, blueGray10: { defaultClass: "_1bfxj7rhu" }, blueGray50: { defaultClass: "_1bfxj7rhv" }, blueGray100: { defaultClass: "_1bfxj7rhw" }, blueGray200: { defaultClass: "_1bfxj7rhx" }, blueGray300: { defaultClass: "_1bfxj7rhy" }, blueGray400: { defaultClass: "_1bfxj7rhz" }, blueGray500: { defaultClass: "_1bfxj7ri0" }, blueGray600: { defaultClass: "_1bfxj7ri1" }, blueGray700: { defaultClass: "_1bfxj7ri2" }, blueGray800: { defaultClass: "_1bfxj7ri3" }, blueGray900: { defaultClass: "_1bfxj7ri4" }, blueGray950: { defaultClass: "_1bfxj7ri5" }, blueGray990: { defaultClass: "_1bfxj7ri6" }, backgroundNormalPrimary: { defaultClass: "_1bfxj7ri7" }, backgroundNormalSecondary: { defaultClass: "_1bfxj7ri8" }, backgroundElevatedPrimary: { defaultClass: "_1bfxj7ri9" }, backgroundElevatedSecondary: { defaultClass: "_1bfxj7ria" }, textNormal: { defaultClass: "_1bfxj7rib" }, textAssistive: { defaultClass: "_1bfxj7ric" }, textAlternative: { defaultClass: "_1bfxj7rid" }, textStrong: { defaultClass: "_1bfxj7rie" }, uiPrimaryNormal: { defaultClass: "_1bfxj7rif" }, uiAccentNormal: { defaultClass: "_1bfxj7rig" }, uiStateNormal: { defaultClass: "_1bfxj7rih" } } }, borderBottomStyle: { values: { none: { defaultClass: "_1bfxj7rii" }, solid: { defaultClass: "_1bfxj7rij" }, dashed: { defaultClass: "_1bfxj7rik" }, dotted: { defaultClass: "_1bfxj7ril" }, "double": { defaultClass: "_1bfxj7rim" } } }, borderLeftStyle: { values: { none: { defaultClass: "_1bfxj7rin" }, solid: { defaultClass: "_1bfxj7rio" }, dashed: { defaultClass: "_1bfxj7rip" }, dotted: { defaultClass: "_1bfxj7riq" }, "double": { defaultClass: "_1bfxj7rir" } } }, borderRightStyle: { values: { none: { defaultClass: "_1bfxj7ris" }, solid: { defaultClass: "_1bfxj7rit" }, dashed: { defaultClass: "_1bfxj7riu" }, dotted: { defaultClass: "_1bfxj7riv" }, "double": { defaultClass: "_1bfxj7riw" } } }, borderTopStyle: { values: { none: { defaultClass: "_1bfxj7rix" }, solid: { defaultClass: "_1bfxj7riy" }, dashed: { defaultClass: "_1bfxj7riz" }, dotted: { defaultClass: "_1bfxj7rj0" }, "double": { defaultClass: "_1bfxj7rj1" } } }, borderBottomWidth: { values: { "1": { defaultClass: "_1bfxj7rj2" }, "2": { defaultClass: "_1bfxj7rj3" }, "4": { defaultClass: "_1bfxj7rj4" }, "6": { defaultClass: "_1bfxj7rj5" }, "8": { defaultClass: "_1bfxj7rj6" }, "10": { defaultClass: "_1bfxj7rj7" }, "12": { defaultClass: "_1bfxj7rj8" }, "14": { defaultClass: "_1bfxj7rj9" }, "16": { defaultClass: "_1bfxj7rja" }, "18": { defaultClass: "_1bfxj7rjb" }, "20": { defaultClass: "_1bfxj7rjc" }, "24": { defaultClass: "_1bfxj7rjd" }, "28": { defaultClass: "_1bfxj7rje" }, "32": { defaultClass: "_1bfxj7rjf" }, "36": { defaultClass: "_1bfxj7rjg" }, "40": { defaultClass: "_1bfxj7rjh" }, "44": { defaultClass: "_1bfxj7rji" }, "48": { defaultClass: "_1bfxj7rjj" }, "56": { defaultClass: "_1bfxj7rjk" }, "64": { defaultClass: "_1bfxj7rjl" } } }, borderLeftWidth: { values: { "1": { defaultClass: "_1bfxj7rjm" }, "2": { defaultClass: "_1bfxj7rjn" }, "4": { defaultClass: "_1bfxj7rjo" }, "6": { defaultClass: "_1bfxj7rjp" }, "8": { defaultClass: "_1bfxj7rjq" }, "10": { defaultClass: "_1bfxj7rjr" }, "12": { defaultClass: "_1bfxj7rjs" }, "14": { defaultClass: "_1bfxj7rjt" }, "16": { defaultClass: "_1bfxj7rju" }, "18": { defaultClass: "_1bfxj7rjv" }, "20": { defaultClass: "_1bfxj7rjw" }, "24": { defaultClass: "_1bfxj7rjx" }, "28": { defaultClass: "_1bfxj7rjy" }, "32": { defaultClass: "_1bfxj7rjz" }, "36": { defaultClass: "_1bfxj7rk0" }, "40": { defaultClass: "_1bfxj7rk1" }, "44": { defaultClass: "_1bfxj7rk2" }, "48": { defaultClass: "_1bfxj7rk3" }, "56": { defaultClass: "_1bfxj7rk4" }, "64": { defaultClass: "_1bfxj7rk5" } } }, borderRightWidth: { values: { "1": { defaultClass: "_1bfxj7rk6" }, "2": { defaultClass: "_1bfxj7rk7" }, "4": { defaultClass: "_1bfxj7rk8" }, "6": { defaultClass: "_1bfxj7rk9" }, "8": { defaultClass: "_1bfxj7rka" }, "10": { defaultClass: "_1bfxj7rkb" }, "12": { defaultClass: "_1bfxj7rkc" }, "14": { defaultClass: "_1bfxj7rkd" }, "16": { defaultClass: "_1bfxj7rke" }, "18": { defaultClass: "_1bfxj7rkf" }, "20": { defaultClass: "_1bfxj7rkg" }, "24": { defaultClass: "_1bfxj7rkh" }, "28": { defaultClass: "_1bfxj7rki" }, "32": { defaultClass: "_1bfxj7rkj" }, "36": { defaultClass: "_1bfxj7rkk" }, "40": { defaultClass: "_1bfxj7rkl" }, "44": { defaultClass: "_1bfxj7rkm" }, "48": { defaultClass: "_1bfxj7rkn" }, "56": { defaultClass: "_1bfxj7rko" }, "64": { defaultClass: "_1bfxj7rkp" } } }, borderTopWidth: { values: { "1": { defaultClass: "_1bfxj7rkq" }, "2": { defaultClass: "_1bfxj7rkr" }, "4": { defaultClass: "_1bfxj7rks" }, "6": { defaultClass: "_1bfxj7rkt" }, "8": { defaultClass: "_1bfxj7rku" }, "10": { defaultClass: "_1bfxj7rkv" }, "12": { defaultClass: "_1bfxj7rkw" }, "14": { defaultClass: "_1bfxj7rkx" }, "16": { defaultClass: "_1bfxj7rky" }, "18": { defaultClass: "_1bfxj7rkz" }, "20": { defaultClass: "_1bfxj7rl0" }, "24": { defaultClass: "_1bfxj7rl1" }, "28": { defaultClass: "_1bfxj7rl2" }, "32": { defaultClass: "_1bfxj7rl3" }, "36": { defaultClass: "_1bfxj7rl4" }, "40": { defaultClass: "_1bfxj7rl5" }, "44": { defaultClass: "_1bfxj7rl6" }, "48": { defaultClass: "_1bfxj7rl7" }, "56": { defaultClass: "_1bfxj7rl8" }, "64": { defaultClass: "_1bfxj7rl9" } } } } });

// src/style/border/recipes.css.ts
var import_createRuntimeFn2 = require("@vanilla-extract/recipes/createRuntimeFn");
var borderRecipe = (0, import_createRuntimeFn2.createRuntimeFn)({ defaultClassName: "_1qmqs5m0", variantClassNames: { borderType: { border: "_1qmqs5m1", borderTop: "_1qmqs5m2", borderBottom: "_1qmqs5m3", borderLeft: "_1qmqs5m4", borderRight: "_1qmqs5m5" } }, defaultVariants: {}, compoundVariants: [] });

// src/style/shadow/sprinkles.css.ts
var import_createRuntimeSprinkles5 = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");
var shadowSprinkles = (0, import_createRuntimeSprinkles5.createSprinkles)({ conditions: void 0, styles: { boxShadow: { values: { xs: { defaultClass: "argxa10" }, s: { defaultClass: "argxa11" }, m: { defaultClass: "argxa12" }, l: { defaultClass: "argxa13" }, elevatedTop: { defaultClass: "argxa14" } } } } });

// src/common/text/Text.tsx
var import_react = require("react");

// ../../../../../../.yarn/berry/cache/clsx-npm-2.1.1-96125b98be-10c0.zip/node_modules/clsx/dist/clsx.mjs
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
    textAlign,
    color,
    className,
    ...props
  }, ref) => {
    const textClass = typographyRecipe({ textType, textMode, textAlign });
    const colorClass = colorSprinkles({ color });
    const combinedClass = clsx_default([textClass, colorClass, className]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ref, className: combinedClass, style: { ...props.style }, ...props, children });
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
    const containerStyle = {
      ...typeof width === "number" && { width: `${width}px` },
      ...typeof height === "number" && { height: `${height}px` }
    };
    const layoutClass = layoutSprinkles({
      display,
      flexDirection,
      justifyContent,
      alignItems,
      ...typeof width !== "number" && width !== void 0 && { width },
      ...typeof height !== "number" && height !== void 0 && { height }
    });
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Component,
      {
        ref,
        className: combinedClass,
        style: { ...containerStyle, ...props.style },
        ...props,
        children
      }
    );
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
        style: { ...iconStyle3, ...props.style },
        ...props,
        children
      }
    );
  }
);

// src/common/divider/Divider.tsx
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Divider = (0, import_react4.forwardRef)(
  ({ orientation = "horizontal", color = "gray200", size = 1, margin, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Container,
      {
        ref,
        className,
        backgroundColor: color,
        width: orientation === "horizontal" ? "100%" : size,
        height: orientation === "horizontal" ? size : void 0,
        marginX: orientation === "horizontal" ? margin : void 0,
        marginY: orientation === "vertical" ? margin : void 0,
        ...props
      }
    );
  }
);

// src/button/style.css.ts
var baseStyle = "_1h4ydga0";
var mainTextStyle = "_1h4ydgad";
var sizeStyle = { s: "_1h4ydga1", m: "_1h4ydga2", l: "_1h4ydga3" };
var stateStyle = { defaultFill: "_1h4ydga4", defaultOutline: "_1h4ydga9", secondaryFill: "_1h4ydga7", secondaryOutline: "_1h4ydgac", tertiaryFill: "_1h4ydga8", hoverFill: "_1h4ydga5", hoverOutline: "_1h4ydgaa", disabledFill: "_1h4ydga6", disabledOutline: "_1h4ydgab" };
var subTextStyle = "_1h4ydgae";

// src/button/Button.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: `${baseClass} ${sizeClass} ${stateClass}`, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "material-symbols-outlined", children: icon }),
    subText && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: subTextStyle, children: subText }),
    mainText && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: mainTextStyle, children: mainText }),
    isLoading && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "material-symbols-outlined", children: "refresh" })
  ] });
};

// src/badge/Badge.tsx
var import_react5 = require("react");

// src/badge/style.css.ts
var import_createRuntimeFn3 = require("@vanilla-extract/recipes/createRuntimeFn");
var badgeRecipe = (0, import_createRuntimeFn3.createRuntimeFn)({ defaultClassName: "_1bfxj7r3k", variantClassNames: { size: { s: "_89s0wz3y _89s0wz2u _89s0wz29 _89s0wz3d", m: "_89s0wz3y _89s0wz2u _89s0wz29 _89s0wz3d", l: "_89s0wz3z _89s0wz2v _89s0wz2a _89s0wz3e" }, color: { blue: "_1rmst0847", pink: "_1rmst084x", orange: "_1rmst085a", green: "_1rmst084k" } }, defaultVariants: { size: "m", color: "blue" }, compoundVariants: [] });

// src/badge/Badge.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Badge = (0, import_react5.forwardRef)(
  ({ children = "text", size = "m", color = "blue", className, ...props }, ref) => {
    const badgeClass = badgeRecipe({ size, color });
    const textType = size === "s" ? "caption" : size === "m" ? "footnote" : "label";
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Container,
      {
        as: "div",
        ref,
        className: clsx_default(badgeClass, className),
        display: "inline-block",
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Text, { as: "span", textType, color: `${color}500`, children })
      }
    );
  }
);

// src/box/info/info-box/InfoBox.tsx
var import_react7 = require("react");

// src/box/info/info-item/InfoItem.tsx
var import_react6 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var sizeVariants = {
  s: {
    paddingTop: 12,
    paddingBottom: 16,
    titleTextType: "footnote",
    contentTextType: "body2",
    iconSize: 16
  },
  m: {
    paddingTop: 16,
    paddingBottom: 20,
    titleTextType: "label",
    contentTextType: "headline",
    iconSize: 18
  }
};
var InfoItem = (0, import_react6.forwardRef)(
  ({ title = "title", content = "content", icon, size = "m", className, ...props }, ref) => {
    const { paddingTop, paddingBottom, titleTextType, contentTextType, iconSize } = sizeVariants[size];
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      Container,
      {
        ref,
        className,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingX: 10,
        paddingTop,
        paddingBottom,
        gap: 8,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { textType: titleTextType, textAlign: "center", color: "textAssistive", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Container, { display: "flex", alignItems: "center", gap: 6, children: [
            icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { color: "textAlternative", size: iconSize, children: icon }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { textType: contentTextType, textMode: "bold", textAlign: "center", children: content })
          ] })
        ]
      }
    );
  }
);

// src/box/info/info-box/InfoBox.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var InfoBox = (0, import_react7.forwardRef)(
  ({ infos, backgroundColor, size = "m", className, ...props }, ref) => {
    const infoItems = infos == null ? void 0 : infos.reduce((acc, item, index) => {
      if (index > 0) {
        acc.push(
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Divider, { orientation: "vertical", margin: 16 }, item.id || `divider-${index}`)
        );
      }
      acc.push(
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          InfoItem,
          {
            title: item.title,
            content: item.content,
            icon: item.icon,
            size
          },
          item.id || `info-${index}`
        )
      );
      return acc;
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Container,
      {
        ref,
        className,
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor,
        borderRadius: "ml",
        ...props,
        children: infoItems
      }
    );
  }
);

// src/chip/style.css.ts
var baseStyle2 = "w4y0nd0";
var sizeStyle2 = { s: "w4y0nd1", m: "w4y0nd2", l: "w4y0nd3" };
var stateStyle2 = { "default": "w4y0nd4", outlinePrimary: "w4y0nd5", outlineSecondary: "w4y0nd6", activePrimary: "w4y0nd7", activeSecondary: "w4y0nd8", disabled: "w4y0nd9" };

// src/chip/Chips.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: `${baseClass} ${sizeClass} ${stateClass}`, children: content });
};

// src/app-bar/top-app-bar/style.css.ts
var iconWrapperStyle = { inner: "_7pr8fe3", outer: "_7pr8fe4" };
var leftContentStyle = "_7pr8fe1";
var textStyle = "_7pr8fe2";
var topAppBarStyle = "_7pr8fe0";

// src/app-bar/top-app-bar/TopAppBar.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var TopAppBar = ({ icon = false }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: topAppBarStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: leftContentStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: iconWrapperStyle.outer, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: iconWrapperStyle.inner, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "material-symbols-outlined", children: "arrow_back" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: textStyle, children: "Title" })
    ] }),
    icon && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: iconWrapperStyle.outer, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: iconWrapperStyle.inner, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "material-symbols-outlined", children: "add" }) }) })
  ] });
};

// src/header/title/Title.tsx
var import_react8 = require("react");

// src/header/title/style.css.ts
var titleStyle = "ujvneh1 _1rmst086p";

// src/header/title/Title.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var Title = (0, import_react8.forwardRef)(
  ({ children = "\uC81C\uBAA9", color = "textNormal", className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Text,
      {
        ref,
        className: clsx_default(titleStyle, className),
        textType: "title2",
        textMode: "bold",
        as: "h1",
        color,
        ...props,
        children
      }
    );
  }
);

// src/header/headline/style.css.ts
var headlineStyle = "_1oxa1x50";
var headlineSubStyle = "_1oxa1x52";
var iconStyle = "_1oxa1x51";

// src/header/headline/Headline.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var Headline = ({
  mainText = "mainText",
  subText = "subText",
  icon = true,
  color = "textNormal",
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: clsx_default(headlineStyle, className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { textType: "heading2", textMode: "bold", as: "h3", color, children: mainText }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: headlineSubStyle, children: [
      subText && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { textType: "body3", as: "p", color: "textAssistive", children: subText }),
      icon && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: clsx_default("material-symbols-outlined", iconStyle), children: "chevron_right" })
    ] })
  ] });
};

// src/list/message/MessageList.tsx
var import_react9 = require("react");

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

// src/list/message/style.css.ts
var import_createRuntimeFn4 = require("@vanilla-extract/recipes/createRuntimeFn");
var messageListRecipe = (0, import_createRuntimeFn4.createRuntimeFn)({ defaultClassName: "_17rsevb4", variantClassNames: { variant: { "default": "_17rsevb5", danger: "_1rmst084w", warning: "_1rmst0859" }, mode: { "default": "_17rsevb8", round: "_1bfxj7r3n" } }, defaultVariants: { variant: "default" }, compoundVariants: [[{ variant: "danger", mode: "round" }, "_1bfxj7r3y _1bfxj7r3u _1bfxj7r1k"]] });

// src/list/message/MessageList.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var colorMap = {
  default: "blue",
  danger: "pink",
  warning: "orange"
};
var MessageList = (0, import_react9.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
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
          isRead && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Container, { height: "100%", display: "flex", paddingRight: 12, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Icon, { color: `${color}500`, size: 8, children: "circle" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Container, { display: "flex", flexDirection: "column", width: "100%", gap: 8, children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Container, { display: "flex", flexDirection: "column", gap: 2, children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Container, { display: "flex", alignItems: "center", height: 24, gap: 8, children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Text, { as: "h5", textType: "body2", textMode: "bold", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Badge, { color, children: following }),
                isChecked && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Icon, { color: `${color}500`, size: 20, children: "verified" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Text, { textType: "label", color: "textAssistive", children: dateString })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Text, { textType: "body3", textMode: "reading", children: content })
          ] })
        ]
      }
    );
  }
);

// src/list/social-content/SocialContentList.tsx
var import_react10 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var SocialContentList = (0, import_react10.forwardRef)(
  ({
    children,
    title = "title",
    writer = "writer",
    date = /* @__PURE__ */ new Date(),
    location = "location",
    viewCounts = 0,
    commentCounts = 0,
    content = "content",
    isTrueCounts = 0,
    isFalseCounts = 0
  }, ref) => {
    const dateString = formatDate(date);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Container, { as: "li", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Container, { display: "flex", flexDirection: "column", paddingX: 16, paddingTop: 20, gap: 6, children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Container, { display: "flex", justifyContent: "space-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { textType: "heading2", textMode: "bold", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Icon, { children: "more_horiz" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Container, { display: "flex", gap: 6, children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { textType: "label", color: "textAlternative", children: writer }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { textType: "label", color: "textAssistive", children: dateString })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        Container,
        {
          display: "flex",
          paddingX: 16,
          paddingY: 12,
          justifyContent: "space-between",
          alignItems: "center",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Container, { display: "flex", alignItems: "center", gap: 4, children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Icon, { color: "blue500", size: 15, children: "location_on" }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { as: "span", textType: "body3", color: "blue500", children: location })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Container, { display: "flex", alignItems: "center", gap: 8, children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Container, { display: "flex", gap: 6, children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { textType: "label", color: "textAssistive", children: "\uC870\uD68C" }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { textType: "label", textMode: "bold", color: "textAlternative", children: viewCounts })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { children: "\xB7" }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Container, { display: "flex", gap: 6, children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { textType: "label", color: "textAssistive", children: "\uB313\uAE00" }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { textType: "label", textMode: "bold", color: "textAlternative", children: commentCounts })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Container, { children }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Container, { padding: 16, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Text, { children: content }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        Container,
        {
          display: "flex",
          padding: 16,
          justifyContent: "space-between",
          alignItems: "center",
          borderType: "borderTop"
        }
      )
    ] });
  }
);

// src/input/input/style.css.ts
var buttonStyle = "_16rhowh2";
var commonStyle = "_16rhowh0";
var divStateStyle = { "default": "_16rhowh4 _16rhowh3", highlight: "_16rhowh5 _16rhowh3", warning: "_16rhowh6 _16rhowh3", disabled: "_16rhowh7 _16rhowh3" };
var iconStyle2 = "_16rhowhb";
var inputStateStyle = { "default": "_16rhowh8", highlight: "_16rhowh9 _16rhowh8", warning: "_16rhowh8", disabled: "_16rhowha _16rhowh8" };
var inputStyle = "_16rhowh1";

// src/input/input/Input.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: `${commonClass} ${divStateClass} ${className || ""}`, ...props, children: [
    showIcon && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: `material-symbols-outlined input-icon ${iconClass}`, children: "search" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { className: `${inputStyle} ${inputStateClass}`, type: "text", placeholder: "Placeholder" }),
    showButton && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { className: buttonStyle, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "material-symbols-outlined", children: "cancel" }) })
  ] });
};

// src/input/group/style.css.ts
var inputStyle2 = "_1n4ve932";
var labeStyle = "_1n4ve930";
var starStyle = "_1n4ve931";
var warningStyle = "_1n4ve933";

// src/input/group/InputGroup.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var InputGroup = ({
  state = "default",
  showButton = true,
  showLabel = true,
  labelContent = "label",
  warningContent = "warning text",
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className, ...props, children: [
    showLabel && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: labeStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: labelContent }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: starStyle, children: "*" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: inputStyle2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Input, { state, showIcon: false }),
      showButton && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
    state === "warning" && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: warningStyle, children: warningContent })
  ] });
};
//# sourceMappingURL=index.cjs.map
