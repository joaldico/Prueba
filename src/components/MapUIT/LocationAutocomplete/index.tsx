import { FC, useEffect, useState } from 'react';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

import AutocompleteMaps from '../../../components/AutocompleteMaps/AutocompleteMaps';

type LocationAutocompleteProps = {
  // eslint-disable-next-line
  id?: any;
  label?: any;
  placeholder?: any;
  value?: any;
  error?: any;
  required?: any;
  inputValue?: any;
  onChange?: any;
  onInputChange?: any;
  onKeyUp?: any;
  apiKey?: any;
  predictionCodeLanguage?: any;
  inputId?: any;
  state?: any;
  setState?: any;
};

const LocationAutocomplete: FC<LocationAutocompleteProps> = ({
  id,
  label,
  placeholder,
  value,
  error,
  required,
  inputValue,
  onChange,
  onInputChange,
  onKeyUp,
  apiKey,
  predictionCodeLanguage,
  inputId,
  state,
  setState,
  ...other
}) => {
  const [options, setOptions] = useState<any>([]);
  const { placesService, placePredictions, getPlacePredictions } = usePlacesService({
    apiKey: apiKey,
    language: predictionCodeLanguage,
  });
  const [isLoad, setIsLoad] = useState(false);
  const [searchValue, setSearchValue] = useState<any>('');

  useEffect(() => {
    const getData = setTimeout(() => {
      getPlacePredictions({ input: searchValue?.target?.value });
    }, 2000);

    return () => clearTimeout(getData);
  }, [searchValue]);

  useEffect(() => {
    state[inputId] = { valueSelected: '', inputText: '' };
    setIsLoad(true);
  }, []);

  useEffect(() => {
    if (placePredictions.length && placesService) {
      const results = placePredictions.map((item) => ({
        label: item.description,
        value: item.place_id,
      }));
      setOptions(results);
    }
  }, [placePredictions]);

  const handleInputText = (value: any) => {
    const stateCopy = { ...state };
    stateCopy[inputId].inputText = value;
    setState(stateCopy);
  };

  const handleValueSelected = (value: any) => {
    const stateCopy = { ...state };
    stateCopy[inputId].valueSelected = value;
    setState(stateCopy);
  };

  const onChangeSearch = (value: any) => {
    placesService?.getDetails(
      {
        placeId: value.value,
      },
      (placeDetails) => {
        handleInputText(placeDetails!.formatted_address);
        handleValueSelected(value);
        onChange(placeDetails, inputId, label);
      }
    );
  };

  const onChangeInput = (evt: any) => {
    if (evt) {
      handleInputText(evt.target.value);
      if (evt.target.value && evt.target.value.length >= 3) {
        setSearchValue(evt);
      } else {
        setSearchValue({ target: { value: '' } });
        setOptions([]);
      }
    }
  };

  return (
    <>
      {isLoad && (
        <AutocompleteMaps
          value={state[inputId].valueSelected}
          inputValue={state[inputId].inputText}
          label={label}
          onChange={onChangeSearch}
          defaultValue="Buscar"
          options={options}
          placeholder={placeholder}
          required
          onInputChange={onChangeInput}
          error={error}
          fullWidth
          disableClearable
          {...other}
        />
      )}
    </>
  );
};

export default LocationAutocomplete;
