const BASE_URl = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-NNk2RREmwN9MgcSo6cEChPGr";

const getCoinList = (page) => {
    return `${BASE_URl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&&x_cg_demo_api_key=${API_KEY}`
}

export {getCoinList}