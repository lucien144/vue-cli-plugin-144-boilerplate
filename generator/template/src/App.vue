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
export default {
	components: {}
}
</script>
<%# END_REPLACE %>

<%# REPLACE %>
<style lang="scss">
</style>
<%# END_REPLACE %>