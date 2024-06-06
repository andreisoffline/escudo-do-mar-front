import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './Footer.css';
import footerImg from '../../assets/img/footer.png';

function Footer() {
  const { usuario } = useContext(AuthContext);
  let footerComponent;
  let data = new Date().getFullYear();

  if (usuario.token !== '') {
    footerComponent = (
      <footer className="footer items-center p-4 bg-neutral text-neutral-content bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="container mx-auto flex justify-between items-center">
          <aside className="flex items-center gap-3">
            <img
              className="h-20 w-20 "
              src={footerImg}
              alt=""
            />
            <p className="text-white">Copyright © {data} - All right reserved</p>
          </aside>
          <nav className="footer-icons flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="https://github.com/andreisoffline/escudo-do-mar-front" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.071 1.834 2.809 1.304 3.495.997.108-.776.419-1.304.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.382 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.403 1.02.004 2.046.137 3.006.403 2.288-1.552 3.294-1.23 3.294-1.23.655 1.652.244 2.873.12 3.176.77.839 1.234 1.911 1.234 3.221 0 4.609-2.804 5.625-5.475 5.921.431.372.814 1.102.814 2.222v3.293c0 .32.192.694.801.577 4.765-1.587 8.196-6.082 8.196-11.383 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
