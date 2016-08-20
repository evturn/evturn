
const request = require('request')
const { Observable } = require('rxjs')
const { config, api } = require('cloudinary')

const options = { max_results: 500, tags: true }
const byTag = { site: [], work: [] }

api.resources_by_tag('evturn', parseImageData, options)

function parseImageData(res) {
  return Observable.from(res.resources)
    .reduce(sortByTag, byTag)
    .flatMap()
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
