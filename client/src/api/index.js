import Axios from 'axios';

const api = Axios.create({
    // headers : {'Access-Control-Allow-Origin': 'https://dock-frontend.herokuapp.com' },
    // baseURL: process.env.REACT_APP_MONGODB_URL
    baseURL: 'http://localhost:3000',
});

const googleLogin = async response => {
    try {
        const result = await api.post('/bookreacts/googlelogin', { tokenId: response.tokenId });
        localStorage.setItem('login', JSON.stringify(result.data.user));
        window.location.href = '/home';
    } catch(err) {
        console.log(err)
    }
}

const apis = {
    googleLogin
};

export default apis