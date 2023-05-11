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
        if (price < 0) {
            throw new Error("oh no");
        }
        this.price = price;
    }
}

// const myNums = [1, 2, 3];
const menu1 = [
    // { item: "cinna", type: "food", price: 69.99 },
    // { item: "cinna", type: "food", price: 69.99 },
    // { item: "cinna", type: "food", price: 69.99 },
    // { item: "cinna", type: "food", price: 69.99 },
    new MenuItem("cinnamon roll", "food", 4.99),
    new MenuItem("hot chocolate", "drink", 2.99),
    new MenuItem("lemon tea", "drink", 2.50)
];
// const menu2 = [
// ];

class CoffeeShop {
    name;

    menu;

    orders;

    constructor(name, menu) {
        this.name = name;
        this.menu = menu;
        // this.menu = [
        //     new MenuItem("Coffee", "Drink", 69.99),
        // ];
        this.orders = [];
    }

    addOrder(item) {
        // .some
        if (this.menu.some((el) => el.item === item)) {
            this.orders.push(item);
            console.log("Order added");
        } else {
            console.error("This item is currently unavailable");
        }
    }

    fulfillOrder() {
        if (!this.orders.length) {
            return "All orders have been fulfilled";
        } else {
            const item = this.orders[0];
            this.orders.shift();
            return `The ${item} is ready`;
        }
    }

    listOrder() {
        return this.orders;
    }

    dueAmount() {
        // const orderedList = this.menu.filter((el) => el.item === [...this.orders]);
        const orderedList = this.orders.map((orderedItem) => {
            return this.menu.find((menuItem) => menuItem.item === orderedItem);
        });
        return orderedList.reduce((acc, current) => acc+current.price, 0);
    }

    cheapestItem() {
        return this.menu.reduce((acc, current) => (acc<current)? acc : current, 0);
    }

    drinksOnly() {
        return this.menu.filter((el) => el.type === 'drink').reduce((acc, current) => [...acc, current.item], []);
    }

    foodOnly() {
        // return this.menu.filter((el) => el.type === 'food').map((el) => el.item);
        return this.menu.filter((el) => el.type === 'food');
    }

}


const shop1 = new CoffeeShop("Shop1", menu1);

shop1.addOrder("espresso"); // "This item is currently unavailable!" (Sklep nie sprzedaje espresso)

shop1.addOrder("hot chocolate"); // "Order added!"
shop1.addOrder("cinnamon roll"); // "Order added!"

console.log(shop1.listOrder()); // ["hot chocolate", "cinnamon roll"]

shop1.dueAmount(); // 7.98 (suma cen za hot chocolate i cinnamon roll)

console.log(shop1.fulfillOrder()); // "The hot chocolate is ready!"
console.log(shop1.fulfillOrder()); // "The cinnamon roll is ready!"
console.log(shop1.fulfillOrder()); // "All orders have been fulfilled!" (Wszystkie zamówienia zostały zrealizowane)

console.log(shop1.listOrder()); // []

console.log(shop1.dueAmount()); // 0.0

console.log(shop1.cheapestItem()); // "lemon tea"
console.log(shop1.drinksOnly()); // ["hot chocolate", "lemon tea"]
console.log(shop1.foodOnly()); // ["cinnamon roll"]