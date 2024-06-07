import { Stack } from "expo-router";

const AuthenticationLayout = () => {
  return (
    <Stack>

      <Stack.Screen
        name="welcome"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VerifyOTP"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SetupPassword"
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="Profile"
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

      <Stack.Screen
        name="signIn"
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

      <Stack.Screen
        name="sendVerification"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="setNewPassword"
        options={{
          headerShown: false,
        }}
      />
            <Stack.Screen
        name="EnableLocation"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default AuthenticationLayout;
