import { component$, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import { CommentForm } from './form';
import { CommentList } from './list';
import { LoadMoreButton } from './load-more-button';
import { fetchComments } from '~/services/comment';
import { useInitialCommentsLoader } from '~/routes';
import { Comment } from '~/types/comment';

export const CommentPanel = component$(() => {
  const currentPage = useSignal<number>(0);
  const initialData = useInitialCommentsLoader();
  const dataToDisplay = useStore<Comment[]>(initialData.value);
  const newComments = useSignal<Comment[]>([]);

  useTask$(({ track }) => {
    const data = track(() => newComments.value);
    if (!data) return;
    dataToDisplay.push(...data);
  });

  useTask$(async ({ track }) => {
    const newRange = track(() => currentPage.value);
    if (!newRange) return;
    newComments.value = fetchComments(5, newRange);
  });

  return (
    <>
      <CommentForm />
      <CommentList items={dataToDisplay} />
      <LoadMoreButton currentPage={currentPage} />
    </>
  );
});
