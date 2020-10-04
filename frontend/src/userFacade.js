const url = "http://localhost:3333/api/users/"

function getUsers() {
    return fetch(url)
        .then(res => res.json())
}

function getUser() {
    return fetch(url)
        .then(res => res.json())
}

function addUser(user) {
    const options = makeOptions("POST", user)
    return fetch(url, options)
        .then(handleHttpErrors)
}

function editUser(user) {
    const options = makeOptions("PUT", user)
    return fetch(url + user.id, options)
        .then(handleHttpErrors)
}

function deleteUser(id) {
    const options = makeOptions("DELETE")
    return fetch(url + id, options)
        .then(handleHttpErrors)
}

const userFacade = {
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

export default userFacade;