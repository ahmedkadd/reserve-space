import React from "react";

import Scheduler from "./components/Scheduler";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span>
              share<b>space</b>
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