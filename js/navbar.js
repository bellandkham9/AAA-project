


var nav = document.getElementById('nav-id');
var content = `
<nav id="nav" class="sb-topnav navbar navbar-expand">
<a id="nom_AAA" class="navbar-brand">
            <button id="sidebarToggle" href="#!">
                <img id="logo" class="img-thumbnail" src="img/logo.jpg" alt="">
            </button>
            <span id="associ">Association Avenir Assuré</span>
        </a>
        <!-- Navbar Search-->
        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div class="input-group me-5">
                <!-- Button trigger modal -->
                <button id="btn-addUser" class="button" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    <img id="icons" src="img/addUser.png" alt="">
                </button>
                <!-- Modal pour 'aajout d'un utilisateur -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div id="modal-addUser" class="modal-content">
                            <div id="box-register" class="modal-body">
                                <div class="container  pt-3">
                                    <form id="form" method="" class="pt-5">
                                        <div class="row justify-content-center">
                                            <div class="col-12 text-center justify-content-center">
                                                <img id="user_logo" src="img/🦆 icon _profile circle_.png"
                                                    class="img-thumbnail" alt="">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 text-center justify-content-center">
                                                <p class="pt-2">
                                                    <label for="">Nom d'utilisateur</label>
                                                    <input id="username" name="username" class="form-control"
                                                        type="text" placeholder="entrer nom d'utilisateur" required
                                                        autofocus>
                                                </p>
                                                <p>
                                                    <label for="">Mot de Passe</label>
                                                    <input id="password" name="password" class="form-control"
                                                        type="password" placeholder="entrer mot de passe" required>
                                                </p>
                                                <p>
                                                    <label for="">Staut</label>
                                                    <select id="statut" name="statut" class="form-select"
                                                        aria-label="Default select example">
                                                        <option selected>choose your status</option>
                                                        <option value="President">President</option>
                                                        <option value="Tresorier">Trésorier</option>
                                                        <option value="Secretaire">Secretaire</option>
                                                        <option value="Secretaire">Canseur</option>
                                                    </select>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center">
                                            <div class="col-12 text-center justify-content-center">
                                                <button id="btn-register" class="btn btn-primary btn-block"
                                                    type="sumbit">Creer</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- fin du modal d'ajout d'utilisateur -->
                <button id="bn-notif" class="button" data-bs-toggle="modal" data-bs-target="#myModal2"
                    aria-expanded="false" aria-controls="collapseExample">
                    <img id="icons" src="img/Doorbell.png" alt="">
                </button>
                <div class="container demo">
                    <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
                        <div id="modal-notification" class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Notifications</h5>
                                </div>
                                <div id="box-notif" class="modal-body">
                                    <ul>
                                        <li><span>Il y a 12 min:</span> <span>Lorem ipsum dolor sit amet.</span></li>
                                        <li><span>Il y a 06 min:</span> <span>Lorem ipsum dolor sit amet.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
        <!-- Navbar-->

        <!-- Option derière profiLes -->
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown d-flex">
                <a id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div id="container-profile" class="container d-flex">
                        <img id="profile" src="img/male-user-50.png" alt="">
                        <div id="nom_role" class="container ">
                            <p>emitek<br>Collaborators</p>
                        </div>
                    </div>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Modifier photo de profil</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#!">Langue:
                                <select name="" id="">
                                    <option value="" selected>français</option>
                                    <option value="">anglais</option>
                                </select>
                            </a>
                        </li>
                        <li><a class="dropdown-item" href="#!">Aide</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="index.html">Déconnexion</a></li>
                    </ul>
                </a>

            </li>
        </ul>

</nav>
`;


nav.innerHTML = content;