<template>
  <div class="demo">demo</div>
</template>

<script>
import data from "./static/a.json";
export default {
  name: "demo",
  data() {
    return {};
  },
  mounted() {
    console.log(data);
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
