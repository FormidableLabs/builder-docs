import React from "react";

import Docs from "./docs";
import { Header, Footer } from "formidable-landers";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hello, world!</h1>
        <Docs />
        <Footer />
      </div>
    );
  }
}

export default App;
