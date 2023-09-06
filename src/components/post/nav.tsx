import { component$ } from "@builder.io/qwik";
import { type Post } from "~/services/post";

interface Props {
  posts: Post[];
}

export const PostNav = component$<Props>((props) => (
  <nav>
    {props.posts.map((p, i) => (
      <a key={i} href={`/post/${p.slug}`}>
        {p.slug}
      </a>
    ))}
  </nav>
));
