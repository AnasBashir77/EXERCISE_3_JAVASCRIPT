console.log("Exercise 3");
function calculate()
{
    let input=document.getElementById("myInput");
    let inputvalue=input.value;
    let f;
    f=(inputvalue*9/5)+32;
    document.getElementById("div1").innerHTML=f;
  
}

let list_1=document.getElementById("list_1");
  var array=[];
   for(let i=2022;i<=2050;i+=4)
   {
    array.push(i);
   }

   for(let j=0;j<array.length;j++)
   {
    let li=document.createElement("li");
    li.innerText=array[j];
    list_1.appendChild(li);  
   }

   function calculate_result()
   {
    let grade1=document.getElementById("grade1");
    let grade_1=grade1.value;
    let grade2=document.getElementById("grade2");
    let grade_2=grade2.value;
    let absence=document.getElementById("absence");
    let absences=absence.value;
    let x=parseInt(grade_1);
    let y=parseInt(grade_2);
    
    var sum = x+y;
    let average=sum/2;
  
    if(average>6.5 && absences<14)
    {
        document.getElementById("student").innerText="pass";
    }
    else if(average<6.5)
    {
      document.getElementById("student").innerText="failed because of grades";
        
    }
    else if(absences>14)
    {
      document.getElementById("student").innerText="failed because of absences";
   }
   }
console.log("--------------------");
   var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];

 var table_1=document.getElementById("table");



var htmlstring="";
for(i=0;i<sales.length;i++)
{
  if(sales[i].refundRequested==null)
    {
    htmlstring=htmlstring+"<tr><td>"+sales[i].student+"</td><td>"+sales[i].date+"</td><td>"+sales[i].amount+"</td></tr>";
    }
  
}
document.getElementById("tbody").innerHTML="<tr><td>name</td><td>date</td><td>amount</td>"+htmlstring;
var array_2=[];
for(let i=0;i<sales.length;i++)
{
  if(sales[i].refundRequested==null)
  {
    array_2.push(1);
  } 
}
let total_sold="total sold = "+""+array_2.length;



var array=[];
for(let i=0;i<sales.length;i++)
{
  array.push(sales[i].amount);
}
let sum=0;
for(i=0;i<array.length;i++)
{
  sum+=array[i];
}
let sum_1=Math.round(sum);



let r1=document.createElement("tr");
let td_1=document.createElement("td");
td_1.textContent=total_sold;
r1.appendChild(td_1);

let td_2=document.createElement("td");
td_2.textContent="total amount";
r1.appendChild(td_2);

let td_3=document.createElement("td");
td_3.textContent=sum_1;
r1.appendChild(td_3);


table_1.appendChild(r1);

