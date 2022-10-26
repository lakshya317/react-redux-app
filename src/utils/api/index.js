class API {
    //HOST from .env
    host = process.env.REACT_APP_API_HOST;

    postLogin = async (username, password) => {
        //path
        const path = '/login?delay=2';
        //URL
        const url = this.host + path;
        //Body Object
        const reqBody = {
            username,
            password
        };
        //request
        try {
            const response = await fetch(url, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqBody)
            });
            const parsedResponse = await response.json();

            return parsedResponse;
        } catch (error) {
            console.log(error);
        }
    };

    postLogout = async () => {
        //path
        const path = '/logout?delay=2';
        //URL
        const url = this.host + path;

        //request
        try {
            const response = await fetch(url, {
                method: 'post'
            });

            return response.status;
        } catch (error) {
            console.log(error);
        }
    };

    getUser = async (id) => {
        //path
        const path = '/users';
        //url
        const url = this.host + path;

        //request
        try {
            const response = await fetch(`${url}/${id}?delay=2`);
            const parsedResponse = await response.json();

            return parsedResponse.data;
        } catch (error) {
            console.log(error);
        }
    };

    // getUsers = async (pageNum, perPage) => {
    //     //path
    //     const path = '/users';
    //     //url
    //     const url = this.host + path;

    //     //request
    //     try {
    //         const response = await fetch(`${url}?delay=2&page=${pageNum}&per_page=${perPage}`);
    //         const parsedResponse = await response.json();

    //         return parsedResponse;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
}

export default new API();
