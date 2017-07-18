import * as React from 'react';
import * as Rx from 'rxjs';

class Search extends React.PureComponent<any, any> {

  private input: Rx.Subject<React.FormEvent<any>>;

  public constructor() {
    super();
    this.input = new Rx.Subject();

    this.input
      // 事件和值的映射
      .map((e: any) => e.target.value.trim())
      // 过滤空值
      .filter((text: string): boolean => text.length > 0)
      // 两次发射值的间隔时间
      .debounceTime(1000)
      // 当值改变时才发射该值，例如用户输入aaa -> aaab -> aaa，最终的值和初始值相同，不发射
      .distinctUntilChanged()
      // 使用onInputChangeObserver订阅该Observable
      .switchMap(this.onRequestKeywords)
      .subscribe(this.onInputChangeObserver);
  }

  public render() {
    return (
      <section>
        <form>
          <input type="text" onChange={this.onInputChange}  autoComplete="off"/>
        </form>
      </section>
    );
  }
  
  private onInputChange = (e: React.FormEvent<any>) => {
    e.persist();
    this.input.next(e);
  }

  private onRequestKeywords(x: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['react', 'angular', 'rxjs'])
      }, 1000);
    });
  }

  private onInputChangeObserver(x: string) {
    console.log(x);
  }
}

export default Search;
