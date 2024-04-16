import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import { FC } from 'react';

type Props = {
  options: any;
  serviceSearch: any;
  setServiceSearch: any;
};

const SearchInput: FC<Props> = ({ options, serviceSearch, setServiceSearch }) => {
  return (
    <Autocomplete
      freeSolo
      id="auto"
      disableClearable
      options={options.map((option: any) => option.label)}
      value={serviceSearch}
      onChange={(event: any, newValue: string | null) => {
        setServiceSearch(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          value={serviceSearch}
          onChange={(e) => setServiceSearch(e.target.value)}
          variant="outlined"
          size="small"
          fullWidth
          placeholder={'Buscar servicio'}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            style: {
              borderRadius: '20px',
              backgroundColor: 'white',
              fontSize: '0.875rem',
            },
            type: 'search',
            color: 'secondary',
          }}
        />
      )}
    />
  );
};

export default SearchInput;
