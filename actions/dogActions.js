export default addDog = e => ({
    type: "ADD_A_DOG",
    payload: { dog: e.target.name }
})

export default changeFavouriteDog = id => ({
    type: "SELECT_FAV_DOG",
    payload: id
})