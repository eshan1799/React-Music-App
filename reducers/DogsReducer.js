const initState = { 
    favourite: null,
    dogs: [
    {
        id: 1,
        name: 'chow chow'
    },
    {
        id: 2,
        name: 'golden retriever'
    },
    {
        id: 3,
        name: 'samoyed'
    },
    {
        id: 4,
        name: 'german shepard'
    }
]}

const dogsReducer = (state=initState, action) => {

    switch(action.type) {
        case 'ADD_A_DOG':
            const newDog = action.payload;
        return { ...state, dogs: [...state.dogs, newDog] };
        
        case 'SELECT_FAVE_DOG':
            const favDog = state.dogs.find( d => d.id === action.payload.id);
        return { ...state, favourite: favDog }

        case 'UPDATE_A_DOG':
            const dogToUpdate = state.dogs.find( d => d.id === action.payload.id);
            const index = state.dogs.indexOf(dogToUpdate);
            const updatedDogs = [ ...state.dogs.slice(0, index), action.payload, ...state.dogs.slice(index + 1, state.dogs.length - 1) ]
        return { ...state, dogs: updatedDogs }

        default:
            return state 
    }

}

export default dogsReducer