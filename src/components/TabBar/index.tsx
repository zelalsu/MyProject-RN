import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

//style
import {useTheme} from '@react-navigation/native';
import getStyles from './style';
import Icon from 'react-native-vector-icons/AntDesign';

//icon

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const theme = useTheme();
  const styles = React.useMemo(() => getStyles(theme), [theme]);

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const tabBarLabel = descriptors[route.key].options
          .tabBarLabel as string;

        const tabBarIcon = () => {
          if (route.name === 'BranchScreen') {
            return <Icon name="filter" size={16} color="black" />;
          }
          if (route.name === 'MainNavigator') {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('DrawerNavigator');
                }}
                style={styles.mainNavigatorIcon}></TouchableOpacity>
            );
          }
          if (route.name === 'ProductScreen') {
            return <Icon name="staro" size={16} color="black" />;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: state.routes[index].key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              key: state.routes[index].key,
              merge: true,
            });
          }
        };

        return (
          <TouchableOpacity
            style={styles.container}
            key={`tabBarButton-${index}`}
            onPress={onPress}
            accessibilityState={isFocused ? {selected: true} : {}}
            activeOpacity={0.9}>
            <View style={styles.tabBarContainer}>
              {tabBarIcon()}
              <Text
                style={[
                  styles.text,
                  {color: isFocused ? theme.primary.main : theme.gray[500]},
                ]}>
                {tabBarLabel}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
