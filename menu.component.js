_app.component('menu-component' , {
    template: `<nav>
            <div class="indigo darken-4">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">{{usuario}}</a></li>
                </ul>
            </div>
            </nav>
            <input type="text" v-model="miUsuario">` ,
            props:{
                usuario: String
            },
            data() {
                return {
                    miUsuario:this.usuario
                }
            }
});