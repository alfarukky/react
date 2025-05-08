import { useState } from 'react';
import produce from 'immer';

function State() {
  // const [customer, setCustomer] = useState({
  //   name: 'John',
  //   address: {
  //     city: 'San Francisco',
  //     zipCode: 94111,
  //   },
  // });
  //==========================================================
  //const [tags, setTags] = useState(['happy', 'cheerful']);

  //==============================================================

  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', Fixed: false },
    { id: 2, title: 'Bug 2', Fixed: false },
  ]);

  const handleClick = () => {
    // setCustomer({
    //   ...customer,
    //   address: { ...customer.address, zipCode: 94112 },
    // });
    //===================================//
    //Add
    // setTags([...tags, 'exiciting']);
    // //Remove
    // setTags(tags.filter((tag) => tag !== 'happy'));
    // //update
    // setTags(tags.map((tag) => (tag === 'happy' ? 'happiness' : tag)));
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.Fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.Fixed ? 'Fixed' : 'New'}
        </p>
      ))}
      <button onClick={handleClick}> Click me</button>
    </div>
  );
}

export default State;
