import axios, { AxiosResponse } from "axios";

import { Endpoints } from "../../constants/endpoints";
import { Availability } from "../../models/Availability";
import { WeekStatus } from "../../models/WeekStatus";

export abstract class AvailabilitiesEndpoint {
  public static getAll(): Promise<AxiosResponse<Availability[]>> {
    return axios.get(Endpoints.AVAILABILITIES);
  }

  public static updateAvailability(
    id: string,
    data: WeekStatus[]
  ): Promise<AxiosResponse<Availability[]>> {
    return axios.put(
      Endpoints.AVAILABILITY + `/${id}/availabilities.json`,
      data
    );
  }
}
