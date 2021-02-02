const person = {
    name: "Raufu Prezens",
    age: 21,
    job: "Programmer",
    status: "Single",
    favoriteSeries: ["Money Heist", "Breaking Bad", "Peaky Blinders", "Stranger Things", "Dark"],
}
console.log(person.favoriteSeries);

const { status, age, salary } = person;
const job = person.job;
console.log(job, salary, status, age);

const youtubers = ["mr. beast", "pewdiepie", "ninja", "dude perfect"];
const [best, rest, ...betters] = youtubers;
console.log(best, rest);
console.log(betters);

const complexObject = {
    name: 'abc',
    info: {
        address: 'dhaka',
        country: 'Bangladesh'
    }
}
const { leader } = complexObject.info;