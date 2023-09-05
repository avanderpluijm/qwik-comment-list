import { Signal, component$ } from '@builder.io/qwik';

interface Props {
  currentPage: Signal<number>;
}

export const LoadMoreButton = component$<Props>((props) => {
  const { currentPage } = props;
  return (
    <button onClick$={() => (currentPage.value = currentPage.value + 1)}>
      Load More
    </button>
  );
});
