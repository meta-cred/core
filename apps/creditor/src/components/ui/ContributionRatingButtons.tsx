import { Badge } from '@chakra-ui/react';
import { ToggleButton } from '@meta-cred/ui/ToggleButton';
import { ToggleButtonGroup } from '@meta-cred/ui/ToggleButtonGroup';
import React, { useState } from 'react';

export type Props = {
  initialRating?: string;
};

export const ContributionRatingButtons: React.FC<Props> = () => {
  const [rating, setRating] = useState('');

  return (
    <ToggleButtonGroup
      size="sm"
      value={rating}
      onChange={setRating}
      isAttached
      variant={rating ? 'solid' : 'outline'}
      aria-label="Rate Contribution"
      maxW="lg"
      w="100%"
      mt={4}
    >
      <ToggleButton value="common" colorScheme="gray">
        Common
        <Badge colorScheme="gray" ml={1}>
          1
        </Badge>
      </ToggleButton>
      <ToggleButton value="rare" colorScheme="green">
        Rare
        <Badge colorScheme="green" ml={1}>
          3
        </Badge>
      </ToggleButton>
      <ToggleButton value="epic" colorScheme="orange">
        Epic
        <Badge colorScheme="orange" ml={1}>
          9
        </Badge>
      </ToggleButton>
      <ToggleButton value="legendary" colorScheme="pink" flex={1.3}>
        Legendary
        <Badge colorScheme="pink" ml={1}>
          18
        </Badge>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
