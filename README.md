# MyAmaniya — Client Mobile App

A polished React Native / Expo starter for the Amaniya mental wellness client app. Built with Expo SDK 54, TypeScript, NativeWind configuration, React Navigation, reusable UI components, and local mock data. No backend is required to explore the screens.

## Run locally

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go (SDK 54), or press `a` to open an Android emulator.

## Demo sign-in

The login form is intentionally a demo: any values will open the app. Prefilled values are `samia@example.com` / `welcome123`. No credentials are transmitted or persisted. This is not real authentication.

## Included screens

- Splash / onboarding
- Login
- Home dashboard
- Appointments: upcoming, past/completed, appointment details
- Progress notes and case notes (read-only)
- Client profile and account actions
- Diagnosis & symptoms (read-only)
- Request new appointment form (local demo validation)
- Notifications

## Project structure

```text
MyAmaniya/
├── App.tsx
├── app.json
├── global.css
├── tailwind.config.js
├── babel.config.js
├── metro.config.js
├── src/
│   ├── components/ui.tsx        # reusable UI primitives
│   ├── data/mockData.ts         # sample client, appointments and notes
│   ├── hooks/useDemoAuth.tsx    # demo-only auth state
│   ├── navigation/MainTabs.tsx # bottom tab navigation
│   ├── screens/                 # each screen in its own file
│   ├── theme/colors.ts          # shared design tokens
│   └── types/navigation.ts      # typed navigation params
└── package.json
```

## API integration later

Mock data is isolated in `src/data/mockData.ts`. When your backend is ready, add typed API clients under `src/services/`, replace mock data with service calls, and add loading/error states. Never treat the current demo login as secure authentication and do not put secrets in the mobile app.

## Design notes

Calm purple/teal palette, soft backgrounds, rounded cards, consistent spacing, accessible tap targets, typed navigation, and reusable buttons/fields/cards. All health information shown is fictional demo content.
