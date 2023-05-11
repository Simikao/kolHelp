
// just map
const arr = [1, 2];
// const arr2 = arr.map((el) => el*2);


function myMap(func, arr) {
    return arr.reduce((acc, current) => [...acc, func(current)], []);
}

const arr2 = myMap((el) => el*2, arr);
console.log(arr2);

const o1 = {
    "a": "ass",
    "b": "balls"
};

const o2 = {
    "a": "arse",
    "c": "cock"
};

const myList = {
    0: "ass",
    1: "balls",
};

console.log(myList);

// { }.push(a --> ass).push(b --> balls).push(a --> arse).push()
const o3 = { ...o1, ...o2 };
console.log(o3);