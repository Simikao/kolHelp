'use Strict';

const randomObject = [
    { id: 'abc', name: 'Ala' },
    { id: 'def', name: 'Tomek' },
    { id: 'ghi', name: 'Jan' }];


const arrangedObject = randomObject.reduce(
    (acc, obj) => {
        const key = obj['id'];
        const curGroup = acc[key] ?? [];
        // console.log(acc);
        // console.log(JSON.stringify(acc));
        // acc[key] = [...curGroup, obj];
        // return acc;
        return {...acc, [key]: [...curGroup, obj]};
    }, {});


console.log(randomObject);
console.log(arrangedObject);