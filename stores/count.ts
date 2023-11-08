import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
    color.value = color.value == "#333" ? "#f69" : "#333"
  }
  const color = ref("#333")

  return {count, color, increment}
})