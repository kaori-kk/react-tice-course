import React from 'react';

function ListItem(props){
  const items = props.items;
  console.log(items)
  const listItems = items.map(item => {
    return <div className="list" key={item.key}>
          <p>{item.name}</p>
          </div>})
  return (
    <div>{listItems}</div>
  )
}

export default ListItem;