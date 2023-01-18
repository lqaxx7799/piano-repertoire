import { IRepertoireItem } from '@features/repertoires/slice';
import style from './RepertoireItem.module.scss';
import { useAppDispatch } from '@store';
import { selectRepertoire } from '@features/repertoires/slice/repertoireSlice';

interface Props {
  item: IRepertoireItem;
}

export const RepertoireItem = (props: Props) => {
  const dispatch = useAppDispatch();

  const showItem = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(selectRepertoire(props.item.id));
  };

  return (
    <div className={style.itemWrapper} onClick={showItem}>
      <a className={style.itemTitle} href="#">
        <span>Title: </span>
        <span>{props.item.name}</span>
      </a>
    </div>
  );
};
