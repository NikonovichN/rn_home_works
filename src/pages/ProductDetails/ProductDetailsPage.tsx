import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  RefreshControl,
  StyleSheet,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {RouteProp, useRoute} from '@react-navigation/native';

import {useShallowEqualSelector} from '@hooks';
import {
  Loading,
  ModalWindow,
  ModalWindowType,
  PrimaryButton,
  SelectProperty,
  useModalWindowState,
} from '@components';
import {
  cartSelector,
  isLoggedSelector,
  productDetailsSelector,
} from '@selectors';
import {ButtonStyles, Colors, TextStyles} from '@styles';
import {
  productDetailsActions,
  addToCartActions,
  networkIssueActions,
} from '@actions';
import {RootStackParamList} from '@navigation';
import {checkInternetConnection} from '../../core/network/checkInternetConnection';

const ProductDetailsPage: React.FC = () => {
  const {
    isLoading,
    productDetails: {imageUrl, name, displayPrice, properties, description},
  } = useShallowEqualSelector(productDetailsSelector);
  const isLogged = useShallowEqualSelector(isLoggedSelector);
  const {data} = useShallowEqualSelector(cartSelector);

  const {
    params: {productId},
  } = useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();

  const [modalWindowState, setModalWindowState] = useModalWindowState();

  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const bottomInsets = useMemo(
    () => ({height: Platform.OS == 'ios' ? insets.bottom : 40}),
    [insets.bottom],
  );

  const [activeProperty, setActiveProperty] = useState<string | null>(null);

  const getProduct = useCallback(
    () => dispatch(productDetailsActions.getProductDetails(productId)),
    [productId, dispatch],
  );

  const onPressButton = useCallback(() => {
    if (activeProperty == null) {
      setModalWindowState({
        typeModal: ModalWindowType.ChooseProperty,
        isVisible: true,
      });
    } else if (!isLogged) {
      setModalWindowState({
        typeModal: ModalWindowType.NavigateToLogIn,
        isVisible: true,
      });
    } else {
      const addToCart = () =>
        dispatch(addToCartActions.addToCart(activeProperty!));
      const failCallback = () =>
        dispatch(networkIssueActions.addNetworkIssue(addToCart));

      checkInternetConnection(addToCart, failCallback);
    }
  }, [activeProperty, dispatch, setModalWindowState, isLogged]);

  const disableModalWindow = useCallback(
    () =>
      setModalWindowState({
        ...modalWindowState,
        isVisible: false,
      }),
    [modalWindowState, setModalWindowState],
  );

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  useEffect(() => {
    if (data) {
      setModalWindowState({
        typeModal: ModalWindowType.SuccessAddToCart,
        isVisible: true,
      });
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ScrollView
            style={styles.scrollViewContainer}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={getProduct}
                tintColor={Colors.primary}
              />
            }>
            <Image style={styles.image} source={{uri: imageUrl}} />
            <Text style={TextStyles.regular}>{name}</Text>
            <Text style={[TextStyles.regularBold, styles.marginTop15]}>
              {displayPrice}
            </Text>
            <View style={styles.divider} />
            <Text style={[TextStyles.sectionTitle, styles.marginTop15]}>
              Select Property
            </Text>
            <SelectProperty
              properties={properties.map(value => value.id.toString())}
              activeProperty={activeProperty}
              onPress={setActiveProperty}
            />
            <View style={styles.divider} />
            <Text style={[TextStyles.sectionTitle, styles.marginTop15]}>
              Description
            </Text>
            <Text style={[TextStyles.regular, styles.marginTop10]}>
              {description}
            </Text>
            <View style={styles.marginTop15}>
              <PrimaryButton content="Add to cart" onPress={onPressButton} />
            </View>
            <View style={bottomInsets} />
          </ScrollView>
          <ModalWindow {...modalWindowState} onClose={disableModalWindow} />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingTop: 10,
    paddingBottom: 60,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  image: {
    marginVertical: 44,
    marginHorizontal: 64,
    height: 250,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop15: {
    marginTop: 15,
  },
  divider: {
    marginTop: 20,
    borderBottomColor: Colors.border.primary,
    borderBottomWidth: 1,
  },
  modalTitle: {
    ...TextStyles.sectionTitle,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  modalDescription: {
    ...TextStyles.regular,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  modalButton: {
    ...ButtonStyles.primary,
    width: 125,
    alignSelf: 'center',
  },
});

export {ProductDetailsPage};
