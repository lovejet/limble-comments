import {Component, OnInit} from '@angular/core';
import {CommentStorageService} from '../comment-storage.service';
import {Comment} from '../shared/models/comment.model';
import { ChoiceWithIndices } from '../mentions';

@Component({
  selector: 'app-limble-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[];
  isInputShown: boolean;

  commentNote: string;
  mentions: ChoiceWithIndices[];

  constructor(private storage: CommentStorageService) {
    this.isInputShown = false;
    this.commentNote = '';
  }

  /**
   * Load comments on init
   */
  ngOnInit(): void {
    this.storage.init();
    this.comments = this.storage.getComments();
  }

  onCommentChange(event): void {
    this.commentNote = event;
  }
  onMentionsChange(event): void {
    this.mentions = event;
  }

  showCommentInput(): void {
    this.isInputShown = true;
  }
  addComment(): void {
    let richText = this.commentNote;
    this.mentions.sort((a, b) => b.indices.start - a.indices.start);
    this.mentions.forEach(mention =>
      richText = `${richText.substring(0, mention.indices.start)}<b>@${mention.choice.name}</b>${richText.substring(mention.indices.end)}`);

    if (this.mentions.length > 0) {
      window.alert(`Mentioned - ${this.mentions.map((mention) => mention.choice.name).join(', ')}`);
    }

    this.storage.add(richText);
    this.comments = this.storage.getComments();
    this.commentNote = '';
    this.mentions = [];
    this.isInputShown = false;
  }
}
