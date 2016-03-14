import Ecology from "ecology";
import React from "react";
import Prism from "prismjs";
/* eslint-disable no-unused-vars */
// add more language support
import jsx from "prismjs/components/prism-jsx";
import sh from "prismjs/components/prism-bash";
import yaml from "prismjs/components/prism-yaml";
/* eslint-enable no-unused-vars */

import BuilderREADME from "builder/README.md";

class Docs extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div>
        <Ecology overview={BuilderREADME} />
      </div>
    );
  }
}

export default Docs;
