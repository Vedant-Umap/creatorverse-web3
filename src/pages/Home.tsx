import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";

interface Post {
  id: number;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
  comments: number;
  timestamp: string;
}

const dummyPosts: Post[] = [
  {
    id: 1,
    username: "creator.eth",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=creator1",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop",
    likes: 234,
    caption: "My first NFT drop on CreatorVerse! 🎨✨",
    comments: 12,
    timestamp: "2h ago"
  },
  {
    id: 2,
    username: "artist.eth",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=artist1",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&auto=format&fit=crop",
    likes: 567,
    caption: "Digital art meets blockchain 🚀",
    comments: 28,
    timestamp: "5h ago"
  },
  {
    id: 3,
    username: "web3wizard",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wizard1",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop",
    likes: 892,
    caption: "Decentralized creativity is the future 💫",
    comments: 45,
    timestamp: "1d ago"
  }
];

const Home = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-2xl mx-auto pt-20 pb-8 px-4">
        <div className="space-y-6">
          {dummyPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-card hover:shadow-hover transition-shadow animate-fade-in">
              {/* Post Header */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                    <AvatarImage src={post.avatar} alt={post.username} />
                    <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{post.username}</p>
                    <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>

              {/* Post Image */}
              <div className="relative aspect-square bg-muted">
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post Actions */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:scale-110 transition-transform"
                      onClick={() => toggleLike(post.id)}
                    >
                      <Heart
                        className={`h-6 w-6 ${
                          likedPosts.includes(post.id)
                            ? "fill-red-500 text-red-500"
                            : ""
                        }`}
                      />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:scale-110 transition-transform">
                      <MessageCircle className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:scale-110 transition-transform">
                      <Send className="h-6 w-6" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:scale-110 transition-transform">
                    <Bookmark className="h-6 w-6" />
                  </Button>
                </div>

                <div>
                  <p className="font-semibold text-sm">
                    {post.likes + (likedPosts.includes(post.id) ? 1 : 0)} likes
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-semibold mr-2">{post.username}</span>
                    {post.caption}
                  </p>
                  <button className="text-sm text-muted-foreground mt-1 hover:text-foreground transition-colors">
                    View all {post.comments} comments
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
