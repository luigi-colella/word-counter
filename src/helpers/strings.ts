/**
 * Count the words contained in the provided string.
 *
 * @param str The provided string.
 * @returns The numbers of the words.
 */
export const countWords = (str: string): number => {
  return str.split(/[^\s]+/).length - 1;
};
