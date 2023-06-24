import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ThankYouPage() {
  const { code } = useParams();
  useEffect(() => {
    const redirect = setInterval(() => {
      const baseURL = "https://mackenocreative.com";
      const queryString = `referrer=${code}`;
      const thankYouURL = `${baseURL}/?${queryString}`;

      window.location.href = thankYouURL;
    }, 2000);

    return () => {
      clearInterval(redirect);
    };
  }, [code]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">Thanks for your submission</h1>
            <p>
              Here's your unique link: mackenocreative.com/?referrer=${code}
            </p>
            <a className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <Link to={"/"} className="text-sm font-medium">
                Home
              </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYouPage;
