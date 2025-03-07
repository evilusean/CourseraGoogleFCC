// Set default markdown text that includes all required elements
const defaultMarkdown = `# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

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

There's also [links](https://www.freecodecamp.org), and
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
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

// Configure marked options
marked.setOptions({
  breaks: true, // Enable line breaks
  highlight: function (code) {
    return code;
  }
});

// Create Editor component
const Editor = ({ markdown, onChange }) => {
  return (
    <div className="editor-container">
      <div className="editor-header">
        <span>Editor</span>
      </div>
      <textarea 
        id="editor" 
        value={markdown} 
        onChange={onChange}
      ></textarea>
    </div>
  );
};

// Create Preview component
const Preview = ({ markdown }) => {
  // Create HTML from markdown
  const getMarkdownText = () => {
    return { __html: marked.parse(markdown) };
  };

  return (
    <div className="preview-container">
      <div className="preview-header">
        <span>Preview</span>
      </div>
      <div 
        id="preview" 
        dangerouslySetInnerHTML={getMarkdownText()}
      ></div>
    </div>
  );
};

// Create main App component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultMarkdown
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-4 mb-4">Markdown Previewer</h1>
        <div className="row">
          <div className="col">
            <Editor 
              markdown={this.state.markdown} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="col">
            <Preview markdown={this.state.markdown} />
          </div>
        </div>
      </div>
    );
  }
}

// Render the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
