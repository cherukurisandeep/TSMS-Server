const mongoose = require('mongoose');
const expect = require('chai').expect;

const timesheetDAO = require(process.cwd() + '/server/api/timesheet/dao/timesheet-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('timesheetDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    timesheetDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
