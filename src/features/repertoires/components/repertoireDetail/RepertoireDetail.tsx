import { useSelector } from 'react-redux';
import style from './RepertoireDetail.module.scss';
import { RootState, useAppDispatch } from '@store';
import { useEffect } from 'react';
import { fetchRepertoire } from '@features/repertoires/slice/repertoireSlice';

export const RepertoireDetail = () => {
  const dispatch = useAppDispatch();
  const { selectedRepertoireId, selectedRepertoire } = useSelector((state: RootState) => state.repertoire);

  useEffect(() => {
    if (selectedRepertoireId) {
      dispatch(fetchRepertoire(selectedRepertoireId));
    }
  }, [selectedRepertoireId]);

  if (!selectedRepertoireId || !selectedRepertoire) {
    return <div></div>;
  }
  return (
    <div className={style.detailWrapper}>
      <div>{selectedRepertoire.name}</div>
    </div>
  );
};
