import React from "react";

import { AvailabilityServiceContext } from "./availability-service/AvailabilityServiceContext";
import { useAvailabilityService } from "./availability-service/useAvailabilityService";

export const ServiceProvider: React.FC = props => {
  const availabilityService = useAvailabilityService();

  return (
    <AvailabilityServiceContext.Provider value={availabilityService}>
      {props.children}
    </AvailabilityServiceContext.Provider>
  );
};
