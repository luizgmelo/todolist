import emptyLightMode from "../../assets/empty.svg";
import emptyDarkMode from "../../assets/empty-black.svg";
import style from "./empty.module.scss";

interface IEmpty {
  theme: 'light' | 'dark'
}

export default function Empty({ theme }: IEmpty) {
  return (
    <div className={style.container}>
      <img src={theme === 'light' ? emptyLightMode : emptyDarkMode} alt="empty" />
      <p>Empty...</p>
    </div>
  );
}
