import {
  FriendListItem,
  FriendListItemProps,
} from '../FriendListItem/FriendListItem.tsx';
import css from './FriendList.module.css';

interface FriendListProps {
  friends?: FriendListItemProps[];
}

export const FriendList = ({ friends }: FriendListProps) => {
  return (
    <>
      <ul className={css.container}>
        {friends?.map(friend => (
          <li key={friend.id} className={css.item}>
            <FriendListItem {...friend} />
          </li>
        ))}
      </ul>
    </>
  );
};
