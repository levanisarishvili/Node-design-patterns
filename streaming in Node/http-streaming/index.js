const { createServer } = require('http')
const { stat, createReadStream, createWriteStream } = require('fs')
const { promisify } = require('util')
const multiparty = require('multiparty')

const fileName = '../duplex-stream/powder-day.mp4'
const fileInfo = promisify(stat)

const respondWithVideo = async (req, res) => {
  try {
      const { size } = await fileInfo(fileName)
      const range = req.headers.range

      // Able to skip video
        if(range) {
          let [start, end] = range.replace(/bytes=/, '').split('-')
          start = parseInt(start, 10)
          end = end ? parseInt(end, 10) : size - 1

          res.writeHead(206, {
              'Content-Range': `bytes ${start}-${end}/${size}`,
              'Accept-Ranges': 'bytes',
              'Content-Length': (end - start) + 1,
              'Content-Type': 'video/mp4',
          })

          createReadStream(fileName, {start, end }).pipe(res)
      } else {
          res.writeHead(200, {
              'Content-Length': size,
              'Content-Type': 'video/mp4',
          })
          createReadStream(fileName).pipe(res)
      }
  } catch (err) {
      console.log(err)
  }
}

createServer((req, res) => {
  if(req.method === 'POST') {
    // // Write on browser
    // req.pipe(res)
    // // Write in terminal
    // req.pipe(process.stdout) 
    // // Write down in file   
    // req.pipe(createWriteStream('./upload.txt')) 
    
    let form = new multiparty.Form()
    form.on('part', (part) => {
        part.pipe(createWriteStream(`./${part.filename}`))
            .on('close', () => {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end(`<h1>File uploaded: ${part.filename}</h1>`)
            })
    })
    form.parse(req)

  } else if(req.url === '/video') {
    respondWithVideo(req, res)
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`
      <form enctype="multipart/form-data" method="POST" action="/">
        <input type="file" name="upload-file" />
        <button>Upload file</button>
      </form>
    `)
  }
}).listen(3000, () => console.log('Server running on port: 3000'))