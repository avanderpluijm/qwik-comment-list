import { type Signal, component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useCreateComment } from "~/routes";
import { type Comment } from "~/types/comment";

interface Props {
  submitResultSig: Signal<Comment | undefined>;
}

export const CommentForm = component$(({ submitResultSig }: Props) => {
  const actionSig = useCreateComment();

  return (
    <Form
      action={actionSig}
      // Update the submit signal so the CommentPanel can add the result to the display list
      onSubmitCompleted$={() => {
        submitResultSig.value = actionSig.value as Comment;
      }}
    >
      <input type="text" name="message" placeholder="comment" />
      <button type="submit">Comment</button>
      {actionSig.value?.id && (
        <p>Comment {actionSig.value.id} added successfully </p>
      )}
    </Form>
  );
});
