// let a=10
// let b=11
// if(a==b){
//     console.log("eql");
    
// }
// else if(a!=b){
//     console.log('not eql');
    
// }
// else{
//     console.log('else');
    
// }

// Q1
// function bonus(){
//     let a=parseInt(document.getElementById('a').value)
//     let b=parseInt(document.getElementById('b').value)
//     let h3=document.getElementById('h3')
    
//     if(b>=5){
//         c=a*0.05
//         ts=a+c
//         h3.innerHTML=ts
//     }
//     else{
//         h3.innerHTML='no bonus'
//     }
// }

// Q2
// function div(){
//     let a=parseInt(document.getElementById('a').value)
//     let h3=document.getElementById('h3')
//     d=a%3
//     if (d%3==0){

//         h3.innerHTML='divisible'
//     }
    
//     else{
//         h3.innerHTML='not divisible'
//     }
    
// }

function city(){
    let a=parseInt(document.getElementById('a').value)
    let h3=document.getElementById('h3')
    if (a=='delhi'){
        h3.innerHTML='redfort'
    }
    else if (a=='agra'){
        h3.innerHTML='tajmahal'
    }
    else if (a=='jaipur'){
        h3.innerHTML='jalmahal'
    }
    else{
        h3.innerHTML='error'
    }

}
