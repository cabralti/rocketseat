// AJAX: utilizando XMLHttpRequest
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/cabralti');
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}

// Promise
var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/cabralti');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });


// AJAX: Utilizando helper Axios (Encapsulamento do XMLHttpRequest)
axios.get('https://api.github.com/users/cabralti')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });