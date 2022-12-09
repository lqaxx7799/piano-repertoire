import style from './RepertoireItem.module.scss';

interface Props {

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
        <span>Tea For Two</span>
      </a>
    </div>
  );
};
