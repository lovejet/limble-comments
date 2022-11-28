import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user.model';
import { ChoiceWithIndices } from '../mentions';

@Component({
  selector: 'app-limble-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css'],
})
export class TextInputComponent implements OnInit {
  text = ``;
  loading = false;
  choices: User[] = [];
  mentions: ChoiceWithIndices[] = [];

  @Output() textChange = new EventEmitter();
  @Output() mentionsChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {}

  async loadChoices(searchTerm: string): Promise<User[]> {
    const users = await this.getUsers();

    this.choices = users.filter((user) => {
      const alreadyExists = this.mentions.some((m) => m.choice.name === user.name);
      return !alreadyExists && user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

    return this.choices;
  }

  getChoiceLabel = (user: User): string => {
    return `@${user.name}`;
  }

  onSelectedChoicesChange(choices: ChoiceWithIndices[]): void {
    this.mentions = choices;
    this.mentionsChange.emit(this.mentions);
    console.log('mentions:', this.mentions);
  }

  onMenuShow(): void {
    console.log('Menu show!');
  }

  onMenuHide(): void {
    console.log('Menu hide!');
    this.choices = [];
  }

  onModelChange(event): void {
    this.textChange.emit(event);
  }

  async getUsers(): Promise<User[]> {
    this.loading = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loading = false;
        resolve([
          {
            id: 1,
            name: 'Kevin',
          },
          {
            id: 2,
            name: 'Jeff',
          },
          {
            id: 3,
            name: 'Bryan',
          },
          {
            id: 4,
            name: 'Gabbey',
          },
        ]);
      }, 50);
    });
  }
}
