interface IContacts {
  id: string;
  name: string;
  age: number;
  email: string;
  avatar: string;
  intro: string;
  detail: string;
}

class Contacts implements IContacts {
  public id: string;
  public name: string;
  public age: number;
  public email: string;
  public avatar: string;
  public intro: string;
  public detail: string;

  // 是否展示简介
  public showIntro: boolean = false;

  constructor(private contacts?: IContacts) {
    if (contacts) {
      Object.assign(this, contacts);
    }
  }

  public toggleIntro(isShow: boolean): Contacts {
    this.showIntro = isShow;
    return this;
  }
}

export default Contacts;

