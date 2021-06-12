const https = require('http')
const options = {
    hostname: 'localhost',
    port: 8080,
    path: '/pizza',
    method: 'GET',
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()