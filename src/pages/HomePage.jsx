import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby } from '../actions/hobby';
import { setActiveHobby } from '../actions/hobby';
HomePage.propTypes = {

};

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
}


function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    const dispatch = useDispatch();

    console.log("Hobby List: ", hobbyList);

    const handleAddHobbyClick = () => {
        //random a hobby object : id + title
        const newId = randomNumber();
        const newHobby = {
            // id: casual.uuid,
            // title: casual.title,
            id: newId,
            title: `Hobby ${newId}`,
        };

        //Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);   //dispatch lên redux store
    }

    const handleHobbyClick = (hobby) => {
        //tạo object actions
        const action = setActiveHobby(hobby);
        //dispatch lên Store
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>DEMO REDUX HOOKS</h1>
            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} />
        </div>
    );
}

export default HomePage;