import { Injectable } from '@angular/core';
import { Comment } from './shared/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentStorageService {

  comments: Comment[] = [];

  /**
   * Whether data have already been loaded from storage
   */
  initialized = false;

  constructor() {
  }

  /**
   * Returns all comments
   */
  getComments(): Comment[] {
    this.init();
    return this.comments;
  }

  /**
   * Remove the comments from the list
   *
   * @param id comment index to remove
   */
  delete(id: number) {
    const index = this.comments.findIndex(comment => comment.id === id);

    if (index === -1) {
      console.error(`Could not find the comment by id(${id})`);
      return;
    }

    this.comments.splice(index, 1);
    return true;
  }

  /**
   * Return the comment based in the given id
   *
   * @param id comment index to get
   */
  get(id: number): Comment {
    this.init();

    const foundComment = this.comments.find(comment => comment.id === id);

    if (foundComment) {
      return foundComment;
    }

    return null;
  }

  /**
   * Create a new comment based on the given data (+ generate a new id)
   * @param note comment string
   */
  add(note: string) {
    const comment = new Comment(note, this.getHighestId() + 1);
    this.comments.push(comment);
  }

  /**
   * Update the comment and return it
   *
   * @param id comment id
   * @param note comment string
   *
   * @return Comment
   */
  update(id: number, title: string, note: string): Comment {
    const comment = this.get(id);
    comment.note = note;

    return comment;
  }

  /**
   * Load comments but for now it is empty
   */
  init() {
    if (this.initialized) {
      console.log('Already initialized');
      return;
    }

    this.initialized = true;
  }

  /**
   * Returns highest comment id from our list.
   */
  getHighestId(): number {
    if (this.comments.length === 0) {
      return 1;
    }

    return Math.max(...(this.comments.map(comment => comment.id)));
  }
}
