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
    placeOrder(callBack) {
        Validations.validateplaceOrder()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    orderMargin(callBack) {
        Validations.validateorderMargin()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    orderBook(callBack) {
        Validations.validateorderBook()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    cancelOrder(callBack) {
        Validations.validatecancelOrder()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    modifyOrder(callBack) {
        Validations.validatemodifyOrder()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    singleOrderHistory(callBack) {
        Validations.validatesingleOrderHistory()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    tradeBook(callBack) {
        Validations.validatetradeBook()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    positionsBook(callBack) {
        Validations.validatepositionsBook()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    productConversion(callBack) {
        Validations.validateproductConversion()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    holdings(callBack) {
        Validations.validateholdings()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    limits(callBack) {
        Validations.validatelimits()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    getQuotes(callBack) {
        Validations.validategetQuotes()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    searchScripts(callBack) {
        Validations.validatesearchScripts()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    getSecurityInfo(callBack) {
        Validations.validategetSecurityInfo()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    getIndexList(callBack) {
        Validations.validategetIndexList()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    getOptionChain(callBack) {
        Validations.validategetOptionChain()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    spanCalculator(callBack) {
        Validations.validatespanCalculator()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
    timePriceSeries(callBack) {
        Validations.validatetimePriceSeries()
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then((response) => {
            const { data } = response
            callBack({}, data)
        }).catch((error) => {
            callBack(error, {})
        })
    }
}

module.exports = Firstock;