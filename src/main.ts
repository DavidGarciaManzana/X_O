// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

export function xo(str: string) : boolean {
    // your code here
  }

  console.log(xo('xo'))//,true);
  console.log(xo("xxOo"))//,true);
  console.log(xo("xxxm"))//,false);
  console.log(xo("Oo"))//,false);
  console.log(xo("ooom"))//,false);