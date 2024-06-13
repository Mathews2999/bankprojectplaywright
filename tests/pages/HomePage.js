class HomePage {
    constructor(page) {
      this.page = page;
      this.accountsOverviewText = 'text=Accounts Overview';
    }
  
    async verifyLoginSuccess() {
      await this.page.waitForSelector(this.accountsOverviewText, { state: 'visible' });
    }
  }
  
  export default HomePage;