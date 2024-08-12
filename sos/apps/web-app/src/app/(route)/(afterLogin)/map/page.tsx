'use client';

import React, { useState, useEffect } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import useKakaoLoader from './_components/userKakaoLoader';
import { useFetchAED } from '@/app/_hooks';
import { Container, Input, Chips, MapBottomSheet } from '@sos/components-react';

export default function BasicMap() {
  useKakaoLoader();

  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);
  const [radius, setRadius] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

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

  if (!isClient || lat === null || lon === null) return <div>로딩 중</div>;

  if (isLoading) return <div>로딩 중</div>;
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
        {aedData.map((aed) => (
          <React.Fragment key={aed.id}>
            <MapMarker
              position={{
                lat: aed.lat,
                lng: aed.lon,
              }}
              image={selectedMarker === aed.id ? selectedMarkerImage : defaultMarkerImage}
              onClick={() => setSelectedMarker(aed.id)}
            />
            {selectedMarker === aed.id && (
              <CustomOverlayMap position={{ lat: aed.lat, lng: aed.lon }}>
                <div
                  style={{
                    padding: '5px',
                    backgroundColor: 'white',
                    border: '1px solid gray',
                    position: 'relative',
                    top: '10px',
                    transform: 'translateY(40%)',
                  }}
                >
                  {`주소: ${aed.detailAddress}`} <br /> {`위치: ${aed.buildPlace}`}
                </div>
              </CustomOverlayMap>
            )}
          </React.Fragment>
        ))}
      </Map>
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
          title="Title"
          infos={[
            { title: 'Title 1', content: 'Content 1' },
            { title: 'Title 2', content: 'Content 2' },
          ]}
          badgeText="제세동기"
          subText="서울특별시 00 00 000"
          buttonText="길찾기"
          subButtonIcon="call"
        />
      </Container>
    </>
  );
}
