export const getErrorMessage = (e: unknown): string | null => {
  if (typeof e === 'string') return e;
  if ('message' in (e as Error)) return (e as Error).message;

  return null;
};
