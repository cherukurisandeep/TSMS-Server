const mongoose = require('mongoose');
const expect = require('chai').expect;

const assosiateDAO = require(process.cwd() + '/server/api/pr_assosiate/dao/assosiate-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('assosiateDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    assosiateDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
