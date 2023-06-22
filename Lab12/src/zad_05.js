// (kolokwium 2020 – pełne zadanie) Zdefiniuj:

function typeErr(x, type) {
    if (typeof x !== type) {
        const Err = new TypeError();
        Err.message = `${x}, has to an be a ${type}`;
        throw Err;
    }
}

function classErr(x, cls) {
    if (!(x instanceof cls)) {
        const Err = new Error();
        Err.message = `${x}, has to be an instance of ` + cls.name;
        throw Err;
    }
}

class Vector2 {
    x;

    y;

//     konstruktor klasy Vector2 posiadający:
//         pola x i y
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

//         funkcje
//             diff(vector) – odejmuje aktualny wektor od wektora podanego w argumencie
    diff(vector) {
        const newX = vector.x = this.x;
        const newY = vector.y - this.y;
        return new Vector2(newX, newY);
    }
//             multiplyBy(number) – mnoży x i y wektora razy liczbę podaną w argumencie

    multiplyBy(number) {
        this.x *= number;
        this.y *= number;
    }
//             toString() – zwraca tekst w formacie "x: {wartość} y: {wartość}"

    toString() {
        return `x: ${this.x}, y: ${this.y}`;
    }
}

class Ship {

    faction;

    position;

    strength;

    health;

//     konstruktor klasy Ship o następujących:
//         polach:
//             faction
//             position – typu Vector2
//             strength
//             health
    constructor(faction, position, strength, health) {
        classErr(position, Vector2);
        typeErr(faction, "string");
        typeErr(strength, "number");
        typeErr(health, "number");
        this.faction = faction;
        this.position = position;
        this.strength = strength;
        this.health = health;
    }

//         funkcjach:
//             getDistance(enemyShip) – jeśli to możliwe, oblicza dystans dzielący dwa statki (różnicę wektorów). W przeciwnym wypadku wypisuje komunikat błędu
    getDistance(enemyShip) {
        if (enemyShip.position !== undefined && this.position !== undefined) {
            return this.position.diff(enemyShip.position);
        } else {
            console.error("It's nothing personel, kid");
        }
    }

//             checkHealth() – sprawdza, czy zdrowie statku spadło poniżej 0. Jeśli tak wypisuje w konsoli odpowiedni komunikat
    checkHealth() {
        if (this.health <= 0) {
            console.log("Shit's broke, yo");
        }
    }

//             getDamage(amount) – obniża liczbę punktów zdrowia o podaną liczbę i sprawdza, czy statek został zniszczony
    getDamage(amount) {
        this.health -= amount;
        this.checkHealth();
    }

//             makeDamage(enemyShip) – zadaje obrażenia statkowi podanemu w argumencie (o wartość zmiennej strength)
    makeDamage(enemyShip) {
        enemyShip.getDamage(this.strength);
    }
}

class RebelShip extends Ship {

    constructor(position, strength, health) {
        super("Rebel Ship", position, strength, health);
    }
//     klasę RebelShip dziedziczącą po Ship:
//         niech konstruktor przyjmuje parametry: position, strength, health.
//         wartość faction powinna być na stałe ustawiona jako 'Rebel Alliance'.
//         zdefiniuj funkcję dla klasy RebelShip:
//             hyperspeed() – ustawia wartość position na undefined

    hyperspeed() {
        this.position = undefined;
    }
}

class DeathStar extends Ship {

    deathRayAvailable;

    constructor(position, strength, health) {
        super("Empire", position, strength, health);
        this.deathRayAvailable = true;
    }
//     klasę DeathStar dziedziczącą po Ship
//         niech konstruktor przyjmuje parametr: position
//         niech faction będzie ustawiony na stałe na 'Empire'.
//         niech klasa zawiera następujące pola: deathRayAvailable
//         zawierającą funkcje:
//             makeDamage(enemyShip) – jeśli deathRayAvailable jest ustawione na true, to wywołuje funkcje odziedziczoną po Ship, a następnie ustawia deathRay na niedostępny na ustaloną liczbę sekund. Jeśli deathRayAvailable jest równe false, drukuje komunikat.

    makeDamage(enemyShip) {
        if (this.deathRayAvailable) {
            this.deathRayAvailable = false;
            enemyShip.getDamage(this.strength);
            setTimeout(() => {
                this.deathRayAvailable = true;
            }, 2000);
        } else {
            console.error("Ray charing");
        }
    }
}
// W razie potrzeby można zadeklarować zmienne i funkcje pomocnicze w klasie DeathStar.


const vector1 = new Vector2(10, 10);
const vector2 = new Vector2(5, 10);

console.log(vector1.toString()); // x: 10 y: 10

vector1.diff(vector2);
console.log(vector1.toString()); // x: 5 y: 0

vector1.multiplyBy(2);
console.log(vector1.toString()); // x: 10 y: 0


// const vectorShip1 = new Vector2(0, 0);
// const vectorShip2 = new Vector2(23, 32);

const xWing = new RebelShip(vector2, 5, 20);
const ball = new DeathStar(vector1, 300, 5);

ball.makeDamage(xWing);
ball.makeDamage(xWing);
setTimeout(() => {
    ball.makeDamage(xWing);
}, 2000);
