const express = require('express');
const router = express.Router();

const {
  getUsers,
  addUser,
  getUserById,
  getUserBy,
  addSleepRecord,
  editSleepRecord,
  removeSleepRecord,
  getSleepRecords,
  getSleepRecordById

} = require('../../data/helpers/usersDbHelper');

/*
@GET: users
@PARAMS: none
@ROUTE: "/api/users"
*/

//GET all users

router.get('/', async (req, res) => {

  try {
    const users = await getUsers();
    if (users.length) {
      res.status(200).json(users)
    } else {
      res.status(404).json({message: `No users found`})
    }
  }
  catch (err) {
    res.status(500).json({error: `Unable to retrieve users`})
  }
});

//GET all sleep records for a user
router.get('/sleeps', async (req, res) => {
  try{
    const records = await getSleepRecords()
    if(records){res.status(200).json(records)}
    else{res.status(500).json(error)}
  }
  catch(error){res.status(400).json(error)}    
});

//GET sleep record by Id
router.get('/sleeps/:id', async (req, res) => {
  const {id} = req.params;
  try{
    const records = await getSleepRecordById(id)
    if(records){res.status(200).json(records)}
    else{res.status(500).json(error)}
  }
  catch(error){res.status(400).json(error)} 
});

//ADD sleep record for user
router.post('/sleeps', async (req, res) => {
  const record = req.body;
  if(!record.user_id){
    return res.status(500).json(`error: Must include a user_id.`)
  }
  else{
    try{
      const newRecord = await addSleepRecord(record)
      if(newRecord){res.status(200).json(newRecord)}
      else{res.status(500).json(error)}
    }
    catch(error){res.status(400).json(error)}
  }
})

//EDIT sleep record for user
router.put('/sleeps/:id', async (req, res) =>{
  const {id} = req.params;
  const edits = req.body;
  try{
    const update = await editSleepRecord(id, edits)
    if(update){res.status(200).json(update)}
    else{res.status(500).json(error)}
  }
  catch(error){res.status(400).json(error)}
})

router.delete('/sleeps/:id', async (req, res) => {
  const {id} = req.params;
  try{
    const removed = await removeSleepRecord(id)
    if(removed){res.status(200).json(removed)}
    else{res.status(500).json(error)}
  } 
  catch(error){res.status(400).json(error)} 
})

module.exports = router;
