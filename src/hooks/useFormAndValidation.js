import React from "react";

/**
 * Manages input values and performs data validation
 *
 * @param {{}} initialValues
 * @param {{}} initialErrors
 * @param {boolean} initialIsValid
 * @returns
 */

function useFormAndValidation(
  initialValues = {},
  initialErrors = {},
  initialIsValid = false
) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState(initialErrors);
  const [isValid, setIsValid] = React.useState(initialIsValid);

  function handleChange(evt) {
    const { name, value, validationMessage } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(evt.target.closest("form").checkValidity());
  }

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    handleChange,
    resetForm,
  };
}

export default useFormAndValidation;
