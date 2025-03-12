import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    TableSortLabel
} from '@mui/material';
import { useAppContext } from '../../provider/AppContextProvider';
import { useState } from 'react';

export const TableListing = () => {
    const { products } = useAppContext();
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('createdOn');
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const sortProducts = (array, comparator) => {
      const stabilizedArray = array.map((el, index) => [el, index]);
      stabilizedArray.sort((a, b) => {
        const orderDiff = comparator(a[0], b[0]);
        if (orderDiff !== 0) return orderDiff;
        return a[1] - b[1];
      });
      return stabilizedArray.map((el) => el[0]);
    };
  
    const descendingComparator = (a, b, orderBy) => {
      if (orderBy === 'createdOn') {
        return new Date(b.createdOn) - new Date(a.createdOn);
      }
      return 0;
    };
  
    const ascendingComparator = (a, b, orderBy) => {
      if (orderBy === 'createdOn') {
        return new Date(a.createdOn) - new Date(b.createdOn);
      }
      return 0;
    };
  
    const comparator = (a, b) => {
      if (order === 'desc') {
        return descendingComparator(a, b, orderBy);
      } else {
        return ascendingComparator(a, b, orderBy);
      }
    };
  
    const sortedProducts = sortProducts(products, comparator);

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Product type</TableCell>
                <TableCell>Colours</TableCell>
                <TableCell>
                    <TableSortLabel
                        active={orderBy === 'createdOn'}
                        direction={orderBy === 'createdOn' ? order : 'asc'}
                        onClick={(event) => handleRequestSort(event, 'createdOn')}
                    >
                    Created on
                    </TableSortLabel>
                </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {sortedProducts.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.productType}</TableCell>
                <TableCell>{row.colours.map((colour) => (
                    <Chip label={colour} />
                ))}</TableCell>
                <TableCell>{row.createdOn}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}