import {
  Box,
  Button,
  ButtonProps,
  useColorModeValue,
  useId,
  useRadio,
  UseRadioProps,
} from '@chakra-ui/react';
import * as React from 'react';

export type ToggleButtonProps = ButtonProps & {
  value: string;
  colorScheme?: string;
  radioProps?: UseRadioProps;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  radioProps,
  colorScheme = 'gray',
  flex = 1,
  ...rest
}) => {
  const { getInputProps, getCheckboxProps, getLabelProps } =
    useRadio(radioProps);
  const id = useId(undefined, 'toggle-button');

  const inputProps = getInputProps();
  // Hack for fixing NextJS specific type error (Type 'ArrayInterpolation<undefined>' provides no match for the signature '(theme: any): Interpolation<undefined>'.)
  const checkboxProps = getCheckboxProps() as Omit<
    ReturnType<typeof getCheckboxProps>,
    'css'
  >;
  const labelProps = getLabelProps() as Omit<
    ReturnType<typeof getLabelProps>,
    'css'
  >;

  return (
    <Box as="label" cursor="pointer" flex={flex} {...labelProps}>
      <input {...inputProps} aria-labelledby={id} />
      <Button
        as="div"
        id={id}
        fontWeight="medium"
        w="100%"
        fontSize={['xs', 'sm']}
        p={[1, 3]}
        color={useColorModeValue(`${colorScheme}.500`, `${colorScheme}.300`)}
        _checked={{
          color: useColorModeValue(`blackAlpha.600`, `whiteAlpha.800`),
          bg: useColorModeValue(`${colorScheme}.300`, `${colorScheme}.600`),
          fontWeight: 'semibold',
        }}
        {...checkboxProps}
        {...rest}
      />
    </Box>
  );
};
