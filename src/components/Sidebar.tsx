import React, { FC } from 'react';
import CreateNewList from './CreateNewList';
import Lists from './Lists';

const Sidebar: FC = () => {
    return(
        <>
            <CreateNewList />
            <br/>
            <Lists />
        </>
    );
}

export default Sidebar;
