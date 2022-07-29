import * as React from "react";
import * as ReactDOM from "react-dom";

function App(props) {
  const content = (
    <div className="parent">
      parent文本
      <p className="child1">
        child1文本
        <span className="grandChildren1"></span>
      </p>
      <p className="child2">child2文本</p>
    </div>
  );
  console.log(content);
  return content;
}

ReactDOM.render(<App />, document.getElementById("root"));
