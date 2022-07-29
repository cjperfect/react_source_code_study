import * as React from "react";
import * as ReactDOM from "react-dom";

function App(props) {
  const content = (
    <div className="parent">
      <p className="child1">
        child1
        <span className="grandChildren1">grandChildren1</span>
        <span className="grandChildren2">grandChildren2</span>
      </p>
      <p className="child2">child2</p>
    </div>
  );
  console.log(content);
  return content;
}

ReactDOM.render(<App />, document.getElementById("root"));
