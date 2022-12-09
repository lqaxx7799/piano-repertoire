import { Button } from '@core/components';
import { RepertoireItem } from './components';
import style from './ListRepertoire.module.scss';

interface Props {

};

export const ListRepertoire = (props: Props) => {
  const click = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log((event.target as HTMLButtonElement).innerHTML);
  };

  return (
    <div>
      <div className={style.listWrapper}>
        <div className={style.listHeader}>Piano Repertoire</div>
        <RepertoireItem />
      </div>
    </div>
  );
};
