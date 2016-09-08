const c = require('chalk')
const fs = require('fs')
const path = require('path')
const request = require('request')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const { Observable } = require('rxjs')
const { config, api } = require('cloudinary')

Observable.create(callCloudinaryAPI)
  .flatMap(parseImageData)
  .map(createPaths)
  .flatMap(fetchMedia)
  .subscribe(
    x => console.log(c.bgBlue(x)),
    e => console.log(c.bgRed(e))
  )

function callCloudinaryAPI(observer) {
  api.resources_by_tag(
    'evturn',
    res => observer.next(res.resources), {
    max_results: 500,
    tags: true
  })
}

function parseImageData(images) {
  cleanAndMakeDirs()

  return Observable.from(images)
    .map(x => ({
      file: removeFileNameHash(x.public_id),
      url: x.url,
      format: x.format,
    }))
}

function cleanAndMakeDirs() {
  rimraf.sync('media')
  mkdirp.sync('media/site')
  mkdirp.sync('media/work')
  console.log(c.magenta('Directories created'))
}

function createPaths(data) {
  return {
    dest: path.resolve(process.cwd(), 'media/') + `${data.file}.${data.format}`,
    url: data.url
  }
}

function removeFileNameHash(fileName) {
  return fileName
    .replace(/evturn/,'')
    .replace(/_.*$/, '')
}

let blank = ' '
function fetchMedia({ url, dest }) {
  return Observable.create(observer => {
    request
      .get(url)
      .on('error', e => observer.error(e))
      .on('response', response => {
        response.pipe(fs.createWriteStream(dest))
        response.on('end', _ => {
          observer.next(blank += ' ')
        })
      })
  })
}
