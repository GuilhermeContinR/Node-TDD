import { AxiosStatic } from 'axios';
import { url } from 'inspector';

export class StormGlass {
  readonly stormGlassAllParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
  readonly stormGlassApiSource = 'noaa';
  constructor(protected request: AxiosStatic) {}

  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    this.request.get(
      `https://api.stormglass.io/v2/weather/point?params=${this.stormGlassAllParams}&source=${this.stormGlassApiSource}&end=1592113802&lat=${lat}&lng=${lng}`
    );
    return Promise.resolve({});
  }
}
