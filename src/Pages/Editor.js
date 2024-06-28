import React from "react";

const Editor = (props) => {
  return (
    <textarea
      id="editor"
      value={props.markdown}
      onChange={props.onChange}
      type="text"
    />
  );
};

export default Editor;
