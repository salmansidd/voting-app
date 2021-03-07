import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default function ErrorAlert() {
  return (
    <div >
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error in fetching data - <strong>Please check your internet connection!</strong>
      </Alert>
    </div>
  );
}
