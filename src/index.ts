import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoTaskbarBlur.web.ts
// and on native platforms to ExpoTaskbarBlur.ts
import ExpoTaskbarBlurModule from './ExpoTaskbarBlurModule';




export function enableBlur(): Promise<void> {
  return ExpoTaskbarBlurModule.enableBlur();
}

export function disableBlur(): Promise<void> {
  return ExpoTaskbarBlurModule.disableBlur();
}


