import { ErrorMessages } from "./ErrorMessages";

/**
 * Returns a Boolean value that indicates whether a value is greater than 1.
 */
export function isGreaterThanOne(value: number): boolean {
	if (typeof value !== "number" || isNaN(value)) {
		throw new Error(ErrorMessages.IS_GREATER_THAN_ONE_NOT_A_NUMBER);
	}

	return value > 1;
}
