import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleSelectFriend(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  return (
    <div className="body">
      <div className="app">
        <div className="sidebar">
          <ul>
            {friends.map((friend) => (
              <Friend
                friend={friend}
                key={friend.id}
                onSelect={handleSelectFriend}
                selectedId={selectedId}
              />
            ))}
          </ul>

          <AddFriendForm onAddFriend={handleAddFriend} />
        </div>
        {selectedId && (
          <SplitBillForm friend={friends.find((f) => f.id === selectedId)} />
        )}
      </div>
    </div>
  );
}

function Friend({ friend, onSelect, selectedId }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} own you {friend.balance}$
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You own {friend.name} {friend.balance}$
        </p>
      )}
      <Button onClick={() => onSelect(friend.id)}>
        {friend.id === selectedId ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function AddFriendForm({ onAddFriend }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("http://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();
    if (!name || !url) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      url: `${url}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
  }

  if (!isOpen)
    return <Button onClick={() => setIsOpen(!isOpen)}>Add friend</Button>;
  return (
    <div className="form">
      <form className="form-add-friend" onSubmit={handleAddFriend}>
        <label>👭Friend name</label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>🌄Image URL</label>
        <input value={url} onChange={(e) => setUrl(e.target.value)}></input>
        <Button>Add</Button>
      </form>
      <Button onClick={() => setIsOpen(!isOpen)}>close</Button>
    </div>
  );
}

function SplitBillForm({ friend }) {
  return (
    <form className="form-split-bill">
      <h2>split</h2>
      <label>💰Bill value</label>
      <input></input>
      <label>🧍‍♂️Your expense</label>
      <input></input>
      <label>👭{friend.name}'s expense</label>
      <input></input>
      <label>🤑Who is paying the bill</label>
      <input></input>
    </form>
  );
}
