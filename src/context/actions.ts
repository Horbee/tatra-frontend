import { Availability } from "../models/Availability";

export const SET_AVAILABILITY = "SET_AVAILABILITY";

interface ISetAvailabilityAction {
  type: typeof SET_AVAILABILITY;
  name: Availability;
}

export type GlobalActionTypes = ISetAvailabilityAction;
