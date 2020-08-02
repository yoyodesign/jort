import { getStringLength } from "./getStringLength";
import { isGreaterThanOne } from "./isGreaterThanOne";

export function isStringLengthGreaterThanOne(value: string): boolean {
	return isGreaterThanOne(getStringLength(value));
}
