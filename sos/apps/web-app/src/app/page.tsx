import { WeatherBox } from '@sos/components-react';

export default function Home() {
  return (
    <main>
      <WeatherBox
        location="현재위치"
        temperature={28}
        highestTemperature={28}
        lowestTemperature={23}
        airQuality="나쁨 (116)"
      />
    </main>
  );
}
