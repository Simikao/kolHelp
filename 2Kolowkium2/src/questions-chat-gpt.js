const users = require('./users.js').users;

exports.questionsChatGpt = [
  {
    id: 1,
    question: "Jakie sÄ najnowsze trendy w modzie?",
    answer: "W tym sezonie modne sÄ przede wszystkim pastelowe kolory oraz oversize. Warto teĹź postawiÄ na ubrania z baweĹny organicznej.",
    date: new Date("2022-01-15T13:30:00"),
    user: users[0]
  },
  {
    id: 2,
    question: "Czy warto inwestowaÄ w kryptowaluty?",
    answer: "Inwestowanie w kryptowaluty wiÄĹźe siÄ z pewnym ryzykiem, ale jeĹli ma siÄ odpowiedniÄ wiedzÄ na temat rynku, to moĹźe przynieĹÄ wysokie zyski.",
    date: new Date("2022-02-02T09:15:00"),
    user: users[1]
  },
  {
    id: 3,
    question: "Jakie sÄ najlepsze knajpy we WrocĹawiu?",
    answer: "WĹrĂłd najlepszych knajp we WrocĹawiu moĹźna wymieniÄ MiÄdzymiastowskÄ, PolkÄ na talerzu oraz Pasibus.",
    date: new Date("2022-03-20T18:45:00"),
    user: users[2]
  },
  {
    id: 4,
    question: "Jakie sÄ najlepsze miejsca turystyczne w Polsce?",
    answer: "W Polsce warto odwiedziÄ miÄdzy innymi KrakĂłw, WrocĹaw, Zakopane, GdaĹsk i WarszawÄ.",
    date: new Date("2022-04-05T11:20:00"),
    user: users[3]
  },
  {
    id: 5,
    question: "Jakie sÄ najlepsze kosmetyki do pielÄgnacji twarzy?",
    answer: "WĹrĂłd najlepszych kosmetykĂłw do pielÄgnacji twarzy moĹźna wymieniÄ serum z witaminÄ C, krem nawilĹźajÄcy z kwasem hialuronowym oraz tonik z kwasem salicylowym.",
    date: new Date("2022-05-12T15:10:00"),
    user: users[4]
  },
  {
    id: 6,
    question: "Jakie sÄ najlepsze sposoby na pozbycie siÄ stresu?",
    answer: "Do skutecznych sposobĂłw na pozbycie siÄ stresu naleĹźÄ: medytacja, joga, aktywnoĹÄ fizyczna, czytanie ksiÄĹźek, sĹuchanie muzyki relaksacyjnej.",
    date: new Date("2022-06-01T12:00:00"),
    user: users[5]
  },
  {
    id: 7,
    question: "Jakie sÄ najlepsze aplikacje do nauki jÄzykĂłw obcych?",
    answer: "WĹrĂłd najlepszych aplikacji do nauki jÄzykĂłw obcych moĹźna wymieniÄ Duolingo, Babbel oraz Rosetta Stone.",
    date: new Date("2022-07-10T14:30:00"),
    user: users[6]
  },
  {
    id: 8,
    question: "Jakie sÄ najlepsze sposoby na oszczÄdzanie pieniÄdzy?",
    answer: "Do skutecznych sposobĂłw na oszczÄdzanie pieniÄdzy naleĹźÄ: prowadzenie budĹźetu domowego, unikanie zakupĂłw na impuls, ograniczenie wydatkĂłw na luksusowe artykuĹy.",
    date: new Date("2022-08-20T09:00:00"),
    user: users[7]
  },
  {
    id: 9,
    question: "Jakie sÄ najlepsze sposoby na poprawÄ skupienia i koncentracji?",
    answer: "Do skutecznych sposobĂłw na poprawÄ skupienia i koncentracji naleĹźÄ: medytacja, regularne wykonywanie ÄwiczeĹ umysĹowych, unikanie rozpraszaczy, jak np. telewizja czy media spoĹecznoĹciowe.",
    date: new Date("2022-09-05T11:30:00"),
    user: users[8]
  },
  {
    id: 10,
    question: "Jakie sÄ najlepsze sposoby na redukcjÄ cellulitu?",
    answer: "Do skutecznych sposobĂłw na redukcjÄ cellulitu naleĹźÄ: Äwiczenia fizyczne, zdrowa dieta, masaĹź, stosowanie kosmetykĂłw z kofeinÄ.",
    date: new Date("2022-10-15T16:45:00"),
    user: users[9]
  },
  {
    id: 11,
    question: "Jakie sÄ najlepsze sposoby na poprawÄ jakoĹci snu?",
    answer: "Do skutecznych sposobĂłw na poprawÄ jakoĹci snu naleĹźÄ: regularne chodzenie spaÄ o staĹej porze, utrzymanie odpowiedniej temperatury w sypialni, unikanie ekranĂłw elektronicznych przed snem, stosowanie technik relaksacyjnych.",
    date: new Date("2022-11-10T22:15:00"),
    user: users[10]
  },
  {
    id: 12,
    question: "Jakie sÄ najlepsze sposoby na walkÄ z depresjÄ?",
    answer: "Do skutecznych sposobĂłw na walkÄ z depresjÄ naleĹźÄ: terapia psychologiczna, aktywnoĹÄ fizyczna, zdrowa dieta, regularny sen, unikanie alkoholu i narkotykĂłw.",
    date: new Date("2022-12-05T10:00:00"),
    user: users[5]
  },
  {
    id: 13,
    question: "Jakie sÄ najlepsze sposoby na poprawÄ relacji miÄdzyludzkich?",
    answer: "Do skutecznych sposobĂłw na poprawÄ relacji miÄdzyludzkich naleĹźÄ: sĹuchanie drugiej osoby, wyraĹźanie swoich emocji w sposĂłb konstruktywny, unikanie krytykowania i osÄdzania drugiej osoby, wyraĹźanie wdziÄcznoĹci i docenianie drugiej osoby.",
    date: new Date("2023-12-02T14:30:00"),
    user: users[5]
  },
  {
    id: 14,
    question: "Jakie sÄ najlepsze sposoby na rozwijanie swoich zdolnoĹci artystycznych?",
    answer: "Do skutecznych sposobĂłw na rozwijanie swoich zdolnoĹci artystycznych naleĹźÄ: regularna praktyka, nauka od bardziej doĹwiadczonych artystĂłw, eksperymentowanie z rĂłĹźnymi stylami i technikami.",
    date: new Date("2023-12-20T17:00:00"),
    user: users[4]
  },
  {
    id: 15,
    question: "Jakie sÄ najlepsze sposoby na poprawÄ kondycji fizycznej?",
    answer: "Do skutecznych sposobĂłw na poprawÄ kondycji fizycznej naleĹźÄ: regularna aktywnoĹÄ fizyczna, zdrowa dieta, odpowiedni sen, unikanie uĹźywek, takich jak alkohol czy papierosy.",
    date: new Date("2023-03-15T08:45:00"),
    user: users[3]
  },
  {
    id: 16,
    question: "Czy warto uczyÄ siÄ programowania w 2023 roku?",
    answer: "Tak, warto uczyÄ siÄ programowania w 2023 roku, poniewaĹź jest to bardzo potrzebna umiejÄtnoĹÄ na rynku pracy. Programowanie umoĹźliwia rozwijanie nowych technologii, tworzenie oprogramowania, a takĹźe zapewnia dobre wynagrodzenie.",
    date: new Date("2023-09-10T14:30:00"),
    user: users[7]
  },
  {
    id: 17,
    question: "Jakie sÄ najlepsze sposoby na rozwiÄzanie konfliktu z innÄ osobÄ?",
    answer: "Do skutecznych sposobĂłw na rozwiÄzanie konfliktu z innÄ osobÄ naleĹźÄ: rozmowa, wyraĹźanie swoich emocji w sposĂłb konstruktywny, szukanie kompromisu, akceptacja innych punktĂłw widzenia.",
    date: new Date("2023-05-03T16:20:00"),
    user: users[1]
  },
  {
    id: 18,
    question: "Jakie sÄ najlepsze sposoby na radzenie sobie ze stresem?",
    answer: "Do skutecznych sposobĂłw na radzenie sobie ze stresem naleĹźÄ: regularna aktywnoĹÄ fizyczna, medytacja, techniki relaksacyjne, odpowiednia dieta, unikanie uĹźywek.",
    date: new Date("2023-06-10T09:15:00"),
    user: users[5]
  },
  {
    id: 19,
    question: "Jakie sÄ najlepsze sposoby na radzenie sobie z trudnymi emocjami?",
    answer: "Do skutecznych sposobĂłw na radzenie sobie z trudnymi emocjami naleĹźÄ: wyraĹźanie swoich emocji w sposĂłb konstruktywny, szukanie wsparcia u bliskich osĂłb lub specjalisty, stosowanie technik relaksacyjnych, aktywnoĹÄ fizyczna.",
    date: new Date("2023-07-15T13:00:00"),
    user: users[0]
  },
  {
    id: 20,
    question: "Jakie sÄ najlepsze sposoby na poprawÄ koncentracji i efektywnoĹci w pracy?",
    answer: "Do skutecznych sposobĂłw na poprawÄ koncentracji i efektywnoĹci w pracy naleĹźÄ: wyznaczanie sobie celĂłw, organizacja czasu pracy, przerwy w ciÄgu dnia, wykonywanie jednego zadania naraz, unikanie rozpraszaczy.",
    date: new Date("2023-08-20T10:30:00"),
    user: users[4]
  }
];
