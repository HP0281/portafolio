import { Component } from '@angular/core';

@Component({
  selector: 'app-typing-animation',
  standalone: true,
  imports: [],
  templateUrl: './typing-animation.component.html',
  styleUrl: './typing-animation.component.scss'
})
export class TypingAnimationComponent {
  fullText = 'Un desarrollador ';
  words = ['backend', 'frontend', 'fullstack.'];
  displayText = '';
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 100; // Velocidad de escritura
  delayAfterWord = 250; // Pausa después de escribir una palabra
  delayBeforeNextWord = 250; // Pausa antes de comenzar a escribir la siguiente palabra
  finalDelay = 10000; // Pausa después de la última palabra (5 segundos)
  baseText = 'Un desarrollador ';

  ngOnInit() {
    this.typingEffect();
  }

  typingEffect() {
    const currentWord = this.words[this.wordIndex];
    const fullDisplayText = this.baseText + currentWord;

    if (this.isDeleting) {
      this.displayText = fullDisplayText.substring(0, this.displayText.length - 1);
      if (this.wordIndex === this.words.length - 1) {
        this.displayText = '';
      }
    } else {
      this.displayText = fullDisplayText.substring(0, this.displayText.length + 1);
    }

    if (!this.isDeleting && this.displayText === fullDisplayText) {
      setTimeout(() => this.isDeleting = true, this.delayAfterWord);
    } else if (this.isDeleting && this.displayText === this.baseText || this.displayText =='') {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      setTimeout(() => this.typingEffect(), this.delayBeforeNextWord);
      return;
    }

    if (!this.isDeleting && this.wordIndex === this.words.length - 1 && this.displayText === fullDisplayText) {
      setTimeout(() => {
        this.isDeleting = true;
        this.typingEffect();
      }, this.finalDelay);
    } else {
      setTimeout(() => this.typingEffect(), this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed);
    }
  }
}
