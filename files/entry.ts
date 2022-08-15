import { isArray } from './utils/checkers';

if (process.env.test) {
  console.log(1);
} else {
  console.log(2);
}

console.log(isArray([123]));


