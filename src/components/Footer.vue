<script setup>
import { ref } from 'vue';
import appStore from '../assets/logo image/app-store.svg';
import googlePlay from '../assets/logo image/google-play.svg';
import facebookIcon from '../assets/icons/footer-fbIcon.svg';
import twitterIcon from '../assets/icons/footer-twitterIcon.svg';
import instagramIcon from '../assets/icons/footer-instaIcon.svg';
const footerColumns = ref([
  {
    title: 'Zoosk Dating',
    links: ['iPhone Dating App', 'Android Dating App', 'Start Dating']
  },
  {
    title: 'Dating and Relationship Advice',
    links: [
      'Dating Tips',
      'Online Dating Advice',
      'Relationship Advice',
      'Single Life'
    ]
  },
  {
    title: 'About Zoosk',
    links: ['About Us', 'Success Couples', 'Careers', 'Help']
  },
  {
    title: 'Follow Zoosk',
    links: [
      { name: 'Facebook', icon: facebookIcon, url: '#' },
      { name: 'Twitter', icon: twitterIcon, url: '#' },
      { name: 'Instagram', icon: instagramIcon, url: '#' }
    ]
  }
]);
const legalLinks = ref([
  'Accessibility',
  'Safety',
  'Terms of Service',
  'Privacy',
  'Imprint',
  'Online Dating Safety Policy'
]);
</script>

<template>
  <div
    class="w-full bg-white px-4 sm:px-10 lg:px-[70px] sm:mt-[90px] md:mt-[2px] font-Euclid"
  >
    <div class="flex flex-wrap justify-center gap-6 pt-10 text-center">
      <img :src="appStore" class="h-[45px] w-[120px]" alt="App Store" />
      <img :src="googlePlay" class="h-[45px] w-[120px]" alt="Play Store" />
    </div>

    <p class="mt-8 mb-8 text-2xl text-center text-gray-600 sm:text-3xl">
      Over <span class="font-bold text-gray-700">30 million</span> downloads.
    </p>

    <div class="border-gray-300 border-[0.1px] mb-6"></div>

    <div
      class="grid grid-cols-1 gap-8 text-sm text-gray-700 sm:grid-cols-1 lg:grid-cols-4 mt-[40px] font-Euclid"
      style="@media (min-width: 2500px) {font-size: 24px}"
    >
      <div
        v-for="(column, index) in footerColumns"
        :key="index"
        class="space-y-5 text-center lg:text-left"
      >
        <h3 class="mb-6 font-sans font-bold text-[16px]">{{ column.title }}</h3>
        <ul
          class="space-y-6 text-[#374756] leading-[20px] font-medium text-[16px]"
        >
          <li
            v-if="column.title === 'Follow Zoosk'"
            class="flex justify-center gap-4 lg:justify-start"
          >
            <a
              v-for="(item, idx) in column.links"
              :key="idx"
              :href="item.url"
              class="hover:text-gray-500 text-[16px]"
            >
              <img :src="item.icon" :alt="item.name" class="w-10 h-10" />
            </a>
          </li>
          <li
            v-else
            v-for="(item, idx) in column.links"
            :key="idx"
            class="mb-6"
          >
            <a href="#" class="hover:text-gray-500">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="flex flex-col-reverse lg:flex-row justify-between items-center mt-10 space-y-4 text-[15px] text-center text-[#374756] lg:space-y-0 lg:text-left p-2"
    >
      <p class="md:text-[16px] mt-7">
        &copy; Copyright 2007-2025 Zoosk, Inc. All rights reserved.
      </p>

      <div
        class="flex flex-wrap md:text-[15px] justify-center gap-3 sm:gap-4 font-sans font-[500] lg:justify-start text-[16px] pl-6"
      >
        <a
          href="#"
          class="mt-3 hover:text-gray-500"
          v-for="(item, idx) in legalLinks"
          :key="idx"
          >{{ item }} <span v-if="idx !== legalLinks.length - 1" class="ml-3">|</span></a
        >
      </div>
    </div>

    <p
      class="mt-12 text-left text-gray-700 pb-20 leading-[17px] font-sans text-[12px]"
    >
      <strong
        >ZOOSK DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON THE MEMBERS OR THE
        SUBSCRIBERS OF THIS WEBSITE.</strong
      ><br />
      <strong
        >HOWEVER, THE SAFETY AND SECURITY OF OUR MEMBERS IS OUR TOP PRIORITY. BY
        SIGNING UP TO OUR SERVICES YOU ALSO AGREE TO READ AND FOLLOW OUR
      </strong>
      <a href="#" class="text-blue-500 font-sans font-[700]"
        >ONLINE DATING SAFETY TIPS</a
      >.
    </p>
  </div>
</template>