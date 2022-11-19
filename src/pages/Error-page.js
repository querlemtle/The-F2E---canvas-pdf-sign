import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="h-screen flex flex-col justify-center gap-3"
    >
      <h1 className="text-6xl text-center">{error.status}</h1>
      <p className="text-center">{error.statusText}</p>
    </div>
  );
}
