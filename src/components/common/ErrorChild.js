import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import withErrorHandler from './withErrorHandler';

function ErrorChild() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 123) {
      throw new Error('I will occur ERRRRRORORRRRRR');
    }
  }, [value]);

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setValue(123);
        }}
      >
        Click Error
      </Button>
    </div>
  );
}

export default withErrorHandler(ErrorChild);
