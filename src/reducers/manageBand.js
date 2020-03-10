import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = { id: uuid(), name: action.name }
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      let idx = state.bands.findIndex(band => band.id === action.id)
      return {
        ...state, 
        bands: [...state.bands.slice(0, idx), ...state.bands.slice(idx + 1)]
      }

    default:
      return state;
  }
};
