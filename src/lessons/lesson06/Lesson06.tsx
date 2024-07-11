

function Lesson06(){

    //1 Типизация строк - string

let username: string = 'Bob';
username = 'Harry'
console.log(username);

//2 number

let number: number = 42;
number = 7.1;
number = NaN
number = 2 + Number('1')
console.log(number);

// boolean

let isAdmin:boolean = false
isAdmin = true
isAdmin = 2 > 3
console.log(isAdmin);


// null / undefined

let emptyValue: null = null;
// emptyValue = 0
console.log(emptyValue);


//arrays

const colors = [ 'red', 'green', 'blue']
//colors.push(1)
colors.push("")
colors[3] = 'yellow'
console.log(colors);

// function

const showMessage = () => {
    console.log('hello'); 
    // если нет return , тогда возвращает undefined 
}
 showMessage()


const sum = (a:number, b:number):number => {
    return a + b
}

 console.log(sum(4, 10));

 let result = sum(13, 7);
console.log(result);


// objects interface


 // пишется через  большую букву I

 interface IUser {
    name: string,
    age: number | string
    isAdmin:boolean

    //через вопросительный знак указываем не обязательный ключ в обьекте
    hasOwner?: boolean
 }

const tom:IUser = {
    name: 'Tom',
    age: 40,
    isAdmin: true,
    hasOwner: true
}

const jerry:IUser = {
    name: 'Jerry',
    age: 35,
    isAdmin: true
}

const tomAndJerry:IUser[] = [tom, jerry]

console.log(tomAndJerry);






    return(
        <div className="lesson-container">
            <h4>Lesson06</h4>
            <p>Урок 'TypeScript'  часть 1' в комментариях к уроку</p>
        </div>
    )
}

export default Lesson06;