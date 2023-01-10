import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import TheFooter from "./components/UI/TheFooter";
import HomePage from "./components/HomePage/HomePage.vue";
import AboutUs from "./components/AboutUs/AboutUs.vue";
import TheHeader from "./components/UI/TheNavigation.vue";
import TheClothes from "./components/Clothes/TheClothes.vue";
import TheTraining from "./components/Trainings/TrainingPage.vue";
import TheHeading from "./components/UI/TheHeading.vue";
import TheActivities from "./components/Activities/TheActivities.vue";
import PlayroomPage from "./components/Activities/PlayroomPage.vue";
import BirthdayPage from "./components/Activities/BirthdayPage.vue";
import GymLand from "./components/Activities/GymLand.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPerson,
  faCalendarDays,
  faCalendarWeek,
  faLocationDot,
  faMoneyBills,
  faChevronDown,
  faUser,
  faChevronRight,
  faChevronLeft,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { name: "home", path: "/home", component: HomePage },
    { path: "/training", component: TheTraining },
    { path: "/activities", component: TheActivities },
    { name: "playroom", path: "/activities/playroom", component: PlayroomPage },
    { name: "birthday", path: "/activities/birthday", component: BirthdayPage },
    { name: "gymland", path: "/activities/gymland", component: GymLand },
    { path: "/about", component: AboutUs },
    { path: "/clubwear", component: TheClothes },
    { path: "/:notfound(.*)", redirect: "/home" },
  ],
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

library.add(
  faFacebook,
  faInstagram,
  faYoutube,
  faPerson,
  faCalendarDays,
  faCalendarWeek,
  faClock,
  faLocationDot,
  faMoneyBills,
  faFaceSmile,
  faChevronDown,
  faUser,
  faChevronRight,
  faChevronLeft,
  faCheck
);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("the-footer", TheFooter);
app.component("home-page", HomePage);
app.component("about-us", AboutUs);
app.component("the-header", TheHeader);
app.component("the-heading", TheHeading);
app.mount("#app");
