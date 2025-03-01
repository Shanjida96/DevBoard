// date
const currentDate = new Date();
// console.log(currentDate);

let day = currentDate.getDay();
let date = currentDate.getDate();
let month = currentDate.getMonth() ;
let year = currentDate.getFullYear()
// console.log(day,date, month, year);
function getDay(day){
    let Day = "Sun";
    if(day === 0){
       Day = "Sun";
    }
    else if(day === 1){
        Day = "Mon";
    }
    else if(day === 2){
        Day = "Tue";
    }
    
    else if(day === 3){
        Day = "Wed";
    }
    
    else if(day === 4){
        Day = "Thu";
    }
    
    else if(day === 5){
        Day = "Fri";
    }
    
    else if(day === 6){
        Day = "Sat";
    }
    return Day;
}
function getMonth(month){
    let Month = "Jan";
    if(month === 0){
        Month = "Jan";
    }
    else if(month === 1){
        Month = "Feb";
    }
    else if(month === 2){
        Month = "Mar";
    }
    
    else if(month === 3){
        Month = "Apr";
    }
    
    else if(month === 4){
        Month = "May";
    }
    
    else if(month === 5){
        Month = "Jun";
    }
    
    else if(month === 6){
        Month = "Jul";
    }
    
    else if(month === 7){
        Month = "Aug";
    }
    
    else if(month === 8){
        Month = "Sep";
    }
    
    else if(month === 9){
        Month = "Oct";
    }
    
    else if(month === 10){
        Month = "Nov";
    }
    
    else if(month === 11){
        Month = "Dec";
    }
    return Month;
}
const dayOfWeek = getDay(day);
const Month = getMonth(month);
const p = document.createElement('p');
const container = document.getElementById("date_container");
p.innerHTML = `
    <h1 class="text-xl">${dayOfWeek} <br><span class ="font-bold "> ${date} ${Month} ${year}</span></h1>   
   `;

container.appendChild(p);
console.log(container);

