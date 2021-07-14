export default function Header() {
    return (
        <header className="masthead mb-auto">
            <div className="inner">
                <nav
                    className="navbar navbar-expand-md custom-color justify-content-between"
                >
                    <a className="navbar-brand" href="/">
                        <img
                            src="/images/General/logo_t.svg"
                            width="90.8"
                            height="40"
                            className="img-fluid"
                            alt="logo"
                        />
                    </a>

                    <button
                        className="navbar-toggler custom-color"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://instagram.com/gifkographix"
                                >
                                    <i className="fab fa-instagram fa-2x" />

                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://twitter.com/gifkographix"
                                >
                                    <i className="fab fa-twitter fa-2x" />

                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="mailto:contact@gifkographix.com"
                                >
                                    <i className="far fa-envelope fa-2x" />

                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
