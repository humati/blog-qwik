import { component$ } from '@builder.io/qwik';
import { BlogLargeCard } from './blog-large-card';

export const BlogLayout = component$(() => {
  return (
    <section class="flex justify-center w-full my-8">
      <BlogLargeCard></BlogLargeCard>
      <BlogLargeCard></BlogLargeCard>
    </section>
  );
});
