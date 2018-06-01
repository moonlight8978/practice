function Input({ name, value, onChange }) {
  console.log(`Render <${name.toUpperCase()} />`);
  console.log(onChange.id);
  return (
    <div>
      <h6>{name.toUpperCase()}</h6>
      <input
        type="text"
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input
