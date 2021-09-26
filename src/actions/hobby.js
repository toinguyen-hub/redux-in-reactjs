
//Hàm nhận tham số và tạo ra 1 action tương ứng
// Những action thì sẽ tương ứng với các reducer
export const addNewHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        payload: hobby,
    }
}

export const setActiveHobby = (hobby) => {
    return {
        type: 'SET_ACTIVE_HOBBY',
        payload: hobby,
    }
}