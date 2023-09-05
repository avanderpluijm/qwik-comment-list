import { component$ } from '@builder.io/qwik';
import { Comment } from '~/types/comment';

interface Props {
  comment: Comment;
}

export const CommentListItem = component$<Props>((props) => (
  <li class="comment-list-item">{props.comment.comment}</li>
));
