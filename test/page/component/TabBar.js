class TabBar {
  async openLoginPage() {
    await $("~Login").click();
  }
}

export default new TabBar();
