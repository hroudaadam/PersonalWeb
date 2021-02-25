<template>
  <div>
    <div class="h2 title mb-5">Zkušenosti</div>

    <div class="box mb-5">
      <div class="box-header">
        <div class="h3">Programátor</div>
        <div>VDT Technology</div>
      </div>
      <div
        class="box-content mb-3"
        v-bind:class="contentHidden ? 'content-hidden' : ''"
      >
        <ul>
          <li>činnost X - xads sakjdhsaj dsal</li>
          <li>činnost X - xads sakjdhsaj dsal</li>
          <li>činnost X - xads sakjdhsaj dsal</li>
        </ul>
      </div>
      <div class="collapse-button" v-on:click="contentHidden = !contentHidden">
        <IconButton v-if="contentHidden" :icon="['fas', 'angle-double-down']"></IconButton>
        <IconButton v-else :icon="['fas', 'angle-double-up']"></IconButton>
      </div>
    </div>

    <div class="box mb-5">
      <div class="box-header">
        <div class="h3">IT tester</div> [Česká pojišťovna]
        <!-- <div>Česká pojišťovna</div> -->
      </div>
      <div
        class="box-content mb-3"
        v-bind:class="contentHidden ? 'content-hidden' : ''"
      >
        <ul>
          <li>činnost X - xads sakjdhsaj dsal</li>
          <li>činnost X - xads sakjdhsaj dsal</li>
          <li>činnost X - xads sakjdhsaj dsal</li>
        </ul>
      </div>
      <div class="collapse-button" v-on:click="contentHidden = !contentHidden">
        <IconButton v-if="contentHidden" :icon="['fas', 'angle-double-down']"></IconButton>
        <IconButton v-else :icon="['fas', 'angle-double-up']"></IconButton>
      </div>
    </div>

    <div class="h2 title mb-5">Vzdělání</div>

    <div class="box mb-5">
      <div class="box-header">
        <div class="h3">
          Gymnázium a střední odborná škola dr. Václava Šmejkala
        </div>
        <div></div>
      </div>
      <div class="box-content">
        <!-- <ul>
            <li>činnost X - xads sakjdhsaj dsal</li>
            <li>činnost X - xads sakjdhsaj dsal</li>
            <li>činnost X - xads sakjdhsaj dsal</li>
          </ul> -->
      </div>
    </div>

    <div class="h2 title mb-5">Schopnosti</div>
    <div class="h2 title mb-5">Ostatní</div>
  </div>
</template>

<script>
import IconButton from "../components/IconButton";

export default {
  name: "About",
  components: {
    IconButton
  },
  data() {
    return {
      contentHidden: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
.title {
  text-align: center;
}

.box {
  padding: 20px;
  margin: 0 auto;
  box-shadow: 3px 3px 10px var(--color-g);
  border-radius: 5px;
  background-color: var(--color-2);
  color: var(--color-b);
  max-width: 600px;
}

.box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-content {
  transition: opacity 0.5s ease, max-height 0.3s ease;
  opacity: 1;
  max-height: 150px;
}

.content-hidden {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.collapse-button {
  text-align: center;
  cursor: pointer;
  font-size: 0.8rem;
}


</style>