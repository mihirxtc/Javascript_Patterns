let x = 5;
let y = "";
for(let i=0; i<x; i++)
{
    for(let j=0; j<x; j++)
    {
        if(i==j || x-i-1==j)
        {
            y += "*";
        }
        else
        {
            y += " ";
        }
    }
    y += "\n";
}
console.log(y);

// THIS IS CODE FOR "X" PATTERN IN JAVASCRIPT.

/*

*   *
 * *
  *
 * *
*   *

 */