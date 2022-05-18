<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="12">
        <v-card color="background">
          <v-card-text>
            <p></p>
            <v-row justify="center" align="center">
              <h1 class="text">Wachtwoord vergeten?</h1>
            </v-row>
            <v-row justify="center" align="center">
              <v-col justify="center" cols="12" sm="6" md="3">
                <v-text-field label="Email"></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" align="center"
              ><v-btn class="space" color="secondary" elevation="11"
                ><v-icon left> mdi-pencil </v-icon>Klik hier om je wachtwoord te
                resetten!
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // API Calls come here
}
</script>
<style>
.text {
  margin-left: 12px;
  margin-right: 12px;
  font-size: 26px;
  color: #31493c;
  display: inline-block;
}
.text2 {
  margin-top: 40px;
  color: #31493c;
}
.buttons {
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 12px;
}
.forgot-password {
  margin-top: 10px;
}
.space {
  margin-bottom: 50px;
}
</style>
