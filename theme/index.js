// breakpoint values
const breakpoints = val => {
  const breakpointsVal = {
    xs: "36rem",
    sm: "48rem",
    md: "62rem",
    lg: "75rem"
  };
  return breakpointsVal[val];
};

const diffBackgorundColor = {
  added: "#98f198",
  removed: "#fd8f8f"
};

// Colors
const colors = {
  white: "#FFFFFF",
  transparent: "transparent",
  white50: "rgba(255,255,255,0.5)",
  white100: "rgba(255,255,255,1)",
  black: "#000000",
  primary: "#000",
  primary50: "rgba(108, 51, 181, 0.50)",
  secondary: "#fff",
  textBold: "#333333",
  blue: "#4a90e2",
  blueShade1: "#4556d9",
  blueShade2: "#3a99ff",
  fadedblue: "#f4f9ff",
  gray: "#9b9b9b",
  lightGray: "#f4f4f6",
  lightGray1: "#ebebeb",
  lightGray2: "#f7f7f7",
  lightGray3: "rgb(247, 247, 247)",
  gray50: "rgba(120, 128, 138, 0.5)",
  gray1: "#98a0a6",
  color999999: "#999999",
  color555555: "#555555",
  color7f7f7f: "#7f7f7f",
  color4a4a4a: "#4a4a4a",
  color929293: "#929293",
  noClaim: "rgba(74, 74, 74, 0.10)",
  footerCompany: "#7a8c96",
  viewMoreSidebarBg: "#f7f8fc",
  viewMoreOptionHeading: "rgba(27, 33, 37, 0.3)",
  viewMoreText: "#788995",
  drodown: "#c9c9c9",
  dropdownBorder: "#bebec0",
  viewOptionHeading: "#cad1dc",
  viewOptionContent: "#78808a",
  viewOptionContent_50: "rgba(120, 128, 138, 0.5)",
  viewOptionEdit: "#d2b1fc",
  policyPrice: "#515151",
  sort: "#94969a",
  titleViewAllSidebar: "rgba(195, 158, 242, 0.5)",
  color555555_50: "rgba(85, 85, 85, 0.5)",
  color555555_10: "rgba(85, 85, 85, 0.1)",
  policyDetailsBg: "#f4f9ff",
  success: "#64bc03",
  error: "#eb6969",
  errorHeading: "#ce4800",
  orange: "#FFA833",
  pageBg: "#f7f7f7",
  shrineTabList: "rgb(100, 99, 99)",
  graylight: "#fbfbfb"
};

// sizes is used for margin and padding scales
const sizes = {
  0: "0",
  5: "0.3125rem",
  10: "0.625rem",
  15: "0.9375rem",
  16: "1rem",
  20: "1.25rem",
  25: "1.5625rem",
  30: "1.875rem",
  32: "2rem"
};

// typographic scale
const fontSizes = {
  8: "0.5rem",
  10: "0.625rem",
  11: "0.6875rem",
  12: "0.75rem",
  13: "0.8125rem",
  14: "0.875rem",
  16: "1rem",
  18: "1.125rem",
  19: "1.2rem",
  20: "1.25rem",
  22: "1.375rem",
  24: "1.5rem",
  26: "1.625rem",
  27: "0.7125rem",
  28: "1.75rem",
  30: "1.875rem",
  32: "2rem",
  34: "2.125rem",
  36: "2.25rem",
  38: "2.375rem",
  40: "2.5rem",
  42: "2.625rem",
  44: "2.75rem",
  46: "2.875rem",
  48: "3rem",
  49: "14px"
};

const lineHeights = [1, 1.125, 1.25, 1.5];

// Font Family
const fontFamily = {
  os: "'Open Sans', sans-serif",
  mont: "'Montserrat', sans-serif",
  nunito: "'Nunito', sans-serif",
  popins: "'Poppins', sans-serif",
  lato: "'Lato', sans-serif",
  inter: "'Inter', sans-serif"
};

const letterSpacings = {
  normal: "normal",
  1: "1px",
  caps: "0.25em"
};

// border-radius
const radius = [
  "0px",
  ".25rem",
  ".3rem",
  ".35rem",
  ".40rem",
  ".45rem",
  ".50rem"
];

const borderWidths = ["0px", "1px", "2px", "3px"];

const shadows = {
  viewOptionsBlock:
    "0 5px 10px 0 rgba(0, 0, 0, 0.1), 0 0 40px 0 rgba(0, 0, 0, 0.1)",
  externalProspectsDetailsBox: "0 2px 9px 0 rgba(176,192,237,0.42)"
};

const col = {
  36: "36%",
  13: "20%",
  12: "100%",
  11: "91.666667%",
  10: "83.333333%",
  9: "75%",
  8: "66.666667%",
  7: "58.333333%",
  6: "50%",
  5: "41.666667%",
  4: "33.333333%",
  3: "25%",
  2: "16.666667%",
  1.5: "10%",
  1: "8.333333%"
};

const theme = {
  breakpoints,
  colors,
  sizes,
  fontSizes,
  lineHeights,
  fontFamily,
  letterSpacings,
  radius,
  borderWidths,
  shadows,
  col,
  diffBackgorundColor
};

export default theme;
