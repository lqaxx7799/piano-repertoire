import { IRepertoireItem } from '@features/repertoires/slice';
import style from './RepertoireItem.module.scss';

interface Props {
  item: IRepertoireItem;
}

export const RepertoireItem = (props: Props) => {
  const showItem = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    console.log(111111);
  };

  return (
    <div className={style.itemWrapper}>
      <a className={style.itemTitle} href="#" onClick={showItem}>
        <span>Title: </span>
        <span>{props.item.name}</span>
      </a>
    </div>
  );
};
