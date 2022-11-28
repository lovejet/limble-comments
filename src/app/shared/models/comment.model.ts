export class Comment {
  id: number;
  note: string;

  constructor(note: string = '', id: number = null) {
    this.note = note;
    this.id = id;
  }
}
