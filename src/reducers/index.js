const xhr = new XMLHttpRequest();
xhr.open('GET', '/clients.json', false);
xhr.send();
const clients = JSON.parse(xhr.responseText);

let initialState = {
  clients,
  currentClient: null
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_CLIENT':
      return {
        ...state,
        currentClient: action.client
      };
  
    default:
      return state;
  }
}
