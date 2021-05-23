'use strict'

const { deprecatedService } = require('..')

module.exports = deprecatedService({
  category: 'build',
  route: {
    base: 'docker/build',
    pattern: ':various*',
  },
  label: 'docker build',
  dateAdded: new Date('2021-05-24'),
})
