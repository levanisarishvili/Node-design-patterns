

class FS_Proxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  readFile(path, foramat, callback) {
    if(!path.match(/.md$|.MD$/)) {
      return callback(new Error('Can only read md files'))
    }

    this.fs.readFile(path, foramat, (err, contents) => {

      if(err) {
        console.log(err)
        return callback(err)
      }

      return callback(null, contents)
    })
  }
}

module.exports = FS_Proxy