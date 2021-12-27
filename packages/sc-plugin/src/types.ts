export type Participant = {
  eth_address: string;
  name: string;
};

export type Rating = 'common' | 'rare' | 'epic' | 'legendary';

export const RATING_WEIGHTS: Record<Rating, number> = {
  common: 1,
  rare: 3,
  epic: 9,
  legendary: 18,
};

export type Vote = {
  user: Participant;
  rating: Rating;
  created_at: string;
};

export type Contribution = {
  id: string;
  title: string;
  created_at: string;
  date: string;
  author: Participant;
  contributors: Array<{
    user: Participant;
    contribution_share: number;
  }>;
  votes: Vote[];
};
