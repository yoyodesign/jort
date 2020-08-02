import { getStringLength } from "./getStringLength";
import { isGreaterThanOne } from "./isGreaterThanOne";

export function isStringLengthGreaterThanOne(value: string): boolean {
	const length = getStringLength(value);

	return isGreaterThanOne(length);
}
