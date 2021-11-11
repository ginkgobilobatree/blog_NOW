console.log('____________________connected____________________\n\n\n')

let button = document.querySelector('#button');
    title = document.querySelector('#title'),
    blog = document.querySelector('#textarea'),
    userId = document.querySelector('#userId'),
    pContainer = document.querySelector('#paragraph');

let storage = JSON.parse(localStorage.getItem('a')) || [];

storage.map(content => {
    let p = document.createElement('p');
    p.innerHTML = content;
    pContainer.appendChild(p);
})

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
}

async function doWork() {
    const response = submit()
    response.json();
    const json = await response()
    console.log(json)
}

function grabData() {
   
    let p = document.createElement('p');
    p.innerHTML = `#${userId.value} ${title.value.toUpperCase()} "${blog.value}"`;
    storage.push(`#${userId.value} ${title.value.toUpperCase()} "${blog.value}"`)
    localStorage.setItem('a', JSON.stringify(storage));
    pContainer.appendChild(p);

    title.value = '';
    blog.value = '';
    userId.value = '';
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    submit();
    grabData();
});