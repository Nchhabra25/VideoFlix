import axios from 'axios';
const URL='https://youtube-v31.p.rapidapi.com'
const options = {
  url: URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchfromapi=async(url)=>{
  const {data}=await axios.get(`${URL}/${url}`,options)
  return data;
}

