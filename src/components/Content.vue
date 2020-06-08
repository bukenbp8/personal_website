<template>
  <v-container>
    <h1 v-scrollanimation text-sm-center id="aboutme" class="mt-5 head">About me</h1>
    <p v-scrollanimation class="mt-3">
      After leaning about the fundamentals of web development from the ground up, getting head over heels into
      <b>HTML</b>,
      <b>CSS</b>,
      <b>PHP</b> and
      <b>Javascript</b>, diving deeper into powerful frameworks like
      <b>Angular</b> and
      <b>Symfony</b>, I discovered
      <b>Vue.js</b> as my go-to Javascript framework due to its approachability and lightweight feel. Symfony is still my number one choice for the backend while I also learn more about
      <b>Laravel</b>.
    </p>
    <br />
    <v-divider></v-divider>
    <br />

    <h1 v-scrollanimation text-sm-center class="mt-5 head" id="portfolio">Portfolio</h1>
    <v-row>
      <v-col cols="12" md="6">
        <p v-scrollanimation class="mt-3">
          Most recently I created a task manager. You can register, create lists which have tasks and each task can have notes and pictures attached to it. Check out the code on
          <a
            href="https://github.com/bukenbp8"
          >Github</a>.
        </p>
        <p v-scrollanimation>Main technologies used:</p>
        <ul v-scrollanimation>
          <li>Vue.js</li>
          <li class="mt-1">REST API created with Symfony</li>
        </ul>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="5">
        <v-img v-scrollanimation :src="img.portfolio" class="portfolio" />
      </v-col>
    </v-row>
    <br />
    <v-divider></v-divider>
    <br />
    <h1 v-scrollanimation id="contactme" class="mt-5 mb-5 head">Contact me</h1>
    <p v-scrollanimation class="mt-3">
      The best way to contact me is via email: patrick[dot]bukenberger@gmail.com. Alternatively you can use
      <a
        href="https://www.linkedin.com/in/patrick-bukenberger-7970791a6/"
      >LinkedIn</a>.
    </p>
    <!-- <v-layout>
      <v-flex xs12 sm8 md6>
        <v-form v-scrollanimation>
          <v-text-field
            outlined
            prepend-icon="perm_identity"
            name="name"
            label="Full name"
            :rules="[rules.required]"
            type="name"
          ></v-text-field>

          <v-text-field
            outlined
            prepend-icon="email"
            name="email"
            label="Email"
            :rules="[rules.required, rules.email]"
          ></v-text-field>

          <v-text-field
            outlined
            prepend-icon="subject"
            name="subject"
            label="Subject"
            :rules="[rules.required]"
          ></v-text-field>

          <v-textarea
            auto-grow
            outlined
            prepend-icon="message"
            name="message"
            label="Message"
            :rules="[rules.required]"
          ></v-textarea>

          <div class="text-center">
            <v-btn outlined color="primary">
              send
              <v-icon class="ml-1">send</v-icon>
            </v-btn>
          </div>
        </v-form>
      </v-flex>
    </v-layout>-->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rules: {
      required: value => !!value || "Required",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    },
    img: {
      portfolio: require("@/assets/app.jpg")
    }
  })
};
</script>

<style>
.head {
  position: relative;
  font-size: 2.5em;
  letter-spacing: 3px;
  color: rgba(0, 20, 134, 0.6);
}

.portfolio {
  margin: 1em;
}

li,
p {
  font-size: 1.2em;
}
</style>