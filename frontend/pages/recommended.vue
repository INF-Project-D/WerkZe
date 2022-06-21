<template>
  <v-row>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-img
        height="250"
        src="https://cdn.pixabay.com/photo/2017/01/16/19/54/ireland-1985088_960_720.jpg"
      ></v-img>

      <v-card-title>Kinderboerderij De schaapskooi</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">3.7 (29)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">$$ • "Behhhhh"</div>

        <div>
          De kinderboerderij biedt mogelijkheden voor een zinvolle
          vrijetijdsbesteding, waarin het dier centraal staat. Deze
          vrijetijdsbesteding varieert van regelmatig bezoek tot actief
          meewerken aan activiteiten. In het weekend werken veel kinderen mee
          bij de verzorging van de dieren. De kinderboerderij heeft daarnaast
          een kleine ruimte met speelvoorzieningen.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="primary lighten-2" text @click="reserve">
          Vind ik leuk!
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-img
        height="250"
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ></v-img>

      <v-card-title>Cafe Brownies&downieS</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">$ • "Puur is perfect"</div>

        <div>
          De combinatie van pure, bijzondere medewerkers en ambachtelijke
          gerechten om je vingers bij af te likken, maakt een bezoekje aan
          Brownies&downieS tot een ware beleving. Puur genieten dus.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="primary lighten-2" text @click="reserve">
          Vind ik leuk!
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-img
        height="250"
        src="https://images0.persgroep.net/rcs/wNhKYi1hDuJfK10PfiKRXGAWP1M/diocontent/134749481/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8
"
      ></v-img>

      <v-card-title>Kringloop Het Ommetje</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">5.0 (1)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          $ • "Geef 2e hands spullen een nieuw leven!"
        </div>

        <div>
          Het Ommetje heeft 30 kringloopwinkels in Noord-Holland, Zuid-Holland
          en Flevoland. Met het openen van de 30e kringloopwinkel mag Het
          Ommetje zich niet alleen de leukste, maar ook de grootste
          kringloopketen van Nederland noemen. Daarnaast beheert Het Ommetje 49
          bewaakte NS fietsenstallingen verspreid over het land. De
          kringloopwinkels en fietsenstallingen hebben als doel het bieden van
          werk aan mensen met een grote afstand tot de arbeidsmarkt. Daarnaast
          biedt Het Ommetje werkervarings- en stageplaatsen en bevordert zij
          hergebruik. Kringloopbedrijf Het Ommetje is een onafhankelijke
          stichting, zonder winstoogmerk die werkt aan kansen voor zowel mens
          als milieu. Want samen met jou geven wij mens en milieu een tweede
          kans. Zorgen wij voor meer werkgelegenheid, hergebruik en een schonere
          wereld.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="primary lighten-2" text @click="reserve">
          Vind ik leuk!
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-skeleton-loader
        class="mx-auto"
        min-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-card> -->
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
    </v-card> -->
  </v-row>
</template>
<script>
export default {
  name: 'homePage',
  // Vuetify components provide
  // a theme variable that is
  // used to determine dark
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
}
</script>
