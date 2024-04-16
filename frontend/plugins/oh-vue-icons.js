import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFacebook, FaInstagram } from "oh-vue-icons/icons";

addIcons(FaFacebook, FaInstagram);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});