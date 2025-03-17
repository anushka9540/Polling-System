<template>
    <footer class="py-8 text-gray-700 bg-white border-t">
      <div class="container px-6 mx-auto">
        
        
        <div class="flex justify-center mb-6 space-x-4">
          <img :src="appStore" alt="App Store" class="h-12">
          <img :src="googlePlay" alt="Google Play" class="h-12">
        </div>
  
        <p class="mb-6 text-lg text-center text-gray-600">
          Over <span class="font-bold text-gray-900">30 million</span> downloads.
        </p>
  
        
        <div class="grid grid-cols-1 gap-6 text-sm text-gray-700 sm:grid-cols-2 md:grid-cols-4">
          
          <div>
            <h3 class="mb-2 font-semibold">Zoosk Dating</h3>
            <ul class="space-y-1">
              <li><a href="#" class="hover:underline">iPhone Dating App</a></li>
              <li><a href="#" class="hover:underline">Android Dating App</a></li>
              <li><a href="#" class="hover:underline">Start Dating</a></li>
            </ul>
          </div>
  
          <div>
            <h3 class="mb-2 font-semibold">Dating and Relationship Advice</h3>
            <ul class="space-y-1">
              <li><a href="#" class="hover:underline">Dating Tips</a></li>
              <li><a href="#" class="hover:underline">Online Dating Advice</a></li>
              <li><a href="#" class="hover:underline">Relationship Advice</a></li>
              <li><a href="#" class="hover:underline">Single Life</a></li>
            </ul>
          </div>
  
          <div>
            <h3 class="mb-2 font-semibold">About Zoosk</h3>
            <ul class="space-y-1">
              <li><a href="#" class="hover:underline">About Us</a></li>
              <li><a href="#" class="hover:underline">Success Couples</a></li>
              <li><a href="#" class="hover:underline">Careers</a></li>
              <li><a href="#" class="hover:underline">Help</a></li>
            </ul>
          </div>
  
          <div>
            <h3 class="mb-2 font-semibold">Follow Zoosk</h3>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-blue-500">
                <img :src="facebookIcon" alt="Facebook" class="h-6">
              </a>
              <a href="#" class="hover:text-blue-500">
                <img :src="twitterIcon" alt="Twitter" class="h-6">
              </a>
              <a href="#" class="hover:text-blue-500">
                <img :src="instagramIcon" alt="Instagram" class="h-6">
              </a>
            </div>
          </div>
  
        </div>
  
        
        <div class="mt-8 text-xs text-center text-gray-500">
          <p>© Copyright 2007-2025 Zoosk, Inc. All rights reserved.</p>
          <div class="mt-2">
            <a href="#" class="hover:underline">Accessibility</a> |
            <a href="#" class="hover:underline">Safety</a> |
            <a href="#" class="hover:underline">Terms of Service</a> |
            <a href="#" class="hover:underline">Privacy</a> |
            <a href="#" class="hover:underline">Imprint</a>
          </div>
        </div>
  
        
        <p class="mt-4 text-xs text-center text-gray-600">
          <strong>ZOOSK DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS</strong> ON THE MEMBERS OR THE SUBSCRIBERS OF THIS WEBSITE. 
          HOWEVER, THE SAFETY AND SECURITY OF OUR MEMBERS IS OUR TOP PRIORITY. BY SIGNING UP TO OUR SERVICES YOU ALSO AGREE TO READ AND FOLLOW OUR 
          <a href="#" class="text-blue-500 hover:underline">ONLINE DATING SAFETY TIPS</a>.
        </p>
  
      </div>
    </footer>
  </template>
  
  <script setup>
  import appStore from '../assets/app-store.svg';
  import googlePlay from '../assets/google-play.svg';
  import facebookIcon from '../assets/facebookicon.svg';
  import twitterIcon from '../assets/xicon.svg';
  import instagramIcon from '../assets/instaicon.svg';
  </script>
  
  <style scoped>
  footer {
    font-size: 14px;
  }
  </style>
  
  