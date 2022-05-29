const fs = require('fs');

const saveData = (data, file, callback) => {

    const jsonData = JSON.stringify(data, null, 2)
    fs.writeFile("config.json", jsonData, callback)
}

const readData = (callback) => {
    fs.readFile("config.json", 'utf-8', (err, jsonString) => {
        if (err) {
            callback(err, null)
        }
        else {
            try {
                const data = JSON.parse(jsonString)
                if (checkifUserLoggedIn(data)) {
                    callback(null, data)
                }
                else {
                    callback("Please login to Firstock", null)
                }

            }
            catch (error) {
                callback(error, null)
            }


        }
    })
}

const checkifUserLoggedIn = ({ userId, token }) => {
    if (!userId || !token) {
        return false
    }

    return true

}

module.exports = {
    saveData,
    readData
}