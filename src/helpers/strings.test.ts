import { expect, test } from "vitest";
import { countWords } from "./strings";

test("countWords() works as expected", () => {
  expect(countWords("hello")).toBe(1);
  expect(countWords(" hello ")).toBe(1);
  expect(countWords("hello world")).toBe(2);
  expect(countWords(" hello world ")).toBe(2);
  expect(countWords("hello world\n\nhello")).toBe(3);
});
