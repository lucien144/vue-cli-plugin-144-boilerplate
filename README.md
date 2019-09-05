# Vue CLI boilerplate

This is my custom boilerplate project for Vue using Vue CLI.

## Features
- ❤️ XO with prettier (`yarn lint`)
- 💄 Basic SCSS boilerplate
- 🥾 Bootstrap 4: reboot, grid and utilites only along with all mixins
- 🧹 Cleaned up Vue project template
  - Removed HelloWorld component
  - Assets removed (logo, favicon, ...)
  - Cleaned up App.vue

---
<p align="center">
🔥 Looking for <strong>cool t-shirts for web developers</strong>?<br>
Check out my <a href="https://devnull.store?utm_source=github&utm_medium=link&utm_campaign=lemp" target="_blank">Devnull Clothing</a>.
</p>

---

## Installation

```sh
$ vue create your-app
$ cd your-app
$ yarn add https://github.com/lucien144/vue-cli-plugin-144-boilerplate.git
$ vue invoke vue-cli-plugin-144-boilerplate
$ yarn serve
```

## Local development

Every time there's a change in the plugin, this has to be run 👇 from the projects root folder (`vue create test-app && cd test-app`)

```sh
$ yarn add file:/home/user/vue-cli-plugin-144-boilerplate/ --dev && vue invoke vue-cli-plugin-144-boilerplate
$ yarn serve
```