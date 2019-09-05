---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /<template>[^]*?<\/template>/
  - !!js/regexp /<script>[^]*?<\/script>/
  - !!js/regexp /<style([^>]*?)>[^]*?<\/style>/
---

<%# REPLACE %>
<template>
	<div id="app"/>
</template>
<%# END_REPLACE %>

<%# REPLACE %>
<script>
import './assets/scss/default.scss'; // eslint-disable-line import/no-unassigned-import

export default {
	components: {}
}
</script>
<%# END_REPLACE %>

<%# REPLACE %>
<style lang="scss">
</style>
<%# END_REPLACE %>