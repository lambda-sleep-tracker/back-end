const db = require('../../data/dbConfig');

module.exports = {
  getUsers,
  getUserById,
  getUserBy,
  addUser,  
  addSleepRecord,
  editSleepRecord,
  removeSleepRecord,
  getSleepRecords,
  getSleepRecordById,
}

function getUsers() {
  return db('users');
}

async function addUser(user) {
  const [id] = await db('users')
    .insert(user, 'id');

  return getUserById(id);
}

function getUserById(id) {
  return db('users')
    .where({ id })
    .first();
}

function getUserBy(column) {
  return db('users')
    .where(column)
    .first();
}

async function addSleepRecord(record){
  const [id] = await db('sleeps')
  .insert(record, 'id'); 

  return getSleepRecordById(id);
}

function editSleepRecord(id, record){
  return db('sleeps')
    .where({id})
    .update(record)
}

function removeSleepRecord(id){
  return db('sleeps')
    .where({id})
    .del()
}

function getSleepRecords(){
  console.log('in method')
  return db('sleeps'); 
  
}

function getSleepRecordById(id){
  return db('sleeps')
  .where({id})
  .first()
}
