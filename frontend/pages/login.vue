<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="12">
        <v-card color="background">
          <v-card-text>
            <p></p>
            <v-row justify="center" align="center">
              <h1 class="text">Inloggen</h1>
            </v-row>
            <v-row justify="center" align="center">
              <v-col justify="center" cols="12" sm="6" md="3">
                <v-text-field label="Gebruikersnaam"></v-text-field>
                <v-text-field
                  :type="'password'"
                  label="Wachtwoord"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" align="center"
              ><v-btn color="secondary" elevation="11" text to="/recommended"
                ><v-icon left> mdi-card-account-details </v-icon>Druk hier om in
                te loggen</v-btn
              >
            </v-row>
            <v-row class="space" justify="center" align="center"
              ><a href="/forgot_password" class="forgot-password"
                >Wachtwoord vergeten? klik hier!</a
              >
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <!-- Text "Maak een account" That links to /signup-->
      <v-col cols="12" sm="10" md="12">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="10" md="12">
            <v-card color="background">
              <v-card-text>
                <p></p>
                <v-row justify="center" align="center">
                  <h1 class="text">Nog geen account?</h1>
                </v-row>
                <v-row justify="center" align="center">
                  <v-col
                    justify="center"
                    align="center"
                    cols="12"
                    sm="10"
                    md="12"
                  >
                    <v-btn color="secondary" elevation="11" text to="/signup"
                      ><v-icon left> mdi-account-plus </v-icon>Druk hier om een
                      account aan te maken</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // console log for test button
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
