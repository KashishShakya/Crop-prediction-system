const InputField = ({
    type = "number",
    name,
    placeholder,
    value,
    onChange
}) => {
    return (
        <input
        type = {type}
        name = {name}
        placeholder={placeholder}
        value = {value}
        onChange = {onChange}
        style = {{padding: "15px", margin : "15px 0"}}
        />
    );
};

export default InputField;
