import axios from 'axios';
const KEY = 'AIzaSyCRq260135ZY1OEEmotiI_lEizHV1TddLQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})