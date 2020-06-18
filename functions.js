function popularRapMusic(userInput) {
   // Map function
   /* The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. Note: map() does not execute the function for array elements without values. */
   let musicArtists = [
      {
         artist: "Juice WRLD",
         album: "Death Race for Love",
         genre: "Hip-Hop",
      },
      {
         artist: "Drake",
         album: "Nothing Was The Same",
         genre: "Hip-hop",
      },
      {
         artist: "The Weeknd",
         album: "After Hours",
         genre: "R&B/Soul",
      },
   ];
   // if (userInput === "artist") {
   //    const music = albumMasterPiece.map((musicObj) => musicObj.artist);
   //    return music;
   // } else if (userInput === "genre") {
   //    const music = albumMasterPiece.map((musicObj) => musicObj.genre);
   //    return music;
   // } else if (userInput === "album") {
   //    const music = albumMasterPiece.map((musicObj) => musicObj.album);
   //    return music;
   // }
   const music = musicArtists.map((musicObj) => musicObj[userInput]);
   return music;
}

// Filter function

/* The filter() method returns an array containing elements of the parent array that match the set test. A function containing a test is passed as an argument to the filter method. To keep an element the test function should return true and false to discard an element. */
function filterMethod() {
   const words = [
      "spray",
      "limit",
      "elite",
      "exuberant",
      "destruction",
      "present",
   ];

   return words.filter((word) => word.length > 6);
}

// Concat Method

function concatArr(input1) {
   // input1 = array of input1 will be added to original array numberArray
   /* The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array(nonMutated) to where push() adds an item to the end of the same array it is called on, which mutates that array. */

   let numberArray = [1, 2, 3, 4];

   let newNumberArray = numberArray.concat([input1]);
   return newNumberArray;
}

// Split method

function splitArr(input1) {
   // input1 = any value
   // Split a string into an array of substrings
   // this function is set up to split at the character space(" ")
   /* If an empty string ("") is used as the separator, the string is 
   split between each character */
   let str = [input1.split(" ")];
   // will split at each space (" ")
   return str;
}

// Join method

function joinSSN(input1) {
   // A1: takes in what the user is inputing
   // R: 9 numbers for a social security. it includes a -
   console.log(input1);
   let ssn1 = String(input1); //turns numbers into string so we can modify it
   let ssn = ssn1.split(""); //turns string into set of sub strings
   ssn.splice(3, 0, "-"); // puts '-' at the 3rd index
   ssn.splice(
      6,
      0,
      "-"
   ); /* puts '-' at the 6th index, keep in mind first '-' is now being accounted for */
   let final = ssn.join(""); // joins an empty string
   return final;
}

// every method
/*The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.*/

function everyPositive(input1) {
   /*user creates an array of neg and positive number */
   return input1.every((val) => val > 0);
}

// some method
/*The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.*/

function someMethod(input1) {
   return input1.some((val) => val < 10);
}

// includes method
/* The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.*/

const pizzaToppings = [
   "Pepperoni",
   "Pineapple",
   "Sausage",
   "Spinach",
   "Olive",
   "Bacon",
   "Mushrooms",
];

function includesMethod(input1) {
   return pizzaToppings.includes(input1);
}
