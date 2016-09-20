import { Observable } from 'rxjs'
import * as Types from '../../constants'

export const mountCarousel = (slug='drive') => ({
  type: Types.MOUNT_CAROUSEL,
  payload: { slug }
})

export const unmountCarousel = _ => ({
  type: Types.UNMOUNT_CAROUSEL
})
