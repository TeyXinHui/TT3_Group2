import Model from "./model";

class User extends Model {
  constructor() {
    super();
    this.ticker = {
      symbol: "TTK",
      name: "techtrek",
    };
  }
  login(username, password) {
    return new Promise((res, rej) => {
      this.post("/techtrek/login", {
        username: username,
        password: password,
      })
        .then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          res(user);
        })
        .catch((err) => {
          localStorage.setItem("user", JSON.stringify({}));
          rej(err);
        });
    });
  }
}

export default User;
