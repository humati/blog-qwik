import { component$ } from '@builder.io/qwik';
import { BlogFooter } from './blog-footer';
import { BlogLargeCard } from './blog-large-card';
import { BlogSmallCard } from './blog-small-card';

export const BlogLayout = component$(() => {
  return (
    <div class="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
      <section class="grid gap-10 md:grid-cols-2 lg:gap-10">
        <BlogLargeCard></BlogLargeCard>
        <BlogLargeCard></BlogLargeCard>
      </section>
      <section class="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
        <BlogSmallCard></BlogSmallCard>
      </section>
      <BlogFooter></BlogFooter>
    </div>
  );
});
