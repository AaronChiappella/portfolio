import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import "./index.css";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
