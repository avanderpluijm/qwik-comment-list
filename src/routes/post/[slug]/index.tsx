import { component$ } from "@builder.io/qwik";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import { CommentPanel } from "~/components/comment/panel";
import { createComment, fetchComments } from "~/services/comment";
import { getPostBySlug } from "~/services/post";

// Create comment form handler
export const useCreateComment = routeAction$(async (formData) =>
  createComment(formData.message as string)
);

// Get post data on route load
export const useGetPost = routeLoader$(({ params }) =>
  getPostBySlug(params["slug"])
);

// get post comments server side on route load
export const useInitialCommentsLoader = routeLoader$(() => fetchComments());

export default component$(() => {
  const post = useGetPost();
  if (!post.value) return <>Not found</>;
  return (
    <>
      <h1>{post.value.slug}</h1>
      <CommentPanel />
    </>
  );
});
