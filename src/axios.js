import axios from 'axios'

const instance=axios.create({  //go from google
    baseURL:"https://api.themoviedb.org/3"
})


export default instance;