import { component$ } from '@builder.io/qwik';

export const BlogLargeCard = component$(() => {
  return (
    <div class="card w-96 bg-base-100">
      <figure>
        <img src="https://picsum.photos/200/300" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
});
