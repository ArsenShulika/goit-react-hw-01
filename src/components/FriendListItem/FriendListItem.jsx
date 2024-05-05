import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.container}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.descr}>{name}</p>
      <p
        className={clsx(
          css.status,
          isOnline === true ? css.online : css.offline
        )}
      >
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
