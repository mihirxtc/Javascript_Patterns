let x = 5;
let y = "";
for(let i=0; i<x; i++)
{
    for(let j=0; j<x; j++)
    {
        if(j==0 || j==4 || i==0|| i==4)
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

// THIS IS CODE FOR "HOLLOW SQUARE" PATTERN IN JAVASCRIPT.

/*

*****
*   *
*   *
*   *
*****

*/