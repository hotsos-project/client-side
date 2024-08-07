'use client';

import React, { useState, useEffect } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import useKakaoLoader from './components/userKakaoLoader';
import { useAedData } from '../../_hooks/useAedData';

export default function BasicMap() {
  useKakaoLoader();

  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);
  const [radius, setRadius] = useState(2);
  const [isClient, setIsClient] = useState(false);
  const [queryEnabled, setQueryEnabled] = useState(false);
  const [aedData, setaedData] = useState<any[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          setQueryEnabled(true);
        },
        (error) => {
          console.log('❌ Fail to load geolocation', error.message);
          setLat(37.5665);
          setLon(126.978);
          setQueryEnabled(true);
        },
      );
    } else {
      // default: 서울 시청
      setLat(37.5665);
      setLon(126.978);
      setQueryEnabled(true);
    }
  }, []);

  const { data, error, isLoading } = useAedData(lat ?? 0, lon ?? 0, radius, queryEnabled);

  useEffect(() => {
    if (data && data.data && data.data.aedResponses) {
      console.log('📝 Fetched Data', data);
      setaedData(data.data.aedResponses);
    }
  }, [data]);

  if (!isClient || lat === null || lon === null) return <div>로딩 중</div>;

  if (isLoading) return <div>로딩 중</div>;
  if (error) return <div>{error.message}</div>;

  const customMarkerImage = {
    src: '/aed.png',
    size: {
      width: 24,
      height: 35,
    },
    options: {
      offset: {
        x: 12,
        y: 35,
      },
    },
  };

  return (
    <Map
      id="map"
      center={{
        lat: lat,
        lng: lon,
      }}
      style={{
        width: '100%',
        height: '100vh',
      }}
      level={2}
      padding={{ top: 50, right: 50, bottom: 50, left: 50 }}
    >
      {aedData.map((aed, index) => (
        <React.Fragment key={index}>
          <MapMarker
            position={{
              lat: aed.lat,
              lng: aed.lon,
            }}
            image={customMarkerImage}
            onClick={() => setSelectedMarker(index)}
          />
          {selectedMarker === index && (
            <CustomOverlayMap position={{ lat: aed.lat, lng: aed.lon }}>
              <div style={{ padding: '5px', backgroundColor: 'white', border: '1px solid black' }}>
                {`주소: ${aed.detailAddress}`} <br /> {`위치: ${aed.buildPlace}`}
              </div>
            </CustomOverlayMap>
          )}
        </React.Fragment>
      ))}
    </Map>
  );
}
