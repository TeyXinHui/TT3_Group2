import Model from "./model";

class Asset extends Model {
    constructor() {
        super();
        this.ticker = {
            symbol: "TTK",
            name: "techtrek",
        };
    }
    buy(accountKey, amount) {
        return this.post(`/${this.ticker.name}/transactions/add`, {
            accountKey: accountKey,
            orderType: "BUY",
            assetAmount: amount,
        });
    }
    sell(accountKey, amount) {
        return this.post(`/${this.ticker.name}/transactions/add`, {
            accountKey: accountKey,
            orderType: "SELL",
            assetAmount: amount,
        });
    }
    balance(accountKey) {
        return this.post(`/${this.ticker.name}/balance`, {
            accountKey: accountKey,
        });
    }
}

export default Asset;
