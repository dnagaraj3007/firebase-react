import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#2196f3",
            dark: "#002884",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff7961",
            main: "#f50057",
            dark: "#ba000d",
            contrastText: "#000"
        }
    }
});

export default theme;
