# Functional Utility Library

Everything you learn in JavaScript can be represented and remembered with a `function` you create. The goal of this project is to create an interactive utility library of all the JavaScript operations and functions you learn.

Utility libraries are an important feature of any [high level programming language](https://en.wikipedia.org/wiki/High-level_programming_language).

[jQuery](https://jquery.com/) is a library we have been using so far—it primarily helps with selecting elements on the DOM, listening for events, and manipulating the DOM, but it also has some utility functions. Other popular utility libraries: [Lodash](https://lodash.com/) (all-purpose utilities), [Math.js](https://mathjs.org/) (utilities for better mathematic functions), and [Moment.js](https://momentjs.com/) (utilities for handling dates and times).

Are you ready to build your own?

## Step 1: Fork and clone this app

What and what?

**Forking** makes a copy of someone else's Github repository and puts this copy in your own Github repositories.

**Cloning** this newly forked repository copies it onto your computer for local editing. All changes that you push will now go to your fork in your repositories.

### Walkthrough

In your coding folder on your computer, create a folder for this project.

View this page on Github. Go to the top of the page and click "Fork".

If given the option, select your username.

You will be taken to a new repo under your Github username. Click "Clone or download", and copy the URL you are given.

In your terminal, go to the folder you created for this project.

Enter the following:

`git clone TheUrlYouCopiedFromGithub .` **Note the period at the end!**

This will clone the forked repo into the folder you've created.

You don't need to do anything else to connect it to Github. All your changes will be pushed to the right repo. Simply make changes then commit & push!

### More reading

[Difference between Git Clone and Git Fork](https://www.toolsqa.com/git/difference-between-git-clone-and-git-fork/)

[What is the difference between Forking and Cloning on GitHub?](https://stackoverflow.com/questions/7057194/what-is-the-difference-between-forking-and-cloning-on-github)

[How do you clone a Git repository into a specific folder?](https://stackoverflow.com/questions/651038/how-do-you-clone-a-git-repository-into-a-specific-folder)

## Step 2: Add JavaScript functions to your library

Create simple functions that demonstrate a working knowledge JavaScript operations and functions. Create your own name for each function—**the name must be unique** and must be the same for the function in `functions.js` and `index.html`. Write a short description that makes sense for you. In the comments of your function, list the arguments and the return value this function accepts.

Add functions to the `functions.js` file.

Add a new Bootstrap column to `index.html` by copying and pasting everything between and including `<!-- start column -->` and `<!-- end column -->` editing the **function name**, its **description**, and **the number of inputs** it has.

### List of functions

**Complete everything from "Introduction to the ES6 Challenges" to "Write Concise Declarative Functions with ES6"** in [JavaScript Algorithms and Data Structures Certification > ES6](https://www.freecodecamp.org/learn/).

**Complete everything up from "Introduction to the Object Oriented Programming Challenges" to "Use a Constructor to Create Objects"** from [JavaScript Algorithms and Data Structures Certification > Object Oriented Programming](https://www.freecodecamp.org/learn/).

**Complete everything** in [JavaScript Algorithms and Data Structures Certification > Functional Programming](https://www.freecodecamp.org/learn/) but **skip the last one** "Introduction to Currying and Partial Application".

As you complete each one, create simple utility functions that demonstrate a working knowledge of the following lessons (you will do all the lessons described above, but make utility functions for these ones found in **JavaScript Algorithms and Data Structures Certification > Functional Programming**):

-  Implement the filter Method on a Prototype
-  Return Part of an Array Using the slice Method
-  Remove Elements from an Array Using slice Instead of splice
-  Combine Two Arrays Using the concat Method
-  Add Elements to the End of an Array Using concat Instead of push
-  Use the reduce Method to Analyze Data
-  Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
-  Sort an Array Alphabetically using the sort Method
-  Split a String into an Array Using the split Method
-  Combine an Array into a String Using the join Method
-  Apply Functional Programming to Convert Strings to URL Slugs
-  Use the every Method to Check that Every Element in an Array Meets a Criteria
-  Use the some Method to Check that Any Elements in an Array Meet a Criteria

### More resources to help understand functional programming:

Be sure to go through these!

[A Practical Introduction To Functional Programming (Javascript)](https://medium.com/@riteshkeswani/a-practical-introduction-to-functional-programming-javascript-ba5bee2369c2)

[Learning Functional Programming with JavaScript - Anjana Vakil - JSUnconf](https://www.youtube.com/watch?v=e-5obm1G_FY)

This is a hard concept, so you want to be sure to get it down! Google and ask lots of questions of your peers and instructors!

## Step 3: Apply your learning to White Bear

### On `index.html`

First, let's change "Let's go!" from an `<a>` to a `<button>` and delete the href attribute so we can work on this button without it sending us to the next page. :sweat_smile: (Leave "Log in" as is.)

When a user creates a password under "Nice to meet you" lets add some new logic to our password validation when the user clicks "Let's go!":

-  The password cannot be one from [this list](https://gist.github.com/149203/3593a19d57eb93d3b2b735be7c448944). This list is 350 of the most popular passwords beginning with x, y, or z that are over 8 characters ([source](https://github.com/mvila/popular-passwords)). It represents a real data set you might put to use like [the top n most common passwords](https://github.com/danielmiessler/SecLists/tree/master/Passwords/Common-Credentials). First, create an array of common passwords that are > 8 characters from this list of 350. Then display an error message if the user has entered a common password that matches your list.

Your app should validate the password field in this order of priority:

1. Is the password field blank?
2. Is the password < 9 characters?
3. Does the password contain the local-part of their email address?
4. Does the password match any of the common passwords from the list provided?

Only if all the above conditions are negative, should the user be allowed to proceed (console.log your object with `_id`, `email`,`password`, and `createdOn)`.

### On `create-imagery.html`

When the user clicks "Save", you presently `console.log` an object with the following schema:

```javascript
{
   _id: 002045,
   imagery: "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG.",
   answer: "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
   levelNum: 1,
   successfulAttemptsNum: 0,
   createdOn: 200508232659,
   lastAttemptedOn: 200508232659 // same as createdOn
}
```

Use the exact string values above for the `imagery` and `answer` keys, but now [encode them](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) before logging them to the console. This will prevent users from entering syntax that [could jeopardize the security](https://xkcd.com/327/) of your database and application.

## Step 4: Repeat this process with the next repo

[Algorithm Utility Library](https://github.com/punchcode-fullstack/algorithm-utility-library)
