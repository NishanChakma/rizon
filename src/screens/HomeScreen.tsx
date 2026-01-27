import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utills';
import OnboardingModal, {
  OnboardingModalRef,
} from '../components/modal/OnboardingModal';
import FeedbackModal, {
  FeedbackModalRef,
} from '../components/modal/FeedbackModal';
import ReviewModal, { ReviewModalRef } from '../components/modal/ReviewModal';

const HomeScreen = () => {
  const modalRef = useRef<OnboardingModalRef>(null);
  const feedbackRef = useRef<FeedbackModalRef>(null);
  const reviewRef = useRef<ReviewModalRef>(null);

  useEffect(() => {
    // wait for first layout
    requestAnimationFrame(() => {
      modalRef.current?.present();
    });
  }, []);

  return (
    <View style={styles.root}>
      <OnboardingModal
        ref={modalRef}
        feedbackRef={feedbackRef}
        reviewRef={reviewRef}
      />
      <FeedbackModal ref={feedbackRef} />
      <ReviewModal ref={reviewRef} />
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
