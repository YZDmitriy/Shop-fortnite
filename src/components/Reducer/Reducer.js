export function reducer(state, {type, payload}) {
  switch(type) {
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertNAme: ''
      }
      case 'REMOVE_FROM_BASKET':
        return {
          ...state,
          order: state.order.filter(el => el.id !== payload.id)
        }


    default: 
    return state;
  }
}
