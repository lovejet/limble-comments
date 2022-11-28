export class User {
  id: number;
  name: string;

  constructor(name: string = '', id: number = null) {
    this.name = name;
    this.id = id;
  }
}
