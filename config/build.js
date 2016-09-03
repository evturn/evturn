const fs = require('fs')
const request = require('request')
const mkdirp = require('mkdirp')
const rimrafSync = require('rimraf').sync
const c = require('chalk')
const { Observable } = require('rxjs')
const { config, api } = require('cloudinary')


function receiveImages(observer) {
  return callCloudinaryAPI(res => observer.next(res.resources))
}

Observable.create(receiveImages)
  .flatMap(parseImageData)
  .map(createPaths)
  .subscribe(x => console.log(x))

function callCloudinaryAPI(resFn) {
  api.resources_by_tag('evturn', resFn, {
    max_results: 500,
    tags: true
  })
}

function parseImageData(images) {
  return Observable.from(images)
    .map(x => ({
      folder: getImageFolderDir(x.tags),
      file: removeFileNameHash(x.public_id),
      url: x.url,
      format: x.format,
    }))
}

function createPaths(data) {
  return {
    dest: `media/${data.folder}/${data.file}.${data.format}`,
    url: data.url
  }
}

function getImageFolderDir(tags) {
  return tags.filter(x => x !== 'evturn')[0]
}

function removeFileNameHash(fileName) {
  return fileName.replace(/_.*$/, '')
}

function fetchMedia(url, dest) {
  request
    .get(url)
    .on('error', handleError)
    .on('response', response => {
      response.pipe(fs.createWriteStream(dest))
      response.on('end', _ => console.log(c.bgBlue('Success')))
    })
}

function handleError(error) {
  console.log(`Network error: ${error}`)
  return error
}


