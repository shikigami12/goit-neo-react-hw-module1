export interface FriendListItemProps {
    avatar: string;
    name: string;
    isOnline: boolean;
    id: number;
}

export const FriendListItem = ({avatar, name, isOnline}: FriendListItemProps) => {
    return (
        <>
            <div>
                <img src={avatar} alt="Avatar" width="48"/>
                <p>{name}</p>
                <p>{isOnline ? "Online" : "Offline"}</p>
            </div>
        </>
    );
};