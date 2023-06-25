import { FC } from 'react';

// turn this into a component that conditional shows errors or success
const Errors: FC<{ errors: string[] }> = ({ errors }) => {
  return (
    <>
      {errors.map((error, index) => (
        <p className="mt-2 text-sm text-red-600" key={index}>
          {error}
        </p>
      ))}
    </>
  );
};

export default Errors;
