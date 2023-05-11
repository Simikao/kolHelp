// (poprawa kolokwium 2021) Stwórz obiekt o nazwie CoffeeShop zawierający następujące zmienne:

//     name – string (nazwa sklepu)
//     menu – tablica obiektów, każdy z elementów zawiera:
//         item (nazwa elementu),
//         type (`food` lub `drink`),
//         price
//     orders – na początku pusta tablica

// i siedem metod:

//     addOrder – dodaje nazwę elementu na koniec tablicy orders, jeśli istnieje w menu i zwraca komunikat "Order added!". W przeciwnym razie zwróć "This item is currently unavailable!"
//     fulfillOrder – jeśli orders nie jest pustą tablicą zwróć "The {item} is ready!". Jeśli tablica jest pusta zwróć "All orders have been fulfilled!".
//     listOrders – zwraca listę przyjetych zamówień, w przeciwnym wypadku pustą tablicę
//     dueAmount – zwraca całkowitą należność za realizowane zamówienia.
//     cheapestItem – zwraca nazwę najtańszej pozycji w menu.
//     drinksOnly – zwraca tylko nazwy pozycji typu drink z menu.
//     foodOnly – zwraca tylko nazwy pozycji typu food z menu.

// Zamówienia realizowane są w kolejności FIFO (first-in, first-out)

// Pamiętaj, aby używać wyłącznie funkcji wbudowanych klasy Array (oprócz funkcji forEach()). Iteracje for, foreach i while zdecydowanie odpadają.


class MenuItem {
    item;

    type;

    price;

    constructor(item, type, price) {
        this.item = item;
        this.type = type;
        this.price = price;
    }
}
const menu1 = [
    new MenuItem("cinnamon roll", "food", 4.99),
    new MenuItem("hot chocolate", "drink", 2.99),
    new MenuItem("lemon tea", "drink", 2.50)
];

class CoffeeShop {
    name;

    menu;

    constructor(name, menu) {
        this.name = name;
        this.menu = menu;
        this.orders = [];
    }

    addOrder(itemOrdered) {
        if(this.menu.some(elem => elem.item === itemOrdered)) {
            console.log("Order added!");
            this.orders.push(itemOrdered);
        } else {
            console.log("This item is currently unaviable!");
        }
    }
}


const shop1 = new CoffeeShop("Shop1", menu1);


shop1.addOrder("tiramisu");


const adf = {key: (true)? 'ala' : 'kot'};

console.log(adf);