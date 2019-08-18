import { Name } from "../models/Names";

export const SET_AVAILABILITY = "SET_AVAILABILITY";

interface ISetAvailabilityAction {
  type: typeof SET_AVAILABILITY;
  name: Name;
}

export type GlobalActionTypes = ISetAvailabilityAction;
