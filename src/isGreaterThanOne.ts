import { IS_GREATER_THAN_ONE_NOT_A_NUMBER } from "./errorMessages";

export function isGreaterThanOne(value: number): boolean {
	if (typeof value !== "number" || isNaN(value)) {
		throw new Error(IS_GREATER_THAN_ONE_NOT_A_NUMBER);
	}

	return value > 1;
}
