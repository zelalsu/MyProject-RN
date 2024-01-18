// CustomButton.tsx
import {window} from '@src/constant/dimension';
import {MyTheme} from '@src/constant/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onPress,
  ...props
}) => {
  const theme = useTheme();

  const style = React.useMemo(() => getStyles(theme), [theme]);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={[style.buttonContainer, {marginBottom: insets.bottom - 50}]}
        activeOpacity={0.8}
        onPress={onPress}
        {...props}>
        <Text style={style.button}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: theme.primary.main,
      width: window.width - 40,
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 16,
      paddingVertical: 12,
    },
    button: {
      color: 'white',
      fontSize: 14,
      letterSpacing: 0.4,
    },
  });
