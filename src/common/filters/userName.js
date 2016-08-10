
function userName(){
  return function(user){
    return `${user.firstName} ${user.lastName}`;
  }
}

export default userName;
