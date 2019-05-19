import {object, serializable} from "serializr";

export class Person {
  @serializable _id: string = "";
  @serializable fullName: string = "";
  @serializable link: string = "";

  constructor(_id: string, fullName: string, link: string) {
    this._id = _id;
    this.fullName = fullName;
    this.link = link;
  }
}

export class Quote {
  @serializable _id: string = "";
  @serializable content: string = "";
  @serializable(object(Person)) creator?: Person;

  constructor(_id: string, content: string, creator?: Person) {
    this._id = _id;
    this.content = content;
    this.creator = creator;
  }
}