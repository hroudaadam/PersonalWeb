<template>
  <div class="home">
    <b-carousel
      class="mx-auto"
      id="carousel-1"
      v-model="slide"
      :interval="2500"
      indicators
      background="#ababab"
      img-width="720"
      img-height="480"
      style="width: 720px; height: 480px !important; text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block .carousel-img" src="@/assets/home1.png" alt="image slot" />          
        </template>
        <h2>Víc než jen programátor</h2>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block .carousel-img" src="@/assets/home2.png" alt="image slot" />          
        </template>
        <h2>Spím taky venku</h2>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block .carousel-img" src="@/assets/home3.png" alt="image slot" />          
        </template>
        <h2>Nejsem v tom sám</h2>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block .carousel-img" src="@/assets/home4.png" alt="image slot" />          
        </template>
        <h2>Jsem taky fešák</h2>
      </b-carousel-slide>

    </b-carousel>
    <div>
      <!-- <b-img src="@/assets/home1.png" fluid alt="Responsive image"></b-img> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style>
.carousel-img {
  height: 100vh !important ;
  width: 80vw !important ;
}
</style>
