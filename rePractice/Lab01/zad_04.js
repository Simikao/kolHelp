// W pliku zad_04.js utwórz tablicę 3-elementową, zawierającą 3 liczby dodatnie. Sprawdź, czy wartości w tablicy spełniają podany warunek, a następnie, czy z podanych wartości możesz zbudować trójkąt. W zależności od rezultatu wypisz w konsoli odpowiedni komunikat.

const triVar = [3, 4, 5];
// triVar.every()
// triVar.some()

function isPositive(arr) {
    // return arr.reduce((acc, el) => (el>=0)? acc : false, true);
    // return arr.reduce((acc, el) => (el>=0) && acc, true);
    // return !arr.reduce((acc, el) => (el<0) || acc, false); // DeMorgan !(a && b) === (!a || !b)
    return arr.every(x => (x >= 0));
}

function willItTriangle(arr) {
    if (!(arr.length===3)) return false;
    if (isPositive(arr)) {
        arr.sort();
        return (arr[0]+arr[1]>arr[2]); //? true : false;
    } else {
        return false;
    }
}

console.log(willItTriangle(triVar));


