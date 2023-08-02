import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

let el;
describe('LoanApplication', () => {
  before(async()=>{
    el = await fixture('<loan-application></loan-application>');
  });
  
  it('should test html component', async () =>{
    el = await fixture(html`<div> <dash-board> </dash-board> </div>`);
    expect(el).to.be.accessible();
  });
 // it('should return the title ')
});