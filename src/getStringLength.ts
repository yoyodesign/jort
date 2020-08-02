import { ErrorMessages } from "./ErrorMessages";

export function getStringLength(value: string): number {
	if (typeof value !== "string") {
		throw new Error(ErrorMessages.GET_STRING_LENGTH_NOT_A_STRING);
	}

	return value.length;
}
