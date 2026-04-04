// Temporary test file to verify routing
import { useParams } from "react-router";

export function TestRoute() {
  const { id } = useParams();
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600">✅ ROUTE WORKS!</h1>
      <p className="text-lg mt-4">ID Parameter: {id}</p>
      <p className="text-sm text-gray-600 mt-2">If you see this, the route is configured correctly!</p>
    </div>
  );
}
