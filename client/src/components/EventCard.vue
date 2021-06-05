<template>
  <v-card class="mx-auto my-5" max-width="700">
    <v-card-text>
      <div class="display-1 text--primary">
        <slot name="header"></slot>
      </div>
      <div>
        <slot name="subheader-1"></slot>
      </div>
      <div>
        <slot name="subheader-2"></slot>
      </div>
      <div class="text--primary">
        <slot name="content"></slot>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="teal accent-4">Podrobnosti</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "EventCard",
  components: {},
};
</script>