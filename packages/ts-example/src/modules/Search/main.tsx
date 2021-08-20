/**
 * Created by dulin on 2017/6/29.
 */
import * as React from 'react';
import {RouteComponentProps} from 'react-router';

interface ISearchProps {
  children: React.ReactChildren;
}

interface ISearchState {

}

type SearchProps = ISearchProps & RouteComponentProps<any, any>;

class Search extends React.PureComponent<SearchProps, ISearchState> {

  public render(): React.ReactElement<ISearchProps> {

    return (
      <article>
        <section>
          {/*搜索框*/}
          <form onSubmit={this.onSearchFormSubmit}>
            <input name="search" type="search" placeholder="输入书名进行搜索" autoComplete="off"/>
          </form>
        </section>
        {this.props.children}
      </article>
    );
  }

  get pathname(): string {
    return this.props.location.pathname;
  }

  private onSearchFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form: HTMLFormElement = e.currentTarget;
    const formElements: HTMLFormControlsCollection = form.elements;
    const input: HTMLInputElement = formElements.namedItem('search') as HTMLInputElement;
    const keyword: string = input.value.trim();

    this.navigate(keyword);
  }
  
  private navigate = (keyword: string): void => {
    const pathname: string = '/search/result';
    this.props.router.push({
      pathname,
      query: {
        keyword
      }
    });
  }

}

export default Search;
