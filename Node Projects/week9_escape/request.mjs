
async function makeRequest(url, method = "GET", token = "", payload = null) {

    let data = {};


    const headers = {
        method: method,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    if (payload) {
        headers.body = JSON.stringify(payload);
    }


    try {
        const response = await fetch(url, headers);
        data = await response.json();
    } catch (err) {
        console.log(err);
    }

    return data

}

export default makeRequest;