import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../utills';
import OnboardingModal, {
  OnboardingModalRef,
} from '../components/modal/OnboardingModal';

const HomeScreen = () => {
  const modalRef = useRef<OnboardingModalRef>(null);

  useEffect(() => {
    // wait for first layout
    requestAnimationFrame(() => {
      modalRef.current?.present();
    });
  }, []);

  return (
    <View style={styles.root}>
      <OnboardingModal ref={modalRef} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
