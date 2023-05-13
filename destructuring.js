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

let { brian, anna, ...rest} = favouriteFoods
console.log(brian, anna, rest)