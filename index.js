console.log('____________________connected____________________\n\n\n')

let button = document.querySelector('#button');
    title = document.querySelector('#title'),
    blog = document.querySelector('#textarea'),
    userId = document.querySelector('#userId'),
    pContainer = document.querySelector('#paragraph');



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

    let p = document.createElement('p');
    p.innerHTML = `#${userId.value} ${title.value.toUpperCase()} "${blog.value}"`;
    pContainer.appendChild(p);

    title.value = '';
    blog.value = '';
    userId.value = '';
});