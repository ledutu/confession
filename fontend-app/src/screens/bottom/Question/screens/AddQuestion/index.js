import {
  Box,
  HStack,
  Input,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {Platform} from 'react-native';
import {colors} from 'utils';

const INIT_FORM = {
  question: '',
  correctAnswer: '',
  wrongAnswer1: '',
  wrongAnswer2: '',
  wrongAnswer3: '',
};

const InputLabel = ({
  height = null,
  mt = 0,
  label,
  limitMax,
  value,
  onChangeText,
}) => {
  const limit = value?.length || 0;

  const _onChangeText = text => {
    if (text?.length <= limitMax) {
      onChangeText && onChangeText(text);
    }
  };

  return (
    <Box mt={mt}>
      <HStack justifyContent="space-between">
        <Text color={colors.primaryText} fontSize="sm">
          {label}
        </Text>
        <Text color={colors.primaryText} fontSize="sm">
          {limit}/{limitMax}
        </Text>
      </HStack>
      <Input
        multiline={height !== null}
        value={value}
        onChangeText={_onChangeText}
        color={colors.white}
        mt={1}
        h={height}
        textAlignVertical="top"
        borderColor={colors.primaryText}
        _focus={{borderColor: colors.blue}}
      />
    </Box>
  );
};

const AddQuestion = () => {
  const [form, setForm] = useState(INIT_FORM);

  const _onTextQuestion = text => {
    setForm({...form, question: text});
  };

  const _onTextCorrectAnswer = text => {
    setForm({...form, correctAnswer: text});
  };

  const _onTextWrongAnswer1 = text => {
    setForm({...form, wrongAnswer1: text});
  };

  const _onTextWrongAnswer2 = text => {
    setForm({...form, wrongAnswer2: text});
  };

  const _onTextWrongAnswer3 = text => {
    setForm({...form, wrongAnswer3: text});
  };

  return (
    <Box flex={1} bg={colors.darkPrimary} p={3}>
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <InputLabel
            height={120}
            label="Câu hỏi của bạn"
            limitMax={120}
            value={form.question}
            onChangeText={_onTextQuestion}
          />
          <InputLabel
            mt={3}
            label="Câu trả lời đúng"
            limitMax={25}
            value={form.correctAnswer}
            onChangeText={_onTextCorrectAnswer}
          />
          <InputLabel
            mt={3}
            label="Câu trả lời sai 1"
            limitMax={25}
            value={form.wrongAnswer1}
            onChangeText={_onTextWrongAnswer1}
          />
          <InputLabel
            mt={3}
            label="Câu trả lời sai 2"
            limitMax={25}
            value={form.wrongAnswer2}
            onChangeText={_onTextWrongAnswer2}
          />
          <InputLabel
            mt={3}
            label="Câu trả lời sai 3"
            limitMax={25}
            value={form.wrongAnswer3}
            onChangeText={_onTextWrongAnswer3}
          />
          <Pressable>
            <Box
              mt={5}
              p={3}
              rounded="lg"
              justifyContent="center"
              alignItems="center"
              bg={{
                linearGradient: {
                  colors: colors.gradient,
                  start: [0, 0],
                  end: [1, 0],
                },
              }}>
              <Text color={colors.white}>Xác nhận</Text>
            </Box>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default AddQuestion;
