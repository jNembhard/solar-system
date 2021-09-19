const breakpoint = {
  tablet: "767px",
  laptop: "992px",
  desktop: "1440px",
};

const colors = {
  blackRussian: "#070724",
  bostonBlue: "#419EBB",
  cinnabar: "#D83A34",
  manatee: "#838391",
  mountainMeadow: "#1EC284",
  paynesGrey: "#38384F",
  piper: "#CD5120",
  purpleHeart: "#6F2ED6",
  royalBlue: "#2D68F0",
  seaBuckthorn: "#EDA249",
  trinidad: "#D14C32",
  white: "#ffffff",
};

export const fonts = {
  medium: "500",
  regular: "400",
  bold: "700",
};

export const theme = {
  tablet: `(min-width: ${breakpoint.tablet})`,
  laptop: `(min-width: ${breakpoint.laptop})`,
  desktop: `(min-width: ${breakpoint.desktop})`,

  antonioMedium: `${fonts.medium}`,
  spartanRegular: `${fonts.regular}`,
  spartanBold: `${fonts.bold}`,

  mercury: `${colors.bostonBlue}`,
  venus: `${colors.seaBuckthorn}`,
  earth: `${colors.purpleHeart}`,
  mars: `${colors.trinidad}`,
  jupiter: `${colors.cinnabar}`,
  saturn: `${colors.piper}`,
  uranus: `${colors.mountainMeadow}`,
  neptune: `${colors.royalBlue}`,

  background: `${colors.blackRussian}`,
  default: `${colors.paynesGrey}`,

  fontColor: `${colors.white}`,
  buttonOutline: `${colors.manatee}`,
};
