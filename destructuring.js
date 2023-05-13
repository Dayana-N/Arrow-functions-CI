// Destructuring arrays
let ages = [30, 26, 27]
let [mary, john, joe] = ages
console.log(mary, john, joe)

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
}

let {mike, jill, alicia} = jobs
console.log(mike, jill, alicia)

// Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese']
let [johnNative, johnSeconadry] = languages
console.log(johnNative, johnSeconadry)

let [, , maryNative, marySecondary] = languages
console.log(maryNative, marySecondary)

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese'
}

let {firstLanguage, thirdLanguage} = languages2
console.log(firstLanguage, thirdLanguage)


// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry']
let [favourite, secondFavourite, ...others] = fruits
console.log(favourite, secondFavourite, others)

let favouriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak'
}

// let { brian, anna, ...rest} = favouriteFoods
// console.log(brian, anna, rest)

//challenge 

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
    let subjects = []
    arr.forEach(studentObj => {
        if (student === studentObj.name) {
            subjects = studentObj.subjects
        }
    })
    return subjects
}

let [ first, second, ...rest ] = makeList(students, 'John')
console.log(first, second, rest)