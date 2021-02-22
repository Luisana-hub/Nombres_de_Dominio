let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
//Bucle anidado For Of
let element = document.getElementById("list");
for (let a of pronoun){
     
     for (let b of adj){

         for (let c of noun){
             let dominio1 = a + b + c + '.com';
             let dominio2 = a + b + c + '.net';
             let dominio3 = a + b + c + '.us';
            
             let li1 = document.createElement("LI");
             let li2 = document.createElement("LI");
             let li3 = document.createElement("LI");
             let text1 = document.createTextNode(dominio1);
             let text2 = document.createTextNode(dominio2);
             let text3 = document.createTextNode(dominio3);
             
             console.log(dominio1);
             console.log(dominio2);
             console.log(dominio3);
             
             li1.appendChild(text1);
             li2.appendChild(text2);
             li3.appendChild(text3);
             element.appendChild(li1);
             element.appendChild(li2);
             element.appendChild(li3);
         }
     }
}