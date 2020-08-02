import { returnString } from "./";

test("return value argument", () => {
	expect(returnString(null)).toBe(null);
	expect(returnString("")).toBe("");
	expect(returnString("test")).toBe("test");
});
