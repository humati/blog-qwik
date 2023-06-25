import { component$ } from '@builder.io/qwik';

export const BlogSmallCard = component$(() => {
  return (
    <div class="group cursor-pointer">
      <div class=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
        <a
          class="relative block aspect-square"
          href="/post/14-architectural-design-ideas-for-spacious-interior"
        >
          <img
            alt="Thumbnail"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            class="object-cover transition-all"
            sizes="(max-width: 768px) 30vw, 33vw"
            width={1600}
            height={900}
            src="https://picsum.photos/1600/900"
            style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
          />
        </a>
      </div>
      <div class="">
        <div>
          <div class="flex gap-3">
            <a href="/category/design">
              <span class="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                Design
              </span>
            </a>
            <a href="/category/lifestyle">
              <span class="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">
                Lifestyle
              </span>
            </a>
          </div>
          <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
            <a href="/post/14-architectural-design-ideas-for-spacious-interior">
              <span class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                14 Architectural Design Ideas for a Spacious Interior
              </span>
            </a>
          </h2>
          <div class="hidden">
            <p class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
              <a href="/post/14-architectural-design-ideas-for-spacious-interior">
                It is a cliche philosophical question, but it touches on
                something fundamental about how humans relate to the world
                around them.{' '}
              </a>
            </p>
          </div>
          <div class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <div class="flex items-center gap-3">
              <div class="relative h-5 w-5 flex-shrink-0">
                <img
                  alt="Mario Sanchez"
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  class="rounded-full object-cover"
                  src="https://picsum.photos/200/200"
                  sizes="20px"
                  style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                />
              </div>
              <span class="truncate text-sm">Mario Sanchez</span>
            </div>
            <span class="text-xs text-gray-300 dark:text-gray-600">•</span>
            <time class="truncate text-sm" dateTime="2022-10-21T06:05:00.000Z">
              June 25, 2023
            </time>
          </div>
        </div>
      </div>
    </div>
  );
});
