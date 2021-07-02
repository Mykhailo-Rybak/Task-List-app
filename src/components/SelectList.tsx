import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {List} from '../store/types';
import {setSelectedList} from '../store/actions';
import {RootState} from "../store";
import {Box, Card, FormControl, InputLabel, makeStyles, Select, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    formControl: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    input: {
        width: '360px',
        textAlign: 'center',
    "@media (max-width: 430px)": {
        width: '210px'
    }
    },

}));


const SelectList: FC = () => {
    const dispatch = useDispatch();
    const lists = useSelector((state: RootState) => state.list.lists);
    const classes = useStyles();


    const selectChangeHandler = (event: {}) => {
        const e = event as React.FormEvent<HTMLFormElement>;
        dispatch(setSelectedList(e.currentTarget.value));
    }

    return (

        <Card>
            <Box p={1} bgcolor="primary.main" color="primary.contrastText" display='flex' justifyContent='center'>
                <Typography variant="h5">Choose a List</Typography>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Box m={5.5}>
                    <FormControl className={classes.formControl} variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">Select List</InputLabel>
                        <Select className={classes.input}
                                native
                                onChange={selectChangeHandler}
                                label="Select List"
                        >
                            <option value="">Select List</option>
                            {Object.keys(lists).length > 0 &&
                            Object.values(lists).map((list: List) => (
                                <option key={list.id} value={list.id}>{list.name}</option>
                            ))
                            }
                        </Select>

                    </FormControl>
                </Box>
            </Box>
        </Card>
    );
}

export default SelectList;
