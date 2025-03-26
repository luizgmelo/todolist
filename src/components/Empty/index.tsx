import empty from "../../assets/empty.svg";
import style from "./empty.module.scss";

export default function Empty() {
  return (
    <div className={style.container}>
      <img src={empty} alt="empty" />
      <p>Empty...</p>
    </div>
  );
}
