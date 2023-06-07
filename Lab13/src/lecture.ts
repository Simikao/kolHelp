function greeting(name: string , date: Date): void {
    console.log(`Hello, ${name}. Today is ${date.toLocaleDateString()}`);
    
}

greeting("Joe", new Date());

const message = "hello";

const arr1: string[] = ["a", "b", "c"]
const arr2: Array<string> = ["a", "b", "c"]
const arr3: Array<number> = [1,2,3]
const arr4: number[] = [1,2,3]

function something(a: number, b: number): number | string {
    if (a>b) return a;
    return `${b}`
}