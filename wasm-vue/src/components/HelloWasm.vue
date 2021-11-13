<template>
  <button @click="greet('webAssembly')">hello wasm</button>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import init, { greet } from 'wasm-test'

init()
</script>
