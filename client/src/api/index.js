import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://mernbookgram.herokuapp.com:3000',
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