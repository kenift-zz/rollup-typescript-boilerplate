let { Localizer } = require('../');

const localizer = new Localizer("dasdasdasd");

test("Testing boilerplate of Localizer", () => {
	expect(localizer.getKek()).toBe("dasdasdasd");
});