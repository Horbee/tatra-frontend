import React from "react";

import { useAvailabilityService } from "./useAvailabilityService";

export const AvailabilityServiceContext = React.createContext<
  ReturnType<typeof useAvailabilityService>
>(undefined as any);
