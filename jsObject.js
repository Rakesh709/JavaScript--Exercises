const mySymbol = Symbol("key1");

const jsUser = {
  name: "John Doe",
  age: 30,
  [mySymbol]: "prime",
  occupation: "Software Engineer",
};

// console.log(jsUser)
console.log(jsUser.name)
console.log(jsUser["name"])
// console.log(jsUser[mySymbol]);

jsUser.greeting = function () {
  console.log(`Good Morning ${this.name}`);
};

// console.log(jsUser.greeting());

//singleton

// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.occupation = "Software Engineer";

// console.log(tinderUser);

const obj1 = {
  o1name: "John",
  o1age: 30,
};

const obj2 = {
  O2name: "Jane",
  o2age: 25,
};

//if they have the same keys

const obj3 = Object.assign({}, obj1, obj2);
const obj4 = { ...obj1, ...obj2 };
// console.log(obj3)
// console.log(obj4)

const course = {
  name: "JavaScript",
  duration: "3 months",
  price: 1000,
  couseIntrsuter: "Rakesh",
};

//course.couseIntrsuter wrong way not use

const { couseIntrsuter: instructer, name } = course;

// console.log(couseIntrsuter);
// console.log(instructer);
// console.log(name);

// {
//     "name": "John",
//     "age": 30,
//     "city": "New York",

// }

const apiData = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Torben",
        last: "Myrdal",
      },
      location: {
        street: {
          number: 4800,
          name: "Åslandkroken",
        },
        city: "Isebakke",
        state: "Oslo",
        country: "Norway",
        postcode: "5417",
        coordinates: {
          latitude: "47.0598",
          longitude: "-43.7993",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "torben.myrdal@example.com",
      login: {
        uuid: "e917f596-7095-45c9-b877-1ef838ae760b",
        username: "lazyladybug180",
        password: "kappa",
        salt: "EcLwtWJD",
        md5: "8fcab1a5c807fe1d66a7b0c3eada61f8",
        sha1: "629d62df7f7a674c2901ce783e48b4985416b01a",
        sha256:
          "150c7a3d49ccf09d3c5a56183da4d0a51fc7bca3130352987bd5d03df4e8c22a",
      },
      dob: {
        date: "1994-11-17T05:32:28.710Z",
        age: 29,
      },
      registered: {
        date: "2021-12-30T05:03:11.530Z",
        age: 2,
      },
      phone: "35694407",
      cell: "40355373",
      id: {
        name: "FN",
        value: "17119400767",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/55.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
      },
      nat: "NO",
    },
  ],
  info: {
    seed: "8ddda4a0d6a1a545",
    results: 1,
    page: 1,
    version: "1.4",
  },
};


const {results} = apiData


const gender = apiData.results[0].gender
// console.log(results)

//console.log(gender);