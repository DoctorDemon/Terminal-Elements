// Define the <terminal> element
class TerminalElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Attach shadow DOM for encapsulation
  }

  connectedCallback() {
    // Get content inside <terminal> tags
    let content = this.innerHTML;

    // Apply regex to color specific parts
    content = content.replace(/(\b\w+@\w+:\S+\$)/g, '<span class="user">$1</span>');

    // Apply styles and structure for terminal block
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #2d2d2d;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
          color: #ffffff; /* Change text color to white */
          font-family: 'Roboto Mono', 'Fira Code', 'Source Code Pro', 'Courier New', monospace; /* Change to a more readable terminal font */
          white-space: pre-wrap;
          word-wrap: break-word;
          font-weight: 400; /* Make text slightly bold */
        }
        .user {
          color: #00ff00; /* Green color for user@hostname */
        }
      </style>
      <div class="status">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
      <pre>${content}</pre>
    `;
  }
}

// Define the <heading> element
class HeadingElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const level = this.getAttribute('level') || '2'; // Default level 2
    const text = this.innerHTML;
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin-bottom: 1rem;
        }
        h${level} {
          font-size: ${level === '1' ? '2rem' : '1.75rem'}; /* Increase font size for level 2 */
          font-weight: bold;
          color: #fff;
        }
      </style>
      <h${level}>${text}</h${level}>
    `;
  }
}

// Define the <paragraph> element
class ParagraphElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const text = this.innerHTML;
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin-bottom: 1rem;
          font-size: 1rem;
          color: #ccc;
          font-family: 'Arial', sans-serif; /* Change to a more professional font */
        }
      </style>
      <p>${text}</p>
    `;
  }
}

// Define the <styledtable> element
class StyledTableElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const content = this.innerHTML;
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          overflow-x: auto;
          margin-bottom: 1rem;
          border: 1px solid #444;
          border-radius: 8px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          color: #fff;
          font-family: 'Roboto Mono', 'Fira Code', 'Source Code Pro', 'Courier New', monospace;
        }
        th, td {
          padding: 0.5rem;
          border: 1px solid #444;
        }
        th {
          background-color: #333;
          font-weight: bold;
        }
        tr {
          background-color: #2d2d2d;
        }
      </style>
      <table>${content}</table>
    `;
  }
}

// Define the <styledalert> element
class StyledAlertElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const type = this.getAttribute('type') || 'info'; // Default type is 'info'
    const text = this.innerHTML;
    let backgroundColor, borderColor, icon;

    switch (type) {
      case 'critical':
        backgroundColor = '#ffcccc';
        borderColor = '#ff3b3b';
        icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>';
        break;
      case 'warning':
        backgroundColor = '#fff3cd';
        borderColor = '#ffcc00';
        icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>';
        break;
      case 'info':
        backgroundColor = '#cce5ff';
        borderColor = '#00aaff';
        icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>';
        break;
      default:
        backgroundColor = '#cce5ff';
        borderColor = '#00aaff';
        icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>';
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 8px;
          background-color: ${backgroundColor};
          border: 2px solid ${borderColor};
          color: #000;
          font-family: 'Arial', sans-serif;
          font-weight: bold;
        }
        .icon {
          margin-right: 0.5rem;
          vertical-align: middle;
        }
      </style>
      <div><span class="icon">${icon}</span>${text}</div>
    `;
  }
}

// Register the custom elements
customElements.define('terminal-output', TerminalElement);
customElements.define('heading-text', HeadingElement);
customElements.define('paragraph-text', ParagraphElement);
customElements.define('styled-table', StyledTableElement);
customElements.define('styled-alert', StyledAlertElement);


// Author: DoctorDemon
// Licence: MIT
