const ApiRequest = (props) => {
  return (
    <section id='api-request'>
      <h2>3. Запрос к API:</h2>
      <p>Послать запрос к API http://jsonplaceholder.typicode.com/users, после чего получить список пользователей.
        Преобразовать массив пользователей к массиву полных имен (name и username), исключив два рандомных пользователя по id (от 1 до 10).
        Результат должен иметь вид ['name username','name username','name username',..,'name username'].
      </p>
      
      <h3 className='result'>Результат:</h3>
      <p>{Array.isArray(props.users) 
        ? `[${props.users.join(', ')}]`
        : props.users}
        </p>
    </section>
  );
}

export default ApiRequest;