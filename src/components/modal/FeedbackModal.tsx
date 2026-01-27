import React, { forwardRef, useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { Button, GreyText, TextArea, Title } from '../reusable';

export type FeedbackModalRef = BottomSheetModal;

const FeedbackModal = forwardRef<FeedbackModalRef>((_, ref) => {
  const [feedback, setfeedback] = useState('');
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModal ref={ref} onChange={handleSheetChanges}>
      <BottomSheetView style={styles.contentContainer}>
        <Title title="Help us improve Rizon" />
        <GreyText
          title="Tell us what didn’t feel right, we read every message."
          style={{ paddingVertical: 10 }}
        />
        <TextArea
          value={feedback}
          onChangeText={setfeedback}
          placeholder="Type your feedback here…"
          style={{ paddingBottom: 30 }}
        />
        <Button title="Send feedback" onPress={() => null} />
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
});

export default FeedbackModal;
