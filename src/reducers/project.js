'use strict';
const initialState = {};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PROJECT_ID':
      console.log(action);
      return Object.assign({}, state, {
        id: state.id
      });
    case 'SET_PROJECT_IMAGES':
      console.log(action);
      return Object.assign({}, state, {
        images: [
          state.images
        ]
      });
    case 'SET_PROJECT_NAME':
      console.log(action);
      return Object.assign({}, state, {
        name: state.name
      });
    case 'SET_PROJECT_DESCRIPTION':
      console.log(action);
      return Object.assign({}, state, {
        description: state.description
      });
    case 'SET_PROJECT_TECH':
      console.log(action);
      return Object.assign({}, state, {
        tech: [
          { name: state.tech.name,
            icon: state.tech.icon
          }
        ]
      });
    case 'SET_PROJECT_LINKS':
      return Object.assign({}, state, {
        links: [
          {
            url: state.links.url,
            icon: state.links.icon
          }
        ]
      });
    default:
      return state;
    }
}