<template>
  <v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8">
        <v-card color="background">
          <v-card-title class="logo py-4 d-flex justify-center">
            <v-btn class="mx-10" fab dark x-large color="#31493C">
              <v-icon x-large> mdi-account </v-icon>
            </v-btn>
            <!-- <img src="../Images/Avatar.png">  -->
            <v-row class="logo py-4 d-flex justify-center">
              <v-col cols="10" sm="8" md="11">
                <p></p>
                <h1 class="accent--text">Jan Osmeer</h1>
                <h5 class="info--text">Rotterdam, Laan van os 1002</h5>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <p></p>
            <v-row justify="leftcenter" align="center">
              <h1 class="text">Categorie:</h1>
              <v-btn class="buttons" color="primary"> <b>Hotel</b> </v-btn>
              <v-btn class="buttons" color="primary"> <b>Restaurant</b> </v-btn>
            </v-row>

            <p></p>
            <div>
              <h2 class="text2">Omschrijving:</h2>

              <span v-if="!readMoreActivated"
                >{{ longText.slice(0, 500) }}
              </span>
              <a
                class="black--text"
                v-if="!readMoreActivated"
                @click="activateReadMore"
                href="#"
              >
                lees meer
              </a>

              <span v-if="readMoreActivated" v-html="longText"></span>

              <a
                class="black--text"
                v-if="readMoreActivated"
                @click="deactivateReadMore"
                href="#"
              >
                lees minder
              </a>
            </div>
            <p></p>
            <v-row justify="leftcenter" align="center">
              <h1 class="text">Vind ik leuk:</h1>
              <v-btn class="buttons" color="primary"> <b>Knutselen</b> </v-btn>
              <v-btn class="buttons" color="primary"> <b>Bedienen</b> </v-btn>
              <v-btn class="buttons" color="primary"> <b>Afwassen</b> </v-btn>
            </v-row>
            <p></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8">
        <v-card color="background">
          <v-card-title class="logo py-4 d-flex justify-center">
            <v-btn class="mx-10" fab dark x-large color="#31493C">
              <v-icon x-large> mdi-account </v-icon>
            </v-btn>
            <!-- <img src="../Images/Avatar.png">  -->
            <v-row class="logo py-4 d-flex justify-center">
              <v-col cols="10" sm="8" md="11">
                <p></p>
                <h1 class="accent--text">Jan Osmeer</h1>
                <h5 class="info--text">Rotterdam, Laan van os 1002</h5>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <p></p>
            <v-row justify="leftcenter" align="center">
              <h1 class="text">Categorie:</h1>
              <v-btn class="buttons" color="primary"> <b>Hotel</b> </v-btn>
              <v-btn class="buttons" color="primary"> <b>Restaurant</b> </v-btn>
            </v-row>

            <p></p>
            <div>
              <h2 class="text2">Omschrijving:</h2>

              <span v-if="!readMoreActivated"
                >{{ longText.slice(0, 500) }}
              </span>
              <a
                class="black--text"
                v-if="!readMoreActivated"
                @click="activateReadMore"
                href="#"
              >
                lees meer
              </a>

              <span v-if="readMoreActivated" v-html="longText"></span>

              <a
                class="black--text"
                v-if="readMoreActivated"
                @click="deactivateReadMore"
                href="#"
              >
                lees minder
              </a>
            </div>
            <p></p>
            <v-row justify="leftcenter" align="center">
              <h1 class="text">Vind ik leuk:</h1>
              <v-btn class="buttons" color="primary"> <b>Knutselen</b> </v-btn>
              <v-btn class="buttons" color="primary"> <b>Bedienen</b> </v-btn>
              <v-btn class="buttons" color="primary"> <b>Afwassen</b> </v-btn>
            </v-row>
            <p></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8">
        <v-card color="background">
          <v-card-title class="logo py-4 d-flex justify-center">
            <v-btn class="mx-10" fab dark x-large color="#31493C">
              <v-icon x-large> mdi-account </v-icon>
            </v-btn>
            <!-- <img src="../Images/Avatar.png">  -->
            <v-row class="logo py-4 d-flex justify-center">
              <v-col cols="10" sm="8" md="11">
                <p></p>
                <h1 class="accent--text">Jan Osmeer</h1>
                <h5 class="info--text">Rotterdam, Laan van os 1002</h5>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <p></p>
            <v-row justify="leftcenter" align="center">
              <h1 class="text">Categorie:</h1>
              <v-btn class="buttons" color="primary"> <b>Hotel</b> </v-btn>
              <v-btn class="buttons" color="primary"> <b>Restaurant</b> </v-btn>
            </v-row>

            <p></p>
            <div>
              <h2 class="text2">Omschrijving:</h2>

              <span v-if="!readMoreActivated"
                >{{ longText.slice(0, 500) }}
              </span>
              <a
                class="black--text"
                v-if="!readMoreActivated"
                @click="activateReadMore"
                href="#"
              >
                lees meer
              </a>

              <span v-if="readMoreActivated" v-html="longText"></span>

              <a
                class="black--text"
                v-if="readMoreActivated"
                @click="deactivateReadMore"
                href="#"
              >
                lees minder
              </a>
            </div>
            <p></p>
            <v-row justify="leftcenter" align="center">
              <h1 class="text">Vind ik leuk:</h1>
              <v-btn class="buttons" color="primary"> <b>Knutselen</b> </v-btn>
              <v-btn class="buttons" color="primary"> <b>Bedienen</b> </v-btn>
              <v-btn class="buttons" color="primary"> <b>Afwassen</b> </v-btn>
            </v-row>
            <p></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-skeleton-loader
        class="mx-auto"
        min-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-skeleton-loader
        class="mx-auto"
        min-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-skeleton-loader
        class="mx-auto"
        min-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-skeleton-loader
        class="mx-auto"
        min-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-skeleton-loader
        class="mx-auto"
        min-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-skeleton-loader
        class="mx-auto"
        min-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-skeleton-loader
        class="mx-auto"
        min-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-skeleton-loader
        class="mx-auto"
        min-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-card> -->
  </v-row>
</template>
<script>
export default {
  name: 'Readmore',
  data() {
    return {
      longText: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
    content here', making it look like readable English. 
    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
    sometimes by accident, sometimes on purpose (injected humour and the like).`,
      readMoreActivated: false,
    }
  },
  methods: {
    activateReadMore() {
      this.readMoreActivated = true
    },
    deactivateReadMore() {
      this.readMoreActivated = false
    },
  },
  name: 'Accountpage',
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
</style>
