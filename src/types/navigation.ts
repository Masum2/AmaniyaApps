export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  MainTabs: undefined;
  Diagnosis: undefined;
  RequestAppointment: undefined;
  Notifications: undefined;
  AppointmentDetails: { appointmentId?: string };
};

export type MainTabParamList = {
  Home: undefined;
  Appointments: undefined;
  Notes: undefined;
  Profile: undefined;
};