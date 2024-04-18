
import { useThemeContext } from "../Context/ThemeContext";

const Home = () => {
  const { contextTheme } = useThemeContext;
  return (
    <div>
      <h2>home</h2>
      <p>Pagina de Inicio  {contextTheme}</p>
    </div>
  );
};

export default Home;
