/* 
Función que verifica la validéz de una cédula Ecuatoriana
Autor: Carlos Bermúdez García
Desarrollado en JavaScript
*/

function verificarCI (dni){

    //Validamos que la cédula solo contenga 10 dígitos
    if( dni.length === 10){

        //Definimos el último dígito o tambien llamado dígito verificador
        const lastDigit = parseInt(dni[dni.length - 1])

        //Definimos variables a utilizar
        let pares = 0
        let impares = 0
        let suma = 0

        //Iteramos cada item excluyendo el último digito, aplicando el Algoritmo de Luhn
        for( let i = 1; i <= dni.length - 1; i++ ){
            if(i % 2 === 0){
                pares += parseInt(dni[i - 1])
            }
            else {
                let x = parseInt(dni[i - 1]) * 2
                x > 9 ? impares += (x - 9) : impares += x
            }
        }

        suma += pares + impares

        //extraemos el primer digito de la suma
        const firstDigit = parseInt(suma.toString()[0])

        //Obtenemos la decena
        const decena = (firstDigit + 1) * 10

        //Obtenemos el digito validador
        let validatorDigit = decena - suma
        
        //Si el dígito verificador es mayor a 10 lo igualamos a 0
        if (validatorDigit >= 10){
            validatorDigit = 0
        }

        //Codigo de provincia
        //Validamos si la cedula pertenece a alguna provincia
        const provinceCode = parseInt(dni[0] + dni[1])
        if (parseInt(provinceCode) > 24){
            return `La cédula es incorrecta no pertenece a ninguna provincia`
        }
        console.log('Codigo de Provincia: ' + provinceCode);

        if(validatorDigit == lastDigit){
            return `Esta cedula es correcta: ${dni}`
        }
        else {
            return `Esta cedula es incorrecta : ${dni}`
        }
    }
    else {
        return `La cédula debe tener 10 dígitos unicamente`
    }
}

console.log(verificarCI('1313127845'));