let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
//Bucle anidado For Of
for (let a of pronoun){
     
     for (let b of adj){

         for (let c of noun){
             let dominio1 = a + b + c + '.com';
             let dominio2 = a + b + c + '.net';
             let dominio3 = a + b + c + '.us';
             console.log(dominio1);
             console.log(dominio2);
             console.log(dominio3);
         }
     }
}
