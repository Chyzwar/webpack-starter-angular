import './user-avatar.scss';
import avatar from './user-avatar.html';

function userAvatar() {
  return {
    replace: true,
    scope: {
      user: "=",
    },
    template: avatar
  };
}

export default userAvatar;
