import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/ButtonGroup/Button';
import { useState } from 'react';
import './App.css';
import ReactIcon from './components/ReactIcon';
import Like from './components/Like';
import State from './State';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ExpandableText from './components/ExpandableText';
import Form from './components/Form';
// import ReactHookForm from './components/ReactHookForm';
function App() {
  //const [alertVisibile, setAlertVisibility] = useState(false);
  //const [cartItems, setcartItems] = useState(['product1', 'product2']);
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: 'John',
  //   },
  // });
  // const handleClick = () => {
  //   setGame((prevGame) => ({
  //     ...prevGame,
  //     player: { ...prevGame.player, name: 'Doe' },
  //   }));
  // };
  // const [Pizza, setPizza] = useState({
  //   name: 'Spicy Pepperoni',
  //   toppings: ['Mushroom'],
  // });
  // const handleClick = () => {
  //   setPizza({ ...Pizza, toppings: [...Pizza.toppings, 'cheese'] });
  // };
  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: 'Product 1', quantity: 1 },
  //     { id: 2, title: 'Product 2', quantity: 1 },
  //   ],
  // });
  // const handleClick = () => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((item) =>
  //       item.id === 1 ? { ...item, quantity: (item.quantity += 1) } : item
  //     ),
  //   });
  // };
  return (
    <>
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {/* {alertVisibile && (
        <Alert
          onClose={() => setAlertVisibility(false)}
          children="My Alert"
        ></Alert>
      )}
      <Button
        color="primary"
        onClick={() => setAlertVisibility(true)}
        children="My Button"
      /> */}
      {/* <ListGroup
        heading="Maimi"
        items={['New York', 'Los Angeles', 'San Fransisco']}
        onSelectedItem={(item) => console.log(item)}
      />
      <ReactIcon />
      <Button color="primary" onClick={() => {}} children="My Button" />
      <Like OnClick={() => console.log('clicked')} /> */}
      <State />
      {/* <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setcartItems([])} /> */}
      {/* {`player name is ${game.player.name}`}
      <button onClick={handleClick}>Update Player name</button> */}
      <ExpandableText>Hello World</ExpandableText>
      <Form />
      {/* <ReactHookForm /> */}
    </>
  );
}

export default App;
