exports.seed = async function(knex) {
  await knex('users').insert([
    {id: 1,
      username: 'jon',
      password: 'pass',
      email: 'jon@jon.com'
    },
    {id: 2,
      username: 'kate',
      password: 'pass',
      email: 'kate@kate.com'
    },
    {id: 3,
      username: 'gabe',
      password: 'pass',
      email: 'gabe@gabe.com'
    }
  ]);
};
