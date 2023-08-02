import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

let el;
describe('Loan EMI details', () => {
  before(async()=>{
    el = await fixture('<loanemi-details></loanemi-details>');
  });
  it('should test html component', async () =>{
    el = await fixture(html`<div></div>`);
    expect(el).to.be.accessible();
  });
});
