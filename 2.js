function enviar(){
    let radio = document.getElementById('radio').value

    let area = 4 * Math.PI * Math.pow(radio,2)

    let volumen = 4/3 * Math.PI * Math.pow(radio,3)

    console.log('el area del cilindro es : ' + area)
    document.write('el area del cilindro es : ' + area)

    console.log('el volumen del cilindro es : ' + volumen)
    document.write('el volumen del cilindro es : ' + volumen)
}