const users = [
  { id: 1, name: "Juan Pérez", email: "juanperez23@gmail.com" },
  { id: 2, name: "María García", email: "mariagarcia45@hotmail.com" },
  { id: 3, name: "Pedro Rodríguez", email: "pedrorodriguez78@yahoo.com" }
];

const movies = [
  { userId: 1, title: "Titanic" },
  { userId: 2, title: "El Padrino" },
  { userId: 2, title: "Forrest Gump" },
  { userId: 3, title: "El Señor de los Anillos" }
];

console.log(listUsersWithMovie(users, movies));
// Output: [
//   { name: "Juan Pérez", email: "juanperez23@gmail.com", movies: "Titanic" },
//   { name: "María García", email: "mariagarcia45@hotmail.com", movies: "El Padrino" }
// ]
