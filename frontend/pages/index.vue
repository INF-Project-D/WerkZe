<template>
  <v-row>
    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="item.img" height="225px">
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">
                        {{ item.title }}
                      </p>

                      <div>
                        <p
                          class="ma-0 text-body-1 font-weight-bold font-italic text-left"
                        >
                          {{ item.text }}
                        </p>
                        <p
                          class="text-caption font-weight-medium font-italic text-left"
                        >
                          {{ item.subtext }}
                        </p>
                      </div>

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="item.img" height="225px">
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">
                        {{ item.title }}
                      </p>

                      <div>
                        <p
                          class="ma-0 text-body-1 font-weight-bold font-italic text-left"
                        >
                          {{ item.text }}
                        </p>
                        <p
                          class="text-caption font-weight-medium font-italic text-left"
                        >
                          {{ item.subtext }}
                        </p>
                      </div>

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="item.img" height="225px">
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">
                        {{ item.title }}
                      </p>

                      <div>
                        <p
                          class="ma-0 text-body-1 font-weight-bold font-italic text-left"
                        >
                          {{ item.text }}
                        </p>
                        <p
                          class="text-caption font-weight-medium font-italic text-left"
                        >
                          {{ item.subtext }}
                        </p>
                      </div>

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-thumb-down', 'mdi-heart-half-full', 'mdi-thumb-up'],
    items: [
      {
        title: 'Werken in de bouw.',
        text: `Wil jij werken in de bouw? Kies dan voor deze catagorie!`,
        subtext: 'Niewegein, Nijmegen, Utrecht',
        img: 'https://www.gemeente.nu/content/uploads/sites/5/2019/05/toezicht-bouw.jpg',
      },
      {
        title: 'Werken in een restaurant.',
        text: 'Lijkt werken in een restaurant jou tof? Kies dan voor deze catagorie!',
        subtext: 'Groningen, Amsterdam, Rotterdam',
        img: 'https://static.wixstatic.com/media/1c11f4_e5ba56fbfcfb486a9c6f2a881bc0686a~mv2_d_5318_3545_s_4_2.jpg/v1/fit/w_2500,h_1330,al_c/1c11f4_e5ba56fbfcfb486a9c6f2a881bc0686a~mv2_d_5318_3545_s_4_2.jpg',
      },
      {
        title: 'Werken in de bouw.',
        text: `Wil jij werken in de bouw? Kies dan voor deze catagorie!`,
        subtext: 'Niewegein, Nijmegen, Utrecht',
        img: 'https://www.gemeente.nu/content/uploads/sites/5/2019/05/toezicht-bouw.jpg',
      },
      {
        title: 'Werken met dieren.',
        text: 'Lijkt werken met dieren jou tof? Kies dan voor deze catagorie!',
        subtext: 'Spijkernisse, Groningen, Amsterdam, Rotterdam',
        img: 'https://media.insiders.nl/uba/files/image/687e9361ed9addc1058ba2e7305ca511495f2011.jpeg',
      },

      {
        title: 'Werken met dieren.',
        text: 'Lijkt werken met dieren jou tof? Kies dan voor deze catagorie!',
        subtext: 'Spijkernisse, Groningen, Amsterdam, Rotterdam',
        img: 'https://media.insiders.nl/uba/files/image/687e9361ed9addc1058ba2e7305ca511495f2011.jpeg',
      },
      {
        title: 'Werken in een restaurant.',
        text: 'Lijkt werken in een restaurant jou tof? Kies dan voor deze catagorie!',
        subtext: 'Groningen, Amsterdam, Rotterdam',
        img: 'https://static.wixstatic.com/media/1c11f4_e5ba56fbfcfb486a9c6f2a881bc0686a~mv2_d_5318_3545_s_4_2.jpg/v1/fit/w_2500,h_1330,al_c/1c11f4_e5ba56fbfcfb486a9c6f2a881bc0686a~mv2_d_5318_3545_s_4_2.jpg',
      },
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),
}
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
