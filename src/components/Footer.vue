<template>
    <footer class="pb-16 text-gray-700 bg-white pt-9">
      <div class="container px-16 mx-auto ">
        
        
        
        <div class="flex justify-center mb-6 space-x-4">
          <img :src="appStore" alt="App Store" class="h-10">
          <img :src="googlePlay" alt="Google Play" class="h-10">
        </div>
  
        <p class="mb-6 text-3xl text-center text-gray-600">
          Over <span class="font-bold text-gray-700">30 million</span> downloads.
        </p>
        <div class="border-gray-300 border-[0.1px] mb-6"></div>
        
        <div class="grid grid-cols-1 gap-6 text-sm text-gray-700 sm:grid-cols-2 md:grid-cols-4">
          
          <div class="space-y-5">
            <h3 class="mb-2 font-bold">Zoosk Dating</h3>
            <ul class="space-y-6 text-[15px]">
              <li><a href="#" class="hover:underline">iPhone Dating App</a></li>
              <li><a href="#" class="hover:underline">Android Dating App</a></li>
              <li><a href="#" class="hover:underline">Start Dating</a></li>
            </ul>
          </div>
  
          <div class="space-y-5">
            <h3 class="mb-2 font-bold">Dating and Relationship Advice</h3>
            <ul class="space-y-6 text-[15px]">
              <li><a href="#" class="hover:underline">Dating Tips</a></li>
              <li><a href="#" class="hover:underline">Online Dating Advice</a></li>
              <li><a href="#" class="hover:underline">Relationship Advice</a></li>
              <li><a href="#" class="hover:underline">Single Life</a></li>
            </ul>
          </div>
  
          <div class="space-y-5">
            <h3 class="mb-2 font-bold">About Zoosk</h3>
            <ul class="space-y-6 text-[15px]">
              <li><a href="#" class="hover:underline">About Us</a></li>
              <li><a href="#" class="hover:underline">Success Couples</a></li>
              <li><a href="#" class="hover:underline">Careers</a></li>
              <li><a href="#" class="hover:underline">Help</a></li>
            </ul>
          </div>
  
          <div class="space-y-6">
            <h3 class="mb-2 font-bold">Follow Zoosk</h3>
            <div class="flex space-x-4">
              <a href="https://www.facebook.com/" class="hover:text-blue-500">
                <img :src="facebookIcon" alt="Facebook" class="h-9">
              </a>
              <a href="https://x.com/" class="hover:text-blue-500">
                <img :src="twitterIcon" alt="Twitter" class="h-9">
              </a>
              <a href="https://www.instagram.com/" class="hover:text-blue-500">
                <img :src="instagramIcon" alt="Instagram" class="h-9">
              </a>
            </div>
          </div>
  
        </div>
  
        
      <div class="flex flex-col items-center mt-8 space-y-3 text-[15px] text-center text-gray-600 sm:flex-row sm:justify-between sm:space-y-0">
        <p>© 2007-2025 Zoosk, Inc. All rights reserved.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#" class="hover:underline">Accessibility</a> |
          <a href="#" class="hover:underline">Safety</a> |
          <a href="#" class="hover:underline">Terms of Service</a> |
          <a href="#" class="hover:underline">Privacy</a> |
          <a href="#" class="hover:underline">Imprint</a>
        </div>
      </div>
  
        
        <p class="mt-4 text-[11px] text-left text-gray-700 ">
          <strong>ZOOSK DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON THE MEMBERS OR THE SUBSCRIBERS OF THIS WEBSITE.</strong>  <br>
          <strong> HOWEVER, THE SAFETY AND SECURITY OF OUR MEMBERS IS OUR TOP PRIORITY. BY SIGNING UP TO OUR SERVICES YOU ALSO AGREE TO READ AND FOLLOW OUR </strong>
          <a href="#" class="text-blue-500 hover:underline">ONLINE DATING SAFETY TIPS</a>.
        </p>
  
      </div>
    </footer>
  </template>
  
  <script setup>
  import appStore from '../assets/app-store.svg';
  import googlePlay from '../assets/google-play.svg';
  import facebookIcon from '../assets/footer-fbIcon.svg';
  import twitterIcon from '../assets/footer-twitterIcon.svg';
  import instagramIcon from '../assets/footer-instaIcon.svg';
  </script>
  
  <style scoped>
  footer {
    font-size: 14px;
  }
  </style>
  
  