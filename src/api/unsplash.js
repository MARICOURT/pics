import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID YAv8VoEOuIpd8giyQ5sVVb6G3DSfBGoPqV1DWLp8ak8'
    }
});