import {TextStyle, ViewStyle} from 'react-native/types';
// import Animated from 'react-native-reanimated';
import {PropsWithChildren} from 'react';

interface IconOptions {
  shown?: boolean | undefined;
  strokeOptions?: {
    width?: number | undefined;
    color?: string | undefined;
  };
  fillOptions?: {
    color?: string | undefined;
  };
  width?: number | undefined;
  height?: number | undefined;
  icon?: React.ReactNode | undefined;
  iconClick?: () => void | undefined;
  style?: ViewStyle | ViewStyle[] | undefined;
}

export interface HeaderProps {
  leftOptions?: IconOptions;
  rightOptions?: IconOptions;
  style?: ViewStyle | ViewStyle[] | undefined;
  presentation?: 'close' | 'back';
  insetTop?: boolean;
  textOptions?: {
    shown?: boolean | undefined;
    title?: string | undefined;
    style?: TextStyle | TextStyle[] | undefined;
    component?: React.ReactNode;
  };
}

type Item = {
  label: string;
  value: any;
  key?: string | number;
  color?: string;
  inputLabel?: string;
};

export type PickerParams = {
  onValueChange: (value: any, index: number) => void;
  items: Item[];
  value?: any;
  placeholder?: Item | {};
  placeholderStyle?: TextStyle;
  containerStyle: ViewStyle;
  style: TextStyle;
  children?: React.ReactNode;
};

export type RNModalParams = PropsWithChildren<{
  swipeOptions?: SwipeOptionsParams;
  backDropOptions?: BackDropOptionsParams;
  modalOptions: ModalOptionsParams;
  // animationOptions?: AnimationOptionsParams;
  gestureOptions?: GestureOptionsParams;
  keyboardOptions?: KeyboardOptionsParams;
}>;
type BackDropOptionsParams = {
  hasBackdrop: boolean;
  color?: string;
  opacity?: number;
  inTiming?: number;
  outTiming?: number;
  /**
   * @param onPress
   * If you want the modal to close when you press the backdrop, you need to send it state
   * @example () => setIsVisible(false)
   */
  onPress: () => void;
};

type SwipeOptionsParams = {
  hasSwipe: boolean;
  /**
   * @param onSwipeComplete
   * If you want the modal to close when you swipe, you need to send state.
   * @example () => setIsVisible(false)
   */
  onSwipeComplete?: () => void;
  /**
   * @param onSwipeStart
   * If you want the modal to close when you swipe, you need to send state.
   * @example () => setIsVisible(false)
   */
  onSwipeStart?: () => void;
};
type ModalOptionsParams = {
  isVisible: boolean | undefined;
  modalPosition: 'center' | 'top' | 'bottom';
  style?: ViewStyle;
  onHide?: () => void;
  onShow?: () => void;
};

// type AnimationOptionsParams = {
//   inTiming?: number;
//   outTiming?: number;
//   type?: Animated.EasingFunction;
// };

type GestureOptionsParams = {
  /**
   * Automatically go up or down based on where you left off
   */
  gestureAuto?: boolean;
  /**
   * Going up and down with swipe in the gesture range
   */
  gestureSwipe?: boolean;
  hasGesture: boolean;
  /**
   * @param gestureHight
   * Enter the sum of the modal length and the place where you want the gesture handler to go.
   * @example gestureHight: window.height - insets.top
   */
  gestureHight: number;
};

type KeyboardOptionsParams = {
  onKeyboardShow?: () => void;
  onKeyboardHide?: () => void;
  keyboardHeight?: number;
  /**
   * When the keyboard is opened, it helps to disable the gesture.
   */
  hasKeyboard: boolean;
};
