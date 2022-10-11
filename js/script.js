'use strict';

const makeIterator = (start, end = Infinity, step) => {
    let nextIndex = start;

    return {
        next() {
            let result = {};

            if (nextIndex <= end) {
                result = {value: nextIndex, done: false};
                nextIndex += step;

                return result;
            }

            return {value: undefined, done: true};
        }
    };
};

const itr = makeIterator(1, 5, 1);

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());