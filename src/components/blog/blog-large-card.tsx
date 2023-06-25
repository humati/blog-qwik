import { component$ } from '@builder.io/qwik';

export const BlogLargeCard = component$(() => {
  return (
    <div class="group cursor-pointer">
      <div class=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
        <a
          class="relative block aspect-video"
          href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration"
        >
          <img
            alt="Thumbnail"
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
            <a href="/category/technology">
              <span class="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                Technology
              </span>
            </a>
          </div>
          <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
            <a href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration">
              <span class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                Architectural Engineering Wonders of the modern era for your
                Inspiration
              </span>
            </a>
          </h2>
          <div class="hidden">
            <p class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
              <a href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration">
                Reinvention often comes in spurts, after a long period of
                silence. Just as modern architecture recently enjoyed a
                comeback, brand architecture, a field with well-established
                principles for decades
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
            <time class="truncate text-sm" dateTime="2022-10-21T15:48:00.000Z">
              June 25, 2023
            </time>
          </div>
        </div>
      </div>
    </div>
  );
});
