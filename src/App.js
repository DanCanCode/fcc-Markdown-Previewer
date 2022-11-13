import { useState } from "react";
import { marked } from "marked";
import "./App.scss";

function App() {
  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
const dog = {
  name: jeff,
  age: 5
}
\`\`\`

You can make text **bold**... whoa!
Or _italic_.

[links](https://www.freecodecamp.org)

> Block Quote

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);

  marked.setOptions({
    breaks: true,
  });

  function handleChange(event) {
    event.preventDefault();
    setText(event.target.value);
  }

  return (
    <div className="App">
      <textarea id="editor" onChange={handleChange} value={text}></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
