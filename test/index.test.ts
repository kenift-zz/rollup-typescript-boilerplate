import { Localizer } from '../src'

const localizer = new Localizer("dasdasdasd");

test("Testing boilerplate of Localizer", () => {
	expect(localizer.getKek()).toBe("dasdasdasd");
});