import React from 'react';
import { useSelector } from 'react-redux'


const Library = () => {

  const deleteBookHandler = (id) =>{
    //dispatch the delete book action here
  }

  const books = useSelector((state)=> state.books.books)

  const booksRow


  return (
    <div className='library'>
      <h2>Library</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Rating</th>
          <th></th>
        </tr>
        <tr>
          <td>Dune</td>
          <td>F. Herbert</td>
          <td>10</td>
          <td>
            <button className='delete'>x</button>
          </td>
        </tr>
        <tr>
          <td>The Return of The King</td>
          <td>J.R.R. Tolkien</td>
          <td>10</td>
          <td>
            <button className='delete'>x</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Library;
