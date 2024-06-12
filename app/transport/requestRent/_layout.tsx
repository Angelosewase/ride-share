import { Stack } from "expo-router";

const RequestRentLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="RequestRent" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RequestRentLayout;
