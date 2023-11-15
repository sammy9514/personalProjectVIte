import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export const App = () => {
  const [expression, setExpression] = useState<any>("");
  const [state, setState] = useState<any>([]);
  const buttonClicks = (value: any) => {
    setExpression((b: any) => b + value);
  };

  const calculate = () => {
    setExpression(eval(expression).toString());
  };

  const cancel = () => {
    setExpression("");
  };

  const round = () => {
    setExpression(Math.round(expression).toString());
  };
  const backSpace = () => {
    setExpression((b: any) => b.slice(0, -1));
  };
  const percentage = () => {
    setExpression(expression / 100);
  };

  const onDrag = (res: any) => {
    const { source, destination } = res;

    const data = Array.from(expression);

    const [remove] = data.splice(source.index, 1);
    data.splice(destination.index, 0, remove);

    setExpression(data);
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDrag}>
        <Container>
          <Droppable droppableId="jemima">
            {(props) => (
              <Wrapper {...props.droppableProps} ref={props.innerRef}>
                <Top>{expression}</Top>
                <Bottom>
                  {[
                    "7",
                    "8",
                    "9",
                    "/",
                    "6",
                    "5",
                    "4",
                    "*",
                    "3",
                    "2",
                    "1",
                    "-",
                    "0",
                    "+",
                  ].map((el: any, i: any) => (
                    <Draggable draggableId={el} key={el} index={i}>
                      {(prov) => (
                        <Button
                          onClick={() => {
                            buttonClicks(el);
                            console.log(i);
                          }}
                          {...prov.dragHandleProps}
                          {...prov.draggableProps}
                          ref={prov.innerRef}
                        >
                          {el}
                        </Button>
                      )}
                    </Draggable>
                  ))}
                  {props.placeholder}
                  <Button onClick={cancel}>C</Button>
                  <Button onClick={calculate}>=</Button>
                  <Button onClick={round}>R</Button>
                  <Button onClick={backSpace}>x</Button>
                  <Button onClick={percentage}>%</Button>
                </Bottom>
              </Wrapper>
            )}
          </Droppable>
        </Container>
      </DragDropContext>
    </div>
  );
};

const Button = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: bold;
`;
const ButtonsHold = styled.div``;
const Bottom = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;
// const Show = styled.div``;
const Top = styled.div`
  width: 82%;
  height: 100px;
  margin-bottom: 20px;
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 10px;
  font-size: 19px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  background-color: #313131;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 15px;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px;
`;
