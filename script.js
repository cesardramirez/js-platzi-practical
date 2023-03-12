const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pAll = document.querySelectorAll('p');
const input = document.querySelector('input');
const input1 = document.getElementsByTagName('input');
const paragraph = document.querySelector('.paragraph');
const paragraph2 = document.getElementsByClassName('paragraph');
const pid = document.querySelector('#pid');
const pid2 = document.getElementById('pid');

// En cada variable se pueden visualizar los atributos de cada una, para así manipularlas mejor como DOM.
console.log({
    h1,
    p,
    pAll,  // NodeList (3) [p, p.paragraph, p#pid]
    input,
    input1,  // HTMLCollection [input]
    paragraph,  // p.paragraph
    paragraph2,
    pid,  // p#pid
    pid2  // HTMLCollection [p.paragraph]
});

console.log(input.value);  // 175623
