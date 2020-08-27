const req = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = require('../app');

describe('Branch', () => {
  beforeEach(async () => {
    for (let collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({});
    }
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should GET a list of branches', async (done) => {
    const provider = await mongoose.models.Provider.create({
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    });
    const user = await req(app).get('/providers/all');
    const res = await req(app).get(`/providers/${user.body[0]._id}/branch/all`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(0);
    done();
  });

  // it('should create a new branch', )

  it('should create a new branch ', async (done) => {
    const provider = await mongoose.models.Provider.create({
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    });
    const branch = {
      branchName: 'Envigado',
      branchAdress: 'Envigado',
    };
    const user = await req(app).get('/providers/all');
    const res = await req(app)
      .post(`/providers/${user.body[0]._id}/branch/create`)
      .send(branch);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('branchName');
    done();
  });

  it('should create a new branch ', async (done) => {
    const provider = await mongoose.models.Provider.create({
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    });
    const branch = {
      branchName: 'Envigado',
    };
    const user = await req(app).get('/providers/all').send(provider);
    const res = await req(app)
      .post(`/providers/${user.body[0]._id}/branch/create`)
      .send(branch);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('Dirección es un campo requerido');
    done();
  });

  it('should show a branch by id ', async (done) => {
    const provider = await mongoose.models.Provider.create({
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    });
    const branch = await mongoose.models.Branch.create({
      branchName: 'Envigado',
      branchAdress: 'Envigado',
    });
    const user = await req(app).get('/providers/all');
    const res = await req(app).get(
      `/providers/${user.body[0]._id}/branch/show/${user.body[0]._id}`
    );

    expect(res.statusCode).toBe(200);
    done();
  });

  it('should update a branch by id ', async (done) => {
    const provider = await mongoose.models.Provider.create({
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    });
    const branch = await mongoose.models.Branch.create({
      branchName: 'Envigado',
      branchAdress: 'Envigado',
    });
    const user = await req(app).get('/providers/all');
    const res = await req(app).put(
      `/providers/${user.body[0]._id}/branch/edit/${user.body[0]._id}`
    );

    expect(res.statusCode).toBe(200);
    done();
  });

  it('should delete a branch by id ', async (done) => {
    const provider = await mongoose.models.Provider.create({
      providerEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '1111',
    });
    const branch = await mongoose.models.Branch.create({
      branchName: 'Envigado',
      branchAdress: 'Envigado',
    });
    const user = await req(app).get('/providers/all');
    const res = await req(app).delete(
      `/providers/${user.body[0]._id}/branch/destroy/${user.body[0]._id}`
    );

    expect(res.statusCode).toBe(200);
    done();
  });
});
