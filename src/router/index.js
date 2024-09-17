import Home from "@/components/Home .vue";
import SurveyForm from "@/components/SurveyForm.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/surveyForm",
    name: "SurveyForm",
    component: SurveyForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
