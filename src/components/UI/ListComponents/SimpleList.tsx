import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-paper';
import {RenderFooter} from './RenderFooter';
import {LoadingScreen} from './LoadingScreen';
import {EmptyFlatlist} from './EmptyFlatlist';
import {useTheme} from '@react-navigation/native';
import {MyTheme} from '@src/constant/types';

export const SimpleList = (props: any) => {
  const theme = useTheme();
  const style = React.useMemo(() => getStyles(theme), [theme]);

  const renderItem = ({item}: {item: any}) => {
    return (
      <>
        <TouchableOpacity
          style={[
            style.listItem,
            props.disableItem &&
              props.disableItem(item) && {backgroundColor: '#DCDCDC'},
          ]}
          onPress={() => props.listItemOnPress && props.listItemOnPress(item)}
          disabled={props.disableItem && props.disableItem(item)}>
          <AntDesign
            name={
              props.conditionalListIconName
                ? props.conditionalListIconName(item)
                : props.listIconName
            }
            size={30}
            color={theme.primary.main}
            style={style.listIcon}
          />
          {/* text */}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={style.listItemText}>
                {props.listItemFields &&
                  props
                    .listItemFields(item)
                    .map(
                      (element: any, index: number, array: string | any[]) =>
                        (element ? element : '-') +
                        (index + 1 < array.length ? ' • ' : ''),
                    )}
              </Text>
            </View>
            {props.listItemDetailFields &&
              props.listItemDetailFields(item).length > 0 && (
                <View style={{flexDirection: 'row', gap: 5}}>
                  {props.listItemDetailFields(item).map(
                    (
                      element: {
                        showFieldName:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                        showField:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                      },
                      index: React.Key | null | undefined,
                      array: any,
                    ) => (
                      <Text key={index} style={{}}>
                        {element.showFieldName && (
                          <Text
                            style={{
                              color: theme.gray[400],
                              fontWeight: 'bold',
                            }}>
                            {element.showFieldName}:
                          </Text>
                        )}
                        {element.showField && (
                          <Text
                            style={{
                              color: theme.gray[500],
                            }}>
                            {' '}
                            {element.showField}
                          </Text>
                        )}
                      </Text>
                    ),
                  )}
                </View>
              )}
          </View>
          {/* right icon */}
          <AntDesign name="chevron-right" size={30} color={theme.gray[500]} />
        </TouchableOpacity>
        {/* <Divider style={{backgroundColor: 'gray'}} bold /> */}
      </>
    );
  };

  const onEndReached = () => {
    if (props.onEndReached) {
      props.onEndReached();
    }
  };

  if (props.loading) return <LoadingScreen />;
  // if (!props.data?.length) {
  //   return <EmptyFlatlist />;
  // }
  return (
    <FlatList
      data={props.reversed ? [...props.data].reverse() : props.data}
      renderItem={renderItem}
      keyExtractor={({item, id}) => id}
      onEndReached={onEndReached}
      ListHeaderComponent={props.ListHeaderComponent}
      ListFooterComponent={
        props.onEndReached && <RenderFooter loading={props.isExtraLoading} />
      }
      contentContainerStyle={{flexGrow: 1}}
      ListEmptyComponent={EmptyFlatlist}
    />
  );
};

const getStyles = (theme: MyTheme) =>
  StyleSheet.create({
    listItem: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 15,
      alignItems: 'center',
      backgroundColor: theme.gray[800],
      borderRadius: 10,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    listIcon: {
      marginRight: 10,
    },
    listItemText: {
      fontWeight: '600',
      color: theme.gray[100],
      fontSize: 15,
    },
  });
