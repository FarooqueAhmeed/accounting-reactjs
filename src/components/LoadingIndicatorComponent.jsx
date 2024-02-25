// LoadingIndicatorComponent.jsx
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoadingIndicatorComponent = ({ loading, title }) => {
  useEffect(() => {
    if (loading) {
      toast.info(`Loading ${title}...`, { position: 'top-right', autoClose: false });
    } else {
      // Close the loading toast when loading is complete
      toast.dismiss();
    }
  }, [loading, title]);

  return null; // Do not render anything in the component
};

export default LoadingIndicatorComponent;
