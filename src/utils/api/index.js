
class API{

    //reqres api
    host = "https://reqres.in/api";

    postLogin = async (username, password) => {
        //path
        const path = "/login?delay=2";
        //URL
        const url = this.host + path;
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

            return parsedResponse;
        }
        catch(error){
            console.log(error)
        }

    }

    postLogout = async () => {
        //path
        const path = "/logout?delay=2";
        //URL
        const url = this.host + path;

        //request
        try{
            const response = await fetch(url, {
                method: 'post'
            })
            
            return response.status;
        }
        catch(error){
            console.log(error)
        }
    }

    getUsers = async (pageNum) => {
        //path
        const path = "/users"
        //url
        const url = this.host+path;

        //request
        try{
            const response = await fetch(`${url}?page=${pageNum}`)
            const parsedResponse = await response.json();

            return parsedResponse;
        }
        catch(error){
            console.log(error)
        }
    }

}

export default new API();
