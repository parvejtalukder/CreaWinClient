import { useContext } from "react";
import Swal from "sweetalert2";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";

const useTheme = () => {
  const themeInfo = useContext(ThemeContext);

  if (!themeInfo) {
    let timerInterval;
    Swal.fire({
      html: "useTheme must be used within ThemeProvider",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) console.log("Notice Ended!");
    });
  }

  return themeInfo;
};

export default useTheme;