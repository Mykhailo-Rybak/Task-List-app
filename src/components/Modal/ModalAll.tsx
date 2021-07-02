import React, {FC} from 'react';
import {createStyles, makeStyles, Theme, Modal} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            padding: theme.spacing(1),
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: theme.shadows[5],
        },
    }),
);

interface DeleteListModalProps {
    open: boolean;
    onClose: () => void;
    children: JSX.Element,
    className?: string
}

const ModalAll: FC<DeleteListModalProps> = ({open, onClose, children}) => {
    const classes = useStyles();


    return (
        <Modal
            open={open}
            onClose={onClose}
            className={classes.modal}
        >
                {children}
        </Modal>
    )
}

export default ModalAll;
