// Dokończ poniższy fragment kodu opisujący flow pobierania danych dla zalogowanego użytkownika (posiadającego losowo wygenerowane id po zalogowaniu):

// class AccountService {
//   authenticated = false;

//   idUser = Math.floor(Math.random() * 10);

//   user = null;

//   constructor() {}

//   // Pobieranie liczby sekund, po jakiej użytkownik powinien zostać zalogowany
//   getRandomLoginTime() {
//     return (Math.floor(Math.random() * 10) % 5) + 5;
//   }
// }

// tak, aby spełniał poniższe wymagania:

//     Funkcja isAuthorizated powinna po upływie jednej sekundy "zwracać" informację, czy użytkownik jest aktualnie zalogowany (czy nie) – flaga authenticated.
//     Funkcja checkIsUserLogin powinna, co sekundę sprawdzać (do momentu, aż uzyska informacje pozytywną), czy użytkownik jest zalogowany. W zależności od rezultatu powinien zostać wyświetlony odpowiedni komunikat: "Użytkownik nie jest zalogowany" / "Użytkownik jest zalogowany". (Funkcja zostaje wywołana na samym początku działania programu, wykorzystuje implementacje isAuthorizated).
//     Funkcja loginUser po upływie getRandomLoginTime() sekund powinna zmieniać status użytkownika na zalogowany (authenticated). Po zmianie statusu powinien zostać wyświetlony w konsoli komunikat "Użytkownik został zalogowany".
//     Funkcja getUserDetails – w momencie, kiedy dostaniemy informacje, że użytkownik jest zalogowany, pobieramy informacje o zalogowanym użytkowniku

//     GET https://jsonplaceholder.typicode.com/users/{idUser}

//     Po pobraniu danych powinna zostać wyświetlona w konsoli informacja o zalogowanym użytkowniku: "Zostałeś zalogowany jako: { name }"
//     Funkcja getData pobierze wszystkie posty

//     GET https://jsonplaceholder.typicode.com/posts

//     a następnie tylko dla postów zalogowanego użytkownika

//     GET https://jsonplaceholder.typicode.com/posts/{idPost}/comments

//     pobierze "równolegle" wszystkie komentarze do pobranych postów. Kiedy wszystkie komentarze zostaną pobrane, powinien zostać wyświetlony komunikat w konsoli "Pobrano wpisy i komentarze użytkownika: { name }"
//     Cały program powinien się wykonać (zalogowanie, pobieranie danych użytkownika) po wywołaniu funkcji start (zachowując wyżej opisane flow).

// // Wynik w konsoli, po wywołaniu funkcji start

// Użytkownik nie jest zalogowany
// Użytkownik nie jest zalogowany
// Użytkownik nie jest zalogowany
// Użytkownik nie jest zalogowany
// Użytkownik został zalogowany
// Użytkownik jest zalogowany
// Zostałeś zalogowany jako: Leanne Graham
// Pobrano wpisy i komentarze użytkownika: Leanne Graham

const axios = require('axios');

// const test = axios.get("https://jsonplaceholder.typicode.com/posts");

class AccountService {
  authenticated = false;

  idUser = Math.floor(Math.random() * 10);

  user = null;


  start() {
    this.checkIsUserLogin();
    this.loginUser();
  }

  // Pobieranie liczby sekund, po jakiej użytkownik powinien zostać zalogowany
  getRandomLoginTime() {
    return (Math.floor(Math.random() * 10) % 5) + 5;
  }

  isAuthorizated() {
    return new Promise(resolve => {
        setTimeout(() => resolve(this.authenticated), 1000);
    });
  }

  // more like "waitForUserToBeLoggedIn"
  checkIsUserLogin() {
    const timeLoop = setInterval(() => {
        // Promise.resolve(5); // Promise<number>
        // Promise.resolve(this.isAuthorizated) // Promise<() => Promise<bool>>
        // Promise.resolve(this.isAuthorizated()) // Promise<Promise<bool>>
        this.isAuthorizated()
            .then((auth) => {
              if (auth) {
                clearInterval(timeLoop);
                console.log("User is logged in");
              } else {
                console.log("Not logged in");
              }
            });
    }, 1000);
      // wait until user logs in

  }

  loginUser() {
    setTimeout(() => {
        this.authenticated = true;
        console.log("User logged in");
        this.getUserDetails();
    }, this.getRandomLoginTime()*1000);
  }

  getUserDetails() {
    this.user = axios
        .get(`https://jsonplaceholder.typicode.com/users/${this.idUser}`)
        .then((result) => {
            // console.log(JSON.stringify(result.data));
            const name = result.data.name;
            console.log(`You're logged in as ${name}`);
        });
  }

  // getData() {
  //   // axios.all(comments)
  //   //      .then(axios.spread(responses => {
  //   posts = axios.get(`https://jsonplaceholder.typicode.com/posts`);

  // }


}

const user = new AccountService();
user.start();


// console.log(typeof Promise.resolve(5));