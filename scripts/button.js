
let count = 0;
const cardBtns = document.getElementsByClassName("Card_btns")
for(const cardBtn of cardBtns) {
    cardBtn.addEventListener("click", function(event){
        event.preventDefault();
        alert("Board Updated Successfully");
        addMessage1();
        cardBtn.setAttribute("disabled", true);
        count++;
        if(count === 6){
            alert("Congrats!!! You have completed all the current task.")
            
        }
    });
}

                  
