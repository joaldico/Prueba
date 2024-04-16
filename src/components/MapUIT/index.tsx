import { Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import GoogleMapEngine from './Engines/GoogleMapEngine';
import LocationAutocomplete from './LocationAutocomplete';
import { useStyles } from './styles';

type MapUITProps = {
  // eslint-disable-next-line
  options?: any;
  points?: any;
  pointFetch?: any;
  onChange?: any;
  errorDirection?: any;
  errorDirectionFinal?: any;
};

const MapUIT: FC<MapUITProps> = ({
  options,
  points = [],
  pointFetch,
  onChange,
  errorDirection,
  errorDirectionFinal,
}) => {
  const classes = useStyles();
  const [state, setState] = useState<any>({});
  const [markers, setMarkers] = useState<any>([]);

  const handleInputText = (inputId: any, value: any) => {
    const stateCopy = { ...state };
    if (stateCopy[inputId]) stateCopy[inputId].inputText = value;
    setState(stateCopy);
  };

  const handleMarkerDragEnd = (response: any, status: any, inputId: any) => {
    const marker = markers.find((marker: any) => {
      return marker.inputId === inputId;
    });
    const markersCopy = markers.filter((marker: any) => {
      return marker.inputId !== inputId;
    });

    // If the response is ok, change the input text, marker name and position
    // Else re-render all the markers except which was moved then re-render all togethers
    if (status === window.google.maps.DirectionsStatus.OK) {
      const point = response.routes[0].legs[0];
      marker.name = marker?.content ? undefined : point.start_address;
      marker.contentProps = { ...marker?.contentProps, address: point.start_address };
      marker.position = { lat: point.start_location.lat(), lng: point.start_location.lng() };
      handleInputText(inputId, point.start_address);
    } else {
      setMarkers([...markersCopy]);
    }

    setMarkers([...markersCopy, marker]);
    onChange && onChange(marker.inputId, 'onDrag', marker);
  };

  const calculateDistanceDriving = (
    origin: any,
    destination: any,
    callback: any,
    ...props: any
  ) => {
    if (!window.google) return undefined;
    const directionsService = new window.google.maps.DirectionsService();
    const request = {
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (response, status) => {
      callback(response, status, ...props);
    });
  };

  const onInputTextChange = (placeDetails: any, inputId: any, inputLabel: any) => {
    // Delete the marker with that inputId
    const markersCopy = markers.filter((obj: any) => {
      return obj.inputId !== inputId;
    });

    // Create the new one to render
    const marker = {
      id: `M-${inputId}`,
      inputId: inputId,
      inputLabel: inputLabel,
      place_id: placeDetails.place_id,
      name: placeDetails.formatted_address,
      position: {
        lat: placeDetails.geometry.location.lat(),
        lng: placeDetails.geometry.location.lng(),
      },
    };

    setMarkers([...markersCopy, marker]);
    onChange && onChange(marker.inputId, 'onInputChange', marker);
  };

  const onMarkerDragEnd = (markerId: any, inputId: any, event: any) => {
    const point = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    calculateDistanceDriving(point, point, handleMarkerDragEnd, inputId);
  };

  useEffect(() => {
    if (pointFetch != null) {
      const markersCopy = markers.filter((obj: any) => {
        return obj.inputId !== pointFetch.inputId;
      });

      setMarkers(Array.isArray(pointFetch) ? pointFetch : [...markersCopy, pointFetch]);

      onChange && onChange(pointFetch.inputId, 'onInputChange', pointFetch);

      const stateCopy = { ...state };
      if (stateCopy[pointFetch.inputId]) stateCopy[pointFetch.inputId].inputText = pointFetch.name;
      setState(stateCopy);
    }
  }, [pointFetch]);

  return (
    <>
      {points.map((element: any) => (
        <Grid item sm={6} md={4} xs={12} key={element.id}>
          <LocationAutocomplete
            inputId={element.id}
            state={state}
            apiKey={options.apiKey}
            setState={setState}
            label={element.input.label}
            onChange={onInputTextChange}
            error={element.id === 'origin' ? errorDirection : errorDirectionFinal}
            placeholder={element.input.placeholder}
            predictionCodeLanguage={options.predictionCodeLanguage}
          />
        </Grid>
      ))}

      <Grid item xs={12}>
        <div id="MapUITContainer">
          <div id="mapEngineContainer" className={classes.divSpaceSection}>
            {window.google && (
              <GoogleMapEngine
                options={options}
                mapOptions={options.mapOptions}
                markers={markers}
                onMarkerDragEndCallback={onMarkerDragEnd}
                customEnableDraggable
              />
            )}
          </div>
        </div>
      </Grid>
    </>
  );
};

export default MapUIT;
