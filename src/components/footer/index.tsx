import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 mt-10 border-t border-gray-100 dark:border-gray-800">
      <div class="text-center text-sm">
        Copyright © 2023 Stablo. All rights reserved.
      </div>
      <div class="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {' '}
          Made by <span>Nauth</span>
        </span>
        <span>·</span>
        <span>
          {' '}
          <a href="https://github.com/humati" rel="noopener" target="_blank">
            Github
          </a>
        </span>
      </div>
      <div class="mt-2 flex items-center justify-between">
        <div class="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 h-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            ></path>
          </svg>
          <select name="themeSwitch">
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </div>
    </footer>
  );
});
