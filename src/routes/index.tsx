import { component$ } from "@builder.io/qwik";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import { CommentPanel } from "~/components/comment/panel";
import { createComment, fetchComments } from "~/services/comment";

// Create comment form handler
export const useCreateComment = routeAction$(async (formData) =>
  createComment({ ...formData })
);

// Post information RouteLoader
export const useInitialCommentsLoader = routeLoader$(() => fetchComments());

// Post page with comments, single thread replies
// Comment form and reply-form
export default component$(() => <CommentPanel />);
