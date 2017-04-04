import * as types from '../actions/actionTypes'

export default function homeReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      var posts = [...state, Object.assign({}, action.post)
      ];
      return posts;

    default:
      return state;
  }
}
