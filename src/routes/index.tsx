import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { getPosts } from "~/services/post";

export const useGetPosts = routeLoader$(() => getPosts());

export default component$(() => <div>Go to a post</div>);
