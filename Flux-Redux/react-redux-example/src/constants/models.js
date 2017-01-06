//特别注意的是由于 Redux 中有一个重要特性是 State is read-only，也就是说更新当 reducers 进到 action 只会回传新的 state 不会更改到原有的 state。因此我们会在整个 Redux App 中使用 ImmutableJS 让整个资料流维持在 Immutable 的状态，也可以提升程式开发上的效能和避免不可预期的副作用。
import Immutable from 'immutable';

export const TodoState = Immutable.fromJS({
  'todos': [],
  'todo': {
    id: '',
    text: '',
    updatedAt: '',
    completed: false,
  }
});