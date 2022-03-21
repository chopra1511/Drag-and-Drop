import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import Tickets from "./Tickets/Tickets";
import "./List/List.css";

const tickets = [
  {
    id: 27,
    orderID: 456,
  },
  {
    id: 26,
    orderID: 45,
  },
  {
    id: 25,
    orderID: 201,
  },
  {
    id: 24,
    orderID: 1,
  },
  {
    id: 23,
    orderID: 600,
  },
  {
    id: 22,
    orderID: 10,
  },
];

const lists = {
  [uuidv4()]: {
    name: "Received Orders",
    ticks: tickets,
  },
  [uuidv4()]: {
    name: "Order In Progress",
    ticks: [],
  },
  [uuidv4()]: {
    name: "Order Ready For Delivery",
    ticks: [],
  },
  [uuidv4()]: {
    name: "Oredr Picked Up",
    ticks: [],
  },
};


function Display(props) {
  const [list, setList] = useState(lists);
  
  const onDragEnd = (res, list, setList) => {
      if(!res.destination) return;
      const {source, destination} = res;

      if(source.droppableId !== destination.droppableId){
        const sourceList = list[source.droppableId];
        const destList = list[destination.droppableId];
        const sourceTicks = [...sourceList.ticks];
        const destTicks = [...destList.ticks];
        const [removed] = sourceTicks.splice(source.index, 1);
        destTicks.splice(destination.index, 0, removed);
        setList({
            ...list,
            [source.droppableId]: {
                ...sourceList,
                ticks: sourceTicks
            },
            [destination.droppableId]: {
                ...destList,
                ticks: destTicks
            }
        })
      }else {
         const lis = list[source.droppableId];
         const copiedLis = [...lis.ticks];
         const [remove] = copiedLis.splice(source.index, 1);
         copiedLis.splice(destination.index, 0, remove);
         setList({
           ...list,
           [source.droppableId]: {
             ...lis,
             ticks: copiedLis,
           },
         });
      }
     
  };

  return (
    <DragDropContext onDragEnd={(res) => onDragEnd(res, list, setList)}>
      <div className="list">
        {Object.entries(list).map(([id, list]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => (
                <div
                  className="lists"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h5>{list.name} ({list.ticks.length})</h5>
                  {list.ticks.map((t, index) => {
                    return (
                      <Draggable
                        key={t.id}
                        draggableId={`${t.id}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Tickets id={t.id} oID={t.orderID} />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
}

export default Display;


