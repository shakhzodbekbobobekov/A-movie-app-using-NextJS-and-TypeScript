import { TextFieldProps } from "./text-field.props";
import { useField, FieldHookConfig, ErrorMessage } from "formik";

const TextField = ({ ...props }: TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);

  console.log(meta);
  return (
    <div className="inline-block w-full" >
      <label className={` inline-block w-full ${meta.touched && meta.error && "border-red-500 border-2"}`}>
      <input className="input " {...props} {...field} />
    </label>
    <p className="text-red-500" >
      <ErrorMessage name={field.name} />
    </p>
    </div>
    
  );
};
export default TextField;
