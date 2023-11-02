import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button'

//component for ErrorBoundary testing
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={onThrow}>
      throw Error
    </Button>
  );
};
