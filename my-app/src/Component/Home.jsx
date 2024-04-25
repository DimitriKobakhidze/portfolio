import useAppear from "../Hooks/useAppear";

export default function Home() {
  const { itemRef } = useAppear("slideY");

  return (
    <div ref={itemRef} className="home-div" id="home">
      <div className="home-text-div">
        <h4 className="home-h4">Hello,I'm</h4>
        <h1 className="home-h1">Dimitri</h1>
        <h1 className="home-h1">Kobakhidze</h1>
        <h4 className="home-h4-developer">React Developer</h4>
      </div>
      <div className="home-image-div">
        <img className="home-picture" src="/me.png" alt="home" />
      </div>
    </div>
  );
}
