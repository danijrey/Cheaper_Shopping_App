const req = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = require('../app');

describe('provider', () => {
  beforeEach(async () => {
    for (let collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({});
    }
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should GET a list of providers', async (done) => {
    const res = await req(app).get('/providers/all');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(0);
    done();
  });

  it("shouldn't GET a list of providers", async (done) => {
    const provider = {
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    };
    await mongoose.models.Provider.create(provider);
    const res = await req(app).get('/providers/all');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(1);
    done();
  });

  it('should signup a new provider ', async (done) => {
    const provider = {
      providerEmail: 'sara@test.com',
      name: 'Sara',
      lastname: 'Marín',
      password: '12345',
      company: 'exito',
      nit: '1111',
    };
    const res = await req(app).post('/providers/create').send(provider);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    done();
  });

  it("shoudn't singup a new provider if email already exist", async (done) => {
    const provider = {
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    };
    await mongoose.models.Provider.create(provider);
    const res = await req(app).post('/providers/create').send(provider);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('El email ya existe');
    done();
  });

  it('should show a provider by id ', async (done) => {
    const provider = await mongoose.models.Provider.create({
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    });
    const user = await req(app).get('/providers/all');
    const res = await req(app).get(`/providers/show/${user.body[0]._id}`);

    expect(res.statusCode).toBe(200);
    done();
  });

  it('should update a provider ', async (done) => {
    const provider = await mongoose.models.Provider.create({
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    });
    const user = await req(app).get('/providers/all');
    const res = await req(app).put(`/providers/edit/${user.body[0]._id}`);

    expect(res.statusCode).toBe(200);
    done();
  });

  it('should delete a provider ', async (done) => {
    const provider = await mongoose.models.Provider.create({
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    });
    const user = await req(app).get('/providers/all');
    const res = await req(app).delete(`/providers/destroy/${user.body[0]._id}`);

    expect(res.statusCode).toBe(200);
    done();
  });
});
