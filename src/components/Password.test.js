let fns = require('./utils/utilityfunctions')

test("'joeblank' should return true", () => {
    // arrange & act
    let result = fns.usernameCheck("joeblank");
    expect(result).toBeTruthy();
})