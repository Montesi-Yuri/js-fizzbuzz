/* 
    JS
*/

const ul = document.querySelector('.list');

for (let numero = 1; numero <= 100; numero++) {

    console.log('numeri fino a 100', numero);
    const listItem = document.createElement('li');
    listItem.append(numero);
    ul.append(listItem);


    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log(numero, 'è multiplo di 3 e di 5 (FIZZBUZZ)');
        listItem.classList.add('multiplo_3_5')
        
    }

    else if (numero % 5 == 0) {
        console.log(numero, 'è multiplo di 5 (BUZZ)');
        listItem.classList.add('multiplo_5')
    }
    
    else if (numero % 3 == 0) {
        console.log(numero, 'è multiplo di 3 (FIZZ)');
        listItem.classList.add('multiplo_3')
    }
    
}



