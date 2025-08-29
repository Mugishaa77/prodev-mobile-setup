# ProDev Mobile Setup – First Mobile App

## Prerequisites
Before getting started, ensure you already have:
- **Node.js LTS** installed  
- **VS Code** installed  
- A compatible operating system (Windows, macOS, or Linux)

---

## Setting Up Expo Go on Your Device

### Why Expo Go?
Unlike web development, mobile development often relies on device emulators to test applications. However, keeping up with the ever-evolving mobile ecosystem (e.g., iPhone 7 → iPhone 16 Pro Max, various Android devices) can be costly in terms of hardware requirements.

**Expo Go** provides a cost-effective solution by allowing you to test and run your React Native applications directly on your physical device, supporting both iOS and Android seamlessly.

### Installation Steps
1. Visit the official Expo Go homepage: [https://expo.dev/go](https://expo.dev/go).
2. Select the latest SDK version.
3. Install Expo Go for your device:
   - **Android:** [Install from the Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
   - **iOS:** [Install from the Apple App Store](https://apps.apple.com/app/expo-go/id982107779).
4. Open the Expo Go app on your device.
5. Sign up for a new account or log in if you already have one.

**My Experience:**  
I installed Expo Go on my **Android device directly from the Play Store** with no issues. The installation was straightforward and the app launched successfully without requiring extra setup.

---

## Create Your First Mobile App

### 1. Navigate to Your Project Directory
cd prodev-mobile-setup

### 2. Set Up Your Project

Initialize a new Expo project using the latest Expo Router template:
 **npx create-expo-app@latest**

## This scaffolds the default Expo Router structure, including:
- /app
- /components
- /hooks
- /constants
- /scripts

## 3. Modify the Home Screen
Open the file: app/(tabs)/index.tsx
Locate the default text:
**Welcome!**
Change it to:
**First App Created**

## 4. Run and Test Your Application
Start the Expo development server:
**npx expo start**

For iOS Devices: Scan the QR code in the terminal using your phone’s Camera app.
For Android Devices: Scan the QR code using the Expo Go app.

## 5.Reset the Application
Run the reset command:
**npm run reset-project**

## 6.Reset Project Output
Do you want to move existing files to /app-example instead of deleting them? (Y/n): y
📁 /app-example directory created.
➡️ /app moved to /app-example/app.
➡️ /components moved to /app-example/components.
➡️ /hooks moved to /app-example/hooks.
➡️ /constants moved to /app-example/constants.
➡️ /scripts moved to /app-example/scripts.

📁 New /app directory created.
📄 app/index.tsx created.
📄 app/_layout.tsx created.

## 7.✅ Project reset complete. Next steps:
1. Run `npx expo start` to start a development server.
2. Edit app/index.tsx to edit the main screen.
3. Delete the /app-example directory when you're done referencing it.

***Observations***

## The installation took way longer than I anticipated.

## After changing the text, the modification appeared correctly on the home screen.

## The Expo bundling step on Android also took quite some time before the app launched.

## Running the reset command moved my existing project files into an /app-example folder and generated a fresh /app directory with new boilerplate files (index.tsx and _layout.tsx). This effectively resets the project while keeping a reference to the previous files.

✅ Expo Go installed, first app scaffolded, modified, tested, and reset successfully!