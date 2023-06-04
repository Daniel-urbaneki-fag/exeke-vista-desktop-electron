const {ipcMain, net} = require("electron")

ipcMain.on("teste", (event, user) => {
    const request = net.request({
        method: 'GET',
        protocol: 'https:',
        hostname: 'github.com',
        port: 443,
        path: '/'
      })

      request.on('response', (response) => {
        console.log(`STATUS: ${response.statusCode}`)
        response.on('error', (error) => {
          console.log(`ERROR: ${JSON.stringify(error)}`)
        })
      })

      request.on('finish', () => {
        console.log('Request is Finished')
    });
    console.log(request)
})