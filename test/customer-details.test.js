import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

let el;
describe('customer details', () => {
  before(async()=>{
    el = await fixture('<customer-details></customer-details>');
  });
  it('should test html component', async () =>{
    el = await fixture(html`<div class="container"></div>`);
    expect(el).to.be.accessible();
  });
});
