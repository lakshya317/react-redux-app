//reqres api
const host = "https://reqres.in/api";

export const login = async (username, password) => {
    //path
    const path = "/login";
    //URL
    const url = host + path;

    //Body Object
    const reqBody = {
        username,
        password
    }

    //request
    try{
        const response = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reqBody)
        })

        const parsedResponse = await response.json();

        console.log(parsedResponse);

        return parsedResponse;
    }
    catch(error){
        console.log(error)
    }

}

// login("eve.holt@reqres.in", "cityslicka")

export const users = async (pageNum) => {
    //path
    const path = "/users"
    //url
    const url = host+path;

    //request
    try{
        const response = await fetch(`${url}?page=${pageNum}`)

        const parsedResponse = await response.json();

        console.log(parsedResponse);

        return parsedResponse;
    }
    catch(error){
        console.log(error)
    }
}