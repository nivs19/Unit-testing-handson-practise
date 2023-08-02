import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

let el;
describe('Success screen ', () => {
  // Write test cases inside this block
  before(async()=>{
    el = await fixture('<loan-success></loan-success>');
  });
  it('should test html component', async () =>{
    el = await fixture(html`<div></div>`);
    expect(el).to.be.accessible();
  });
});

describe('error screen', () => {
  before(async()=>{
    el = await fixture('<loan-error></loan-error>');
  });
  it('should test html component', async () =>{
    el = await fixture(html`<div></div>`);
    expect(el).to.be.accessible();
  });
});
