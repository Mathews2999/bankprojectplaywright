class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = 'input[name="username"]';
      this.passwordInput = 'input[name="password"]';
      this.loginButton = 'input[type="submit"]';
    }
  
    async navigate() {
      await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }
  
    async login(username, password) {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
    }
  }
  
  export default LoginPage;