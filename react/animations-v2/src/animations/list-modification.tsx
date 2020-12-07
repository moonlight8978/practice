import { useState } from "react";
import { Button, ButtonProps } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
    border-bottom-width: 1px;
    margin-bottom: -1px;
  }

  99% {
    margin-bottom: -1px;
    border-bottom-width: 1px;
  }

  100% {
    opacity: 1;
    transform: none;
    border-bottom-width: 0;
    margin-bottom: 0;
  }
`;

const ListItem = styled.div`
  padding-top: 10px;
`;

const Item = styled.div`
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${slideIn} 500ms linear;

  &:not(:last-child) {
    border-bottom-width: 0;
  }
`;

const DeleteButton = (props: ButtonProps) => (
  <Button {...props} variant="danger" />
);

const initialItems = new Array(10).fill(5).map((_value, index) => index + 1);

export default function ListModification() {
  const [items, setItems] = useState(initialItems);

  const insertItem = () =>
    setItems((currentItems) => [currentItems.length + 1, ...currentItems]);

  const deleteItem = (deletedItem: number) =>
    setItems((currentItems) =>
      currentItems.filter((item) => item !== deletedItem)
    );

  return (
    <div>
      <Button onClick={insertItem}>Add new item</Button>

      <ListItem>
        {items.map((item) => (
          <Item key={`listModification-${item}`}>
            List item No.{item}
            <DeleteButton onClick={() => deleteItem(item)}>Delete</DeleteButton>
          </Item>
        ))}
      </ListItem>
    </div>
  );
}
