import React, {FC} from 'react';
import {Box, Card, createStyles, makeStyles, Modal, Theme, Typography} from "@material-ui/core";

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
    className?: string,
    title: string
}

const ModalAll: FC<DeleteListModalProps> = ({open, onClose, title, children}) => {
    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={onClose}
            className={classes.modal}>
            <Card>
                <Box p={1} bgcolor="primary.main" color="primary.contrastText">
                    <Typography variant="h6">{title}</Typography>
                </Box>
                <Box m={2}>
                    {children}
                </Box>
            </Card>

        </Modal>
    )
}

export default ModalAll;
