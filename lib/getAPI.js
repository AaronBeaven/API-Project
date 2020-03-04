const request = require('request');
const {promisify} = require('util'); // required part of the util module - the full utill module  is quite big, snd we dont want all off it

const promisifiedRequest = promisify(request);

const getWeather = async ()=>{
    let data = await promisifiedRequest({
        uri:`https://api.openweathermap.org/data/2.5/weather?q=Wigan,uk&units=metric&APPID=${process.env.APPID}`,
        json:true
    })
    return data.body
}

const getHarryPotter = async ()=>{
    let data = await promisifiedRequest({
        uri:`https://www.potterapi.com/v1/sortingHat`,
        json:true
    })
    return data.body
}

const getJokes = async ()=>{
    let data = await promisifiedRequest({
        uri:`https://api.chucknorris.io/jokes/random`,
        json:true
    })
    return data.body
}
const getBored = async ()=>{
    let data = await promisifiedRequest({
        uri:`https://www.boredapi.com/api/activity`,
        json:true
    })
    return data.body
}
const quotes = async ()=>{
    let data = await promisifiedRequest({
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        qs: {language_code: 'en'},
        headers: {
            'x-rapidapi-host': 'quotes15.p.rapidapi.com',
            'x-rapidapi-key': '5fb402ba8amsh99771f4303ded9ap1f7835jsn8a574e55b721'
        },
        json: true
    })

    return data.body.content

}

module.exports = {getWeather, getHarryPotter, getJokes, getBored, quotes}