

const lista = [1,2,3,4,5,6,7,8]

for (let i=0; i<lista.length; i++)
    console.log(lista[i]);


for(const numero of lista)
    console.log(numero);


lista.forEach( numero => console.log(numero) )

lista.filter(  numero => numero % 2 === 0 )
     .forEach( numero => console.log(numero) )