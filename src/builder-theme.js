// -------------------------------
// BUILDER THEME
// -------------------------------
// Settings
import settings from "./builder-variables";

// Stylesheet
export default {
  /*
   * Normalize & Element Selectors
   */
  "*, *:before, *:after": {
    boxSizing: "inherit"
  },
  html: {
    textSizeAdjust: "100%",
    fontSize: "18px"
  },
  body: {
    background: settings.jet,
    fontFamily: settings.sansSerif,
    fontWeight: "300",
    lineHeight: 1.675,
    margin: 0,
    color: settings.darkerJet,
    boxSizing: "border-box"
  },
  "html, body": {
    overflowX: "hidden"
  },
  "article, aside, details, figcaption, figure, footer": {
    display: "block"
  },
  "header, hgroup, main, menu, nav, section, summary": {
    display: "block"
  },
  table: {
    borderCollapse: "collapse",
    display: "block",
    overflow: "auto",
    width: "100%"
  },
  "thead, tbody": {
    border: 0,
    margin: 0,
    padding: 0,
    fontSize: "100%"
  },
  thead: {
    font: "inherit",
    verticalAlign: "baseline"
  },
  tbody: {
    verticalAlign: "middle"
  },
  "th, td": {
    border: `1px solid ${settings.darkGray}`,
    padding: "0.425em 0.75em",
    verticalAlign: "top"
  },
  "th code, td code": {
    background: "none",
    color: "#111"
  },
  th: {
    fontWeight: "bold",
    textAlign: "left"
  },
  "h1, h2, h3, h4, h5, h6, hgroup": {
    marginTop: "2.5em",
    marginBottom: 0
  },
  "dd, p, figure, pre, table, fieldset, hr, .highlight, pre": {
    marginTop: "1.5em",
    marginBottom: 0
  },
  img: {
    maxWidth: "100%"
  },
  "svg, img": {
    fill: "currentColor"
  },
  h1: {
    fontSize: "2.125em",
    fontWeight: 200
  },
  h2: {
    fontSize: "2em",
    fontWeight: 200
  },
  h3: {
    fontSize: "1.875em",
    fontWeight: 300
  },
  "h4, h5, h6": {
    fontSize: "1.25em",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  },
  "h4 code, h5 code, h6 code": {
    textTransform: "none",
    letterSpacing: 0
  },
  "h1, h2, h3, h4": {
    fontFamily: settings.sansSerif,
    lineHeight: 1.3
  },
  "strong": {
    fontWeight: 500
  },
  "em": {
    fontStyle: "italic"
  },
  "ul": {
    marginTop: "0.5em",
    padding: "0"
  },
  "ol": {
    marginTop: "0.5em",
    padding: "0 0 0 1.5em"
  },
  "li": {
    margin: "0",
    padding: "0"
  },
  "ul > li": {
    listStyle: "none"
  },
  "ol > li": {
    paddingLeft: "1em"
  },
  /*
   * Headlines/Headings
   */
  ".Headline": {
    color: settings.lighterJet,
    fontFamily: settings.sansSerif,
    fontSize: "2.125em",
    fontWeight: 200, // Light
    lineHeight: 1.3
  },
  ".Smallcaps": {
    textTransform: "uppercase",
    fontSize: "0.85em",
    fontWeight: "bold",
    color: settings.lightJet
  },
  /*
   * Links
   */
  "a": {
    paddingTop: "0.15em",
    color: settings.jet,
    fontWeight: "500",
    textDecoration: "none",
    background: "transparent",
    borderBottom: `3px solid ${settings.gold}`,
    transition: "all 0.5s ease"
  },
  "a:hover, a:focus": {
    background: settings.gold,
    borderBottom: `3px solid ${settings.gold}`,
    transition: "all 0.5s ease"
  },
  /*
   * Layout/Grid
   */
  ".Container": {
    paddingLeft: "3%",
    paddingRight: "3%"
  },
  ".Container li > ul, .Container li > ol": {
    paddingLeft: "1.5em"
  },
  /*
   * Copy
   */
  ".Copy": {
    margin: "0 auto",
    fontSmoothing: "antialiased",
    fontSize: "1rem"
  },
  ".Tagline": {
    textAlign: "left"
  },
  ".Copy .highlight": {
    marginLeft: "-16px",
    marginRight: "-16px"
  },
  ".Copy .highlight pre": {
    marginTop: 0,
    background: settings.gold,
    color: "#fff",
    fontFamily: settings.monospace,
    fontSize: "1em",
    lineHeight: 1.2,
    overflow: "auto",
    padding: "1em"
  },
  ".Copy ul": {
    paddingLeft: "1.5em",
    listStyle: "none"
  },
  ".Copy ul > li": {
    position: "relative"
  },
  ".Copy ul > li + li": {
    marginTop: "0.25em"
  },
  ".Copy ul > li:before": {
    content: "",
    width: "1em",
    height: "1em",
    display: "block",
    position: "absolute",
    fontSize: "8px",
    borderRadius: "50%",
    border: "1px solid rgba(48, 48, 48, 0.5)",
    left: "-24px",
    top: "11px"
  },
  ".Copy li > ul": {
    marginTop: 0,
    marginBottom: "0.25em"
  },
  ".Copy code, .Focus code": {
    background: "rgba(135, 135, 135, 0.1)",
    fontFamily: settings.monospace,
    fontSize: "0.8625em",
    borderRadius: "3px",
    padding: "0 5px",
    display: "inline-block"
  },
  ".highlight code": {
    background: "transparent",
    padding: 0
  },
  /*
   * Big Copy
   */
  ".Copy--Big": {
    fontSize: "1.2223em"
  },
  /*
   * Markdown File text wrangling
   */
  ".Overview p, .Overview li": {
    maxWidth: "38em"
  },
  ".Overview pre": {
    background: "rgba(135, 135, 135, 0.1)",
    marginRight: "-20px",
    padding: "1em 0.5em",
    overflowX: "scroll", // bring back scrollbars for readme.md
    width: "100%"
  },
  ".Overview pre code": {
    background: "none",
    fontSize: "0.825rem"
  },
  mediaQueries: {
    [settings.mediaSizes.medium]: { //medium
      h1: {
        fontSize: "2.5em"
      },
      h2: {
        fontSize: "2.125em"
      },
      h3: {
        fontSize: "2em"
      },
      "h4, h5, h6": {
        fontSize: "1.1em"
      },
      ".Headline": {
        fontSize: "2.5em"
      },
      ".Headline--minor": {
        fontSize: "2.125em"
      },
      ".Headline--major": {
        fontSize: "2.75em"
      },
      ".Container": {
        paddingLeft: "5%",
        paddingRight: "5%"
      },
      ".Overview pre code": {
        fontSize: "1rem"
      }
    },
    [settings.mediaSizes.large]: {
      ".Container": {
        paddingLeft: "15%",
        paddingRight: "15%"
      }
    },
    [settings.mediaSizes.xlarge]: { //xlarge
      html: {
        fontSize: "18px"
      },
      h1: {
        fontSize: "3rem"
      },
      h2: {
        fontSize: "2.75rem"
      },
      h3: {
        fontSize: "2.125rem"
      },
      ".Headline": {
        fontSize: "2.75em"
      },
      ".Header": {
        paddingTop: "65px",
        paddingBottom: "0"
      },
      ".Container": {
        paddingLeft: "20%",
        paddingRight: "20%"
      },
      ".Copy": {
        fontSize: "1.125rem"
      },
      ".Copy--Big": {
        fontSize: "1.3334em"
      },
      ".Copy .highlight": {
        margin: "2em -1.3334em"
      },
      ".Copy .highlight pre": {
        padding: "1.3334em"
      },
      ".Tagline": {
        textAlign: "center"
      }
    }
  }
};
