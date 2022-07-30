import TabBar from "../page/component/TabBar";
import LoginPage from "../page/LoginPage";

describe("Login scenario", () => {
  it("Should success login with valid credentials", async () => {
    await TabBar.openLoginPage();

    await LoginPage.ensureInLoginPage();

    await LoginPage.login("test@webdriver.io", "Test1234!");

    // TODO: Please click "OK" on alert after click login button and HAVE FUN! //
  });
});
