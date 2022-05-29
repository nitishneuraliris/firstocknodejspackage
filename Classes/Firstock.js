'use strict';
const axios = require('axios');
const Validations = require('../Validations/Validations')
const Commonfunctions = require('../shared/Commonfunctions')
const API_LINK = require("../shared/Constant")



let axiosInterceptor = axios.create({
    baseURL: API_LINK,
});

const AFirstock = require("./AFirstock");

class Firstock extends AFirstock {

    constructor() {
        super();
        this.token = "";
        this.userId = "";
    }

    login({ userId, password, DOBnPAN, vendorCode, appkey }, callBack) {
        Validations.validateLogin({
            userId, password, DOBnPAN, vendorCode, appkey
        })
        axiosInterceptor.post(`login`, {
            userId,
            password,
            DOBnPAN,
            vendorCode,
            appkey
        }).then((response) => {
            const { data } = response
            this.token = data.susertoken
            this.userId = data.actid;
            const finished = (error) => {
                if (error) {
                    callBack(error, null)
                    return
                }
                else {
                    callBack(null, data)
                }
            }
            Commonfunctions.saveData({ token: data.susertoken, userId: data.actid }, "config.json", finished)

        }).catch((error) => {
            callBack(error, null)
        })
    }
    logout(callBack) {

        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`logout`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response
                    const finished = (error) => {
                        if (error) {
                            callBack(error, null)
                            return
                        }
                        else {
                            callBack(null, data)
                        }
                    }
                    Commonfunctions.saveData({ token: "", userId: "" }, "config.json", finished)

                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })

    }
    getUserDetails(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    placeOrder({
        exchange,
        tradingSymbol,
        quantity,
        price,
        product,
        transactionType,
        priceType,
        retention,
        triggerPrice
    }, callBack) {
        Validations.validateplaceOrder()
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`placeOrder`, {
                    userId,
                    actid: userId,
                    jKey,
                    exchange,
                    tradingSymbol,
                    quantity,
                    price,
                    product,
                    transactionType,
                    priceType,
                    retention,
                    triggerPrice

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    orderMargin({ exchange,
        tradingSymbol,
        quantity,
        price,
        product,
        transactionType,
        priceType, }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`orderMargin`, {
                    userId,
                    actid: userId,
                    jKey,
                    exchange,
                    tradingSymbol,
                    quantity,
                    price,
                    product,
                    transactionType,
                    priceType,

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    orderBook(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    cancelOrder(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    modifyOrder(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    singleOrderHistory(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    tradeBook(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    positionsBook(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    productConversion(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    holdings(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    limits(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    getQuotes(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    searchScripts(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    getSecurityInfo(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    getIndexList(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    getOptionChain(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    spanCalculator(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
    timePriceSeries(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId
                const jKey = data.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error, null)
                })
            }
        })
    }
}

module.exports = Firstock;