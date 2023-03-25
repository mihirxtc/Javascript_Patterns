let line = 2;
let space = "";
for(row=0; row<line; row++)
{
    for(col=0; col<=row; col++)
    {
        space = space+"*";
    }
    space += "\n";
}
for(row=2; row>=0; row--)
{
    for(col=0; col<=row; col++)
    {
        space = space+"*";
    }
    space += "\n";
}
console.log(space);

// THIS IS JAVASCRIPT CODE FOR "INCREMENTING  POINT FROM LEFT SIDE" IN JAVASCRIPT.

/*

*
**
***
**
*

*/