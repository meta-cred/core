import { RATING_WEIGHTS } from '../types';
import { getContributionNodeWeight } from '../weightUtils';

describe('getContributionNodeWeight', () => {
  const mockAuthor = {
    eth_address: '0x7F101fE45e6649A6fB8F3F8B43ed03D353f2B90c',
    name: 'Some Author',
  };
  const mockUserA = {
    eth_address: '0x80e056c550a401a5bd5c9f499ffb1201127031e6',
    name: 'A User',
  };
  const mockUserB = {
    eth_address: '0x51fde4a26d825f0c25fe4cbd60c501eed2168d1a',
    name: 'B User',
  };
  const mockUserC = {
    eth_address: '0xd6eaad91d54ab421b06ed8fd10e65e7b2a09a591',
    name: 'C User',
  };

  const mockContribution = {
    id: 'contribution1',
    title: 'Mock Contribution',
    created_at: '2021-06-24T17:23:41.246497+00:00',
    date: '2021-04-06',
    author: mockAuthor,
    contributors: [
      {
        user: mockUserA,
        contribution_share: 0.75,
      },
      {
        user: mockUserB,
        contribution_share: 0.25,
      },
    ],
    votes: [
      {
        user: mockAuthor,
        rating: 'rare' as const,
        created_at: '2021-06-24T17:33:40.938363+00:00',
      },
      {
        user: mockUserC,
        rating: 'epic' as const,
        created_at: '2021-06-24T17:49:40.938363+00:00',
      },
    ],
  };

  it('should calculate the total weight of votes', () => {
    const res = getContributionNodeWeight(mockContribution);

    const totalWeight = RATING_WEIGHTS.rare + RATING_WEIGHTS.epic;
    const expected = (totalWeight / 2 + totalWeight / 10) * 2;

    expect(res).toMatchInlineSnapshot(`14.4`);
    expect(res).toEqual(expected);
  });

  it('should reduce the weight proportional to contribution share for self votes', () => {
    const res1 = getContributionNodeWeight({
      ...mockContribution,
      votes: [
        ...mockContribution.votes,
        {
          user: mockUserA,
          rating: 'epic' as const,
          created_at: '2021-06-24T17:49:40.938363+00:00',
        },
      ],
    });

    const res2 = getContributionNodeWeight({
      ...mockContribution,
      votes: [
        ...mockContribution.votes,
        {
          user: mockUserB,
          rating: 'epic' as const,
          created_at: '2021-06-24T17:49:40.938363+00:00',
        },
      ],
    });

    expect(res1).toMatchInlineSnapshot(`15.516666666666666`);
    expect(res2).toMatchInlineSnapshot(`17.386363636363637`);

    // userB vote weight should be more than userA since
    // userB had 25% contribution share vs 75% for userA.
    expect(res2).toBeGreaterThan(res1);
  });
});
