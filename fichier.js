
let total =document.getElementsByClassName("total")[0];
let quantite =Array.from(document.getElementsByClassName("quantite"));
let prix =Array.from(document.getElementsByClassName("prix"));
let buttonMoin=Array.from(document.getElementsByClassName("buttonmoin"));
let buttonPlus=Array.from(document.getElementsByClassName("buttonplus"));
let container=Array.from(document.getElementsByClassName("container"));
let supprm = Array.from(document.getElementsByClassName("cross"));
let like = Array.from(document.getElementsByClassName("heart"));
let row =Array.from(document.getElementsByClassName("row"))


function calculeSum(){
    let sum=0;
    for(let i=0;i<row.length;i++){
        sum+= parseInt(quantite[i].innerHTML) * parseInt(prix[i].innerHTML)
    }
    return total.innerHTML = sum
}
for(let j=0;j<buttonPlus.length;j++){
    buttonPlus[j].addEventListener("click",function (){
        quantite[j].innerHTML++;
        calculeSum()
        return quantite[j].innerHTML;  
    })

    buttonMoin[j].addEventListener("click",function (){
        if (quantite[j].innerHTML > 0){
            quantite[j].innerHTML--;
            calculeSum()
            return quantite[j].innerHTML;
        }else 
        alert ("Quantite should be more than 0")
    })

    supprm[j].addEventListener("click",function(){
        row[j].style.display="none"
        quantite[j].innerHTML = 0
        calculeSum()
    })
    like[j].addEventListener("click",function (event){ 
        if (like[j].style.fill !== "red"){
            like[j].style.fill = "red"
        }
        else{like[j].style.fill = "" }
        
    })
}




