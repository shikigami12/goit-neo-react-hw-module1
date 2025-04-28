import css from './Profile.module.css';

interface Props {
    tag: string;
    name: string;
    location: string;
    image: string;
    stats: {
        followers: number;
        views: number;
        likes: number;
    };
}

function Profile({name, tag, stats, image, location}: Props) {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{stats.followers || 0}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{stats.views || 0}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{stats.likes || 0}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;