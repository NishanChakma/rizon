import React, { forwardRef, useCallback } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import logo from '../../assets/logo.png';
import { Button, GreyText, Title } from '../reusable';
import { colors } from '../../utills';

export type OnboardingModalRef = BottomSheetModal;

const OnboardingModal = forwardRef<OnboardingModalRef>((_, ref) => {
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModal
      ref={ref}
      onChange={handleSheetChanges}
      // snapPoints={['40%']}
    >
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
            onPress={() => null}
          />
          <Button
            title="Yes, loving it"
            style={{ width: '48%' }}
            onPress={() => null}
          />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 30,
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

export default OnboardingModal;
