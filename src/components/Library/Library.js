import React from 'react';
import { useSelector , useDispatch } from 'react-redux'
import {deleteBook} from "../../store/actions/bookActions";


const Library = () => {
    const dispatch = useDispatch();

  const deleteBookHandler = (id) =>{
       dispatch(deleteBook({id:id}))
    //dispatch the delete book action here
  }

  const books = useSelector((state)=> state.books.books)

  const booksRow = books.map(({id, title, author, rating})=>(
      <tr>
        <td>{ title}</td>
        <td>{ author}</td>
        <td>{ rating}</td>
          <td><button className="delete" onClick={()=>deleteBookHandler(id)}>Delete</button></td>
      </tr>
  ))

  return (
    <div className='library'>
      <h2>Library</h2>
      <table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th>Sm</th>
        </tr>

        </thead>
          <tbody>
          { booksRow }
          </tbody>
      </table>
    </div>
  );
};

export default Library;
