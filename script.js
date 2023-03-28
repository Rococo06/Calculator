
var string = "";

var buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',function(e){
        
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.getElementById('input').value = string;
        }
        else if(e.target.innerHTML =='AC'){
            string = "";
            document.getElementById('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.getElementById('input').value = string;
        }
    })
})