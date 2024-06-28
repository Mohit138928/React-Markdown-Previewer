import React, { useState } from "react";
import Toolbar from "./Toolbar";
import Editor from "./Editor";
import Preview from "./Preview";
import { FaHeart } from "react-icons/fa";

const Markdown = () => {
  const [markdown, setMarkdown] = useState(placeholder);
  const [editorMaximized, setEditorMaximized] = useState(false);
  const [previewMaximized] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleMaxAndMin = () => {
    setEditorMaximized(!editorMaximized);
  };

  const classes = editorMaximized
    ? ["editorWrap maximized", "previewWrap hide"]
    : previewMaximized
    ? ["editorWrap hide", "previewWrap maximized"]
    : ["editorWrap", "previewWrap"];

  return (
    <>
      <div>
        <div className={classes[0]}>
          <Toolbar handleMaxAndMin={handleMaxAndMin} text="Editor" />
          <Editor markdown={markdown} onChange={handleChange} />
        </div>
        <div className="converter"></div>
        <div className={classes[1]}>
          <Toolbar handleMaxAndMin={handleMaxAndMin} text="Previewer" />
          <Preview markdown={markdown} />
        </div>
      </div>
      <div className="footer">
        <p>
          Created By{" "}
          <a
            href="https://www.linkedin.com/in/mohit-maurya-76a282204/"
            target="_blank"
            rel="noreferrer"
          >
            Mohit Maurya
          </a>
          &nbsp;
          <FaHeart />
        </p>
      </div>
    </>
  );
};

const placeholder = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Here is some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [Mohit Maurya](https://github.com/Mohit138928), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![FreeCodeCamp](images/FreeCodeCamp_logo.png)
`;

export default Markdown;
