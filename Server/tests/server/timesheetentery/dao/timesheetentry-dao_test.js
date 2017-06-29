const mongoose = require('mongoose');
const expect = require('chai').expect;

const timesheetentryDAO = require(process.cwd() + '/server/api/timesheetentery/dao/timesheetentry-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('timesheetentryDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    timesheetentryDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
