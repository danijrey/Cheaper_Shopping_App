const req = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = require('../app');

describe('Product', () => {
  let token;

  beforeEach(async () => {
    for (let collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({});
    }
    const provider = {
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    };

    const auth = await req(app).post('/providers/create').send(provider);
    token = auth.body.token;
    const formdata = await req(app).post('/providers/create').send(provider);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should get products provider', async (done) => {
    const res = await req(app).get('/products/all').set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(0);
    done();
  });

  // it('should create a new product', async (done) => {
  //   const res = await req(app)
  //     .post('/products/create')
  //     .set('Authorization', token)
  //     .field('name', 'Huevos')
  //     .field('price', 10000)
  //     .field('category', 'lacteos')
  //     .field('description', 'Huevos triple A')
  //     .attach('file', 'public/chocolate.png');

  //   console.log('res', res);

  //   expect(res.statusCode).toBe(200);
  //   expect(res.body).toHaveProperty('title', 'New Title');
  //   done();
  // });

  it('should show a product by id ', async (done) => {
    const product = {
      name: 'huevos',
      picture: 'foto1',
      price: 10000,
      category: 'lacteos',
      description: 'huevos triple A',
    };
    const user = await req(app).get('/providers/all');
    const res = await req(app).get(`/products/show/${user.body[0]._id}`);

    expect(res.statusCode).toBe(200);
    done();
  });

  it('should update a product by id ', async (done) => {
    const product = {
      name: 'huevos',
      picture: 'foto1',
      price: 10000,
      category: 'lacteos',
      description: 'huevos triple A',
    };
    const user = await req(app).get('/providers/all');
    const res = await req(app).put(`/products/edit/${user.body[0]._id}`);

    expect(res.statusCode).toBe(200);
    done();
  });

  it('should delete a product by id ', async (done) => {
    const product = {
      name: 'huevos',
      picture: 'foto1',
      price: 10000,
      category: 'lacteos',
      description: 'huevos triple A',
    };
    const user = await req(app).get('/providers/all');
    const res = await req(app).delete(`/products/destroy/${user.body[0]._id}`);

    expect(res.statusCode).toBe(200);
    done();
  });
});
