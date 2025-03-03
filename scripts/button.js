
let count = 0;
const cardBtns = document.getElementsByClassName("Card_btns");
for(const cardBtn of cardBtns) {
    const taskNo = document.getElementById("taskAssigned");
    cardBtn.addEventListener("click", function(event){
        event.preventDefault();
        alert("Board Updated Successfully");
        addMessage1();
        cardBtn.setAttribute("disabled", true);
        count++;
        if(count === 6){
            alert("Congrats!!! You have completed all the current task.")
            
        }
        const taskNo = document.getElementById("taskAssigned").innerText;
        const no_of_tasks = parseInt(taskNo);
        const newTaskNo = no_of_tasks-1;
        document.getElementById("taskAssigned").innerText = newTaskNo;
        const progress = document.getElementById("progress").innerText;
        const progressTotal =  parseInt(progress);
        const progressNew = progressTotal+1;
        document.getElementById("progress").innerText = progressNew;
    });

}


                  
