import axios from "axios";


/**
 * It makes a request to the CoinStats API, and returns a promise that resolves to the response data
 * @param limit - The number of results to return.
 * @returns A promise
 */
export const listCripto = (limit) => {
  const config = {
    method: 'get',
    url: `https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit}&currency=MXN`,// cambiar currency,
    headers: {}
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(error.response);
      });
  });
}

/**
 * It makes a request to the CoinStats API and returns the response
 * @param id - The id of the coin you want to get the history for.
 */
export const getHistorico = (id) => {

  const config = {
    method: 'get',
    url: `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${id}`,
    headers: {}
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.chart);
        }
      })
      .catch((error) => {
        reject(error.response);
      });
  });

}

/**
 * It makes a GET request to the CoinStats API and returns the latest news
 * @returns An array of news objects.
 */
export const getNews = () => {

  let config = {
    method: 'get',
    url: 'https://api.coinstats.app/public/v1/news/latest?skip=0&limit=20',
    headers: {}
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.news);
        }
      })
      .catch((error) => {
        reject(error.response);
      });
  });

}