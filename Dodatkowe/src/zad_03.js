
// Konstruktor klasy Vector2 posiadający:
// pola x i y
// funkcje
//     diff(vector) – odejmuje aktualny wektor od wektora podanego w argumencie
//     multiplyBy(number) – mnoży x i y wektora razy liczbę podaną w argumencie
//     toString() – zwraca tekst w formacie "x: {wartość} y: {wartość}"

// const vector1 = new Vector2(10, 10);
// const vector2 = new Vector2(5, 10);

// console.log(vector1.toString()); // x: 10 y: 10

// vector1.diff(vector2);
// console.log(vector1.toString()); // x: 5 y: 0

// vector1.multiplyBy(2);
// console.log(vector1.toString()); // x: 10 y: 0

// Konstruktor klasy Ship o następujących:
// polach:
//     faction
//     position – typu Vector2
//     strength
//     health
// funkcjach:
//     getDistance(enemyShip) – jeśli to możliwe, oblicza dystans dzielący dwa statki (różnicę wektorów). W przeciwnym wypadku wypisuje komunikat błędu
//     checkHealth() – sprawdza, czy zdrowie statku spadło poniżej 0. Jeśli tak wypisuje w konsoli odpowiedni komunikat
//     getDamage(amount) – obniża liczbę punktów zdrowia o podaną liczbę i sprawdza, czy statek został zniszczony
//     makeDamage(enemyShip) – zadaje obrażenia statkowi podanemu w argumencie (o wartość zmiennej strength)
// Klasę RebelShip dziedziczącą po Ship:
// Niech konstruktor przyjmuje parametry: position, strength, health.
// Wartość faction powinna być na stałe ustawiona jako 'Rebel Alliance'.
// Zdefiniuj funkcję hyperspeed() – ustawia wartość position na undefined
// Klasę DeathStar dziedziczącą po Ship
// Niech konstruktor przyjmuje parametr: position
// Niech faction będzie ustawiony na stałe na 'Empire'.
// Niech klasa zawiera następujące pola: deathRayAvailable
// Zawierającą funkcje makeDamage(enemyShip), która wywołuje funkcje odziedziczoną po Ship

// // Przykładowe działanie:
// gwiazdaSmierci.makeDamage(statekRebeli);
// Statek Rebelii otrzymał obrażenia równe: 10
// Statek Rebelii został zniszczony

// W razie potrzeby można zadeklarować zmienne i funkcje pomocnicze w klasie DeathStar.


class Vector2 {
    x;

    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    diff(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    multiplyBy(number) {
        this.x *= number;
        this.y *= number;
    }

    toString() {
        return `x: ${this.x} y: ${this.y}`;
    }
}


class Ship {
    faction;

    position;

    strength;

    health;

    constructor(faction, position, strength, health) {
        this.faction = faction;
        this.position = position;
        this.strength = strength;
        this.health = health;
    }

    getDistance(enemyShip) {
        const distance = this.position.diff(enemyShip.position);
        return distance;
    }

    checkHealth() {
        return this.health > 0;
    }

    getDamage(amount) {
        this.health -= amount;
        return (this.checkHealth())? `${this.faction} ship got hit by ${amount}` : `${this.faction} ship got destoryed`;
    }

    makeDamage(enemyShip) {
        enemyShip.getDamage(this.strength);
    }
}

class RebelShip extends Ship {
    constructor(position, strength, health) {
        super(`Rebel Alliance`, position, strength, health);
        // this.faction = 'Rebel Alliance';
        // this.position = position;
        // this.strength = strength;
        // this.health = health;
    }

    hyperspeed() {
        this.position = undefined;
    }
}

class DeathStar extends Ship {
    deathRayAvailable;

    constructor(position) {
        super('Empire', position);
        this.deathRayAvailable = true;
    }
}


const vector1 = new Vector2(10, 10);
const vector2 = new Vector2(5, 10);

console.log(vector1.toString()); // x: 10 y: 10

vector1.diff(vector2);
console.log(vector1.toString()); // x: 5 y: 0

vector1.multiplyBy(2);
console.log(vector1.toString()); // x: 10 y: 0


// vectorShip1 = new Vector2(0, 0);
// vectorShip2 = new Vector2(23, 32);

// const xWing = new RebelShip(vector2, 5, 20);
// const ball = new DeathStar(vector1, 300, 5);