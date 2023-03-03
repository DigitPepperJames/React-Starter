import { createTheme } from "@mui/material";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    }
  },
  palette:{
    themeColor: createColor('#363C48'),
  },
  components: {
    // Name of the component
    MuiAccordion: {
      styleOverrides: {
        root: {
        '&.MuiAccordion-root': {
            '&:before':{
              position: 'relative',
            }
          }
        }
      }
    },
  },
});

export default theme;