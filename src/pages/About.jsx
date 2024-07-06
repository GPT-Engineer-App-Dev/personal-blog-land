import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <Avatar className="w-32 h-32">
          <AvatarImage src="/placeholder.svg" alt="Author" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">John Doe</h2>
          <p className="text-muted-foreground mb-4">
            Hi there! I'm John, a passionate web developer and blogger. With over 5 years of experience in the industry,
            I love exploring new technologies and sharing my knowledge with others.
          </p>
          <p className="text-muted-foreground mb-4">
            This blog is my platform to share insights, tutorials, and thoughts on web development, design, and the
            ever-evolving tech landscape. Whether you're a beginner or an experienced developer, I hope you'll find
            something valuable here.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding or writing, you can find me hiking in the mountains, reading sci-fi novels, or
            experimenting with new recipes in the kitchen. Feel free to connect with me on social media or drop me a
            message through the contact page!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;