import Grid from '@mui/material/Grid2';
import { TableListing } from '../Table/Table';

export const Listing = () => {
    return (
        <Grid container spacing={2}>
            <Grid item size={2}></Grid>
            <Grid item size={8}>
                <TableListing />
            </Grid>
            <Grid item size={2}></Grid>
        </Grid>
    );
};
