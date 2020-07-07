import React, { useContext } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.scss';
import { ToggleContext } from '../context/hideShow';

function TodoList (props){

  const toggleContext = useContext(ToggleContext);
  return (

          <ul>
            {props.list.map(item => (
              <Card 
                className={`complete-${item.complete} complete-${item.complete}-${toggleContext.status}`}
                key={item._id}
              >
                <Card.Header>{item.complete}  {item.assignee}</Card.Header>
                <Card.Text onClick={() => props.handleComplete(item._id)}>
                  {item.text}  {item.difficulty }
                </Card.Text>
                
                <Button variant="danger" className='delete' onClick={() => props.handleDelete(item._id)}>X</Button>
              </Card>
            ))}
          </ul>
        );
}


export default TodoList;
