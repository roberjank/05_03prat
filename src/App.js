import React from "react";
import { Button, Block, Hero } from "./components";

const App = () => {
  return (
    <div>
      <Hero color="success" title="Success hero" subtitle="Success subtitle" />
      <Hero color="danger" title="Danger hero" subtitle="Danger subtitle" />
    </div>
  );
};

export default App;
