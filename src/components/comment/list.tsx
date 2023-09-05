import { component$ } from "@builder.io/qwik";
import { CommentListItem } from "./list-item";
import { type Comment } from "~/types/comment";

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
