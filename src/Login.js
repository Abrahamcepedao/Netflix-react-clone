import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDataLayerValue } from './DataLayer';
import "./Login.css";

function Login() {
    const [{avatar}, dispatch] = useDataLayerValue();

    const setAvatar = (text) => {
        dispatch({
            type: "SET_AVATAR",
            avatar: text
        });
    }

    return (
      <div className="login">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix logo"
        />
        <div className="login__container">
          <h1>¿Who is watching now?</h1>
          <div className="login__images">
            <Link to="/">
                <div
                className="login__item"
                onClick={() => setAvatar(
                    "https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSI9pB8KaHkod9LltmzzQY0pqFMUOuTG0fPHMtOlSXvjWcQJzzkXJK-dD7LlfzZli_ieAiFtignkdQCZdWVtViHmIWAl.png?r=e93"
                )}
                >
                <img
                    className="login__avatar"
                    src="https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSI9pB8KaHkod9LltmzzQY0pqFMUOuTG0fPHMtOlSXvjWcQJzzkXJK-dD7LlfzZli_ieAiFtignkdQCZdWVtViHmIWAl.png?r=e93"
                    alt="Netflix logo"
                />
                <h4>Papito</h4>
                </div> 
            </Link>
            <Link to="/">
                <div
                className="login__item"
                onClick={() => setAvatar(
                    "https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABUh3c1MexUN5Y8IeMaqS9S2bWVl4TWl-tIWPfvL8Zy4SwD3XVbyWKtVFeknN_emyY0npHis9uhbi86PiQBf9wpRkNJIQ.png?r=c08"
                )}
                >
                <img
                    className="login__avatar"
                    src="https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABUh3c1MexUN5Y8IeMaqS9S2bWVl4TWl-tIWPfvL8Zy4SwD3XVbyWKtVFeknN_emyY0npHis9uhbi86PiQBf9wpRkNJIQ.png?r=c08"
                    alt="Netflix logo"
                />
                <h4>Jimena</h4>
                </div>    
            </Link>
            <Link to="/">
                <div
                className="login__item"
                onClick={() => setAvatar(
                    "https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABV9c43IvBclFArqYR-g5uWxqTFq2UcbM4meBLyNRPb0vvxgytAPl3mO36--gbO1B0x-ma7qQ8uYLIr2SxIir2QPTXV0w.png?r=b84"
                )}
                >
                <img
                    className="login__avatar"
                    src="https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABV9c43IvBclFArqYR-g5uWxqTFq2UcbM4meBLyNRPb0vvxgytAPl3mO36--gbO1B0x-ma7qQ8uYLIr2SxIir2QPTXV0w.png?r=b84"
                    alt="Netflix logo"
                />
                <h4>Abraham</h4>
                </div>   
            </Link>
            <Link to="/">
                <div
                className="login__item"
                onClick={() => setAvatar(
                    "https://occ-0-637-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABRKK34NUrzt3JoyLKtp4cGQq6g_3LMz7UqKuATx7_3xxL1A2MkyI-cyXHwKfDFiEOEmcCzPHWxdl9ZJPHPOCQzlEnOeg.png?r=3ce"
                )}
                >
                <img
                    className="login__avatar"
                    src="https://occ-0-637-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABRKK34NUrzt3JoyLKtp4cGQq6g_3LMz7UqKuATx7_3xxL1A2MkyI-cyXHwKfDFiEOEmcCzPHWxdl9ZJPHPOCQzlEnOeg.png?r=3ce"
                    alt="Netflix logo"
                />
                <h4>Mamita</h4>
                </div>   
            </Link>
            <Link to="/">
                <div
                className="login__item"
                onClick={() => setAvatar(
                    "https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABRxHJhJ8CNeIdIAg8OHRpJ9E2koh3DmJFAElNDClB31lpx-6YgqC3Nx8FUhyDrlQJu5KwzX7xfyHhyIE6nya3ASCLmnb.png?r=a5d"
                )}
                >
                <img
                    className="login__avatar"
                    src="https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABRxHJhJ8CNeIdIAg8OHRpJ9E2koh3DmJFAElNDClB31lpx-6YgqC3Nx8FUhyDrlQJu5KwzX7xfyHhyIE6nya3ASCLmnb.png?r=a5d"
                    alt="Netflix logo"
                />
                <h4>Abuela</h4>
                </div>   
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Login;
