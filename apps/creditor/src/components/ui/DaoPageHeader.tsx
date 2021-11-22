import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Skeleton,
  Tab,
  TabList,
  Tabs,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { Link } from '@meta-cred/ui/Link';
import React from 'react';

export type Props = {
  title: string;
  selectedTab: number;
  handleTabsChange?: (index: number) => void;
  isLoaded: boolean;
  headerRight?: React.ReactNode;
  daoName: string;
};

export const DaoPageHeader: React.FC<Props> = ({
  title,
  selectedTab,
  handleTabsChange,
  isLoaded,
  headerRight,
  daoName,
}) => (
  <Tabs
    isFitted
    isManual
    isLazy
    index={selectedTab}
    onChange={handleTabsChange}
  >
    <Box pt="8">
      <Flex
        direction={['column', 'row']}
        justify="space-between"
        align="flex-start"
        mb="10"
        px={[4, 8]}
      >
        <Skeleton isLoaded={isLoaded}>
          <Heading size="lg">{title}</Heading>
        </Skeleton>

        <HStack spacing={{ base: '2', md: '4' }}>{headerRight}</HStack>
      </Flex>

      <Flex justify="space-between" align="center" px={{ md: '8' }}>
        <TabList border="0" w={{ base: '100%', md: 'auto' }}>
          <Link href={`/d/${daoName}`} noUnderline d="contents">
            <Tab fontWeight="semibold">Contributions</Tab>
          </Link>
          <Link href={`/d/${daoName}/members`} noUnderline d="contents">
            <Tab fontWeight="semibold">Members</Tab>
          </Link>
        </TabList>
      </Flex>
    </Box>
    <Box zIndex={0}>
      <Divider
        borderBottomWidth="2px"
        opacity={1}
        borderColor={mode('gray.100', 'gray.700')}
      />
    </Box>
  </Tabs>
);
