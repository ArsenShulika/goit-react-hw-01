import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.firstContainer}>
        <img className={css.image} src={image} alt="User avatar" width="100" />
        <p className={css.title}>{name}</p>
        <p className={css.descr}>@{tag}</p>
        <p className={css.descr}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.integers}>{stats.followers}</span>
        </li>
        <li className={css.itemCenter}>
          <span>Views</span>
          <span className={css.integers}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.integers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
