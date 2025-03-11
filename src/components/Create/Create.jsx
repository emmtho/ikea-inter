import Grid from "@mui/material/Grid2";
import { 
    TextField,
    FormControl,
    Autocomplete,
    Button
} from '@mui/material';
import { useEffect, useState } from "react";
import jsonData from "../../products.json";

export const Create = () => {
    const [productTypeOptions, setProductTypeOptions] = useState(jsonData.productTypes);
    const [colourOptions, setColourOptions] = useState(jsonData.colours);
    const [name, setName] = useState();
    const [productType, setProductType] = useState();
    const [colours, setColours] = useState([]);

    const onClickButton = () => {
        // Here we need to save to Context
    };

    useEffect(() => {
        setProductTypeOptions(jsonData.productTypes);
        setColourOptions(jsonData.colours);
      }, []);

    return (
        <Grid container>
            <Grid item size={2}></Grid>
            <Grid item size={8}>
                <h2>Create a new product</h2>
                <FormControl fullWidth>
                <TextField
                    required
                    id="Name"
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
    );
};