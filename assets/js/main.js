// alert("Connesso");  //check connessione

const ul = document.querySelector("ul.list");

for (let i = 1; i <= 100; i++) {

    if (i % 15 === 0) {
        const element = `<li class="box box--${i} fizzbuzz">FizzBuzz</li>`;
        ul.innerHTML += element;
    } else if (i % 5 === 0) {
        const element = `<li class="box box--${i} buzz">buzz</li>`;
        ul.innerHTML += element;
    } else if (i % 3 === 0) {
        const element = `<li class="box box--${i} fizz">Fizz</li>`;
        ul.innerHTML += element;
    } else {
        const element = `<li class="box box--${i} number">${i}</li>`;
        ul.innerHTML += element;
    }
}
