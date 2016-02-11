import Ecology from "ecology";
import React from "react";
import Radium from "radium";

import BuilderREADME from "builder/README.md";

class Docs extends React.Component {
  render() {
    return (
      <div>
        <Ecology overview={BuilderREADME} />
      </div>
    );
  }
}

export default Radium(Docs);
