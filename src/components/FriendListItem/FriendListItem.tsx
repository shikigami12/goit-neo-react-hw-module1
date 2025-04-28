import css from './FriendListItem.module.css';

export interface FriendListItemProps {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export const FriendListItem = ({
  avatar,
  name,
  isOnline,
}: FriendListItemProps) => {
  return (
    <>
      <div className={css.container}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={isOnline ? css.status_online : css.status_offline}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </>
  );
};
