import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Header from "../components/Header";
import { ThemeContext } from "../contexts/Theme";
import "./Root.css";

function RootLayout() {
  const toggleTheme = () => {
    const root = document.documentElement;

    const theme = root.style.getPropertyValue("color-scheme");

    if (theme === "light") {
      root.style.setProperty("color-scheme", "dark");

      return;
    }

    root.style.setProperty("color-scheme", "light");
  };

  return (
    <>
      <ThemeContext.Provider value={{ toggleTheme }}>
        <Header />
        <main>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Outlet />
          </ErrorBoundary>
        </main>
      </ThemeContext.Provider>
    </>
  );
}

export default RootLayout;
