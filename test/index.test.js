let { Localizer } = require('../dist/index.js');

const localizer = new Localizer("dasdasdasd");

test("Testing boilerplate of Localizer", () => {
	expect(localizer.getKek()).toBe("dasdasdasd");
});