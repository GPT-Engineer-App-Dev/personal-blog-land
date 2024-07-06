import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const recentPosts = [
    { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React and start building your first application." },
    { id: 2, title: "Advanced CSS Techniques", excerpt: "Discover powerful CSS techniques to create stunning layouts and animations." },
    { id: 3, title: "JavaScript Best Practices", excerpt: "Improve your JavaScript code with these essential best practices." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-muted-foreground mb-6">Exploring the world of web development, one post at a time.</p>
        <Button asChild>
          <Link to="/blog">Read Our Blog</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link to={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;