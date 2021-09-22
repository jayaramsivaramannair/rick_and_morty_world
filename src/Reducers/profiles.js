const initialState = {
    loading: true,
    error: '',
    profiles: [],
}

const profileReducer = (state = initialState, action) => {
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

        case 'FETCH_PROGRESS':
            return {
                loading: true,
                profiles: [],
                error: ''
            }

        default:
            return state;
    }
}

export default profileReducer