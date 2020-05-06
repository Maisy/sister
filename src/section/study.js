import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function ReactStudy({ count }) {
  // const [count, setCount] = useState(0);
  const calculation = count + 100;

  const prevCount = usePrevious(calculation);
  return (
    <h1>
      Now: {count}, before: {prevCount}
    </h1>
  );
}

ReactStudy.propTypes = {
  count: PropTypes.number,
};
