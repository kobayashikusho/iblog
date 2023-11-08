<template>
  <div class="main desktop" :data-theme="data_theme" v-font-size>
    <div class="isLayoutTools">
      <button class="isLayout" @click="optionStore.layoutChange">layoutChange</button>
      <input type="text" v-model="data_theme">
      <button class="isLayout" @click="theme_change">light</button>
      <button class="isLayout" @click="theme_change">dark</button>
      <button class="isLayout" @click="theme_change">pink</button>
    </div>
    <header>
      <header-wrap></header-wrap>
    </header>
    <main>
      <slot />
    </main>
    <footer>footer</footer>
  </div>
</template>

<script setup lang="ts">
import { useOptionStore } from "@/stores/options"
const optionStore = useOptionStore()

const data_theme: any = ref("light")
function theme_change(el: any) {
  // data_theme.value = data_theme.value == "light" ? "dark" : "light"
  data_theme.value = el.target.innerHTML
}

// debounce
</script>


<style scoped>
.isLayoutTools {
  position: fixed;
  bottom: 1%;
  left: 1%;
  display: flex;
}

.isLayoutTools button {
  margin: 0 1%;
}
</style>