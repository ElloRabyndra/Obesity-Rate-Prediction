// Fungsi pembantu untuk membuat objek input field
const InputField = ({
  label,
  name,
  type = "text",
  icon: Icon,
  value,
  onChange,
  options,
}) => {
  const isSelect = options && options.length > 0;

  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 flex items-center w-max"
      >
        {Icon && <Icon className="w-4 h-4 mr-2 text-blue-600" />}
        {label}
      </label>
      {isSelect ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="p-2 border border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white shadow-sm"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          step={type === "number" ? "0.1" : "any"} // Untuk input float
          value={value}
          onChange={onChange}
          required
          className="p-2 border border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white shadow-sm"
        />
      )}
    </div>
  );
};

export default InputField;