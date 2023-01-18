import { RepertoireItem } from './components';
import style from './ListRepertoire.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@store';
import { useEffect } from 'react';
import { fetchAllRepertoires } from './slice/repertoireSlice';

interface Props {}

export const ListRepertoire = (props: Props) => {
  const { data, selectedRepertoireId } = useSelector((state: RootState) => state.repertoire);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllRepertoires());
  }, [dispatch]);

  return (
    <div>
      <div className={style.listWrapper}>
        <div className={style.listHeader}>Piano Repertoire</div>
        <div className={style.list}>
          {data.map((item) => (
            <RepertoireItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      {selectedRepertoireId && (
        <div>Selected Id: {selectedRepertoireId} </div>
      )}
    </div>
  );
};
