<template>
  <main>
    
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-custom" style="width: 280px;">
      <img src="@/assets/avatar.jpg" class="img-thumbnail">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <h4 class="text-center">Marvin Aguilar</h4>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto letter-menu">
      <li class="nav-item">
        <router-link to="/" @click="sonar" active-class="active" class="nav-link text-white" aria-current="page">
          Acerca de mi
        </router-link>
      </li>
      <li>
        <router-link to="/educacion" active-class="active" class="nav-link text-white">
          Educación
        </router-link>
      </li>
      <li>
        <router-link to="/experiencias" active-class="active" class="nav-link text-white">
          Experiencias
        </router-link>
      </li>
      <li>
        <router-link to="/skills" active-class="active" class="nav-link text-white">
          Skills
        </router-link>
      </li>
      <li>
        <router-link to="/galeria" active-class="active" class="nav-link text-white">
          Galeria
        </router-link>
      </li>
      <li>
        <router-link to="/contacto" active-class="active" class="nav-link text-white">
          Contacto
        </router-link>
      </li>
    </ul>
  </div>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
  </main>
</template>
<script>
import './app.css'
import coin from '../src/assets/coin.mp3'
import {Howl, Howler} from 'howler';
export default {
    setup(){
      const test = 0

      function sonar(){
        var sound = new Howl({
          src: [coin]
        });

        sound.play();
      }
      return{
        sonar
      }
    }
}
</script>

