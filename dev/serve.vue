<script lang="ts">
import Vue from 'vue';
import { UiKitSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    UiKitSample,
  }
});
</script>

<template>
  <div id="app">
    <ui-kit-sample />
  </div>
</template>
