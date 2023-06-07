// Napisz funkcję bez użycia iteracji, która sprawdza co sekundę, czy podany w argumencie czas już minął. Jeśli minął, drukujemy w konsoli komunikat "Czas upłynął" i przypisujemy aktualny czas do zmiennej czasSukces i drukujemy go w konsoli. Drugi argument w funkcji odpowiada maksymalnej liczbie prób sprawdzenia. Jeśli przekroczyliśmy liczbę prób, drukujemy w konsoli komunikat "Limit prób przekroczony" i wywołujemy funkcję jeszcze raz, tylko z mniejszym czasem (pomniejszonym o konkretną ustaloną przez nas wartość).

// let czasSukces;

// const checkTime = (arg, maxTries) => {

// }

// console.log(czasSukces); // Wywołanie musi być zawarte poza funkcją checkTime

// // Przykładowy output w konsoli

// Sprawdzam ponownie
// Sprawdzam ponownie
// Sprawdzam ponownie
// Sprawdzam ponownie
// Sprawdzam ponownie
// Limit prób przekroczony
// Sprawdzam ponownie
// Sprawdzam ponownie
// Czas upłynął '22:21'! // lub jakikolwiek inny format czasu

const czasSukces = new Date();
const myArg = (date, seconds) => new Date(date.getTime() + seconds*1000);
const timePeriod = 20;


const checkTime = (arg, maxTries) => {
    return new Promise((resolve, reject) => {
        const timeLoop = setInterval(() => {
            const currentTime = new Date();
            if (arg<currentTime) {
                resolve(`czas upłynął ${currentTime.getHours}:${currentTime.getMinutes}`);
                clearInterval(timeLoop);
            }
            if (maxTries<=0) { reject(console.error("Limit prób Przekroczony")); }
            maxTries--;
        }, 1000);
    });
};

checkTime(myArg(czasSukces, timePeriod), 10).then((res) => { console.log(res); })
    .catch(() => checkTime((myArg(czasSukces, timePeriod/2), 10)));
// console.log(czasSukces.getHours() +":"+ czasSukces.getMinutes());