import { Button } from '@core/components';
import { RepertoireItem } from './components';
import style from './ListRepertoire.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { IRepertoireItem } from './slice';

interface Props {
};

export const ListRepertoire = (props: Props) => {
  const data = useSelector((state: RootState) => state.repertoire.data);

  const click = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log((event.target as HTMLButtonElement).innerHTML);
  };

  return (
    <div>
      <div className={style.listWrapper}>
        <div className={style.listHeader}>Piano Repertoire</div>
        <div className={style.list}>
          {data.map(item => <RepertoireItem item={item} />)}
        </div>
      </div>
    </div>
  );
};
