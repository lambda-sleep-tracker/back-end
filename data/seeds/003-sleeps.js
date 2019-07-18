exports.seed = async function(knex) {
  await knex('sleeps').insert([
    {id: 1,
      user_id: 1,
      bedtime: '2019-07-17 21:00:00.000',
      waketime: '2019-07-18 08:00:00.000',
      sleepquality: 2
    },
    {id: 2,
      user_id: 2,
      bedtime: '2019-07-17 21:00:00.000',
      waketime: '2019-07-18 08:00:00.000',
      sleepquality: 2
    },
    {id: 3,
      user_id: 3,
      bedtime: '2019-07-17 21:00:00.000',
      waketime: '2019-07-18 08:00:00.000',
      sleepquality: 2
    }
  ]);
};
