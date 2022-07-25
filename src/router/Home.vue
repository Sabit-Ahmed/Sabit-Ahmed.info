<template>
  <div class="col-md-8 myClass">
    <h3><strong>Overview</strong></h3>
    <p>
    An AI enthusiast who has conducted research on Data Mining, Machine Learning, Bioinformatics, Computational Proteomics, Sequence Analysis, and
    Computer Vision for more than 3 years. Also a successful AI Engineer with 1.5+ years of working experience in one of the leading healthcare companies
    in the USA. Skilled in Swift, Python, JavaScript, MATLAB programming languages and Mobile Development (iOS, Android and cross-platform), Web
    Development platform.
    </p>
    <br>
    <h4><strong> Featured Skills </strong></h4>
    <strong> Data Mining </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Machine Learning </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 85%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Deep Learning </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Feature Engineering </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 95%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Bioinformatics </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 90%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Computer Vision </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Natural Language Processing </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 65%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Software Engineering (iOS) </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <br>
    
    <div class="row myCard">
      <router-link
      to="background"
      class="myCardLayout"
      active-class="active"
      exact
    >
      <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-body cardHover">
        <h5 class="card-title"><strong> Career Summary </strong></h5>
        <p class="card-text"> An active researcher and reviewer in the field of Machine Learning and Bioinformatics.
          Has about 3+ years of research experience along with 1.5+ year of software engineering experience. Also,
          has demonstrated organizing and managing experience with team playing ability.
        </p>
      </div>
      </div>
      </router-link>
      <router-link
        to="projects"
        class="myCardLayout"
        active-class="active"
        exact
      >
        <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-body cardHover">
          <h5 class="card-title"><strong> 50+ Projects </strong></h5>
          <p class="card-text"> Built numerous projects which cover Data Science, Machine Learning, Deep Learning,
            Bioinformatics, Computer Vision, Natural Language Processing, Software Engineering, Mobile Application
            Development, Full Stack Web Development, Real-time AI Applications, etc.
          </p>
        </div>
      </div>
      </router-link>
      <router-link
        to="publications"
        class="myCardLayout"
        active-class="active"
        exact
      >
        <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-body cardHover">
          <h5 class="card-title"><strong> 5 Publications </strong></h5>
          <p class="card-text"> Three single-label PTM site predictors 
            (i.e. Formyl Pred, predPhogly-Site, and PredNitro) and two mult-label 
            PTM site predictors (i.e. predML-Site and iMul-kSite) have been developed.
            Achievement: 1 accepted conference paper and 4 published journal articles. 
          </p>
        </div>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myClass{
    background-color: #eee;
    margin: 10px 10px;
    padding: 20px 30px;
    text-align: justify;
}

.myIcon{
  margin: 5px;
}
.myIcon-space{
  margin-top: 5px;
  margin-bottom: 5px;
}

.myCard{
  padding-left: 10px;
}
.myCardLayout{
  color: black;
}
.myCardLayout:hover{
  text-decoration: none;
}
.cardHover:hover{
  background-color: #ddd;
}
</style>
