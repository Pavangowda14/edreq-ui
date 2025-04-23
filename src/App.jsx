import { UserProvider } from "./context/UserContext";
import { ToastProvider } from "./shared/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <UserProvider>
          <ToastContainer
            className="w-full m-0 p-0 top-0 text-center"
            limit={1}
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <AppRoutes />
        </UserProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
