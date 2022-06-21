<template>
  <v-card class="mx-auto" max-width="344">
    <img class="image" src="../Images/logo.png" />

    <v-card-title> Wil je meer weten? </v-card-title>

    <v-card-subtitle> Klik hieronder! </v-card-subtitle>

    <v-card-actions>
      <!--Make a button to /jobs -->
      <v-btn color="primary darken-2" text to="/jobs">
        Bekijk alle banen
      </v-btn>
    </v-card-actions>
    <!-- Create login button with text Inloggen with a square in a row that links to /login-->
    <v-card-actions>
      <v-btn color="primary darken-2" text to="/login"> Inloggen </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>
<style>
.image {
  width: 100%;
  height: auto;
}
</style>
