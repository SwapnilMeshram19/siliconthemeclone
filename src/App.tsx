import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { Pages } from "./pages/Pages";

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 
        'Arimo, sans-serif ',
    },
    });
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Pages />
    </div>
    </ThemeProvider>
  );
}

export default App;
