import React, {FC} from 'react'
import {AppBar, Box, Container, Typography} from "@material-ui/core";


const Header: FC = () => {
    return (
        <AppBar position="static">
            <Container>
                <Box p={1}>
                    <Typography variant="h4">
                        Task List
                    </Typography>
                </Box>
            </Container>
        </AppBar>
    )
}

export default Header;
