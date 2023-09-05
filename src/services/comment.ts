import { faker } from '@faker-js/faker';
import { type Comment } from '~/types/comment';

// Create a list 5 5 lorem comments
export const fetchComments = (): Comment[] =>
  Array.from(new Array(5), () => createComment());

// Use Faker to create a random comment
export const createComment = (comment?: string): Comment => ({
  id: faker.string.uuid(),
  comment: comment || faker.lorem.paragraph(),
  username: faker.person.firstName(),
});
