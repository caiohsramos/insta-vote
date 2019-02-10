import axios from 'axios'

const BASE_URL = 'http://localhost:3001'


const newPost = async (url) => {
    await axios.post(BASE_URL + '/new_post', {
        url
    })
}

const getFeed = async () => {
    return await axios.get(BASE_URL + '/feed')
}

const getBattle = async () => {
    return await axios.get(BASE_URL + '/battle')
}

const postBattle = async (winner, looser) => {
    await axios.post(BASE_URL + '/compute', {
        winner,
        looser
    })
}

export { newPost, getFeed, getBattle, postBattle }
