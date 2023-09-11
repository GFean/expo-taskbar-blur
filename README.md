# ExpoTaskbarBlur

Easily blur your Expo and React Native app's content when it's in the task manager to protect your app's privacy.

# Features

• Blur content when app goes into the background.
• Native modules for both Android and iOS.
• Easily toggle the blur from your JavaScript code.


# Side notes

Android doesn't support bluring the content when the app is in the taskbar, that's why on android platform the app content will go blank 
when moved to the taskbar, IOS will get blurry.

To use this package, you have to enable native modules in your expo app, so make sure you run the prebuild script to generate native ios & android directories.

```bash
npx expo install expo-taskbar-blur
```

## Installation

```bash
npx expo install expo-taskbar-blur
```

# Usage 

```jsx
import { AppState } from 'react-native';
import ExpoTaskbarBlur from 'expo-taskbar-blur';


// ...

const handleAppStateChange = (nextAppState) => {
  if (appState === 'active' && nextAppState.match(/inactive|background/)) {
    ExpoTaskbarBlur.enableBlur();
  } else if (appState.match(/inactive|background/) && nextAppState === 'active') {
    ExpoTaskbarBlur.disableBlur();
  }
  setAppState(nextAppState);
};

// Remember to add and remove the AppState listener in useEffect or componentDidMount/componentWillUnmount.

```

## Functions

ExpoTaskbarBlur has following functions:

### enableBlur: 

The function which blurs the content

### disableBlur

The function which disables the blur

## Contributing
Contributions are welcome! If you find any issues or would like to suggest improvements, please create a new issue or submit a pull request.

## License
This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
