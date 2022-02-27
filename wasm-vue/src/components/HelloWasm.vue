<template>
  <button @click="greet()">hello wasm</button>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import init, { greet } from 'rsw-hello'

init()
</script>
