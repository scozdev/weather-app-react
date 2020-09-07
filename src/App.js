import React, { useContext, useEffect, useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

import { GlobalContext } from './context/GlobalState';

function App() {

  const { weathers } = useContext(GlobalContext);

  return (
    <div
      className={
        weathers.days
          ? weathers.days[0].temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <Header />
        <Main weathers={weathers} />
      </main>
    </div>
  );
}

export default App;
