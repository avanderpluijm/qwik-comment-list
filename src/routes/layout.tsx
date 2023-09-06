import { component$, Slot } from '@builder.io/qwik';
import { RequestHandler, routeLoader$ } from '@builder.io/qwik-city';
import { PostNav } from '~/components/post/nav';
import { getPosts } from '~/services/post';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useGetPosts = routeLoader$(() => getPosts());
export default component$(() => {
  const posts = useGetPosts();
  return (
    <>
      <main>
        <header>
          <PostNav posts={posts.value} />
        </header>
        <Slot />
      </main>
    </>
  );
});
