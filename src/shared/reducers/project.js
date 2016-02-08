export default function project(state = {
  thumbnails: [],
  slides: [],
  tech: [],
  total: null,
  name: null,
  description: null,
  id: null,
  links: null,
  mounted: false
}, action) {
  switch (action.type) {
    case 'PROJECT_LOADED':
      return Object.assign({}, state, {
        tech: action.tech,
        slides: action.slides,
        name: action.name,
        description: action.description,
        id: action.id,
        links: action.links,
        thumbnails: action.thumbnails,
        mounted: true
      });
    default:
      return state;
  }
}