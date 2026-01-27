import React, {
  forwardRef,
  RefObject,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { StyleSheet, Image, View } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import logo from '../../assets/logo.png';
import { Button, GreyText, Title } from '../reusable';
import { colors } from '../../utills';
import { FeedbackModalRef } from './FeedbackModal';
import { ReviewModalRef } from './ReviewModal';

export type OnboardingModalRef = BottomSheetModal;

type Props = {
  feedbackRef: RefObject<FeedbackModalRef | null>;
  reviewRef: RefObject<ReviewModalRef | null>;
};

const OnboardingModal = forwardRef<OnboardingModalRef, Props>(
  ({ feedbackRef, reviewRef }, ref) => {
    const sheetRef = useRef<BottomSheetModal>(null);

    useImperativeHandle(ref, () => sheetRef.current as BottomSheetModal);

    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);

    const notYetPress = () => {
      sheetRef.current?.close();
      feedbackRef.current?.present();
    };

    const loveItPress = () => {
      sheetRef.current?.close();
      reviewRef.current?.present();
    };

    return (
      <BottomSheetModal ref={sheetRef} onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Image source={logo} style={styles.logo} />
          <Title
            title="Enjoying Rizon so far?"
            style={{ paddingTop: 20, paddingBottom: 10 }}
          />
          <GreyText title="Your feedback helps us build a better money experience." />
          <View style={styles.buttons}>
            <Button
              title="Not Yet"
              style={{
                width: '48%',
                backgroundColor: colors.white,
                borderColor: colors.borderColor,
              }}
              textStyle={{ color: colors.black }}
              onPress={notYetPress}
            />
            <Button
              title="Yes, loving it"
              style={{ width: '48%' }}
              onPress={loveItPress}
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default OnboardingModal;

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
    marginTop: 30,
  },
});
