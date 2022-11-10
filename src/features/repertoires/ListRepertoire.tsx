import { Button } from "@components/button";

type Props = {

};

const ListRepertoire = (props: Props) => {
  const click = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log((event.target as HTMLButtonElement).innerHTML);
  };

  return (
    <div>
      <h1>Piano Repertoire</h1>
      <Button
        onClick={click}
        text={<div>Oh no</div>}
      ></Button>
    </div>
  );
};

export default ListRepertoire;
