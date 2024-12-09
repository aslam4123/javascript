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

// function city(){
//     let a=parseInt(document.getElementById('a').value)
//     let h3=document.getElementById('h3')
//     if (a=='delhi'){
//         h3.innerHTML='redfort'
//     }
//     else if (a=='agra'){
//         h3.innerHTML='tajmahal'
//     }
//     else if (a=='jaipur'){
//         h3.innerHTML='jalmahal'
//     }
//     else{
//         h3.innerHTML='error'
//     }

// }

// function odd(){
//     let a=parseInt(document.getElementById('a').value)
//     let b=parseInt(document.getElementById('b').value)
//     for(let i=a;i<=b;i++){
//         if(i%2!=0){
//             console.log(i);
            
//         }
//     }

// }

// function even(){
//     let a=parseInt(document.getElementById('a').value)
//     let b=parseInt(document.getElementById('b').value)
//     for(let i=a;i<=b;i++){
//         if(i%2==0){
//             console.log(i);
            
//         }
//     }

// }

// function multiplication_table(){
//     let a=parseInt(document.getElementById('a').value)
//     for(let i=1;i<=10;i++){
//         console.log(i,"*",a,"=",a*i);
        
//     }
// }

// function multiplication_table1(){
//     let a=parseInt(document.getElementById('a').value)
//     let i=1
//     while(i<=10){

//         console.log(i,"*",a,"=",a*i);
//         i+=1
        
//     }
// }

function reverse(){
    let a=parseInt(document.getElementById('a').value)
    rev=0
    while (a>0){
        d=a%10                              
        rev=rev*10+d
        a=10
        console.log(rev)
    }
}