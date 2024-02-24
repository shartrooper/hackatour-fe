import { PropsWithChildren } from "react";
import bgRegister from "/images/bg-register.jpg";

interface SideContentProps {
  logoPath: string;
}

const SideContent: React.FC<PropsWithChildren<SideContentProps>> = ({
  logoPath,
  children,
}) => {
  return (
    <div className="relative flex-1 hidden items-center justify-center min-h-screen bg-gray-900 lg:flex">
      <img
        src={bgRegister}
        className="absolute inset-0 z-0 object-cover w-full h-full"
      />
      <div>
        <div className="relative z-10 w-full max-w-md bg-neptune-950 p-10 rounded-lg">
          <img className="bg-white rounded-lg w-32" src={logoPath} />
          <div className="mt-5 space-y-3">
            {children}
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5">
                Unite a +1,200 personas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContent;
