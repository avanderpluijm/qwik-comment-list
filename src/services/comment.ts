import { faker } from '@faker-js/faker';
import { Comment } from '~/types/comment';

// Create a list 5 5 lorem comments
export const fetchComments = (count = 5, rangeStart = 0): Comment[] =>
  Array.from(new Array(count), () => createComment({}));

// Use Faker to create a random comment
export const createComment = ({ comment }: { comment?: string }): Comment => ({
  id: faker.string.uuid(),
  comment: comment || faker.lorem.paragraph(),
  username: faker.person.firstName(),
});
