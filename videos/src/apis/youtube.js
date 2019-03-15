import axios from 'axios';
const KEY = 'AIzaSyCYQracBbAbrFXpQY_b4UOPbwJH7m_53Rs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
