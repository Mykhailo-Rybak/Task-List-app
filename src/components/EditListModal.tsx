import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {List} from '../store/types';
import {setListToEdit, updateList} from '../store/actions';
import {Box, Button, TextField} from "@material-ui/core";
import ModalAll from "./Modal/ModalAll";


interface EditListModalProps {
    list: List;
}

const EditListModal: FC<EditListModalProps> = ({list}) => {
    const dispatch = useDispatch();
    const [listName, setListName] = useState(list.name);


    const submitHandler = (event: {}) => {
        const e = event as React.FormEvent<HTMLFormElement>;
        e.preventDefault();

        if (listName.trim() === '') {
            return alert('List name is required!');
        }

        if (listName.trim() === list.name) {
            return alert('List name is the same as before!');
        }

        dispatch(updateList(list.id, listName.trim()));
    }

    const changeHandler = (event: {}) => {
        const e = event as React.FormEvent<HTMLFormElement>;

        setListName(e.currentTarget.value);
    }

    const hideModalHandler = () => {
        dispatch(setListToEdit(''));
    }

    return (
        <ModalAll open={!!list}
                  onClose={hideModalHandler}
                  title='Edit List'>
            <form onSubmit={submitHandler}>
                <TextField variant="outlined" label="List Name"
                           value={listName}
                           onChange={changeHandler}/>
                <Box display="flex" pt={3}>
                    <Box pr={1}>
                        <Button variant="contained" color="primary" type="submit">Save changes</Button>
                    </Box>
                    <Button variant="contained" onClick={hideModalHandler}>Cancel</Button>
                </Box>
            </form>
        </ModalAll>
    )
}

export default EditListModal;
