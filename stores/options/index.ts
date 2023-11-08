import { defineStore } from "pinia"

export const useOptionStore = defineStore('counter', () => {
  const options = reactive({
    basic: {
      name: "iblog",
      desc: "this is me website !",
      icon: "/assets/images/favicon.ico"
    }
  })
  
  function layoutStoreChange() {
    let layout: any = "default"
    // setPageLayout(layout)
    return function() {
      layout = layout == "default" ? "mobile" : "default"
      setPageLayout(layout)
    }
  }

  const layoutChange = layoutStoreChange()

  return { layoutChange }
})