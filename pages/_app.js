import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <main className="overflow-x-clip">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default App;
