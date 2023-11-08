export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.directive('loading', {
  //   mounted(el) {
  //     // el.focus()
  //     console.log(el, 'el.....');
  //     el.focus()
  //   },
  //   getSSRProps(binding, vnode) {
  //     // you can provide SSR-specific props here
  //     return {}
  //   }
  // })
  // const loading = document.createElement('div')
  // loading.classList.add("loading")

  nuxtApp.vueApp.directive("loading", {
    mounted(el, binding, vnode, prevVnode) {
      el.innerHTML = ""
      // const loading = document.createElement('div')
      // loading.classList.add("loading")
      // el.append(loading)
      console.log('loading...', el, binding, vnode, prevVnode);
    },
    getSSRProps(binding, vnode) {
      console.log('jjj');

      return {}
    }
  })

  function throttle(func: any, delay: any) {
    let isThrottled: any = false
    let lastArgs: any = null
    let timer: any = null

    function execute() {
      if (isThrottled) {
        lastArgs = arguments
      } else {
        isThrottled = true
        func.apply(this, arguments)
        timer = setTimeout(() => {
          isThrottled = false
          if (lastArgs) {
            execute.apply(this, lastArgs)
            lastArgs = null
          }
        }, delay)
      }
    }
    return execute
  }


  nuxtApp.vueApp.directive("font-size", {
    mounted(el, binding, vnode, prevVnode) {
      function init() {
        const scale = window.devicePixelRatio
        const size = (1 * (1 / scale)) + "rem"
        document.body.style.setProperty("--font-size", size)
      }
      init()
      const throttledFunc = throttle(init, 50)
      window.addEventListener("resize", throttledFunc)
    }
  })
})


