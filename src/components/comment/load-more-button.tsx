import { type Signal, component$ } from "@builder.io/qwik";

interface Props {
  currentPage: Signal<number>;
}

export const LoadMoreButton = component$<Props>((props) => (
  <button onClick$={() => (props.currentPage.value = props.currentPage.value + 1)}>Load More</button>
));
