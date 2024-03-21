var num1 = +prompt(`한변 입력1:`);
var num2 = +prompt(`한변 입력2:`);
var total = ``;
for(var i=0;i<num1;i++)
{
  for(var j=0;j<num2;j++)
  {
   total+=`*   `;
  }
   total+=`\n`;
}
alert(total);