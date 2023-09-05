import { component$, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import { CommentListItem } from './list-item';
import { useInitialCommentsLoader } from '~/routes';
import { fetchComments } from '~/services/comment';
import { Comment } from '~/types/comment';

interface Props {
  items: Comment[];
}

export const CommentList = component$<Props>((props) => (
  <ul class="comment-list">
    {props.items.map((c, n) => (
      <CommentListItem key={n} comment={c} />
    ))}
  </ul>
));
