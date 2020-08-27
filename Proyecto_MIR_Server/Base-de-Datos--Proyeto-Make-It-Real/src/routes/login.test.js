const req = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = require('../app');

describe('users', () => {
  beforeEach(async () => {
    for (let collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({});
    }
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should signin if client exist', async (done) => {
    const password = await bcrypt.hash('12345', 8);
    const client = {
      clientEmail: 'sara@test.com',
      name: 'sara',
      lastname: 'Marín',
      password,
    };

    await mongoose.models.Client.create(client);

    const res = await req(app).post('/signin').send({
      email: 'sara@test.com',
      password: '12345',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    done();
  });

  it('should signin if provider exist', async (done) => {
    const password = await bcrypt.hash('12345', 8);
    const provider = {
      providerEmail: 'saram@test.com',
      name: 'sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '000',
      password,
    };

    await mongoose.models.Provider.create(provider);

    const res = await req(app).post('/signin').send({
      email: 'saram@test.com',
      password: '12345',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    done();
  });

  it("should't signin provider with an invalid email", async (done) => {
    const password = await bcrypt.hash('12345', 8);
    const provider = {
      providerEmail: 'saram@test.com',
      name: 'sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '000',
      password,
    };

    await mongoose.models.Provider.create(provider);

    const res = await req(app).post('/signin').send({
      email: 'saramm@test.com',
      password: '12345',
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('El usuario no existe');
    done();
  });

  it("should't signin provider with an invalid password", async (done) => {
    const password = await bcrypt.hash('12345', 8);
    const provider = {
      providerEmail: 'saram@test.com',
      name: 'sara',
      lastname: 'Marín',
      company: 'exito',
      nit: '000',
      password,
    };

    await mongoose.models.Provider.create(provider);

    const res = await req(app).post('/signin').send({
      email: 'saram@test.com',
      password: '12545',
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('Usuario o contraseña invalida');
    done();
  });

  it("should't signin client with an invalid email", async (done) => {
    const password = await bcrypt.hash('12345', 8);
    const client = {
      clientEmail: 'saram@test.com',
      name: 'sara',
      lastname: 'Marín',
      password,
    };

    await mongoose.models.Client.create(client);

    const res = await req(app).post('/signin').send({
      email: 'saramm@test.com',
      password: '12345',
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('El usuario no existe');
    done();
  });

  it("should't signin client with an invalid password", async (done) => {
    const password = await bcrypt.hash('12345', 8);
    const client = {
      clientEmail: 'saram@test.com',
      name: 'sara',
      lastname: 'Marín',
      password,
    };

    await mongoose.models.Client.create(client);

    const res = await req(app).post('/signin').send({
      email: 'saram@test.com',
      password: '12545',
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('Usuario o contraseña invalida');
    done();
  });
});
