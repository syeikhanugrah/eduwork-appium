class LoginPage {
  //
  // Locators
  //
  get inputEmail() {
    return $("~input-email");
  }

  get inputPassword() {
    return $("~input-password");
  }

  get buttonLogin() {
    return $("~button-LOGIN");
  }

  //
  // Action methods
  //
  async ensureInLoginPage() {
    const loginScreen = $("~Login-screen");

    await expect(loginScreen).toBeDisplayed();
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.buttonLogin.click();
  }
}

export default new LoginPage();
