/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Numero Secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10'
*/
let SecNum;
let tries;
let already = [];
let max = 10;

function textAssign (element, text)
{
    let HTMLelement = document.querySelector(element);
    HTMLelement.innerHTML = text;
    return
}

function UserTry()
{
    let UsNum = parseInt(document.getElementById('UserValue').value);
    /*console.log(typeof(UsNum));
    console.log(SecNum);
    console.log(typeof(SecNum));
    console.log(UsNum);
    console.log(UsNum === SecNum);*/
    if(UsNum === SecNum)
    {
        textAssign('p',`Acertaste el numero en ${tries} ${(tries === 1?'vez':'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if(UsNum > SecNum)
        {
            textAssign('p','El Numero Secreto es menor');
        }
        else
        {
            textAssign('p','El Numero Secreto es Mayor');
        }
        tries++;
        cleanbox ();
    }
    return
}

function cleanbox ()
{
    document.querySelector('#UserValue').value = '';
}

function SecretNumber ()
{
    let rand = Math.floor(Math.random()*max)+1;
    if (already.length == max)
    {
        textAssign('p','Ya se Sortearon todos los Numeros Posibles');
    }
    else
    {
        if(already.includes(rand))
        {
            return SecretNumber ();
        }
        else
        {
            already.push(rand);
            return rand
        }
    }
}

function IniCond ()
{
    textAssign('h1', 'Juego del Numero Secreto');
    textAssign('p', `Indica un numero del 1 al ${'max'}`);
    SecNum = SecretNumber();
    tries = 1;
}

function RestartGame()
{
    cleanbox ();
    IniCond ();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

IniCond ();