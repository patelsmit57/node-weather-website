const request = require('request') 
const forecast = (latitude, longitude, calback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=c18d6cde0f83423faab52814201211&q=' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {
        if(error) {
            calback('Unable to connect to wearther service!', undefined)
        }else if (body.error){
            calback('Unable to find location ', undefined)
        }else {
            calback(undefined,' It is currently ' + body.current.temp_c + ' degress out. there is a ' + body.current.cloud + '% chance of rain')
        }
    })
}
module.exports = forecast
