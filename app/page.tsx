import Image from "next/image";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";

export default function Home() {
  const isEmpty = true;
  if (isEmpty) {
    return <EmptyState showReset />;
  }
  return (
    <Container>
      <div className="pt-24 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        <div>Future Listings</div>
      </div>
    </Container>
  );
}
