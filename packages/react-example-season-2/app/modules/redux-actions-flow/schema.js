import { normalize, schema } from 'normalizr';

const bookSchema = new schema.Entity('books', undefined, {idAttribute: 'ID'});
const bookListSchema = new schema.Array(bookSchema);

export {
  bookListSchema
};
