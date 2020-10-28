<!-- src/components/AppNav.vue -->
<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-jw">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#appnav"
      aria-controls="appnav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="appnav">
      <div class="nav navbar-nav">
        <router-link
          to="home"
          class="nav-item nav-link myClass"
          active-class="active"
          exact
        >
          Home
        </router-link>
        <router-link
          to="background"
          class="nav-item nav-link myClass"
          active-class="active"
          exact
        >
          Background
        </router-link>
        <router-link
          to="skills"
          class="nav-item nav-link myClass"
          active-class="active"
          exact
        >
          Skills & Expertise
        </router-link>
        
        <router-link
          to="projects"
          class="nav-item nav-link myClass"
          active-class="active"
          exact
        >
          Projects
        </router-link>
        <router-link
          to="publications"
          class="nav-item nav-link myClass"
          active-class="active"
          exact
        >
          Publications
        </router-link>
        <router-link
          to="other"
          class="nav-item nav-link myClass"
          active-class="active"
          exact
        >
          Additional Information
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.myClass:hover{
    background-color: #eee;
    border-radius: 4px;
}

.myClass{
  margin: 5px;
}
</style>