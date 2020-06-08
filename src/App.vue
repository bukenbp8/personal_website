<template>
  <v-app>
    <v-app-bar fixed dark>
      <div class="d-flex align-center logofont"></div>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menu" :key="item.id" :to="item.link">
          <v-icon>{{ item.icon}}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu bottom>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on" class="hidden-md-and-up">
            <v-icon>menu</v-icon>
          </v-btn>
        </template>

        <v-list dark>
          <v-list-item v-for="(item, i) in menu" :key="i">
            <v-list-item style="font-weight: 500" :to="item.link">
              <v-icon>{{ item.icon}}</v-icon>
              {{ item.title }}
            </v-list-item>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content fluid fill-height class="banner">
      <v-layout align-center column class="avatarbox">
        <div
          :class="[$vuetify.breakpoint.smAndUp ? 'display-2 mb-4' : 'display-2 mb-4 mr-2 ml-2']"
          class="white--text text-center"
        >Hello, I am Patrick Bukenberger</div>
        <div
          :class="[$vuetify.breakpoint.smAndUp ? 'headline' : 'headline pr-4 pl-4']"
          class="white--text text-center"
        >I am a full-stack developer, working with Javascript and PHP.</div>
        <v-img :src="img.avatar" class="avatar" />
      </v-layout>
    </v-content>
    <Content />
    <v-footer dark>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h3>Patrick Bukenberger</h3>
          </v-col>

          <v-spacer></v-spacer>
          <v-col cols="12" md="3">
            <div>
              <span>Barawitzkagasse 13A/13</span>
              <br />
              <span>1190 Wien</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Content from "./components/Content";
export default {
  name: "App",

  components: { Content },
  data: () => ({
    menu: [
      { id: 1, icon: "face", title: "About me", link: "#aboutme" },
      { id: 2, icon: "computer", title: "Portfolio", link: "#portfolio" },
      { id: 3, icon: "email", title: "Contact me", link: "#contactme" }
    ],
    img: {
      placeholder: require("@/assets/bground.jpeg"),
      avatar: require("@/assets/2.jpeg")
    }
  })
};
</script>

<style>
.before-enter {
  opacity: 0;
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
}

.logofont {
  font-size: 1.5em;
}

.avatar {
  position: relative;
  background-size: cover;
  top: 10vh;
  height: 30vh;
  width: 30vh;
  border-radius: 50%;
  box-shadow: 5px 5px 30px black;
}

.avatarbox {
  position: relative;
  top: 20vh;
}

.banner {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(27, 42, 129, 0.8) 10%,
      rgba(128, 70, 113, 0.8) 60%,
      rgba(129, 90, 119, 0.9) 80%,
      rgba(129, 110, 130, 0.9) 90%
    ),
    url("./assets/bground.jpg");
  background-size: cover;
}

.subtext {
  font-size: 1.6em;
}
</style>
