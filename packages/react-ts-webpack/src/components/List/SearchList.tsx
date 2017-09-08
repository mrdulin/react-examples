import * as React from 'react';
import List, {IListProps, onItemClick} from './';
import Book from 'models/Book';

// .tsx后缀的文件指定目录后，还必须要指定index，不像.ts文件，可以指定目录，默认import的是该目录下的index.ts文件
import ListItem from 'components/ListItem/SearchListItem/index';

type Props = IListProps<Book>;

class SearchList extends List<Props> {
  public static defaultProps: Props = {
    items: [],
    onClick: (item: Book, idx?: number): void => {}
  };

  public render(): React.ReactElement<Props> {
    const {items}: { items: Book[] } = this.props;
    return (
      <div className="list">
        {
          items.map((item: Book, idx: number): React.ReactElement<Props> => {
            return (
              <ListItem onClick={() => this.onItemClick(item, idx)} key={item.id} item={item}/>
            );
          })
        }
      </div>
    );
  }

  private onItemClick(item: Book, idx: number): void {
    const onClick: undefined | onItemClick<Book> = this.props.onClick;
    if (onClick) {
      onClick(item, idx);
    }
  }
}

export default SearchList;
