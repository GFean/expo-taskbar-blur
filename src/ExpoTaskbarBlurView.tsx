import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoTaskbarBlurViewProps } from './ExpoTaskbarBlur.types';

const NativeView: React.ComponentType<ExpoTaskbarBlurViewProps> =
  requireNativeViewManager('ExpoTaskbarBlur');

export default function ExpoTaskbarBlurView(props: ExpoTaskbarBlurViewProps) {
  return <NativeView {...props} />;
}
