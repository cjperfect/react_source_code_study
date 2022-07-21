import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "chenjiang"
    };
  }
  render() {
    return (
      <div
        className="app-div"
        onClick={() => {
          this.setState({
            name: 1
          });
          this.setState({
            name: 2
          });
          this.setState({
            name: 3
          });
          this.setState({
            name: 4
          });
        }}
      >
        haha ---{this.state.name}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
