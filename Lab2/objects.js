function fn() {
  const user1 = { name: 'Veronika' };
  let user2 = { name: 'Anna' };

  user1.name = 'Maria';
  user2.name = 'Olena';

  user2 = { name: 'Sofia' };

  console.log(user1);
  console.log(user2);
}

fn();

function createUser(name, city) {
  return {
    name: name,
    city: city,
  };
}

console.log(createUser('Lauren Faust', 'Roma'));