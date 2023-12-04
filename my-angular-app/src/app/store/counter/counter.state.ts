import { State, Action, StateContext } from '@ngxs/store';
import * as CounterActions from './counter.actions';
import { CounterStateModel } from './counter.model';

// Define the state
@State<CounterStateModel>({
  name: 'counter',
  defaults: {
    count: 0,
  },
})
export class CounterState {
  @Action(CounterActions.Increment)
  increment({ getState, patchState }: StateContext<CounterStateModel>): void  {
    const state = getState();
    patchState({
      count: state.count + 1,
    });
  }

  @Action(CounterActions.Decrement)
  decrement({ getState, patchState }: StateContext<CounterStateModel>): void  {
    const state = getState();
    patchState({
      count: state.count - 1,
    });
  }

  @Action(CounterActions.Reset)
  reset({ getState, patchState }: StateContext<CounterStateModel>): void {
    patchState({
      count: 0,
    });
  }

  @Action(CounterActions.Set)
  set({ getState, patchState }: StateContext<CounterStateModel>, { value }: CounterActions.Set): void {
    patchState({
      count: value,
    });
  }
}