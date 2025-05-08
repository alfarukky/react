import { useState } from 'react';
import { styled } from 'styled-components';
//import Styles from './ListGroup.module.css';

//using styled-components
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active?: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 0 5px;
  background-color: ${(props) => (props.active ? 'blue' : 'none')};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <>
      {items.length === 0 && <p>No items Found</p>}
      <h1>{heading}</h1>
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectIndex}
            key={item}
            onClick={() => {
              setSelectIndex(index), onSelectedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
