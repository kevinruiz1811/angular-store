import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  counter = signal(0);

  constructor() {
    // NO ASYNC
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
    console.log('-'.repeat(10));
  }

  ngOnInit() {
    // ASYNC
    console.log('ngOnInit');
    window.setInterval(() => {
      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
  }
}
