import * as React from "react";
import * as ReactDOM from "react-dom";

const AppContext = React.createContext("myContext");
function ChildComponent(props) {
  return (
    <AppContext.Consumer>
      {value => {
        return <h1>ChildComponent --- {JSON.stringify(value)}</h1>;
      }}
    </AppContext.Consumer>
  );
}

function App(props) {
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          name: "chenjiang",
          age: 24
        }}
      >
        <ChildComponent />
      </AppContext.Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
