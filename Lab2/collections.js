const phoneBook = [
  { name: 'Lauren Faust', phone: '+380445554433' },
  { name: 'Veronika', phone: '+380671234567' },
  { name: 'Anna', phone: '+380931112233' },
  { name: 'Sofia', phone: '+380501234567' },
];

function findPhoneByName(name) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === name) {
      return phoneBook[i].phone;
    }
  }

  return 'Not found';
}

console.log(findPhoneByName('Lauren Faust'));
console.log(findPhoneByName('Veronika'));

const phoneHash = {
  'Lauren Faust': '+380445554433',
  Veronika: '+380671234567',
  Anna: '+380931112233',
  Sofia: '+380501234567',
};

function findPhoneByNameHash(name) {
  return phoneHash[name] ?? 'Not found';
}

console.log(findPhoneByNameHash('Lauren Faust'));
console.log(findPhoneByNameHash('Sofia'));