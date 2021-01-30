<template>
    <div class="page-header">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style>
  .page-header {
    font-size: 1.6em;
    text-align: center;
    margin: 10px 0;
  }
</style>