const FormInputCheckbox = ({ element, register, errors }) => {
  const { type, name, label, options } = element;
  return (
    <div className="checkboxes">
      <p>{label}</p>
      {options.map(option => (
        <p key={option.value}>
          <label>{option.text}</label>
          <input
            {...register(name, { ...element.register })}
            type={type}
            value={option.value}
          />
        </p>
      ))
      }
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  )
};

export default FormInputCheckbox;