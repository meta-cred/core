import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

type Props = {
  image?: string;
  background?: string;
  name: string;
  description?: string;
  emoji?: string;
};

export const ProfileCard: React.FC<Props> = ({
  image,
  background,
  name,
  description,
  emoji,
}) => (
  <Box
    maxW="320px"
    w="full"
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow="lg"
    rounded="md"
    overflow="hidden"
  >
    {background ? (
      <Image h="120px" w="full" src={background} objectFit="cover" />
    ) : null}

    <Flex justify="center" mt={background ? -12 : 4}>
      <Avatar size="xl" src={image} name={name} showBorder />
    </Flex>

    <Box p={6}>
      <Stack spacing={0} align="center" mb={5}>
        <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
          {name} {emoji}
        </Heading>
        {description && <Text color="gray.500">{description}</Text>}
      </Stack>
    </Box>
  </Box>
);
