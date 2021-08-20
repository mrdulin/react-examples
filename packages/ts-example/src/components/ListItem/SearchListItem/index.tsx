import * as React from "react";
import ListItem, { IListItemProps } from "..";
import Book from "models/Book";

import * as style from "./style.module.scss";

class SearchListItem extends ListItem<Book> {
  public static defaultProps: IListItemProps<Book> = {
    item: new Book(),
    onClick: (): void => {},
  };

  public render(): React.ReactElement<IListItemProps<Book>> {
    const { item }: { item: Book } = this.props;
    return (
      <div className={style.listItem} onClick={this.props.onClick}>
        <div className={style.colLeft}>
          <img className={style.image} src={item.image} alt="book-image" />
        </div>
        <div className={style.colRight}>
          <h2 className={style.title}>{item.title}</h2>
          <p className={style.description}>{item.description}</p>
        </div>
      </div>
    );
  }
}

export default SearchListItem;
