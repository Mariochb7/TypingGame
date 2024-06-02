import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { lorem, random } from 'faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TypingGame';
  /* isSuccess = false; 1st sol*/
  enteredText = '';
  randomText = lorem.sentence();

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.enteredText = target.value;
    /* this.isSuccess = value == this.randomText ? true : false; 1st sol*/
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
