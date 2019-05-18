const test = require('tape');
const supertest = require('supertest');
const router = require('../scripts/router');

test('tests work!', (t) => {
    let num = 2
    t.equal(num, 2, 'Should return 2');
    t.end(); 
  })

test('/ returns StatusCode of 200', (t)=>{
  supertest(router)
    .get("/")
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'Should return 200');
      t.end();
    });

});

test('Incorrect route returns statusCode of 404', (t) => {
  supertest(router)
    .get('/random-route')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err) => {
      t.error(err, 'Error should be null');
      t.end();
    })
})


