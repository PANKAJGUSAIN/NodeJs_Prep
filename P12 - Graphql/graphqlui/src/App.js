import { gql, useQuery } from '@apollo/client';
import './App.css';


const query = gql`
query getAllTodos{
  getTodos {
    id,
    title,
    user {
      id,
      name
    }
  }
}`

function App() {
  const {data , error ,  loading } =  useQuery(query);
  return (
    <div className="App">
      {loading ? (
        <>Loading...</>
      ) : error ? (
        <>Error: {error.message}</>
      ) : (
        <table border="1" style={{width:'100%' , height:"200px" , }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>User ID</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {data.getTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.user.id}</td>
                <td>{todo.user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
