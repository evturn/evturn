import iOS from './ios'
import OSS from './oss'
import sections from './sections'
import contact from './contact'
import playlist from './videos'
import nav from './nav'
import bio from './bio'
import carousel from './carousel'

export default {
  slideshow: carousel,
  video: { playlist },
  site: {
    nav,
    contact,
    ...bio,
    iOS,
    OSS,
    sections
  },
}
