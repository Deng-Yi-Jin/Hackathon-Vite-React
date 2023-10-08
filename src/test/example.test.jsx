import { describe, it, expect } from "vitest";


describe("Example Suite", () => {
    it("shoould pass", ()=> {
		const sum = 2 + 2
		expect(sum).toEqual(4)
	})
})
