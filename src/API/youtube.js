import axios from 'axios';
const KEY = 'AIzaSyC3CR7HFXvYhJDemaEE5f82ZvH7SUb8GDQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})