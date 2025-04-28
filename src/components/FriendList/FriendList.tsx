import {FriendListItem, FriendListItemProps} from "../FriendListItem/FriendListItem.tsx";

interface FriendListProps {
    friends?: FriendListItemProps[]
}

export const FriendList = ({friends}: FriendListProps) => {
    return (
        <>
            <ul>
                {friends?.map((friend) => (
                    <li key={friend.id}>
                        <FriendListItem {...friend}/>
                    </li>
                ))}
            </ul>
        </>
    );
};