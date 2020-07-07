import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/useAjax'
import './todo.scss';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from './pagination.js'
import ToggleHideShow from './togglehideshow'
import PaginationContext from '../context/pagination-context'
import ToggleShowProvider from '../context/hideShow';
import ChangeNumberOfPages from './itemperpage'
// import SortItem from './sortItems'

const ToDo = () => {
  const [list ,_addItem , _toggleComplete , _getTodoItems , deleteItem] = useAjax()

  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemPerPage, setItemPerPage] = useState(3);

  // const indexOfLastItem = currentPage * itemPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemPerPage;
  // const currentItem = list.slice(indexOfFirstItem, indexOfLastItem);

  // // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);
console.log(list ,'llllllllllll');

  useEffect(_getTodoItems, []);

  return (
    <>
    <Navbar bg="primary" variant="dark">
      <h1>
        Home
      </h1>
    </Navbar>
    <Navbar bg="dark" variant="dark">

      <header >
        <h2>
          There are {list.filter(item => item.complete === 'pending').length} Items To Complete
        </h2>
      </header>
    </Navbar>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>
        <PaginationContext list={list}>

        <div>
          <ToggleShowProvider list={list}>
          <ToggleHideShow/>
          <ChangeNumberOfPages/>
          
          <TodoList
            // list={currentItem}
            handleComplete={_toggleComplete}
            handleDelete={deleteItem}
          />
          </ToggleShowProvider>
        </div>
        <Pagination
        // currentPage={currentPage}
        // itemsPerPage={itemPerPage}
        totalitems={list.length}
        // paginate={paginate}
      />
        </PaginationContext>

      </section>
    </>
  );
};

export default ToDo;
