import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  let el;
  before(async()=>{
    el = await fixture('<basic-details></basic-details>');
  });
  it('should test html component', async () =>{
    el = await fixture(html`<div class="form-basic"></div>`);
    expect(el).to.be.accessible();
  });
});
