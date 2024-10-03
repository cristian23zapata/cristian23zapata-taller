function enviar(){

let juan = new Date('2000/01/13');

let mario = new Date('2014/03/19')

let resta = mario.getTime() - juan.getTime() 

let hora = resta / (1000*60*60);

let dias = resta / (1000*60*60*24);

console.log('se llevan : '+dias+' dias de diferencia')
document.write('se llevan : '+dias+' dias de diferencia')

console.log('se llevan : '+hora+' horas de diferencia')
document.write('se llevan : '+hora+' horas de diferencia')
}
