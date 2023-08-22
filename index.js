// 1
function big(x, y) {
    return x >= y ? x : y;
}
// 2
function big1(x, y) {
    var bigNum = x >= y ? x : y;
    console.log(bigNum);
}
// 3
function even(x) {
    if (x % 2 === 0) {
        return "the number is even";
    }
    return "the number isn't even";
}
// 4
function strLength(str) {
    return str.length;
}
// 5
function arrNums(x) {
    var result = [];
    for (var i = 1; i < x; i++) {
        result.push(i);
    }
    return result;
}
// 6
function bigNum(arr) {
    var result = arr[0];
    arr.forEach(function (element) {
        if (element > result)
            result = element;
    });
    return result;
}
console.log(bigNum([8, 7, 6, 55, 222]));
// 8
function printPerson(x) {
    console.log("the name is: ".concat(x.Name, "  the age is: ").concat(x.Age, " is student: ").concat(x.isStudent));
}
function oldReader(arr) {
    var oldPerson = null;
    var maxAge = -1;
    arr.forEach(function (element) {
        if (element.Age > maxAge) {
            maxAge = element.Age;
            oldPerson = element;
        }
    });
    return oldPerson;
}
var readers = [
    {
        Name: "Alice",
        Age: 30,
        isStudent: false,
        favoriteBooks: {
            Title: "Book 1",
            Author: "Author 1",
            Year: 2000
        }
    },
    {
        Name: "Bob",
        Age: 45,
        isStudent: false,
        favoriteBooks: {
            Title: "Book 2",
            Author: "Author 2",
            Year: 1995
        }
    }
];
console.log(oldReader(readers));
function oldBook(arr) {
    var theOld = arr[0].favoriteBooks;
    arr.forEach(function (element) {
        if (element.favoriteBooks.Year < theOld.Year) {
            theOld = element.favoriteBooks;
        }
    });
    return theOld;
}
