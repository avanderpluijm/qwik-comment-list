import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { CommentPanel } from '~/components/comment/panel';
import { getPostBySlug } from '~/services/post';

export const useGetPosts = routeLoader$(({ params }) =>
  getPostBySlug(params['slug'])
);

export default component$(() => <CommentPanel />);
