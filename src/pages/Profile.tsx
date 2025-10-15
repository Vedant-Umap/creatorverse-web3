import { Grid, Wallet, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const walletAddress = "0x742d...5f8a";
  
  const userPosts = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=400&auto=format&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto pt-20 pb-8 px-4">
        <div className="animate-fade-in">
          {/* Profile Header */}
          <Card className="p-8 mb-6 shadow-card">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <Avatar className="h-32 w-32 ring-4 ring-primary/20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=profile1" alt="Profile" />
                <AvatarFallback>CV</AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                  <h1 className="text-2xl font-bold">creator.eth</h1>
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Edit Profile
                  </Button>
                </div>

                <div className="flex justify-center md:justify-start gap-8 mb-4">
                  <div className="text-center">
                    <p className="font-bold text-lg">42</p>
                    <p className="text-sm text-muted-foreground">Posts</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">1.2K</p>
                    <p className="text-sm text-muted-foreground">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">856</p>
                    <p className="text-sm text-muted-foreground">Following</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm">
                    Digital artist & Web3 enthusiast 🎨<br />
                    Creating decentralized art on the blockchain
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full text-sm">
                      <Wallet className="h-4 w-4 text-primary" />
                      <span className="font-mono">{walletAddress}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-primary text-white rounded-full text-sm">
                      <Award className="h-4 w-4" />
                      <span>124.5 ETH earned</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Posts Grid */}
          <div className="border-t border-border pt-6">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Grid className="h-5 w-5" />
              <span className="font-semibold">POSTS</span>
            </div>

            <div className="grid grid-cols-3 gap-1 md:gap-4">
              {userPosts.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-muted rounded-lg overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <img
                    src={image}
                    alt={`Post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
