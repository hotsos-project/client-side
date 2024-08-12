'use client';

import React, { useState, useEffect } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import useKakaoLoader from './_components/userKakaoLoader';
import { useFetchAED } from '@/app/_hooks';
import { AEDResponse } from '@/app/_types';
import { Container, Input, Chips, MapBottomSheet, LoadingSpinner } from '@sos/components-react';

export default function BasicMap() {
  useKakaoLoader();

  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);
  const [radius, setRadius] = useState(2);
  const [isClient, setIsClient] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<AEDResponse | null>(null);

  useEffect(() => {
    setIsClient(true);
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.log('❌ Fail to load geolocation', error.message);
          setLat(37.5665);
          setLon(126.978);
        },
      );
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      setLat(37.5665);
      setLon(126.978);
    }
  }, []);

  const { data, error, isLoading } = useFetchAED(lat ?? 0, lon ?? 0, radius ?? 0);

  if (!isClient || lat === null || lon === null || isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <LoadingSpinner />
      </div>
    );
  }

  if (error) return <div>{error.message}</div>;

  const aedData = data?.aedResponses || ['nothing'];

  const defaultMarkerImage = {
    src: '/aed_default.png',
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

  const selectedMarkerImage = {
    src: '/aed.png',
    size: {
      width: 30,
      height: 41,
    },
    options: {
      offset: {
        x: 16,
        y: 37,
      },
    },
  };

  return (
    <>
      <Container
        display="flex"
        flexDirection="column"
        padding={16}
        gap={16}
        backgroundColor="backgroundNormalPrimary"
      >
        <Input state="default" placeholder="장소를 입력하세요" />
        <Container display="flex" gap={10}>
          <Chips size="m" content="심장충격기" variant="primary" state="active" />
          <Chips size="m" content="민방대피소" variant="primary" state="outline" />
          <Chips size="m" content="지진대피소" variant="primary" state="outline" />
          <Chips size="m" content="해일대피소" variant="primary" state="outline" />
        </Container>
      </Container>
      <Map
        id="map"
        center={{
          lat: lat,
          lng: lon,
        }}
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
        level={2}
        padding={50}
      >
        <MapMarker
          position={{
            lat: lat,
            lng: lon,
          }}
        />
        {aedData.map((aed) => {
          if (typeof aed === 'string') return null;

          return (
            <React.Fragment key={aed.id}>
              <MapMarker
                position={{
                  lat: aed.lat,
                  lng: aed.lon,
                }}
                image={selectedMarker?.id === aed.id ? selectedMarkerImage : defaultMarkerImage}
                onClick={() => setSelectedMarker(aed)}
              />
              {selectedMarker?.id === aed.id && (
                <CustomOverlayMap position={{ lat: aed.lat, lng: aed.lon }} />
              )}
            </React.Fragment>
          );
        })}
      </Map>
      {selectedMarker && (
        <Container
          display="flex"
          width={'100%'}
          padding={16}
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: 999,
          }}
        >
          <MapBottomSheet
            title={selectedMarker ? `${selectedMarker.buildPlace}` : 'Title'}
            infos={[
              { title: '주소', content: selectedMarker?.detailAddress || 'Content 1' },
              { title: '상세 위치', content: selectedMarker?.buildPlace || 'Content 2' },
            ]}
            badgeText="제세동기"
            subText={
              selectedMarker
                ? `${selectedMarker.sido} ${selectedMarker.gugun} ${selectedMarker.detailAddress}`
                : '서울특별시 00 00 000'
            }
            buttonText="길찾기"
            subButtonIcon="call"
          />
        </Container>
      )}
    </>
  );
}
