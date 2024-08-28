let input = document.getElementryById('inputBox');
let button=document,queryselectorALL
('button');

let string ="";
let arr =Array.from(button);
arr.froEach(button  => {
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHTML == '='){
            STRING =eval(string);
            input.value =string
        }

        else if(e.targetinnerHTML == 'AC'){
            string = "";
            input.value - string;

        }   
        else if (e.targetinnerHTML == 'DEL'){
            string = string.substring(0, string.length-1)
            input.value =string;
        } 
        else{
             string += e.target.innerHTML;
             input.value = string;
        }
    })
})