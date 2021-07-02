import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import SelectList from './SelectList';
import {RootState} from "../store";
import AddNewTask from "./AddNewTask";
import Tasks from "./Tasks";


const MainContent: FC = () => {
    const selectedList = useSelector((state: RootState) => state.list.selectedList);

    return (
        <div className="column is-9">
            <div className="box">
                <SelectList/>
                <br/>
                {
                    selectedList &&
                    <>
                        <AddNewTask list={selectedList}/>
                        <br/>
                        <Tasks tasks={selectedList.tasks}/>
                    </>
                }
            </div>
        </div>
    );
}

export default MainContent;
