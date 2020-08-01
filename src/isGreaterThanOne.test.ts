import { isGreaterThanOne } from "./";
import { IS_GREATER_THAN_ONE_NOT_A_NUMBER } from "./errorMessages";

test("true for numbers greater than 1", () => {
	expect(isGreaterThanOne(2)).toBe(true);
	expect(isGreaterThanOne(Number.MAX_VALUE)).toBe(true);
	expect(isGreaterThanOne(Number.POSITIVE_INFINITY)).toBe(true);
});

test("false for numbers less than or equal to 1", () => {
	expect(isGreaterThanOne(1)).toBe(false);
	expect(isGreaterThanOne(Number.MIN_VALUE)).toBe(false);
	expect(isGreaterThanOne(Number.NEGATIVE_INFINITY)).toBe(false);
});

test("throw exception when value is not a number", () => {
	function compileAndroidCode() {
		throw new Error("you are using the wrong JDK");
	}

	expect(() => {
		isGreaterThanOne(undefined);
	}).toThrow(IS_GREATER_THAN_ONE_NOT_A_NUMBER);

	expect(() => {
		isGreaterThanOne(null);
	}).toThrow(IS_GREATER_THAN_ONE_NOT_A_NUMBER);

	expect(() => {
		isGreaterThanOne(NaN);
	}).toThrow(IS_GREATER_THAN_ONE_NOT_A_NUMBER);
});
