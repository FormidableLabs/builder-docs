import React from "react";
import Radium from "radium";
import {Grid, Cell} from "radium-grid";

import settings from "../builder-variables";

class Diagram extends React.Component {
  getRepoLayoutStyles() {
    return {
      margin: 0,
      width: 'auto',
      margin: "5em -36px",
      [settings.mediaQueries.medium]: {
        margin: "initial"
      }
    };
  }

  getRepoStyles(skewDegrees, bg) {
    return {
      wrapper: {
        margin: "0.25em 0",
        padding: "3em 2em",
        width: "100%",
        background: bg,
        color: settings.darkGray,
        transform: `skewY(${skewDegrees})`,
        margin: "1em 0 2em 0",

        [settings.mediaQueries.medium]: {
          margin: "initial",
          transform: "initial"
        },
        [settings.mediaQueries.small]: {
          margin: "initial",
          transform: "initial"
        }
      },
      content: {
        fontFamily: settings.monospace,
        fontSize: ".777777rem",
        transform: `skewY(-${skewDegrees})`,

        [settings.mediaQueries.medium]: {
          transform: "initial"
        },
        [settings.mediaQueries.small]: {
          transform: "initial"
        }
      }
    };
  }

  getRepoHeadingStyles() {
    return {
      margin: "0 0 0.3em 0",

      fontWeight: "600",
      fontFamily: settings.monospace,
      fontSize: "1.25rem",
      lineHeight: "1.2",
      verticalAlign: "middle"
    };
  }

  getRepoListStyles() {
    return {
      margin: "0 0 0 20px",
      display: "inline-block",

      textAlign: "left"
    };
  }

  getFlavorArchetypeStyles() {
    return {
      zIndex: "1",

      backgroundColor: settings.gray,
      color: settings.darkerJet,
      fontFamily: settings.monospace,
      fontSize: ".777777rem",
      textAlign: "center",

      margin: "0 auto",
      padding: "2em 1em",
      display: "block",
      width: "100%",
      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
      margin: "-5em auto 2em",

      [settings.mediaQueries.medium]: {
        margin: "initial"
      }
    };
  }

  renderFlavorName(flavor) {
    return (
      <p style={this.getRepoHeadingStyles()}>
        <i className="octicon octicon-repo"></i> {flavor}
      </p>
    );
  }

  renderFlavorsList() {
    return (
      <ul style={this.getRepoListStyles()}>
        <li>.babelrc</li>
        <li>.eslintrc-base</li>
        <li>.eslintrc-client</li>
        <li>.eslintrc-client-test</li>
        <li>.eslintrc-server</li>
        <li>webpack.config.coverage.js</li>
        <li>webpack.config.dev.js</li>
        <li>webpack.config.js</li>
        <li>webpack.config.test.js</li>
      </ul>
    );
  }

  renderBuilderList() {
    return (
      <ul style={this.getRepoListStyles()}>
        <li>.builderrc</li>
      </ul>
    );
  }

  renderFlavorArchetype() {
    return (
      <div style={this.getFlavorArchetypeStyles()}>
        {this.renderFlavorName("flavor-archetype")}
        {this.renderFlavorsList()}
      </div>
    );
  }

  render() {
    const firstRepoStyles = this.getRepoStyles("9deg", `linear-gradient(-90deg, #eee, ${settings.white})`);
    const secondRepoStyles = this.getRepoStyles("171deg", settings.white);
    const thirdRepoStyles = this.getRepoStyles("9deg", `linear-gradient(90deg, #eee, ${settings.white})`);

    return (
      <Grid 
        cellWidth="1/3" 
        gutter="0px"
        mediumCellWidth="1"
        smallCellWidth="1"
        style={this.getRepoLayoutStyles()}
        breakpoints={settings.mediaQueries}
      >
        <Cell>
          <div style={firstRepoStyles.wrapper}>
            <div style={firstRepoStyles.content}>
              {this.renderFlavorName("strawberry")}
              {this.props.archetype ? this.renderBuilderList() : this.renderFlavorsList()}
            </div>
          </div>
        </Cell>
        <Cell>
          <div style={secondRepoStyles.wrapper}>
            <div style={secondRepoStyles.content}>
              {this.renderFlavorName("blueberry")}
              {this.props.archetype ? this.renderBuilderList() : this.renderFlavorsList()}
            </div>
          </div>
        </Cell>
        <Cell>
          <div style={thirdRepoStyles.wrapper}>
            <div style={thirdRepoStyles.content}>
              {this.renderFlavorName("chocolate")}
              {this.props.archetype ? this.renderBuilderList() : this.renderFlavorsList()}
            </div>
          </div>
        </Cell>
        {this.props.archetype ? this.renderFlavorArchetype() : null}
      </Grid>
    );
  }
}

Diagram.propTypes = {
  archetype: React.PropTypes.bool
};

Diagram.defaultProps = {
  archetype: false
};

export default Radium(Diagram);
