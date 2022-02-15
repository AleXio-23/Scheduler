export const validateInputs = (val: string, required?: boolean, min?: number, max?: number, pattern?: RegExp) => {
  let isError = false;
  if (min && val?.length < min) {
    isError = true;
  } else if (max && val?.length > max) {
    isError = true;
  } else if (required && !val) {
    isError = true;
  } else if (pattern && !pattern.test(val)) {
    isError = true;
  } else {
    isError = false;
  }

  return isError;
};

export const handleInputChange = (field: string, value: string, values: any, setValues: Function, errors: string[], setErrors: Function) => {
  setValues({ ...values, [field]: { ...values[field], val: value } } );
  const isValueValid = validateInputs(value, values[field]?.required, values[field]?.min, values[field]?.max, values[field]?.pattern);
  if (isValueValid && !errors.includes(field)) {
    setErrors([...errors, field]);
  }
  if (!isValueValid && errors.includes(field)) {
    setErrors(errors.filter((el) => el !== field));
  }
};

