import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID ce8262adaa2628ed37b61d1a9b00a77106566a7cb093d84bbb39ffb64177fbe0"
    }
});