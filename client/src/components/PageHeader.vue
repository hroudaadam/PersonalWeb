<template>
    <div class="page-header">
      <div></div>
      <p class="text">
        <slot></slot>
      </p>
      <div>
        <slot name="button"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style>
  .page-header {
    margin: 0 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text {
    font-size: 1.6em;
    text-align: center;
    font-weight: 500;
  }
</style>