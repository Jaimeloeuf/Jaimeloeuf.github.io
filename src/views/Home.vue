<template>
  <section class="m-8">
    <div class="mx-auto max-w-screen-sm">
      <img
        class="mb-8 max-h-36 rounded-full"
        src="https://avatars.githubusercontent.com/u/44993072"
      />

      <p class="text-4xl font-bold tracking-tight text-gray-900 md:text-4xl">
        Hey! I am JJ
      </p>

      <p class="text-lg font-light text-gray-500">
        Software Engineer @ somewhere
      </p>
    </div>
  </section>

  <!-- What I am doing now section -->
  <section class="m-8">
    <div class="mx-auto max-w-screen-sm">
      <p class="m-4 text-lg font-bold">What I'm doing now...</p>
      <a
        href="https://github.com/Jaimeloeuf/simpler-fetch"
        target="_blank"
        class="flex flex-col items-center rounded-3xl border border-gray-200 bg-white shadow hover:bg-gray-100 md:flex-row"
      >
        <img
          class="h-48 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="../assets/SF.jpg"
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            simpler-fetch
          </h5>
          <p class="mb-3 font-normal text-gray-700">
            A simpler fetch library focused on better ergonomics, as an
            alternative to `Axios` or `superagent`.
          </p>
        </div>
      </a>
    </div>
  </section>

  <!-- Social Cards -->
  <section class="m-8">
    <div class="mx-auto max-w-screen-sm">
      <p class="m-4 text-lg font-bold">Socials</p>

      <!-- Github Card -->
      <a
        href="https://github.com/Jaimeloeuf"
        class="mb-6 flex flex-row rounded-3xl border border-gray-200 p-6 shadow"
      >
        <div class="basis-36 justify-between pr-6 leading-normal md:grow">
          <p class="font-normal text-gray-700">Github</p>
          <p class="text-xs text-gray-400">github.com</p>
        </div>

        <img
          class="h-24 grow rounded-lg object-cover"
          src="https://avatars.githubusercontent.com/u/44993072"
        />
      </a>

      <!-- Linkedin Card -->
      <a
        href="https://www.linkedin.com/in/jaimeloeuf"
        class="flex flex-col rounded-3xl border border-gray-200 bg-blue-50 p-6 shadow md:flex-row"
      >
        <div class="basis-12 justify-between pr-6 leading-normal md:grow">
          <p class=":text-gray-400 font-normal text-gray-700">
            connect with me on Linkedin
          </p>
          <p class="text-xs text-gray-400">linkedin.com</p>
        </div>

        <img
          class="h-24 grow rounded-lg object-cover"
          src="https://media.licdn.com/dms/image/D5616AQHEsLbMcskiLA/profile-displaybackgroundimage-shrink_350_1400/0/1681401343587?e=1692835200&v=beta&t=fnehakDqN-5ND9y6k2M3F290bfts7d59Xd4XFNjiohU"
        />
      </a>
    </div>
  </section>
</template>
