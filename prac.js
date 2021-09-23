"use strict";

/*const getBlogs = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://60c98aa8772a760017203b57.mockapi.io/blogs");
  xhr.responseType = "json";

  xhr.onload = () => {
    const blogs = xhr.response;
    for (let blog of blogs) {
      //console.log(blog);
      if (blog.id >= 1) {
        console.log(blog);
      }
    }
  };
  xhr.send();
};

getBlogs();*/

/*class car {
  constructor(wheels, door, engine) {
    this.wheels = wheels;
    this.door = door;
    this.engine = engine;
  }
  getWheels() {
    return "The number of wheels for this car is " + this.wheels;
  }
    removeWheels() {
        return (this.wheels - 2);
    }
  
}

const ferrari = new car(4, 2, "v12");
const venue = new car(4, 4, "v3");
const bmw = new car(4, 4, "v8");
const landcruiser = new car(4, 4, "v8");

console.log(ferrari);
console.log(ferrari.wheels);

console.log(venue.getWheels());

console.log(ferrari.removeWheels());


console.log(ferrari.removeWheels();*/

const score = [
  {
    marks: 91,
    name: "Sai",
  },
  {
    marks: 20,
    name: "Arun",
  },
];

const test = (am) => am.marks >= 40;

const res = score.filter(test);
console.log(res);
