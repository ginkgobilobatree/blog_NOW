console.log('____________________connected____________________\n\n\n\n\n\n\n\n')

let button = document.querySelector('#button');
/*     form = document.querySelector('form'), */
let title = document.querySelector('#title');
let blog = document.querySelector('#textarea');
let userId = document.querySelector('#userId');


function submit() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            body: blog.value,
            userId: userId.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    submit();
});