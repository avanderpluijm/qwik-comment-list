import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Post } from '~/services/post';

interface Props {
  posts: Post[];
}

export const PostNav = component$<Props>((props) => (
  <nav>
    {props.posts.map((p, i) => (
      <Link key={i} href={`post/${p.slug}`}>
        {p.slug}
      </Link>
    ))}
  </nav>
));
