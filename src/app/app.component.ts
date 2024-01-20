import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterComponent]
})
export class AppComponent {
  title = 'atl-web-test-runner';
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
