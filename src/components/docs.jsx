import React from "react";
import Prism from "prismjs";
import marked from "marked";
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
  renderMarkdown(file) {
    const renderer = new marked.Renderer();
    const renderers = {
      code: (code, lang) => {
        const escape = (html) => {
          return html
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        };
        // Use regular strings, es6 templates cause spaces to be inserted
        if (!lang) {
          return ("<pre><code>" + escape(code) + "</code></pre>"); // eslint-disable-line prefer-template
        }

        return ("<pre><code class='lang-" + escape(lang) + "'>" + escape(code) + "</code></pre>"); // eslint-disable-line prefer-template
      }
    };
    Object.assign(renderer, renderers);
    return marked(file, { renderer, gfm: true, smartypants: true });
  }
  render() {
    return (
      <div
        className="Copy Overview"
        dangerouslySetInnerHTML={{__html: this.renderMarkdown(BuilderREADME)}}
      >
      </div>
    );
  }
}

export default Docs;
