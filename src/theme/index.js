import { createTheme } from "@mui/material/styles"

// option refer to https://mui.com/material-ui/customization/theming/
const theme = createTheme({
  palette: {
    // bg color
    background_light_cyan: "#63C3D3",

    // uncoming weather  color
    uncoming_bg_skyblue: "#87CEEB",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 320,
      tablet: 576,
      laptop: 768,
      largeLaptop: 1024,
      desktop: 1440,
      largeDesktop: 1920,
      wideScreen: 2560,
    },
    miniMobile: "0px",
    mobile: "320px",
    tablet: "576px",
    laptop: "768px",
    largeLaptop: "1024px",
    desktop: "1440px",
    largeDesktop: "1920px",
    wideScreen: "2560px",
  },
})

export default theme
