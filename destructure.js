const person = {
    name: "Raufu Prezens",
    age: 21,
    job: "Programmer",
    status: "Single",
    favoriteSeries: ["Money Heist", "Breaking Bad", "Peaky Blinders", "Stranger Things", "Dark"],
}
console.log(person.favoriteSeries);

const youtubers = ["mr. beast", "pewdiepie", "ninja", "dude perfect"];
const [best, ...betters] = youtubers;
console.log(best);
console.log(betters);

// const complexObject = {
//     info {
//         address: 'Dhaka',
//         country: 'Bangladesh'
//     }
// }