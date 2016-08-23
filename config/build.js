const request = require('request')
const mkdirp = require('mkdirp')
const rimrafSync = require('rimraf').sync
const c = require('chalk')
const { Observable } = require('rxjs')
const { config, api } = require('cloudinary')

Observable.create(receiveImages)
  .subscribe(parseImageData)

function receiveImages(observer) {
  return callCloudinaryAPI(res => observer.next(res))
}

function callCloudinaryAPI(resFn) {
  api.resources_by_tag('evturn', resFn, {
    max_results: 500,
    tags: true
  })
}

function parseImageData(res) {
  return Observable.from(res.resources)
    .reduce(sortByTag, { site: [], work: [] })
    .do(x => c.blue(x))
    .subscribe(x => console.log(x))
}

function sortByTag(acc, x) {
  console.log(x)
  if (x.tags.includes('work')) {
    acc.work = acc.work.concat([x.url])
  } else {
    acc.site = acc.site.concat([x.url])
  }
  return acc
}

function handleReponse(error, response, body) {
  if (error) {
    handleError(error)
  }
  checkStatus(response)
  parseBody(body)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log(`Status ${response.status}`)
    return response
  }
}

function handleError(error) {
  console.log(`Network error: ${error}`)
  return error
}

function parseBody(body) {
  if (body) {
    console.log(body)
    console.log(typeof body)
  }
}

/*
function fetchAndPipeToWriteStream(paths) {
  return new Promise((resolve, reject) => {
    request
      .get(paths.src)
      .on('error', err => reject(`Error fetching public permalink - ${err} ☠️`))
      .on('response', response => {
        response.pipe(fs.createWriteStream(paths.dest))
        response.on('end', _ => resolve())
      })
  })
}
*/
