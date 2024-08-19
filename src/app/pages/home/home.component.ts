import { Component } from '@angular/core';
import { TypingAnimationComponent } from '../../atoms/typing-animation/typing-animation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TypingAnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
