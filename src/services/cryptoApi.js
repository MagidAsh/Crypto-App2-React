const BASE_URl = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-NNk2RREmwN9MgcSo6cEChPGr";

const getCoinList = (page , currency) => `${BASE_URl}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&&x_cg_demo_api_key=${API_KEY}`

const searchCoin = (query) => `${BASE_URl}/search?query=${query}&&x_cg_demo_api_key=${API_KEY}`

const marketChart = (coin , currency) => `${BASE_URl}/coins/${coin}/market_chart?vs_currency=${currency}&days=7`
export {getCoinList , searchCoin , marketChart}