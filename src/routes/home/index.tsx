import { component$ } from '@builder.io/qwik';
import { BlogLayout } from '~/components/blog/blog-layout';
import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

export default component$(() => {
  return (
    <>
      <Header></Header>
      <BlogLayout></BlogLayout>
      <Footer></Footer>
    </>
  );
});
