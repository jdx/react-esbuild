import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from "./Header";
import { Counter } from "./Counter";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Counter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
