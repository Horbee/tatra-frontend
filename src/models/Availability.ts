import { WeekStatus } from "./WeekStatus";

export interface Availability {
  id: string;
  personName: string;
  availabilities: WeekStatus[];
}
