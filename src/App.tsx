import Footer from "@/components/footer";
import { Header } from "@/components/header";
// RRD
import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <AppProvider>
        <Header />
          <AppRoutes />
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
