import userData from './userData.json';
import friendList from './friendList.json';
import transactions from './transactions.json';
import Profile from './components/Profile/Profile.tsx';
import { FriendList } from './components/FriendList/FriendList.tsx';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory.tsx';

import 'modern-normalize/modern-normalize.css';
import './App.css';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendList} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
