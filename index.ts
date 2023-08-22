// 1
function big(x: number, y: number): number {
    return x >= y ? x : y;
}
// 2
function big1(x: number, y: number) {
    const bigNum = x >= y ? x : y;
    console.log(bigNum);
}
// 3
function even(x: number): string {
    if (x % 2 === 0) {
        return "the number is even";
    } return "the number isn't even";
}
// 4
function strLength(str: string): number {
    return str.length
}
// 5
function arrNums(x: number): number[] {
    let result: number[] = [];
    for (let i = 1; i < x; i++) {
        result.push(i);
    }
    return result;
}
// 6
function bigNum(arr: number[]): number {
    let result: number = arr[0]
    arr.forEach(element => {
        if (element > result)
            result = element
    })
    return result;
}

console.log(bigNum([8, 7, 6, 55, 222]))
// 7
type Person = {
    Name: string,
    Age: number,
    isStudent: boolean
}
// 8
function printPerson(x: Person) {
    console.log(`the name is: ${x.Name}  the age is: ${x.Age} is student: ${x.isStudent}`)
}
// 9

interface Book {
    Title: string,
    Author: string,
    Year: number
}
// 10
type Reader = Person & {
    favoriteBooks: Book
};

function oldReader(arr: Reader[]): Person | null {
    let oldPerson: Person | null = null;
    let maxAge = -1;
    arr.forEach(element => {
        if (element.Age > maxAge) {
            maxAge = element.Age;
            oldPerson = element
        }
    });
    return oldPerson
}

const readers: Reader[] = [
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

console.log(oldReader(readers))


function oldBook(arr: Reader[]): Book {
    let theOld: Book = arr[0].favoriteBooks;
    arr.forEach(element => {
        if (element.favoriteBooks.Year < theOld.Year) {
            theOld = element.favoriteBooks;
        }
    })
    return theOld;
}