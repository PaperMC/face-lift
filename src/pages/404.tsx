import ErrorIllustration from "@/assets/illustrations/undraw/404.svg";
import Button from "@/components/input/Button";

const notFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ErrorIllustration className="w-96 " />
      <p className="m-8 text-2xl">404 page not found</p>
      <h1>
        <Button variant="outlined" href="/">
          Go Home
        </Button>
      </h1>
    </div>
  );
};

export default notFound;
