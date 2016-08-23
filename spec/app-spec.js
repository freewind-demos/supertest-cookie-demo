'use strict';
const request = require('supertest');
const async = require('async');
const app = require('../index');

function finish(done) {
  return (err) => {
    if (err) done.fail(err);
    else done();
  }
}

describe('express application', () => {

  it('/', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hello, world!', finish(done));
  });

  it('send cookie to server', (done) => {
    request(app)
      .get('/set-cookie')
      .set('Cookie', 'token1=111111;token2=222222')
      .expect(200, {
        token1: '111111',
        token2: '222222'
      }, finish(done));
  });


});