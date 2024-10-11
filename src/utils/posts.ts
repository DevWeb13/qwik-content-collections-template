import { allPosts } from 'content-collections';

export const filterSearchPosts = (search: string) => {
  return allPosts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });
};
