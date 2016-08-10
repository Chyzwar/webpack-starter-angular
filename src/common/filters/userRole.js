
function userName(){
  return function(user){
    return user.permisions.role;
  }
}

export default userName;
