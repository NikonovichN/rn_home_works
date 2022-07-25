import React, {useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {RouteProp, useRoute} from '@react-navigation/native';

import {useShallowEqualSelector, useModalWindowState} from '@hooks';
import {
  Loading,
  ModalWindow,
  ModalWindowType,
  PrimaryButton,
  SelectProperty,
} from '@components';
import {isLoggedSelector, productDetailsSelector} from '@selectors';
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

  const {
    params: {productId},
  } = useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();

  const [modalWindowState, setModalWindowState] = useModalWindowState();

  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const [activeProperty, setActiveProperty] = useState<string | null>(null);

  const getProduct = useCallback(
    () => dispatch(productDetailsActions.getProductDetails(productId)),
    [productId, dispatch],
  );

  const addToCartAction = useCallback(
    () => dispatch(addToCartActions.addToCart(activeProperty!)),
    [dispatch, activeProperty],
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
      const failCallback = () =>
        dispatch(networkIssueActions.addNetworkIssue(addToCartAction));

      checkInternetConnection(addToCartAction, failCallback);
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
            <View style={{height: insets.bottom}} />
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
