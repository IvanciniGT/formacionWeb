
const id1 = setTimeout( () => console.log("Ha pasado un segundo") , 1000);
const id2 = setTimeout( () => console.log("Ha pasado dos segundos") , 2000);
const id3 = setTimeout( () => console.log("Ha pasado tres segundos") , 3000);

clearTimeout(id2);