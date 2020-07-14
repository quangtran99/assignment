const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];

  
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//Print out an array of the inventors whose name starts with 'A'.
console.log(inventors.filter((x) => x[0] === "A"))
    //Print out an array of the inventors whose name contains 'n'.
console.log(inventors.filter((x) => x.includes("n")))

//extra for same letter twice
let doubleLetter = inventors.filter(name => {
    let splitName = name.split('')
    let result = false
    // another solution bonus
    // for(let i =0; i<splitName.length;i++){ 
    //   if(splitName[i]=== splitName[i+1]){
    //     result = true
    //   }
    // }
    // ... char can be replaced by _ splitName.map((_,i) or splitName.map((char,i)
    splitName.map((_,i)=>{
      if(splitName[i] === splitName[i+1]){
        result = true
      }
    })
    return result
  })
  
  console.log(doubleLetter)
//Print out an array of the numbers which are odd.
console.log(numbers.filter((num) => num % 2 !== 0))
    //Print out an array of the numbers that have two digits.
console.log(numbers.filter((num) => Math.floor(num / 10) >= 1))

//Print out an array of the numbers which are prime.

let primeNumber = numbers.filter(num =>{
 
    if( num < 2){
      return false
    }
  
    for(let i=2;i<num; i++){
  
  
      if(num % i ==0){
        return false
      }
    }
  
    return true 
  })
  
  console.log(primeNumber)
    //Print out the length of every inventor's full name.

let result = inventors.map((name) => {
    return name.split("");
    //  split.map((nam)=> { return nam.length} ) 
    })

   let split = result.map((name)=> {return name.length})

        console.log(split)
    
    //Print out all the inventors' names in uppercase.
console.log(inventors.map((name) => name.toUpperCase()))

//Print out initials of all inventors(e.g. A.E., I.N., ...)

let initalLetter = inventors.map(name => {
    let inventorSplit = name.split(' ')
    let result = inventorSplit.map(char => char.charAt(0)).join('.')
    // let result = ''
    // for(let i =0 ; i<inventorSplit.length;i++){
    //   result += inventorSplit[i][0]+"."
    // }
    // let result = inventorSplit [0][0] + "." + inventorSplit[1][0]
    return result
  })
  
  console.log(initalLetter)

//Print out an array of every number multiplied by 100.
console.log(numbers.map((no) => no = no * 100))

//Sort all the inventors in alphabetical order, A-Z.

let sortByAlpha = inventors.sort()
console.log(sortByAlpha)


//Sort all the inventors in reverse alphabetical order, Z-A.
let sortByAlphaZA = inventors.sort((a,b)=>{
    if (a<b){
        return 1;
    } else if (a>b){
        return -1;
    } else {
        return 0;
    }
})
console.log(sortByAlphaZA)

//Sort all the inventors by length of name, longest name first. 

let sortByLengthLong = inventors.sort((a,b)=>b.length-a.length)
console.log(sortByLengthLong)

//Sort all the inventors by length of name, shortest name first.

let sortByLength = inventors.sort((a,b)=>a.length-b.length)
console.log(sortByLength)

//Create a string that has the first name of every inventor.
let firstName = inventors.reduce((total,name) =>{
    total += name.split(' ')[0]
    return total
  },'')
  console.log(firstName)

  //Find the sum of all the numbers.

  let sumN = numbers.reduce((total,number) =>{
      total += number
      return total
  })

  console.log(sumN)

//Find the sum of all the even numbers.

let sumEven = numbers.reduce((total,number) =>{
    if(number % 2 == 0) 
    total += number
    return total
},0)

console.log(sumEven)


//Does every inventor have first name that's longer than 4 characters?

let check = inventors.every(name=>name.split('')[0].length>4)

console.log(check)

//Does every inventor have the letter 'e' in their name?

let eCheck = inventors.every(name=>name.includes("e"))

console.log(eCheck)

//Does any inventor have the letter 'y' in their name?

let yCheck = inventors.some(name=> name.includes("y"))
console.log(yCheck)

//Find the inventor that has a middle name.

let haveMiddleName = inventors.find(name=> name.split(' ').length>=3)

console.log(haveMiddleName)

//Find the number divisible by 7.

console.log(numbers.find(num => num % 7 == 0))

