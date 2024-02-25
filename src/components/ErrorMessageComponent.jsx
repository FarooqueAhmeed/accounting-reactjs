// ErrorMessageComponent.jsx
import React from 'react';

const ErrorMessageComponent = ({ error, title }) => {
  return (
    <div>
      <p>Error: {title}. Please check the form.</p>
      {/* Do not render the error details here, as they will be shown in toasts */}
    </div>
  );
};

export default ErrorMessageComponent;
