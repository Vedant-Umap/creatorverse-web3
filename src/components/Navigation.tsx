import { Home, Search, PlusSquare, User, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-card/80 backdrop-blur-md border-b border-border z-50 shadow-soft">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1
          className="text-2xl font-bold bg-gradient-instagram bg-clip-text text-transparent cursor-pointer"
          onClick={() => navigate("/home")}
        >
          CreatorVerse
        </h1>

        <div className="flex items-center gap-2">
          <Button
            variant={isActive("/home") ? "default" : "ghost"}
            size="icon"
            onClick={() => navigate("/home")}
            className={isActive("/home") ? "bg-gradient-primary" : ""}
          >
            <Home className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <PlusSquare className="h-5 w-5" />
          </Button>

          <Button
            variant={isActive("/profile") ? "default" : "ghost"}
            size="icon"
            onClick={() => navigate("/profile")}
            className={isActive("/profile") ? "bg-gradient-primary" : ""}
          >
            <User className="h-5 w-5" />
          </Button>

          <div className="ml-2 pl-2 border-l border-border">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 hover:bg-gradient-primary hover:text-white hover:border-transparent transition-all"
            >
              <Wallet className="h-4 w-4 mr-2" />
              <span className="font-mono text-xs">0x742d...5f8a</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
