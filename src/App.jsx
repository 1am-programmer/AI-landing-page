import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] overflow-hidden lg:pt-[5.25rem]">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
}
