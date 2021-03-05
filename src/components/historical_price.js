import axios from 'axios';

const API_URL = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical?';

class HistoricalPriceService {
  getHistoricalPrice() {

      return axios.post(API_URL, {
        'x-api-key': 'PXeFPCR73iU4khaSqcRM1KBX5SblxPm4R1Rzt07a'
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }

}

export default new HistoricalPriceService();
