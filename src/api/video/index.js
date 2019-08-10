import axios from 'axios'

const postVideo = form =>axios.post('/api/v1/videos',form).then(res=>res.data)

const getVideo = id =>axios.post(`/api/v1/video/$(id)`).then(res=>res.data)

const getVideos = () =>axios.post('/api/v1/videos').then(res=>res.data) 

export {
    getVideos,
    getVideo,
    postVideo,  
}
