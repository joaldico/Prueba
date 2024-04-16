import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import classNames from 'classnames';
import { FC, useState } from 'react';

type Props = {
  markers?: any | null;
  options?: any | null;
  mapOptions?: any | null;
  customClassContainer?: any | null;
};

export const GoogleMapEngine: FC<Props> = (props) => {
  const { markers, options, mapOptions, customClassContainer } = props;
  const [googleMap, setGoogleMap] = useState(false);

  const handleOnLoad = (map: any) => {
    if (markers.length) {
      const bounds = new window.google.maps.LatLngBounds();

      markers.forEach((item: any) => {
        bounds.extend(item.position);
      });

      map.fitBounds(bounds);
    }
    setGoogleMap(map);
  };

  return (
    <div className={classNames('google-map-container', customClassContainer)}>
      <GoogleMap
        center={options.center}
        zoom={options.zoom}
        options={mapOptions}
        onLoad={handleOnLoad}
        mapContainerStyle={{ width: '100%', height: options.height }}
      >
        {markers.map((item: any) => (
          <Marker
            clickable={false}
            key={item.id}
            draggable={false}
            position={item.position}
            icon={item.icon}
          >
            <InfoWindow>
              <div>
                <div>
                  <span style={{ fontSize: '13px', color: '#000000' }}>{item.label}</span>
                </div>
                {item.showAddres && <div>{item.address}</div>}
              </div>
            </InfoWindow>
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapEngine;
