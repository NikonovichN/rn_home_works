import React from 'react';
import {Text, View} from 'react-native';
import {noop} from 'lodash';

import {PrimaryButton} from '../../../../components/components';
import {SafeGuard} from '../../../../components/icons/icons';
import {CartAttributes} from '../../../../core/entities/Cart';
import {TextStyles} from '../../../../core/styles/CommonStyles';

import styles from './styles';

interface ContentCartProps {
  data: CartAttributes;
}

interface RowProps {
  leftContent: string;
  rightContent: string;
}

const ContentCart: React.FC<ContentCartProps> = props => {
  const {data} = props;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.cartDetails}>
          <Text style={TextStyles.secondaryTitle}>Price details</Text>
          <View style={styles.infoContainer}>
            <RowInfo
              leftContent={`Price (${data.item_count}) item${
                data.item_count > 1 && 's'
              }`}
              rightContent={data.display_item_total}
            />
            <RowInfo
              leftContent="Delivery"
              rightContent={data.display_ship_total}
            />
            <RowInfo
              leftContent="Discount"
              rightContent={data.display_promo_total}
            />
            <RowInfo leftContent="Tax" rightContent={data.display_tax_total} />
          </View>
          <View style={[styles.rowContent, styles.lastRow]}>
            <Text style={TextStyles.regular}>Amount Payable</Text>
            <Text style={TextStyles.regular}>{data.display_total}</Text>
          </View>
        </View>
        <View style={styles.safeInfoContainer}>
          <SafeGuard />
          <Text style={[TextStyles.smallSuccess, styles.safeGuardText]}>
            Safe and Secure Payments 100% Authentic Products
          </Text>
        </View>
      </View>
      <PrimaryButton onPress={noop} content="proceed to payment" />
    </View>
  );
};

const RowInfo: React.FC<RowProps> = props => {
  return (
    <View style={styles.rowContent}>
      <Text style={TextStyles.regularSecondary}>{props.leftContent}</Text>
      <Text style={TextStyles.regularSecondary}>{props.rightContent}</Text>
    </View>
  );
};

export default ContentCart;
