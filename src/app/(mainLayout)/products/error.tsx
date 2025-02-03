"use client";
const ErrorPage = ({ error, reset }) => {
  console.log(error?.message);
  return (
    <div className="max-w-[90%] mx-auto my-10 text-center">
      <h1 className="text-center my-4 text-rose-500">{error?.message}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
