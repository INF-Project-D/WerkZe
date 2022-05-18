<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="white--text" v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
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
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
      items: [
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
        {
          icon: 'mdi-login',
          title: 'Inloggen',
          to: '/login',
        },
        {
          icon: 'mdi-arrow-right',
          title: 'Account aanmaken',
          to: '/signup',
        },
        {
          icon: 'mdi-account-question',
          title: 'Wachtwoord vergeten',
          to: '/forgot_password',
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'WerkZe',
    }
  },
}
</script>
