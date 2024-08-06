// eslint-disable-next-line react/prop-types
function TodoForm({ onSubmit, onChange, value }) {
  return (
    <>
      <form onSubmit={onSubmit} className="form js--form">
        <input
          onChange={onChange}
          value={value}
          type="text"
          name="value"
          required
          className="form__input js--form__input"
        />
        <button type="submit" className="form__btn">
          Додати
        </button>
      </form>
    </>
  );
}

export default TodoForm;
