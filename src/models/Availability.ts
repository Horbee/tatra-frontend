import { WeekStatus } from "./WeekStatus";

export interface Availability {
  personName: string;
  availabilities: WeekStatus[];
}
