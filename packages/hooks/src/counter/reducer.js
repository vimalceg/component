import CONST from './constant';
export default function counter(state, action) {
    switch (action.type) {
        case CONST.INCREMENT:
            return state + 1;
        case CONST.DECREMENT:
            return state - 1;
    }
}