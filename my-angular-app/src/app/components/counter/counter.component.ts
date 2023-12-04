import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import * as CounterActions from '../../store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$ = this.store.select((state) => state.counter.count);
  customValue: number = 0;

  constructor(private store: Store) {}

  increment(): void {
    this.store.dispatch(new CounterActions.Increment());
  }

  decrement(): void {
    this.store.dispatch(new CounterActions.Decrement());
  }

  reset(): void {
    this.store.dispatch(new CounterActions.Reset());
  }

  setCustomValue(): void {
    this.store.dispatch(new CounterActions.Set(this.customValue));
  }
}
