export interface Post {
  slug: string;
}

const posts: Post[] = [{ slug: 'one' }, { slug: 'two' }, { slug: 'three' }];

export const getPosts = () => posts;

export const getPostBySlug = (slug: string) =>
  posts.find((post) => post.slug == slug);
