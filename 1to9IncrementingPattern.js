let n = 5;
let string = "";
for(let i=1; i<=n; i++) {
    for(let j=1; j<i; j++)
    {
        string += " ";
    }
    for(let k=1; k<=2 * (n-i+1) -1; k++)
    {
        string += k;
    }
    string += "\n";
}
for(let i=1; i<=n-1; i++)
{
    for(let j=1; j<n-i; j++)
    {
        string += " ";
    }
    for(let k=1; k<=2 * (i+1)-1; k++)
    {
        string += k;
    }
    string += "\n";
}
console.log(string);

// THIS IS CODE FOR "NUMERIC DOWN FROM 9 TO NUMERIC UP TO 1 TO 9" IN JAVASCRIPT.

/*

123456789
 1234567
  12345
   123
    1
   123
  12345
 1234567
123456789

*/