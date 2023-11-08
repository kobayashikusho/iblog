<template>
  <div class="header-wrap">
    <div class="header-inner">
      header
    </div>
  </div>
</template>


<style scoped>
.header-wrap {
  --size: 3%;
  padding-top: var(--size);
  position: relative;
}

.header-inner {
  top: 0;
  left: 0;
  outline: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #eee;
  /* font-size: .2rem; */
}
</style>