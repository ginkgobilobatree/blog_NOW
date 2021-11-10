console.log('____________________connected____________________\n\n\n')

let button = document.querySelector('#button');
// let form = document.querySelector('form');
// let title = document.querySelector('#title');
// let blog = document.querySelector('#textarea');
// let userId = document.querySelector('#userId');

function sub() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: `${document.querySelector('#title').value}`,
            body: `${document.querySelector('#textarea').value}`,
            userId: `${document.querySelector('#userId').value}`,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
    console.log('hi')
}