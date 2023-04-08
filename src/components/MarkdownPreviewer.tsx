import { marked } from "marked";
import { useEffect, useRef, useState } from "react";

function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(`# Heading 1

## Heading 2

This is a [link](https://example.com).

Here's some inline \`code\`

\`\`\`js
const exampleFunction = () => {
  console.log('Hello world!');
}
\`\`\`


- List item 1
- List item 2

> This is a blockquote.

![Image](https://via.placeholder.com/150x150)

**Bold text**

  `);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [markdown]);

  const handleMarkdownChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMarkdown(event.target.value);
  };

  return (
    <section className="hero is-fullheight has-background-gradient">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-1-mobile has-text-white has-text-weight-bold">
            The Markdown
            <br />
            Previewer
          </h1>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label has-text-white has-text-weight-semibold is-size-4 mb-2">
                  Write Markdown
                </label>
                <div className="control">
                  <textarea
                    id="editor"
                    className="textarea has-fixed-size"
                    rows={10}
                    value={markdown}
                    onChange={handleMarkdownChange}
                    ref={textareaRef}
                    placeholder="Start typing here..."
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label has-text-white has-text-weight-semibold is-size-4 mb-2">
                  Markdown Preview
                </label>
                <div
                  className="content box"
                  id="preview"
                  style={{ minHeight: "10rem" }}
                  dangerouslySetInnerHTML={{
                    __html: marked(markdown, {
                      breaks: true,
                    }),
                  }}
                />
              </div>
            </div>
          </div>
          <p className="has-text-centered mt-6 footer">
            Made with ❤️ by <a href="https://github.com/YesnielX" target="_blank">YesnielX</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default MarkdownPreviewer;
