import { component$, useSignal, useStore, useTask$ } from "@builder.io/qwik";
import { CommentForm } from "./form";
import { CommentList } from "./list";
import { LoadMoreButton } from "./load-more-button";
import { fetchComments } from "~/services/comment";
import { useInitialCommentsLoader } from "~/routes";
import { type Comment } from "~/types/comment";

// Parent comment for the comments list. 
// All state changes related to the comments are centralised in this panel 
export const CommentPanel = component$(() => {
  const currentPage = useSignal<number>(0);
  // Initial data that is server side fetched with a routeloader
  const initialData = useInitialCommentsLoader();
  // Store with the reactive list of comments to show
  const dataToDisplay = useStore<Comment[]>(initialData.value);
  // Signal for new values being loaded (after clicking button)
  const newComments = useSignal<Comment[]>([]);
  // Signal for form submit handler
  const formComment = useSignal<Comment>();

  // Watch form submit changes and add the submit value to the display list
  useTask$(({ track }) => {
    const data = track(() => formComment.value);
    if (!data) return;
    dataToDisplay.unshift(data);
  });

  // Track comment fetch result and add it to the display list
  useTask$(({ track }) => {
    const data = track(() => newComments.value);
    if (!data) return;
    dataToDisplay.push(...data);
  });

  // Track the pagination counter. If changed, fetch new comments
  useTask$(async ({ track }) => {
    const newRange = track(() => currentPage.value);
    if (!newRange) return;
    newComments.value = fetchComments();
  });

  return (
    <>
      <CommentForm submitResultSig={formComment} />
      <CommentList items={dataToDisplay} />
      <LoadMoreButton currentPage={currentPage} />
    </>
  );
});
