import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import React, { FC, useEffect, useState } from 'react';

type GoogleMapEngineProps = {
  // eslint-disable-next-line
  markers?: any;
  options?: any;
  mapOptions?: any;
  onMarkerDragEndCallback?: any;
  customEnableDraggable?: boolean;
};

export const GoogleMapEngine: FC<GoogleMapEngineProps> = ({
  markers,
  options,
  mapOptions,
  onMarkerDragEndCallback,
  customEnableDraggable,
}) => {
  const [activeInfoWindows, setActiveInfoWindows] = useState<any>({});
  const [googleMap, setGoogleMap] = useState<any>(false);

  const beautifyAddress = (addr: any) => {
    if (typeof addr === 'string')
      return addr.split(',').map((line) => <div key={line}>{line}</div>);
    return addr;
  };

  const handleInfoWindow = (markerId: any, visible: any) => {
    const activeInfoWindowsCopy = { ...activeInfoWindows };
    activeInfoWindowsCopy[markerId] = visible;
    setActiveInfoWindows(activeInfoWindowsCopy);
  };

  const closeAllInfoWindows = () => {
    if (!options.notCloseAllInfoWindowsOnMapClick) {
      const showAllInfoWindows: any = {};
      markers.forEach((element: any) => {
        showAllInfoWindows[element.id] = false;
      });
      setActiveInfoWindows(showAllInfoWindows);
    }
  };

  const handleOnLoad = (map: any) => {
    // If exists markers in the map load do this
    if (markers.length) {
      const bounds = new window.google.maps.LatLngBounds();
      const showAllInfoWindows: any = {};

      markers.forEach((element: any) => {
        // Extending the bounds to make every marker visible to the user
        bounds.extend(element.position);
        // Making all the markers show its InfoWindow
        showAllInfoWindows[element.id] = true;
      });

      map.fitBounds(bounds);
      setActiveInfoWindows(showAllInfoWindows);
    }
    // Making available a callback
    setGoogleMap(map);
  };

  const onMarkerLoad = (markerId: any, markerObject: any) => {
    // Extending the bounds to make every marker visible to the user
    if (options.fitBoundsOnlyOnMarkerLoad) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((element: any) => {
        bounds.extend(element.position);
      });
      markerObject.map.fitBounds(bounds);
    }

    // On marker pinned show its information
    handleInfoWindow(markerId, true);
  };

  const onMarkerClick = (markerId: any) => {
    // Showing the marker info window
    handleInfoWindow(markerId, false); // Fix to problem when another marker of google is clicked
    handleInfoWindow(markerId, true);
    // Making available a callback
  };

  const onMarkerDragEnd = (markerId: any, inputId: any, event: any) => {
    onMarkerDragEndCallback(markerId, inputId, event);
    handleInfoWindow(markerId, true);
  };

  const onSetDefaultColor = (color = 'red') => {
    return {
      url: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
    };
  };

  useEffect(() => {
    if (!googleMap || options.fitBoundsOnlyOnMarkerLoad) return;
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach((element: any) => {
      bounds.extend(element.position);
    });
    googleMap.fitBounds(bounds);
  }, [googleMap, markers]);

  return (
    <div className="google-map-container">
      <GoogleMap
        center={options.center}
        zoom={options.zoom}
        options={mapOptions}
        onLoad={handleOnLoad}
        mapContainerStyle={{ width: '100%', height: options.height }}
        onClick={() => {
          closeAllInfoWindows();
        }}
      >
        {markers.map(
          ({
            id,
            name,
            content: ContentMarker,
            contentProps,
            position,
            inputLabel,
            inputId,
            color,
          }: any) => (
            <Marker
              key={id}
              draggable={customEnableDraggable}
              position={position}
              onClick={() => onMarkerClick(id)}
              onDragEnd={(event) => onMarkerDragEnd(id, inputId, event)}
              onDragStart={() => {
                handleInfoWindow(id, false);
              }}
              onLoad={(markerObject) => onMarkerLoad(id, markerObject)}
              icon={color ? onSetDefaultColor(color) : undefined}
            >
              {activeInfoWindows[id] && (
                <InfoWindow onCloseClick={() => handleInfoWindow(id, false)}>
                  <div>
                    <div>
                      <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{inputLabel}</span>
                    </div>
                    {name && <div>{beautifyAddress(name)}</div>}
                    {ContentMarker && (
                      <React.Fragment>
                        <ContentMarker {...contentProps} />
                      </React.Fragment>
                    )}
                  </div>
                </InfoWindow>
              )}
            </Marker>
          )
        )}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapEngine;
