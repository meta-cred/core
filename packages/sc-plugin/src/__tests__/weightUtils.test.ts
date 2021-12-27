import { getContributionNodeWeight } from '../weightUtils';
import { getMockContributionData } from './testUtils';

describe('getContributionNodeWeight', () => {
  const { mockContribution, mockUserA, mockUserB } = getMockContributionData();

  it('should calculate the total weight of votes', () => {
    const res = getContributionNodeWeight(mockContribution);

    expect(res).toMatchInlineSnapshot(`14.4`);
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
