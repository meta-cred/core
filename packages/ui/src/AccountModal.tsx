import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  useClipboard,
} from '@chakra-ui/react';
import React from 'react';

export type Props = Omit<ModalProps, 'children'> & {
  address: string | null;
  displayName?: string | null;
  connectedWallet?: string | null;
  onDisconnect: () => void;
  disconnectText?: string;
};

export const AccountModal: React.FC<Props> = ({
  displayName,
  address,
  onDisconnect,
  connectedWallet,
  disconnectText = 'Disconnect',
  ...props
}) => {
  const { hasCopied, onCopy } = useClipboard(address || '');

  return (
    <Modal isCentered {...props}>
      <ModalOverlay backdropFilter="blur(6px)" bg="blackAlpha.300" />
      <ModalContent shadow="lg" borderRadius="lg">
        <ModalHeader>Account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              value={displayName || address || ''}
              isReadOnly
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" variant="ghost" onClick={onCopy}>
                {hasCopied ? 'Copied' : 'Copy'}
              </Button>
            </InputRightElement>
          </InputGroup>

          {props.children ? <Box mt="4">{props.children}</Box> : null}
        </ModalBody>

        <ModalFooter>
          <HStack justify="flex-end">
            <Text fontSize="sm" color="gray.500">
              Connected To {connectedWallet}
            </Text>
            <Button
              size="sm"
              color="red.400"
              onClick={() => {
                onDisconnect();
                props.onClose();
              }}
            >
              {disconnectText}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
