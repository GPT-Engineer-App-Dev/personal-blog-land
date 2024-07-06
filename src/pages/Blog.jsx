import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React and start building your first application." },
    { id: 2, title: "Advanced CSS Techniques", excerpt: "Discover powerful CSS techniques to create stunning layouts and animations." },
    { id: 3, title: "JavaScript Best Practices", excerpt: "Improve your JavaScript code with these essential best practices." },
    { id: 4, title: "Introduction to TypeScript", excerpt: "Explore the benefits of TypeScript and how it can improve your development workflow." },
    { id: 5, title: "Building RESTful APIs with Node.js", excerpt: "Learn how to create robust and scalable APIs using Node.js and Express." },
    { id: 6, title: "Mastering Git and GitHub", excerpt: "Improve your version control skills and collaborate effectively with Git and GitHub." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button asChild>
          <Link to="/add-post">Add New Post</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link to={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;