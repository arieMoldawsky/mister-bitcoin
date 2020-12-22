import {storageService} from './storageService';

export const userService = {
  getUser,
  signup,
  transferCoins
}

function getUser() {
  return storageService.load('loggedUser')
}

function signup(name) {
  const user = {
    name,
    coins: 100,
    moves: []
  }
  storageService.store('loggedUser', user)
}

function transferCoins(toUser, amount) {
  var user = storageService.load('loggedUser');
  var move = {
    _id: _makeId(),
    toUser,
    amount,
    doneAt: Date.now()
  }
  user.moves.unshift(move);
  user.coins = user.coins - amount;
  console.log(user);
  storageService.store('loggedUser', user)
}
function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}