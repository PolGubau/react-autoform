import { DarkThemeToggle, IconButton, Link, useThemeMode } from "pol-ui";
import Api from "./examples/Api";
import Array from "./examples/Array";
import Basics from "./examples/Basics";
import ConfirmPassword from "./examples/ConfirmPassword";
import Controlled from "./examples/Controlled";
import Dependencies from "./examples/Dependencies";
import InputWithoutLabel from "./examples/InputWithoutLabel";
import SubObject from "./examples/SubObject";

function App() {
  const { computedMode } = useThemeMode();
  return (
    <div className={computedMode === "dark" ? "dark" : ""}>
      <DarkThemeToggle className="fixed top-3 right-3" />

      <main className="w-screen flex justify-center bg-secondary-50 dark:bg-secondary-900 text-secondary-900 dark:text-white">
        <div className="max-w-4xl flex flex-col gap-8">
          <header className="pt-24 pb-10 flex gap-4 flex-col">
            <h1 className="text-3xl font-bold  ">React Autoform</h1>
            <h2>
              A complete form library for React that uses Zod schemas to
              generate forms with Pol-ui components.
            </h2>
          </header>

          <Basics />
          <InputWithoutLabel />
          <SubObject />
          <Controlled />
          <ConfirmPassword />
          <Api />
          <Array />
          <Dependencies />
        </div>
      </main>
    </div>
  );
}

export default App;
