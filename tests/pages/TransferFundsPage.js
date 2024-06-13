class TransferFundsPage {
    constructor(page) {
      this.page = page;
      this.amountInput = 'input[id="amount"]';
      this.fromAccountSelect = 'select[id="fromAccountId"]';
      this.toAccountSelect = 'select[id="toAccountId"]';
      this.submitButton = 'input[type="submit"]';
      this.successMessage = 'text=Transfer Complete!';
    }
  
    async navigate() {
      await this.page.click('a[href="/parabank/transfer.htm"]');
    }
  
    async transferFunds(amount, fromAccount, toAccount) {
      await this.page.fill(this.amountInput, amount);
      await this.page.selectOption(this.fromAccountSelect, fromAccount);
      await this.page.selectOption(this.toAccountSelect, toAccount);
      await this.page.click(this.submitButton);
    }
  
    async verifyTransferSuccess() {
      await this.page.waitForSelector(this.successMessage, { state: 'visible' });
    }
  }
  
  export default TransferFundsPage;