<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card color="primary" style="border-radius: 100px" class="mt-16">
        <v-row justify="center">
          <v-card-text
            align="center"
            class="text-h4 text-white font-weight-medium pa-6 ma-6"
          >
            Zoek hier je werk als verstandelijk beperkte!
          </v-card-text>
        </v-row>
      </v-card>
      <v-row align="center" justify="center">
        <v-btn color="primary" class="ma-6 mt-10" to="/login"
          >Klik hier om in te loggen!</v-btn
        >
      </v-row>
      <v-row align="center" justify="center">
        <v-btn to="/jobs" color="primary" class="ma-2"
          >Bekijk hier alle banen!</v-btn
        >
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'homePage',
}
</script>
<style>
.text-white {
  color: white;
}
.template {
  background-image: linear-gradient(
    325deg,
    hsl(127deg 16% 55%) 0%,
    hsl(164deg 24% 72%) 65%,
    hsl(186deg 28% 93%) 100%
  );
}
</style>
