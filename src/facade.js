const URL = 'https://stanitech.dk/friendfinder'

function handleHttpErrors(res) {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res.json();
}

function makeFetchOptions(type, b) {

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return {
        method: type,
        headers,
        body: JSON.stringify(b)
    }
}

async function login(user, pass) {
    console.log()
    const options = await makeFetchOptions("POST", { username: user, password: pass });
    let loggedInUser = {}
    await fetch(URL + "/api/users/login", options, true)
        .then(handleHttpErrors)
        .then(res => loggedInUser = res)
        .catch(function (error) {
            console.log('ERROR : There has been a problem with your fetch operation: ' + error.message);
            return error.message;
        });
    return loggedInUser;
}

export { login }