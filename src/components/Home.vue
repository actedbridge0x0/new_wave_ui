<template>
  
    <div class="bg-dark-blue-img">
      <div class="max-w-7xl mx-auto px-2 pt-0 lg:pt-12 sm:px-4 lg:px-8">
        <nav class="hidden lg:flex lg:justify-between" aria-label="Global">
          <div class="flex space-x-8 py-2">
            <button @click="scrollTo('about-us')" class="hover:scale-[1.06] transition-all duration-200 text-gray-200 hover:text-logo-pink rounded-md py-2 px-3 inline-flex items-center text-lg font-bold" aria-current="page">About Us</button>

            <button @click="scrollTo('our-values')" class="hover:scale-[1.06] transition-all duration-200 text-gray-200 hover:text-logo-pink rounded-md py-2 px-3 inline-flex items-center text-lg font-bold">Our Values</button>

            <button @click="scrollTo('roadmap')" class="hover:scale-[1.06] transition-all duration-200 text-gray-200 hover:text-logo-pink rounded-md py-2 px-3 inline-flex items-center text-lg font-bold">Roadmap</button>

            <button @click="scrollTo('team')" class="hover:scale-[1.06] transition-all duration-200 text-gray-200 hover:text-logo-pink rounded-md py-2 px-3 inline-flex items-center text-lg font-bold">Team</button>

            <button @click="scrollTo('faq')" class="hover:scale-[1.06] transition-all duration-200 text-gray-200 hover:text-logo-pink rounded-md py-2 px-3 inline-flex items-center text-lg font-bold">FAQ</button>
          </div>
          <div class="flex justify-center space-x-8">
            <div class="my-auto">
              <a href="https://twitter.com/NewWaveSurfClub" target="_blank" class="text-gray-200 hover:text-logo-pink text-center">
                <span class="sr-only">Twitter</span>
                <svg class="hover:scale-[1.06] transition-all duration-200 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <div class="my-auto">
              <a href="https://discord.gg/nwsc" target="_blank" class="text-gray-200 hover:text-logo-pink">
                <span class="sr-only">Discord</span>
                <svg class="hover:scale-[1.06] transition-all duration-200 h-6 w-6" fill="currentColor" viewBox="0 0 71 55" aria-hidden="true">
                  <path xmlns="http://www.w3.org/2000/svg" d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <div class="relative h-fit flex justify-between">
          <div class="relative z-0 flex-1 p-2 lg:p-4 flex items-start lg:justify-center justify-start sm:inset-0">
            <img src="./../assets/images/logo-transparent.png" class="aspect-auto w-24 lg:w-96">
          </div>
          <div class="relative z-10 flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <button @click="displayMobileMenu = !displayMobileMenu" type="button" class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <nav v-show="displayMobileMenu" class="lg:hidden" aria-label="Global" id="mobile-menu">
        <div class="pb-2 px-2">
          <button @click="scrollTo('about-us')" class="hover:scale-[1.06] transition-all duration-200 w-full text-gray-200 hover:text-logo-pink block rounded-md py-2 px-3 text-lg font-bold" aria-current="page">About Us</button>

          <button @click="scrollTo('our-values')" class="hover:scale-[1.06] transition-all duration-200 w-full text-gray-200 hover:text-logo-pink block rounded-md py-2 px-3 text-lg font-bold">Our Values</button>

          <button @click="scrollTo('roadmap')" class="hover:scale-[1.06] transition-all duration-200 w-full text-gray-200 hover:text-logo-pink block rounded-md py-2 px-3 text-lg font-bold">Roadmap</button>

          <button @click="scrollTo('team')" class="hover:scale-[1.06] transition-all duration-200 w-full text-gray-200 hover:text-logo-pink block rounded-md py-2 px-3 text-lg font-bold">Team</button>

          <button @click="scrollTo('faq')" class="hover:scale-[1.06] transition-all duration-200 w-full text-gray-200 hover:text-logo-pink block rounded-md py-2 px-3 text-lg font-bold">FAQ</button>

          <div class="flex justify-center space-x-8">
            <div class="my-auto">
              <a href="https://twitter.com/NewWaveSurfClub" target="_blank" class="text-gray-200 hover:text-logo-pink text-center">
                <span class="sr-only">Twitter</span>
                <svg class="hover:scale-[1.06] transition-all duration-200 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <div class="my-auto">
              <a href="https://discord.gg/nwsc" target="_blank" class="text-gray-200 hover:text-logo-pink">
                <span class="sr-only">Discord</span>
                <svg class="hover:scale-[1.06] transition-all duration-200 h-6 w-6" fill="currentColor" viewBox="0 0 71 55" aria-hidden="true">
                  <path xmlns="http://www.w3.org/2000/svg" d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <img src="./../assets/images/banner1.jpg" class="w-full">
    <div ref="about-us" class="bg-light-blue-img">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-16">
        <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
          <div class="lg:row-start-1 lg:col-span-7 lg:col-start-7">
            <h3 class="text-7xl text-center font-medium font-script text-white">About Us</h3>
            <p class="mt-4 text-2xl text-white text-justify">An active surf club that promotes inclusion, impactful change and the joy of surf culture. We have been a part of many NFT communities where each nuance of the collection, including rarity and backstory, became a part of the experience. We've endeavored to bring this level of scrutiny to historically important activities - namely surfing. We are bringing the history of surfing alive into an NFT collection. The manifestation of this: New Wave Surf Club (NWSC).</p>
          </div>
          <div class="mt-6 sm:px-10 md:px-20 lg:px-0 lg:mt-0 lg:row-start-1 lg:col-span-6 lg:col-start-1">
            <div class="rounded-2xl overflow-hidden shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
              <img src="./../assets/images/avatar1.jpg" class="object-center object-cover">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden sm:block w-full bg-background1-img bg-fixed bg-cover h-[500px]"></div>
    <img src="./../assets/images/background1.jpg" class="sm:hidden w-full">
    <div ref="our-values" class="bg-mid-blue-img">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-16">
        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
          <div class="mt-6 sm:px-10 md:px-20 lg:px-0 lg:mt-0 lg:row-start-1 lg:col-span-6 lg:col-start-7">
            <div class="rounded-2xl overflow-hidden shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
              <img src="./../assets/images/avatar2.jpg" class="object-center object-cover">
            </div>
          </div>
          <div class="flex-auto lg:row-start-1 lg:col-span-6 lg:col-start-1">
            <h3 class="text-7xl text-center font-medium font-script text-white">Our Values</h3>
            <p class="mt-4 text-2xl text-white text-justify"><span class="font-bold">Surfing and surfers are cool.</span> We want more people to know the history, and we know a premium club can be created around that.</p>
            <p class="mt-4 text-2xl text-white text-justify"><span class="font-bold">Our community is inclusive.</span> While owning a NWSC NFT gets you certain access and benefits, we want our community to be welcoming to all who come across us and support our mission.</p>
            <p class="mt-4 text-2xl text-white text-justify"><span class="font-bold">We can make beneficial changes in the online, meta and IRL worlds</span> through friendships, supporting great causes, and collective action. A specific area of focus for us is bringing Mental Health First Aid training to our community and the NFT community at large.</p>
            <p class="mt-4 text-2xl text-white text-justify"><span class="font-bold">If this sounds like something that interests you, we welcome you to the New Wave Surf Club!</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden sm:block w-full bg-background2-img bg-fixed bg-cover h-[500px]"></div>
    <img src="./../assets/images/background2.jpg" class="sm:hidden w-full">
    <div ref="roadmap" class="bg-purple-img">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-16">
        <h3 class="text-7xl text-center font-medium font-script text-white">Roadmap</h3>
        <div class="mt-2 py-4 md:grid md:gap-6 lg:grid-cols-3">
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-8">
              <h2 class="text-5xl font-medium font-script text-logo-pink">April '22</h2>
            </div>
            <div class="p-8">
              <p class="text-base font-normal text-logo-mid-blue">The official kick off! Join our Discord to engage with the rest of the community, and get all of the information regarding upcoming games and prizes. We will be hosting “Meet the Artist” talks, where you can chat with our amazing artist Seph. He has so much to show off to the community! We will also be bringing in guest artists to explore art and culture from some of the great surf locations around the world.</p>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-8">
              <h2 class="text-5xl font-medium font-script text-logo-pink">May '22</h2>
            </div>
            <div class="p-8">
              <p class="text-base font-normal text-logo-mid-blue">Our founder Pop Punk and our artist Seph will host a twitter spaces where everyone can learn more about club benefits, mint pricing / dates, and see more sneak peeks of the art. Attendees will have an opportunity to ask questions. There will be a variety of giveaways for allow-list spots.</p>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-8">
              <h2 class="text-5xl font-medium font-script text-logo-pink">June '22</h2>
            </div>
            <div class="p-8">
              <p class="text-base font-normal text-logo-mid-blue">Big Big Month!!! Surfing season kicks off in high gear and so does NWSC! Allow-list spots, contests, giveaways, artist talks, and so much more. That's all we can say for now (; Stay Tuned.</p>
            </div>
          </div>
        </div>
        <div class="md:py-4 md:grid md:grid-cols-2 md:gap-6">
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-8">
              <h2 class="text-5xl font-medium font-script text-logo-pink">25% Minted</h2>
            </div>
            <div class="p-8">
              <ul class="list-disc list-inside">
                <li class="text-logo-mid-blue">75 holders eligible to receive Mental Health First Aid Certification, free of cost.</li>
                <li class="text-logo-mid-blue">Donation will be made to surfing related nonprofits. We are in talks with several nonprofits now, and will announce them as soon as they are finalized.</li>
              </ul>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-8">
              <h2 class="text-5xl font-medium font-script text-logo-pink">50% Minted</h2>
            </div>
            <div class="p-8">
              <ul class="list-disc list-inside">
                <li class="text-logo-mid-blue">150 holders eligible to receive Mental Health First Aid Certification, free of cost.</li>
                <li class="text-logo-mid-blue">Donation will be made to Outright International. Since 1990, OutRight Action International has worked alongside LGBTIQ activists and organizations, diplomats and policymakers, and other key partners to advance community-focused solutions to create lasting legal and social transformation. Together, we combat the systemic violence, persecution and discrimination that LGBTIQ people face around the world. To learn more, visit their <a href="https://outrightinternational.org/" target="_blank" class="underline text-blue-600">site</a>.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="md:py-4 md:grid md:grid-cols-2 md:gap-6">
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-8">
              <h2 class="text-5xl font-medium font-script text-logo-pink">75% Minted</h2>
            </div>
            <div class="p-8">
              <ul class="list-disc list-inside">
                <li class="text-logo-mid-blue">225 holders eligible to receive Mental Health First Aid Certification, free of cost.</li>
                <li class="text-logo-mid-blue">Donation will be made to a TBA non-profit that provides education opportunities to middle and high school students.</li>
              </ul>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-8">
              <h2 class="text-5xl font-medium font-script text-logo-pink">100% Minted</h2>
            </div>
            <div class="p-8">
              <ul class="list-disc list-inside">
                <li class="text-logo-mid-blue">300 holders eligible to receive Mental Health First Aid Certification, free of cost.</li>
                <li class="text-logo-mid-blue">Donation will be made to a TBA Hawaii focused nonprofit working with children and families. </li>
                <li class="text-logo-mid-blue">Print on demand merchandise will be available.</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="text-7xl text-center font-medium font-script text-white pb-2 pt-16">Roadmap 2.0</h3>
        <div class="md:py-4 md:grid md:grid-cols-1 md:gap-6">
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-8">
              <h2 class="text-5xl font-medium font-script text-logo-pink">Long-term commitment to our community and values</h2>
            </div>
            <div class="p-8">
              <ul class="list-disc list-inside">
                <li class="text-logo-mid-blue">30% of all mint proceeds and 50% of all royalties on secondary sales will go into a dedicated wallet to support the community.</li>
                <li class="text-logo-mid-blue">Continuous professional support including hires from community, business development, brand development, and marketing.</li>
                <li class="text-logo-mid-blue">Brand partnerships.</li>
                <li class="text-logo-mid-blue">Merchandise: Tired of having to wait? While we will have on-demand merch available early on, we have professional relationships that will allow us to continue to expand our merchandising capabilities.</li>
                <li class="text-logo-mid-blue">Launchpad enabling collaborations, including premium access list opportunities.</li>
                <li class="text-logo-mid-blue">Community driven research &amp; collections.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="team" class="bg-light-blue-img">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-16">
        <h3 class="text-7xl text-center font-medium font-script text-white">Team</h3>
        <div class="mt-6 md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-6">
              <h2 class="text-3xl font-medium font-script text-logo-pink">Pop Punk</h2>
            </div>
            <div class="pb-6 pt-2 px-6">
              <p class="text-lg font-bold text-logo-mid-blue">Founder</p>
              <a href="https://twitter.com/CryptoPopPunk" target="_blank" class="text-lg font-medium text-logo-mid-blue">@CryptoPopPunk</a>
              <img src="./../assets/images/pop-punk.jpg" class="mt-2 rounded-2xl mx-auto md:max-w-full max-w-[60%]">
              <p class="mt-4 text-md text-logo-mid-blue text-justify">Pop Punk bought his first BTC in 2013 and hasn't looked back since. He's been part of the early BTC, ETH, Defi and yes...Doge communities. He spent a decade in Big 5 consulting focused on research and marketing for financial service companies. Over the years he has consulted on crypto wallet security best practices for financial advisors, family offices and startups. He is active in CryptoPunks, Wassies and Cool Cats communities, and is a member of the ExpansionPunks marketing guild. In Defi he was involved in the Rally and Klima DAOs. He loves NFTs for the art, geeky research, people and missions. For the last six months Pop Punk has poured his energy into the New Wave Surf Club.</p>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-6">
              <h2 class="text-3xl font-medium font-script text-logo-pink">Seph Sota</h2>
            </div>
            <div class="pb-6 pt-2 px-6">
              <p class="text-lg font-bold text-logo-mid-blue">Founding Artist</p>
              <a href="https://twitter.com/SephSota" target="_blank" class="text-lg font-medium text-logo-mid-blue">@SephSota.eth</a>
              <img src="./../assets/images/seph-sota.jpg" class="mt-2 rounded-2xl mx-auto md:max-w-full max-w-[60%]">
              <p class="mt-4 text-md text-logo-mid-blue text-justify">Seph has been a creative force since he was young, focusing most of his energy on painting, drawing and any other artistic expressions he could find. With a wide range of influences from the pop art greats, 90s skate / surf / snowboard culture, the beat poets, philosophers, nature and all types of music, his work often defies tradition and truly stands out on its own. Bored with art school, he left early to pursue a design career. Soon his bold/clean designs were in demand and work steadily flowed in. He also founded two companies that focused on art prints and hand painted skate decks. Around 2013, Seph discovered Bitcoin and saw the potential in crypto and blockchain technologies. He decide to pursue NFTs full time in early 2021 as a collector and creator. Seph is a proponent of leading by example and lets his actions speak for themselves. He values kindness and empathy, and is focused on being a strong ally.</p>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-6">
              <h2 class="text-3xl font-medium font-script text-logo-pink">Katie Frost</h2>
            </div>
            <div class="pb-6 pt-2 px-6">
              <p class="text-lg font-bold text-logo-mid-blue">Social Media</p>
              <a href="https://twitter.com/Katiefrost6303" target="_blank" class="text-lg font-medium text-logo-mid-blue">@KatieFrost</a>
              <img src="./../assets/images/katie-frost.jpg" class="mt-2 rounded-2xl mx-auto md:max-w-full max-w-[60%]">
              <p class="mt-4 text-md text-logo-mid-blue text-justify">Katie has been an active member of the NFT space since 2021. Since joining the space, she has dedicated her time to focusing on education and advocacy. Katie is known by many for her positive attitude, and for the empathy that she has and shows to others. During her time outside of the web3 space, Katie enjoys graphic design, shoe customizations, and other artistic outlets. Katie is also working on UX design certifications, adding to her long already long list of skills. She is passionate about bringing more inclusion, diversity, and self-care awareness to the web3 space.</p>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-6">
              <h2 class="text-3xl font-medium font-script text-logo-pink">ActedBridge0x0</h2>
            </div>
            <div class="pb-6 pt-2 px-6">
              <p class="text-lg font-bold text-logo-mid-blue">Lead Developer</p>
              <a href="https://twitter.com/ActedBridge0x0" target="_blank" class="text-lg font-medium text-logo-mid-blue">@ActedBridge0x0</a>
              <img src="./../assets/images/acted.jpg" class="mt-2 rounded-2xl mx-auto md:max-w-full max-w-[60%]">
              <p class="mt-4 text-md text-logo-mid-blue text-justify">Acted likes to code, skate, endeavor as an amateur mycologist, and spend time with loved ones. He's a senior software engineer in web2, and has directed his focus toward the world of web3. Acted has geared his efforts towards making web3 more accessible by developing software that abstract away the complex underpinnings of blockchain technologies. His main principle as a developer: build shit that people want to use.</p>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-6">
              <h2 class="text-3xl font-medium font-script text-logo-pink">theaudiogod1</h2>
            </div>
            <div class="pb-6 pt-2 px-6">
              <p class="text-lg font-bold text-logo-mid-blue">Marketing / Discord Admin</p>
              <a href="https://twitter.com/TAudiogod1" target="_blank" class="text-lg font-medium text-logo-mid-blue">@TheAudiogod1</a>
              <img src="./../assets/images/audio-god.jpg" class="mt-2 rounded-2xl mx-auto md:max-w-full max-w-[60%]">
              <p class="mt-4 text-md text-logo-mid-blue text-justify">audiogod has channeled his long held passion and enthusiasm for NFT's into integral roles in several amazing teams. He is the founder of SafeSpaceNFT, an onboarding resource for new NFT entrants as well as veterans. He is a member of the ExpansionPunks marketing guild, where he has contributed his audio editing and writing skills. He has combined his deep knowledge of the NFT space with his love of surfing history to ensure that New Wave Surf Club is both fun and historic.</p>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-6">
              <h2 class="text-3xl font-medium font-script text-logo-pink">JoJo</h2>
            </div>
            <div class="pb-6 pt-2 px-6">
              <p class="text-lg font-bold text-logo-mid-blue">Social Media / Merchandise</p>
              <a href="https://twitter.com/LunarAbundance" target="_blank" class="text-lg font-medium text-logo-mid-blue">@JoJo</a>
              <img src="./../assets/images/jojo.jpg" class="mt-2 rounded-2xl mx-auto md:max-w-full max-w-[60%]">
              <p class="mt-4 text-md text-logo-mid-blue text-justify">JoJo started in cryptocurrency in 2020. In 2021 she was introduced to the NFT space after attending school for life coaching. She started her journey by helping NFT projects build their discord servers, create social media strategies and build NFT communities. Helping others, sharing her insight on holistic health, and building community engagement have always been close to her heart. She is very artistic and creative, which led to her joining in a partnership to open an Etsy store selling crystals, handmade jewelry, and custom-made items. She values people standing together and supporting one another in the NFT space, and in life. She is passionate about education and creating a safe and inclusive community where all feel welcome. Her goal for the web3 space is to cultivate community, share her knowledge of self-love, help bring awareness to women in the NFT space, and educate others new to the NFT world.</p>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-6">
              <h2 class="text-3xl font-medium font-script text-logo-pink">Durk</h2>
            </div>
            <div class="pb-6 pt-2 px-6">
              <p class="text-lg font-bold text-logo-mid-blue">Doorman / Activities</p>
              <a href="https://twitter.com/Durk2485" target="_blank" class="text-lg font-medium text-logo-mid-blue">@Durk2485</a>
              <img src="./../assets/images/durk.jpg" class="mt-2 rounded-2xl mx-auto md:max-w-full max-w-[60%]">
              <p class="mt-4 text-md text-logo-mid-blue text-justify">Durk is known for the passion he puts into the discord chat. He makes newcomers and OGs feel welcome. This is evident with his active participation in the ExpansionPunks, Ethaliens and RooTroop communities. As part of the ExpansionPunks marketing guild, he has extended his impressive people skills into keeping the community entertained with Trivia and DJing. Durk worked for 14 years in big box retail honing his marketing skills, and was in management for 10 of those years. He appreciates the focus that New Wave Surf Club puts on mental health as he has struggled with depression for many years. Durk has his family as his main focus in life, but has also found time to bring his uniquely powerful community skills to the New Wave Surf Club.</p>
            </div>
          </div>
          <div class="my-4 md:my-0 rounded-3xl divide-y divide-logo-mid-blue bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)]">
            <div class="p-6">
              <h2 class="text-3xl font-medium font-script text-logo-pink">Ashu</h2>
            </div>
            <div class="pb-6 pt-2 px-6">
              <p class="text-lg font-bold text-logo-mid-blue">Marketing / Moderation</p>
              <a href="https://twitter.com/AshwiniDodani" target="_blank" class="text-lg font-medium text-logo-mid-blue">@Ashu</a>
              <img src="./../assets/images/ashu.jpg" class="mt-2 rounded-2xl mx-auto md:max-w-full max-w-[60%]">
              <p class="mt-4 text-md text-logo-mid-blue text-justify">Ashu is a creative digital marketer, a poet and an empath. His experience with social and content marketing runs for 8+ years and has a diversified portfolio of working for some fortune 500 brands & entertainment (films and web series). A mental health advocate with immense love for poetry, art and community building. Ashu entered the web3 space in October 2021 and since then has been a key member in a couple of NFT projects with consulting, moderating and building actively engaged communities. A poet and writer for 12+ years and someone who believes in genuine connections, humility, compassion and love for all. Offer him chai and he would be all ears.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="faq" class="bg-teal-img">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-16">
        <div class="max-w-3xl mx-auto">
          <h3 class="text-7xl text-center font-medium font-script text-white">Frequently asked questions</h3>
          <dl class="mt-8 space-y-6 divide-y divide-gray-200">
            <button @click="questionsDisplay[1] = !questionsDisplay[1]" class="bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)] p-6 rounded-3xl w-full">
              <dt class="text-lg">
                <div class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                  <span class="font-bold text-lg text-logo-mid-blue text-justify">What is the New Wave Surf Club?</span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg :class="[questionsDisplay[1] ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </dt>
              <dd v-show="questionsDisplay[1]" class="mt-2 pr-12" id="faq-0">
                <p class="text-base text-gray-500 text-justify">A mission-aligned social club based on a 5,000 piece generative art avatar/pfp NFT collection. This collection celebrates the history and culture of surfing. There will be separate historical moments in the surfing collection (20 pieces) that we will randomly airdrop to our holders during and after the mint.</p>
              </dd>
            </button>
            <button @click="questionsDisplay[2] = !questionsDisplay[2]" class="bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)] p-6 rounded-3xl w-full">
              <dt class="text-lg">
                <div class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                  <span class="font-bold text-lg text-logo-mid-blue text-justify">Who are the founders of New Wave Surf Club?</span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg :class="[questionsDisplay[2] ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </dt>
              <dd v-show="questionsDisplay[2]" class="mt-2 pr-12" id="faq-0">
                <p class="text-base text-gray-500 text-justify">Pop Punk and SephSota</p>
              </dd>
            </button>
            <button @click="questionsDisplay[3] = !questionsDisplay[3]" class="bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)] p-6 rounded-3xl w-full">
              <dt class="text-lg">
                <div class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                  <span class="font-bold text-lg text-logo-mid-blue text-justify">Will there be an allow list?</span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg :class="[questionsDisplay[3] ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </dt>
              <dd v-show="questionsDisplay[3]" class="mt-2 pr-12" id="faq-0">
                <p class="text-base text-gray-500 text-justify">Yes. We don&#39;t want gas wars, and we want to reward our community with early access to a smooth minting experience.</p>
              </dd>
            </button>
            <button @click="questionsDisplay[4] = !questionsDisplay[4]" class="bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)] p-6 rounded-3xl w-full">
              <dt class="text-lg">
                <div class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                  <span class="font-bold text-lg text-logo-mid-blue text-justify">How do I get on the allow list?</span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg :class="[questionsDisplay[4] ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </dt>
              <dd v-show="questionsDisplay[4]" class="mt-2 pr-12" id="faq-0">
                <p class="text-base text-gray-500 text-justify">Be an active supporter and share the word about our project. Win spots through community engagement opportunities or contests. Win spots by participating in our many collab opportunities with other supportive communities.</p>
              </dd>
            </button>
            <button @click="questionsDisplay[5] = !questionsDisplay[5]" class="bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)] p-6 rounded-3xl w-full">
              <dt class="text-lg">
                <div class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                  <span class="font-bold text-lg text-logo-mid-blue text-justify">How will the allow list work?</span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg :class="[questionsDisplay[5] ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </dt>
              <dd v-show="questionsDisplay[5]" class="mt-2 pr-12" id="faq-0">
                <p class="text-base text-gray-500 text-justify">When you are given "allow list" status, it will be in the form of a discord role that corresponds with how many mints spots you will have in the "allow list". Before the mint, you will need to use your role via Premint to provide us with your preferred Ethereum address to be added to our list.</p>
              </dd>
            </button>
            <button @click="questionsDisplay[6] = !questionsDisplay[6]" class="bg-white/75 shadow-[0_10px_15px_-3px_rgb(0,0,0,.4)] p-6 rounded-3xl w-full">
              <dt class="text-lg">
                <div class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                  <span class="font-bold text-lg text-logo-mid-blue text-justify">When is the mint happening?</span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg :class="[questionsDisplay[6] ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </dt>
              <dd v-show="questionsDisplay[6]" class="mt-2 pr-12" id="faq-0">
                <p class="text-base text-gray-500 text-justify">We are targeting late June, but you will know weeks ahead of time if you are in our Discord. No stealth mints!</p>
              </dd>
            </button>
          </dl>
        </div>
      </div>
    </div>
    <footer class="bg-dark-blue-img">
      <div class="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div class="px-5 py-2">
            <button @click="scrollTo('about-us')" class="hover:scale-[1.06] transition-all duration-200 text-lg text-gray-200 hover:text-logo-pink font-bold">About Us</button>
          </div>

          <div class="px-5 py-2">
            <button @click="scrollTo('our-values')" class="hover:scale-[1.06] transition-all duration-200 text-lg text-gray-200 hover:text-logo-pink font-bold">Our Values</button>
          </div>

          <div class="px-5 py-2">
            <button @click="scrollTo('roadmap')" class="hover:scale-[1.06] transition-all duration-200 text-lg text-gray-200 hover:text-logo-pink font-bold">Roadmap</button>
          </div>

          <div class="px-5 py-2">
            <button @click="scrollTo('team')" class="hover:scale-[1.06] transition-all duration-200 text-lg text-gray-200 hover:text-logo-pink font-bold">Team</button>
          </div>

          <div class="px-5 py-2">
            <button @click="scrollTo('faq')" class="hover:scale-[1.06] transition-all duration-200 text-lg text-gray-200 hover:text-logo-pink font-bold">FAQ</button>
          </div>
        </nav>
        <div class="mt-8 flex justify-center space-x-6">
          <a href="https://twitter.com/NewWaveSurfClub" target="_blank" class="text-gray-200 hover:text-logo-pink">
            <span class="sr-only">Twitter</span>
            <svg class="hover:scale-[1.06] transition-all duration-200 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="https://discord.gg/nwsc" target="_blank" class="text-gray-200 hover:text-logo-pink">
            <span class="sr-only">Discord</span>
            <svg class="hover:scale-[1.06] transition-all duration-200 h-6 w-6" fill="currentColor" viewBox="0 0 71 55" aria-hidden="true">
              <path xmlns="http://www.w3.org/2000/svg" d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
            </svg>
          </a>
        </div>
        <p class="mt-8 text-center text-base text-gray-200">&copy; 2022 New Wave Surf Club, Inc. All rights reserved.</p>
      </div>
    </footer>
  
</template>

<script>
export default {
  data() {
    return {
      displayMobileMenu: false,
      questionsDisplay: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
      }
    }
  },
  methods: {
    scrollTo(refName) {
      var element = this.$refs[refName];

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}
</script>