import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="increment()">Increment</button>
    <span data-testid="count">{{ count() }}</span>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
  `,
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update(c => c + 1)
  }
  decrement() {
    this.count.update(c => c - 1)
  }

  reset() {
    this.count.set(0);
  }
}
