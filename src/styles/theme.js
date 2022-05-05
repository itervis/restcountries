import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 375,
            md: 900,
            lg: 1070,
            xl: 1536
        }

    },
    palette: {
        primary: {
            main: '#FFFFFF'            
        }        
    },
    shadows: ['none']

})