//function greetTheStudent(studentName){ //parameter
    
   // return `Hello there ${studentName}`;
    
//}

//fat arrow function

//const greetTheStudent = function(studentName){ //parameter
    //return `Hello there ${studentName}`;
//}

//fat arrow function
//const greetTheStudent = (studentName)=> { //parameter
   // return `Hello there ${studentName}`;
//}

const greetTheStudent = studentName=> `Hello there ${studentName}`;
    
const fullName = (firstName, middleName, lastName)=> `${lastName}, ${middleName}, ${firstName}`;
        



//const fullName = function (firstName, middleName, lastName){
    // return `${lastName}, ${middleName}, ${firstName}`;
//}

const student = 'Marie Jane'; //mary
const greet = greetTheStudent(student); //argument
console.log(greet);

const titleName = fullName('Marie', 'R', 'Jane'); //mary
console.log(titleName);

//console.log(message + ' ' + studentName);
//console.log(message + ' ' + studentName2);