import * as React from "react";
import { render } from "react-dom";

import { Button, Pane } from "evergreen-ui";
import { AppModel } from "./model";

const App = () => {
  return (
    <Pane padding="20px">
      <Button>Click Me! Bitch!</Button>
    </Pane>
  );
};

const db: AppModel = {
  quizzes: [],
};

render(<App />, document.getElementById("app"));
