function enviar(){
    let radio = document.getElementById('radio').value

    let altura = document.getElementById('altura').value

    let areaLateral = (2*Math.PI)*radio*altura

    let areaBase = Math.PI * Math.pow(radio,2)

    let areaTotal = (2*areaBase) +areaLateral

    console.log('el area lateral es :'+areaLateral)
    console.log('el area base es :'+areaBase)
    console.log('el area total es :'+areaTotal)

    document.write('el area lateral es :'+areaLateral)
    document.write('el area base es :'+areaBase)
    document.write('el area total es :'+areaTotal)
}