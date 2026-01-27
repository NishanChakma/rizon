import React, { forwardRef, useCallback } from 'react';
import { StyleSheet, Image, Linking } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import logo from '../../assets/frame.png';
import { Button, GreyText, Title } from '../reusable';

export type ReviewModalRef = BottomSheetModal;

const ReviewModal = forwardRef<ReviewModalRef>((_, ref) => {
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModal ref={ref} onChange={handleSheetChanges}>
      <BottomSheetView style={styles.contentContainer}>
        <Image source={logo} style={styles.logo} />
        <Title
          title="Got a minute to help us grow?"
          style={{ paddingTop: 20, paddingBottom: 10 }}
        />
        <GreyText
          title="It takes less than a minute and helps us a lot."
          style={{ paddingBottom: 30 }}
        />
        <Button
          title="Leave a review"
          onPress={() => {
            Linking.openURL(
              'https://play.google.com/store/apps/details?id=com.rizon.app&hl=en',
            );
          }}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  logo: {
    height: 120,
    width: 120,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20,
  },
});

export default ReviewModal;
