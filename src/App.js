import React from "react";

import Scheduler from "./components/Scheduler";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>scheduler</b>
            </span>
          </div>
        </header>
        <main>
          <Scheduler />
        </main>
      </div>
    );
  }
}

export default App;