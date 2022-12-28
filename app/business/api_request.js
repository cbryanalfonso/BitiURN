import axios from "axios";


export const listCripto = () => {
  const config = {
    method: 'get',
    url: 'https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD',
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
          resolve(response.data.chart);
        }
      })
      .catch((error) => {
        reject(error.response);
      });
  });

}