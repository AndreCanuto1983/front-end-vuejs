<template>
  <div class="layout md-layout md-gutter md-alignment-center body">
    <img class="img" src="../assets/img/logo.jpg" />
  </div>
</template>

<script>
</script>

<style scoped>
.img {
  max-width: 30%;
}

.layout {
  width: 100%;
}

.mobile {
  display: none;
}

@media (max-width: 600px) {
  .img {
    max-width: 70%;
  }
}
</style>
