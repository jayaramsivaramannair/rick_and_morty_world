import rickMorty from '../apis/rickMorty';

export const startFetching = () => {
  return {type: 'FETCH_PROGRESS'}
}

export const finishFetching = (pageId) => async dispatch => {
  const response = await rickMorty.get(`/?page=${pageId}`)
  console.log(response)
  dispatch({type: 'FETCH_SUCCESS', payload: response.data.results})
}

export const fetchingError = () => {
  return {type: 'FETCH_ERROR'}
}