<p align="center">
  <img src="https://i.postimg.cc/rFgwLf24/Screenshot-229.png" alt="Terminal-Elements Logo" width="">
</p>

**Terminal-Elements** is a cutting-edge JavaScript library that allows developers to build styled terminal-like UI components using modern web technologies. It offers custom web components for creating terminal outputs with encapsulated styling using the Shadow DOM.



# Features

### Components
- **`<terminal-element>`**: A customizable terminal-like display component supporting multiple themes and syntax highlighting.

### Themes
Terminal-Elements supports the following pre-defined themes for `<terminal-element>`:
- **Atom One Dark** (Default)
- **Agate**
- **An Old Hope**
- **Monokai Sublime**

Here is a preview of the supported themes:


<table align="center" >
  <tr>
    <td align="center">
      <img src="https://i.postimg.cc/TYXBcb1H/Screenshot-232-Kopie.png" alt="Atom One Dark Theme" width="">
      <p>Atom One Dark</p>
    </td>
    <tr>
    <td align="center">
      <img src="https://i.postimg.cc/SK5vY2Hd/Screenshot-232.png" alt="Agate Theme" width="">
      <p>Agate</p>
    </td>
      </tr>
  </tr>
  <tr>
    <td align="center">
      <img src="https://i.postimg.cc/Y9Wy62HH/Screenshot-233-Kopie.png" alt="An Old Hope Theme" width="">
      <p>An Old Hope</p>
    </td>
    <tr>
    <td align="center">
      <img src="https://i.postimg.cc/44pSn3Pv/Screenshot-234-Kopie.png" alt="Monokai Sublime Theme" width="">
      <p>Monokai Sublime</p>
    </td>
      </tr>
  </tr>
</table>

Each theme applies distinct background colors and text styles. Custom themes can also be added by linking appropriate CSS files and overriding the background color.<br/><br/>
*Note: the white corners are not part of the element.*



# Installation

## 1. Using a local copy
Download the `terminal-elements.js` file and include it in your project using a `<script>` tag.

```html
<script src="path/to/terminal-elements.js"></script>
```

### 2. Including Highlight.js
The library uses [Highlight.js](https://highlightjs.org/) for syntax highlighting. Include the Highlight.js library and styles in your project:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script>
```
<br/>

## 1. Using `jsdelivr`
Include the import in your project using a `<script>` tag.

```html
<script src="https://cdn.jsdelivr.net/gh/DoctorDemon/Terminal-Elements/terminal-elements.js defer"></script>
```

*Note:* You still need to include highlight.js:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script>
```



# Usage

### Example: `<terminal-element>`

```html
<terminal-element theme="monokai-sublime">
  <span class="user">user@hostname:</span> echo "Hello, Terminal!"
</terminal-element>
```



## Contribution
Contributions are welcome! Please submit issues or pull requests on the GitHub repository to propose changes or report bugs.



## License
This project is licensed under the MIT License.<br/>
Terminal-Elements colors the content in the terminals via highlight.js.<br/>
Licence and copyright for **highlight.js** apply:<br/>
Copyright (c) 2006, Ivan Sagalaev.<br/>
All rights reserved.<br/>
**We do NOT claim ownership of highlight.js!**


### Credits
Built with ❤️ by developers for developers. Designed for simplicity, elegance, and flexibility.<br/>
Big thank you to highlight.js for their awesome library.
