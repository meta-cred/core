import { useAuthStore } from '@meta-cred/usewallet';

export const useAuthenticatedAddress = (): string | null => {
  const { address } = useAuthStore();
  return address;
};
