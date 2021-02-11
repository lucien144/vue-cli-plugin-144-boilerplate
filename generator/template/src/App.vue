---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /<template>[^]*?<\/template>/
  - !!js/regexp /<script>[^]*?<\/script>/
  - !!js/regexp /<style([^>]*?)>[^]*?<\/style>/
---

<%# REPLACE %>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p class="color-danger pt-1">Oh, Hello World!</p>
            </div>
        </div>
    </div>
</template>
<%# END_REPLACE %>

<%# REPLACE %>
<script lang="ts">
import './assets/styles/default.scss';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {}
});
</script>
<%# END_REPLACE %>

<%# REPLACE %>
<style scoped lang="scss">
</style>
<%# END_REPLACE %>
