// ------------ 1 ------------
const concat = (a: string, b: string): string => `${a} ${b}`;

concat('Hello ', 'World'); // -> Hello World;

// ------------ 2 ------------
type How = string;
type SimeArray = (string | number)[];
interface Task {
  howIDoIt: How;
  simeArray: SimeArray;
  withData: [{ howIDoIt: How; simeArray: SimeArray }];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myHometask: Task = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// ------------ 3 ------------
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface MyArray<T> {
  [N: number]: T;

  map<U>(func: (elem: T) => U): U[];
  reduce(fucn: (prevElem: T, currElem: T) => T, seconArg: T): T;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const test: MyArray<number> = [1, 2, 3];

test.map((i) => i + 1);
test.map((i) => `${i} + 1`);

// sum of all elements
test.reduce((sum, current) => sum + current, 0);
