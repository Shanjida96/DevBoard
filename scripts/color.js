let colors = ['#A9B5DF','#F2E2B1', '#B4EBE6'];
for(let i = 0; i < colors.length; i++){
    document.getElementById("navbar-btn")
    .addEventListener('click', function(){
        document.documentElement.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length; 
    })
}