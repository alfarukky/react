// import ListGroup from './components/ListGroup';
// import Alert from './components/Alert';
// import Button from './components/ButtonGroup/Button';
// import { useState } from 'react';
// import './App.css';
// import ReactIcon from './components/ReactIcon';
// import Like from './components/Like';
// import State from './State';
// import Navbar from './components/Navbar';
// import Cart from './components/Cart';
// import ExpandableText from './components/ExpandableText';
// import Form from './components/Form';
// // import ReactHookForm from './components/ReactHookForm';
// function App() {
//   //const [alertVisibile, setAlertVisibility] = useState(false);
//   //const [cartItems, setcartItems] = useState(['product1', 'product2']);
//   // const [game, setGame] = useState({
//   //   id: 1,
//   //   player: {
//   //     name: 'John',
//   //   },
//   // });
//   // const handleClick = () => {
//   //   setGame((prevGame) => ({
//   //     ...prevGame,
//   //     player: { ...prevGame.player, name: 'Doe' },
//   //   }));
//   // };
//   // const [Pizza, setPizza] = useState({
//   //   name: 'Spicy Pepperoni',
//   //   toppings: ['Mushroom'],
//   // });
//   // const handleClick = () => {
//   //   setPizza({ ...Pizza, toppings: [...Pizza.toppings, 'cheese'] });
//   // };
//   // const [cart, setCart] = useState({
//   //   discount: 0.1,
//   //   items: [
//   //     { id: 1, title: 'Product 1', quantity: 1 },
//   //     { id: 2, title: 'Product 2', quantity: 1 },
//   //   ],
//   // });
//   // const handleClick = () => {
//   //   setCart({
//   //     ...cart,
//   //     items: cart.items.map((item) =>
//   //       item.id === 1 ? { ...item, quantity: (item.quantity += 1) } : item
//   //     ),
//   //   });
//   // };
//   return (
//     <>
//       {/* <Alert>
//         Hello <span>World</span>
//       </Alert> */}
//       {/* {alertVisibile && (
//         <Alert
//           onClose={() => setAlertVisibility(false)}
//           children="My Alert"
//         ></Alert>
//       )}
//       <Button
//         color="primary"
//         onClick={() => setAlertVisibility(true)}
//         children="My Button"
//       /> */}
//       {/* <ListGroup
//         heading="Maimi"
//         items={['New York', 'Los Angeles', 'San Fransisco']}
//         onSelectedItem={(item) => console.log(item)}
//       />
//       <ReactIcon />
//       <Button color="primary" onClick={() => {}} children="My Button" />
//       <Like OnClick={() => console.log('clicked')} /> */}
//       <State />
//       {/* <Navbar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setcartItems([])} /> */}
//       {/* {`player name is ${game.player.name}`}
//       <button onClick={handleClick}>Update Player name</button> */}
//       <ExpandableText>Hello World</ExpandableText>
//       <Form />
//       {/* <ReactHookForm /> */}
//     </>
//   );
// }

// export default App;

//Expense App
// import { useState } from 'react';
// import ExpenseList from './expense-tracker/components/ExpenseList';
// import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
// import ExpenseForm from './expense-tracker/components/ExpenseForm';
// import categories from './expense-tracker/categories';

// function App() {
//   const [expenses, setExpenses] = useState([
//     { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
//     { id: 2, description: 'bbb', amount: 10, category: 'Utilities' },
//     { id: 3, description: 'ccc', amount: 10, category: 'Utilities' },
//     { id: 4, description: 'ddd', amount: 10, category: 'Utilities' },
//   ]);

//   const [selectedCategory, setSelectedCategory] = useState('');

//   const visibleExpenses = selectedCategory
//     ? expenses.filter((e) => e.category === selectedCategory)
//     : expenses;

//   return (
//     <div>
//       <div className="mb-5">
//         <ExpenseForm
//           onSubmit={(expense) =>
//             setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
//           }
//         />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         />
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//       />
//     </div>
//   );
// }

//use Effect

// import { useEffect, useRef, useState } from 'react';
// import ProductList from './expense-tracker/components/ProductList';

// function App() {
//   const ref = useRef<HTMLInputElement>(null);

//   const [category, setCartegory] = useState('');

//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(event) => setCartegory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category} />
//     </div>
//   );
// }

// export default App;

//clean up
// import { useEffect } from 'react';
// const connect = () => console.log('connecting');
// const disconnected = () => console.log('Disconnecting');
// function App() {
//   useEffect(() => {
//     connect();
//     return () => disconnected();
//   });
//   return <div></div>;
// }

// export default App;

import { useState, useEffect } from 'react';
import axios, { CanceledError } from 'axios';
interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>('');
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  const deleteUser = (user: User) => () => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: 'John' };
    setUsers([newUser, ...users]);
    axios
      .post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
