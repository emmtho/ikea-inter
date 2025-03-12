import Grid from "@mui/material/Grid2";
import { 
    TextField,
    FormControl,
    Autocomplete,
    Button,
    Typography
} from '@mui/material';
import { useEffect, useState } from "react";
import jsonData from "../../data.json";
import { useAppContext } from '../../provider/AppContextProvider';

export const Create = () => {
    const { saveProductToContext } = useAppContext();
    const [productTypeOptions, setProductTypeOptions] = useState(jsonData.productTypes);
    const [colourOptions, setColourOptions] = useState(jsonData.colours);
    const [name, setName] = useState('');
    const [productType, setProductType] = useState('');
    const [colours, setColours] = useState([]);
    const [success, setSuccess] = useState(false);

    const onClickButton = () => {
        saveProductToContext(
            {
                name: name,
                productType: productType,
                colours: colours,
                createdOn: new Date().toISOString().split('T')[0]
            });
        setName('');
        setProductType("");
        setColours([]);
        setSuccess(true);
    };

    useEffect(() => {
        setProductTypeOptions(jsonData.productTypes);
        setColourOptions(jsonData.colours);
      }, []);

    return (
        <>
        <Grid container>
            <Grid item size={2}></Grid>
            <Grid item size={8}>
                <Typography variant="h4">Create a new product</Typography>
                <FormControl fullWidth>
                <TextField
                    required
                    id="name"
                    label="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                      }}
                />
                <Autocomplete
                    value={productType}
                    onChange={(event, newValue) => {
                        setProductType(newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                        setProductType(newInputValue);
                    }}
                    id="productType"
                    options={productTypeOptions}
                    sx={{ pt: 2 }}
                    renderInput={(params) => <TextField {...params} label="Product Type" />}
                />
                <Autocomplete
                    multiple
                    value={colours}
                    onChange={(event, newValue) => {
                        setColours(newValue);
                    }}
                    id="colours"
                    options={colourOptions}
                    sx={{ pt: 2 }}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Colours"
                    />
                    )}
                />
                </FormControl>

                <Button
                    sx={{ mt: 1 }}
                    variant="outlined"
                    onClick={onClickButton}
                >
                    Create
                </Button>
            </Grid>
            <Grid item size={2}></Grid>
        </Grid>
        <Grid container>
            <Grid item size={2}></Grid>
            <Grid item size={8}>
            {success && (
                    <Typography variant="h6">
                    Product got added to list. 
                  </Typography>
                )}
            </Grid>
            <Grid item size={2}></Grid>
        </Grid>
        </>
    );
};