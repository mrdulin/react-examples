/**
 * Created by dulin on 2017/6/29.
 */
import {processObjectPropName} from 'utils';
import {ISearchBook} from 'interfaces/book';

class Book {
  public id: number = -1;
  public title: string = '';
  public subtitle: string = '';
  public description: string = '';
  public image: string = '';
  public isbn: string = '';

  public constructor(book?: ISearchBook) {

    if (book) {
      const bookWithLowerCaseKey: any = processObjectPropName<ISearchBook>(book);

      Object.assign(this, bookWithLowerCaseKey);
    }

  }
  

  public isValid(): boolean {
    return this.id > 0;
  }
  
}


export default Book;
