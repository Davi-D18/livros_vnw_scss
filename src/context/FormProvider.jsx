import { useState } from "react";
import { FormContext } from "./FormContext.js";
import PropTypes from "prop-types"; // Importa PropTypes

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Validação das props do FormProvider
FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
