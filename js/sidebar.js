
var sidebar = document.getElementById('layoutSidenav_nav');
var pageName = window.location.pathname.split('/').pop().split('.')[0]

sidebar.innerHTML = `
<nav class="sb-sidenav accordion" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <a class="nav-link" id="`+(pageName == "dashboard"?"active":"")+`" href="dashboard.html">
                                <div class="sb-nav-link-icon"></div>
                                <i class="fa fa-tachometer" aria-hidden="true"></i>
                                <span class="menu-items">Tableaux de bord</span>
                            </a>
                            <a class="nav-link" href="membres.html" id="`+(pageName == "membres"?"active":"")+`">
                                <div class="sb-nav-link-icon"></i></div>
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <span class="menu-items">Gestion des Membres</span>
                            </a>
                            <a class="nav-link" href="caisses.html" id="`+(pageName == "caisses"?"active":"")+`">
                                <div class="sb-nav-link-icon"></i></div>
                                <i class="fa fa-credit-card" aria-hidden="true"></i>
                                <span class="menu-items">Gestion de caisses</span>
                            </a>
                            <a class="nav-link" href="bilan.html" id="`+(pageName == "bilan"?"active":"")+`">
                                <div class="sb-nav-link-icon"></i></div>
                                <i class="fa fa-dollar" aria-hidden="true"></i>
                                <span class="menu-items">Bilan financier</span>
                            </a>
                            <a class="nav-link" href="evenements.html" id="`+(pageName == "evenements"?"active":"")+`">
                                <div class="sb-nav-link-icon"></div>
                                <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                                <span class="menu-items">Gestion des événements</span>
                            </a>
                        </div>
                    </div>

                </nav>

                `;



