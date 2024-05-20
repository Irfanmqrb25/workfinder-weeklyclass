import Container from "@/components/container";
import Navbar from "@/components/navigation/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default MainLayout;
