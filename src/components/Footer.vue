<template>
  <footer class="footer">
    <div class="footer__inner container">
      <p>© 2021 Homeday assignment</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer"
});
</script>

<style lang="scss">
.footer {
  background: $white;
  padding: 16px 0;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: $dark-gray;
  font-size: $font-size-small;
  margin-top: auto;
  flex-shrink: 0;
}
</style>
