import CONST from './constant';
export function increment() {
  return {
    type: CONST.INCREMENT
  };
}
export function decrement() {
  return {
    type: CONST.DECREMENT
  };
}