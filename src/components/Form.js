const Form = (props) => {
  return (
    <section id='static-form'>
      <h2>4. Сохранение данных статической формы в React State</h2>
      <p>
        Ваше имя: 
        <span className='name'>
          {` ${props.firstName} ${props.lastName}`}
        </span>
      </p>
    </section>
  );
}

export default Form;