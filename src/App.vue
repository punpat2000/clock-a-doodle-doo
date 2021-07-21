<template>
  <Clock :initialTime="10"></Clock>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Clock from './components/Clock.vue';

@Options({
  components: { Clock },
})
export default class App extends Vue {}
</script>

<style></style>
