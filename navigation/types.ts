type ServiceType = {
  id: string;
  title: string;
  icon: any;
  description: string;
  price: string;
};

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ServicesScreen: { service: ServiceType }; // replace `ServiceType` with the actual shape of your service object
  SchedulePickup: undefined;
  TrackOrder: undefined;
};
