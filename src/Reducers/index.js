const initialState = {
    loading: true,
    error: '',
    profiles: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                profiles: action.payload,
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                profiles: [],
                error: 'Something went wrong!',
            }

        default:
            return state;
    }
}

const GlobalState = {
    initialState,
    reducer,
}

export default GlobalState