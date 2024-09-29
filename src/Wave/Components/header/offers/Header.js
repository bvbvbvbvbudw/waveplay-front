import react from 'react';

export default function Header(){
    return <>
        <nav className="tempo-topbar">
            <a className="tempo-topbar-deezer-logo" data-tracked="true" data-tracking-action="logo"
               data-tracking-category="header" href="../index.html" id="topbar-deezer-logo">
                <div className="logo-deezer"></div>
            </a>
            <div className="tempo-topbar-exposed-links">
                <a className="tempo-link" data-active-regex="\/offers\/?" data-tracked="true"
                   data-tracking-action="plans-button" data-tracking-category="header" href="offers/index.html">
                    Plans </a>
                <a className="tempo-link" data-active-regex="\/features\/?" data-tracked="true"
                   data-tracking-action="features-button" data-tracking-category="header"
                   href="../explore/features/index.html">
                    Features </a>
                <a className="tempo-link" data-active-regex="\/(artist|playlist|album|channel|channels|track)\/?"
                   data-tracked="true" data-tracking-action="channels-explore-button" data-tracking-category="header"
                   href="channels/explore/index.html">
                    Music </a>
            </div>
            <div className="tempo-topbar-actions stack-m-horizontal align-items-center">
                <a className="topbar-action tempo-btn tempo-btn-s tempo-btn-hollow-neutral" data-tracked="true"
                   data-tracking-action="login-button" data-tracking-category="header"
                   href="https://account.deezer.com/en/login/" id="topbar-login-button">
                    Log in </a>
                <a className="topbar-action tempo-btn tempo-btn-s tempo-btn-primary" data-tracked="true"
                   data-tracking-action="signup-button" data-tracking-category="header"
                   href="https://account.deezer.com/en/signup/" id="topbar-register-button">
                    Sign up </a>
                <div className="burger-menu topbar-action" id="topbar-burger-menu">
                    <div className="burger-icon" id="burger-icon">
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </div>
                    <ul className="nav burger-menu-content">
                        <li className="nav-item">
                            <a className="nav-main-link backstage-header-link" data-tracked="true"
                               data-tracking-action="login-button" data-tracking-category="offers"
                               href="https://account.deezer.com/en/login/" id="burger-login-link">
                                Log in</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-main-link backstage-header-link" data-tracked="true"
                               data-tracking-action="signup-button" data-tracking-category="offers"
                               href="https://account.deezer.com/en/signup/" id="burger-signup-link">
                                Sign up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-main-link backstage-header-link" data-tracked="true"
                               data-tracking-action="download-app" data-tracking-category="offers"
                               href="../index.html?page=home&amp;source=MF_MenuDownloadApp" id="burger-download-link">
                                Download the app</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-main-link backstage-header-link" data-tracked="true"
                               data-tracking-action="plans-button" data-tracking-category="offers" href="offers.html"
                               id="burger-offers-link">
                                Plans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-main-link backstage-header-link" data-tracked="true"
                               data-tracking-action="channels-explore-button" data-tracking-category="offers"
                               href="channels/explore" id="burger-explore-link">
                                Explore Channels</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}