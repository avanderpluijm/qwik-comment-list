import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useCreateComment } from "~/routes";

export const CommentForm = component$(() => {
  const actionSig = useCreateComment();

  return (
    <Form action={actionSig}>
      <input type="text" name="message" placeholder="comment" />
      <button type="submit">Comment</button>
      {actionSig.value?.id && (
        <p>Comment {actionSig.value.id} added successfully </p>
      )}
    </Form>
  );
});
