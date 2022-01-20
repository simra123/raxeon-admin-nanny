
import axios from 'axios'

export default axios.create({
    baseURL: `http://localhost:4000`
    // baseURL: `https://evening-inlet-11817.herokuapp.com`
    // baseURL :  `https://polar-plateau-76416.herokuapp.com/`
})