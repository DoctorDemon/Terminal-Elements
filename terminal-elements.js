// Define the <terminal-element> element
class TerminalElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const code = this.innerHTML;
    const theme = this.getAttribute('theme') || 'atom-one-dark';
    let backgroundColor = '#282c34'; // Default background color

    if (theme === 'agate') {
      backgroundColor = '#333'; // Agate theme background color
    } else if (theme === 'an-old-hope') {
      backgroundColor = '#1c1d21'; // An Old Hope theme background color
    } else if (theme === 'monokai-sublime') {
      backgroundColor = '#23241f'; // Monokai Sublime theme background color
    }

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/${theme}.min.css">
      <style>
        :host {
          display: block;
          background: ${backgroundColor};
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1.5rem;
        }
        .status {
          display: flex;
          margin-bottom: 0.5rem;
        }
        .status span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
        .status .red { background-color: #ff3b3b; }
        .status .yellow { background-color: #ffcc00; }
        .status .green { background-color: #00ff00; }
        pre {
          padding: 0;
          margin: 0;
          overflow-x: auto;
        }
      </style>
      <div class="status">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
      <pre><code class="hljs">${code}</code></pre>
    `;
    this.highlightCode();
  }

  highlightCode() {
    const codeElement = this.shadowRoot.querySelector('code');
    hljs.highlightElement(codeElement);
  }
}

// Register the custom element
customElements.define('terminal-element', TerminalElement);
