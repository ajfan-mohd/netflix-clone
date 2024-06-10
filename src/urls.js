import {API_KEY} from './constants/Constants'
export const originals=`discover/tv?api_key=${API_KEY}&with_networks=213`
export const action=`discover/movie?api_key=${API_KEY}&with_genres=28`
export const Horror=`discover/movie?api_key=${API_KEY}&with_genres=27`
export const Romance=`discover/movie?api_key=${API_KEY}&with_genres=10749`
export const trending =`trending/all/week?api_key=${API_KEY}&language=en-US`
export const Comedy= `discover/movie?api_key=${API_KEY}&with_genres=35`
export const Documentaries=`discover/movie?api_key=${API_KEY}&with_genres=99`
export const Popular=`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${API_KEY}`
export const Upcoming =`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`