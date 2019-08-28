import {HOST} from 'js/config'
import axios from 'axios'

function getSearchList(keyword) {
    const url = HOST + `/search/suggest?keywords=${keyword}&type=mobile`
    return axios.get(url)
}

function searchSong(keyword,limit=20,offset=0) {
    const url = HOST + `/search?keywords=${keyword}&limit=${limit}&offset=${offset}`
    return axios.get(url)
}

function searchSinger(keyword) {
    const url = HOST + `/search?keywords=${keyword}&type=100`
    return axios.get(url)
}

function searchAlbum(keyword) {
    const url = HOST + `/search?keywords=${keyword}&type=10`
    return axios.get(url)
}

export {
    getSearchList,
    searchSong,
    searchSinger,
    searchAlbum
}