<template>
  <div class="relative min-h-screen">
    <div id="content-wrap">
      <nav
        class="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default"
      >
        <div
          class="w-full flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-7"
              alt="Flowbite Logo"
            />
            <span
              class="self-center text-xl text-heading font-semibold whitespace-nowrap"
              >Flowbite</span
            >
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary"
            >
              <li>
                <router-link
                  to="/"
                  class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link
                  to="/posts"
                  class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >posts</router-link
                >
              </li>
              <li>
                <router-link
                  to="/categories"
                  class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >categories</router-link
                >
              </li>
              <li>
                <router-link
                  to="about"
                  class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >About</router-link
                >
              </li>
              <li>
                <router-link
                  to="login"
                  class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >Login</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main class="pt-16 md:pt-20 px-12" id="page-container">
        <router-view :key="$route.fullPath" />
      </main>
    </div>

    <footer
      class="bg-neutral-primary-soft shadow-xs border-t border-default pb-12 absolute bottom-0 left-0 w-full h-20 z-50"
    >
      <div class="w-full px-4 py-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-body sm:text-center"
          >© 2023
          <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>.
          All Rights Reserved.
        </span>
        <ul
          class="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0"
        >
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 6rem;
  /* Footer height */
}

@media only screen and (max-width: 960px) {
  #content-wrap {
    padding-bottom: 3rem;
    /* Footer height */
  }
}

*:focus,
*:active {
  outline: none;
}
</style>