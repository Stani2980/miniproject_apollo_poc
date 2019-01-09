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

async function login(username, password) {
    const options = await makeFetchOptions('POST', { username: username, password: password});
    let loggedInUser = {}
    await fetch(URL + "/api/user/loginReact", options)
        .then(handleHttpErrors)
        .then(res => loggedInUser = res)
        .catch(function (error) {
            console.log('ERROR : There has been a problem with your fetch operation: ' + error.message);
            return error.message;
        });
    console.log(JSON.stringify(loggedInUser))
    return loggedInUser;
}

export { login }