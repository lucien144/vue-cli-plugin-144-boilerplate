# Vue CLI boilerplate

This is my custom boilerplate project for Vue using Vue CLI.

---
<p align="center">
🔥 Looking for <strong>cool t-shirts for web developers</strong>?<br>
Check out my <a href="https://devnull.store?utm_source=github&utm_medium=link&utm_campaign=lemp" target="_blank">Devnull Clothing</a>.
</p>

---

## Features
- 💄 Basic SCSS boilerplate
- 🥾 Bootstrap 5: reboot, grid and utilites only along with all mixins
- 🧹 Cleaned up Vue project template
  - Removed HelloWorld component
  - Assets removed (logo, favicon, ...)
  - Cleaned up App.vue
- ~~prettier~~

## Installation

```sh
$ vue create your-app
$ cd your-app
$ yarn add https://github.com/lucien144/vue-cli-plugin-144-boilerplate.git
$ vue invoke vue-cli-plugin-144-boilerplate
$ yarn serve
```

## Styles / SASS

### Colors

Colors can be defined in the `src/assets/scss/settings/__settings.colors.scss` file, add your own colors to the `$colors: ()` list. Each color gets its class based on the name: `.color-success` or `.bg-success`.

### Typography

Typography settings (variables, ...) is in `src/assets/scss/settings/__settings.typo.scss` file while font classes should go to `src/assets/scss/__typo.scss`. Use `rem(18px)` function for font size, it will convert pixels to rems. Ideally, use this everywhere in your project.

The variable `$font-base` should be the only one with pixels.

### Spacing

See `src/assets/scss/settings/__settings.bootstrap.scss`, edit the `$spacers: ()` list for custom spacers. The idea is to have `.m-` `.p-` classes for each possible spacer in pixels, and first 7 spacers (`.p-0` to `.p-6`) is reserved for Bootstrap spacers in `rem`. Example: if there's a 32px spacer, create `.p-32` for it.

### Mixins / Functions

| Mixin | Description | Usage |
|-------|-------------|-------|
| `r()` | Converts pixel size to rem size based on `$font-base` | `r(18)` converts 18px to rem |

## Local development

Every time there's a change in the plugin, this has to be run 👇 from the projects root folder (`vue create test-app && cd test-app`)

```sh
$ yarn add file:/home/user/vue-cli-plugin-144-boilerplate/ --dev && vue invoke vue-cli-plugin-144-boilerplate
$ yarn serve
```
