import * as React from 'react';
import * as renderer from 'react-test-renderer';

import SearchListItem from '../';
import Book from 'models/Book';

describe('component - SearchListItem snapshots test suites', () => {

  it('renders correctly', () => {

    const onClick = () => {};
    const book: Book = new Book({
      ID: 1,
      Title: 'react',
      SubTitle: '',
      Description: 'react is awesome',
      Image: '',
      isbn: ''
    });

    const component: renderer.Renderer = renderer.create(
      <SearchListItem item={book} onClick={onClick}/>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
