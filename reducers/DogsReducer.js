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
            const dogToUpdateID = state.dogs.find( d => d.id === action.payload.id);
            const dogToUpdateIndex = state.dogs.indexOf(dogToUpdateID);
            const updatedDogs = [ ...state.dogs.slice(0, dogToUpdateIndex), action.payload, ...state.dogs.slice(dogToUpdateIndex + 1, state.dogs.length - 1) ]
        return { ...state, dogs: updatedDogs }

        case 'DELETE_A_DOG':
            const dogToDeleteID = state.dogs.find( d => d.id === action.payload.id);
            const dogToDeleteIndex = state.dogs.indexOf(dogToDeleteID);
            const deletedDogs = [ ...state.dogs.slice(0, dogToDeleteIndex), ...state.dogs.slice(dogToDeleteIndex + 1) ];
            return { ...state, dogs: deletedDogs }

        default:
            return state 
    }

}

export default dogsReducer