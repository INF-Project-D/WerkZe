<template>
  <v-app light class="template">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <div v-if="false">
          <v-list-item
            v-for="(item, i) in items_loggedIn"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </div>

        <div v-else>
          <v-list-item
            v-for="(item, i) in items_notLoggedIn"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </div>

        <div v-else>
          <v-list-item
            v-for="(item, i) in items_b"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="white--text" v-text="title" />
      <v-spacer />

      <v-toolbar-title class="text">Zoeken</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="white">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="template">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      class="white--text"
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items_loggedIn: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/home',
        },
        {
          icon: 'mdi-briefcase-variant',
          title: 'Aanbevolen banen',
          to: '/recommended',
        },
        {
          icon: 'mdi-bell-ring',
          title: 'Meldingen',
          to: '/notifications',
        },
        {
          icon: 'mdi-account',
          title: 'Profiel',
          to: '/account',
        },
        {
          icon: 'mdi-logout',
          title: 'Uitloggen',
          to: '/',
        },
      ],
      items_notLoggedIn: [
        {
          icon: 'mdi-home',
          title: 'Begin pagina',
          to: '/',
        },

        {
          icon: 'mdi-login',
          title: 'Inloggen op je account',
          to: '/login',
        },
        {
          icon: 'mdi-arrow-right',
          title: 'Een account aanmaken',
          to: '/signup',
        },
        {
          icon: 'mdi-android-messages',
          title: 'Alle banen bekijken',
          to: '/jobs',
        },
      ],
      items_b: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/home',
        },
        {
          icon: 'mdi-briefcase-variant',
          title: 'Solicitanten',
          to: '/recommended_b',
        },
        {
          icon: 'mdi-bell-ring',
          title: 'Berichten',
          to: '/notifications_b',
        },
        {
          icon: 'mdi-account',
          title: 'Profiel',
          to: '/account_b',
        },
        {
          icon: 'mdi-logout',
          title: 'Uitloggen',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'WerkZe',
    }
  },
}
</script>
<style>
.template {
  background-image: linear-gradient(
    325deg,
    hsl(127deg 16% 55%) 0%,
    hsl(164deg 24% 72%) 65%,
    hsl(186deg 28% 93%) 100%
  );
}
</style>
