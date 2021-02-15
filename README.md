# `@planningcenter/sweetalert2`

> TODO: Planning Center Opinions for SweetAlert2

WIP

This package builds SweetAlert2 CSS using the provided Sass Variables in [`variables.css`](https://github.com/sweetalert2/sweetalert2/blob/master/src/variables.scss).

It specifies planning center opinions and exposes a few CSS Custom Properties for further — albeit limited — customization.

## Demo

https://codesandbox.io/s/planningcentersweetalert2-demo-vkcpl

## Usage

### Add this package and its dependencies to your app

```bash
yarn add @planningcenter/sweetalert2 sweetalert2
```

### Import the stylesheet

```css
// use platform-specific import syntax
@import "@planningcenter/sweetalert2/css/sweetalert2.css";
```

#### Caution

Sass `@import` directives are tricky buggers.  
The import statement above will cause problems in Sass files.

Remove the `.css` extension and everything should work as you expect. In Sass, `@import` uses the inclusion of a file extension to determine if you want a Sass import or CSS import. Removing the `.css extension ensures that you get the Sass import.

#### Customize with CSS variables

```css
/* this can be :root too, if needed */
.swal2-container {
  /* use these variables to custimize your install */
  /* values here are the defaults */
  --swal2-font-size: 1rem;
  --swal2-confirm-button-background-color: hsla(0, 0%, 0%, 0.6);
  --swal2-confirm-button-color: white;
  --swal2-outline-color: Highlight;
  --swal2-icon-color: gray;
  --swal2-icon-border-color: gray;
}
```

### JS

```js
// import SweatAlert2 **see #caution section below**
import Swal from "sweetalert2/dist/sweetalert2";
// import shared defaults from this package
import { defaultPromptOptions } from "@planningcenter/sweetalert2";

// A sample function for firing a sweet alert with provided defaults
function handleDeleteRequest(user) {
  return Swal.fire({
    // spread defaults into your `.fire` call
    ...defaultPromptOptions,
    title: `Delete ${user.name}?`,
    text: `This will remove ${user.name} from all Planning Center apps. Their activity will be lost. You cannot un-delete ${user.name}.`,
    confirmButtonText: `Yes, delete ${user.name}!`,
  });
}
```

### Caution

The default export of SweetAlert2 comes injects a stylesheet. The injected stylesheet clobbers the themed stylesheets from this library.

To import just the JavaScript, use the nested import path `"sweetalert2/dist/sweetalert2"`. This ensures that you get _only_ the JavaScript.

## Further Reading

### SweetAlert2

- [SweetAlert2 documentation](https://sweetalert2.github.io)
- [SweetAlert2 theming documentation](https://sweetalert2.github.io/#themes) and [examples](https://github.com/sweetalert2/sweetalert2-themes)

### Planning Center

- [Planning Center Alert specification on planningcenter.design](https://planningcenter.design/alerts)
- [Planning Center Alert specification in Figma](https://www.figma.com/file/V8Ajrhr3jwzatZvkpqNKaK/Alerts?node-id=0%3A1)
- [Publishing Installation](https://github.com/ministrycentered/publishing/pull/568)

### Code

- [Theme SCSS Source](./src/sweetalert2.scss)
- [Theme JS Source](./src/sweetalert2.js)
