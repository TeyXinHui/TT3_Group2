import axios from "axios";

class Model {
    constructor() {
        this.apiendpoint =
            "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com";
        this.apikey = "PXeFPCR73iU4khaSqcRM1KBX5SblxPm4R1Rzt07a";
    }
    get(relativepath, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${this.apiendpoint}${relativepath}`, {
                    params: params,
                    headers: {
                        "x-api-key": this.apikey,
                    },
                })
                .then((resp) => {
                    resolve(resp.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
    post(relativepath, data) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${this.apiendpoint}${relativepath}`, data, {
                    headers: {
                        "x-api-key": this.apikey,
                    },
                })
                .then((resp) => {
                    resolve(resp.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

export default Model;
