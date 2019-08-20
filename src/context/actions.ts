import { Availability } from "../models/Availability";

export const CHANGE_AVAILABILITY = "CHANGE_AVAILABILITY";
export const FETCH_AVAILABILITIES = "FETCH_AVAILABILITIES";

interface ISetAvailabilityAction {
  type: typeof CHANGE_AVAILABILITY;
  name: Availability;
}

interface IFetchAvailabilitiesAction {
  type: typeof FETCH_AVAILABILITIES;
  data: Availability[];
}

export type GlobalActionTypes =
  | ISetAvailabilityAction
  | IFetchAvailabilitiesAction;
