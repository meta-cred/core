import { createWeightedGraph } from '../weightedGraph';
import { getMockContributionData } from './testUtils';

describe('weightedGraph', () => {
  const { mockContribution } = getMockContributionData();

  it('should generate a weighted graph without errors', () => {
    const weightedGraph = createWeightedGraph([mockContribution]);

    expect(weightedGraph).toBeTruthy();
  });
});
