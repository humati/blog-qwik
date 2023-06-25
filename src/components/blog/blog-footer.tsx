import { component$ } from '@builder.io/qwik';

export const BlogFooter = component$(() => {
  return (
    <div class="mt-10 flex justify-center">
      <a
        class="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
        href="/archive"
      >
        <span>View all Posts</span>
      </a>
    </div>
  );
});
