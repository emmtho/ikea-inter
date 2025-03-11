import Grid from '@mui/material/Grid2';
import { TableListing } from '../Table/Table';

export const Listing = () => {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <TableListing />
            </Grid>
        </Grid>
    );
};
