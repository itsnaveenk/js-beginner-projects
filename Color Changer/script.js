const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

// //logs
// console.log(body);
// console.log(buttons);

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.srcElement.id);

        document.querySelector('body').style.backgroundColor = e.srcElement.id;

    });
});