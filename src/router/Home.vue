<template>
  <div class="col-md-8 myClass">
    <h3><strong>Overview</strong></h3>
    <p>
    A recently graduated student of Computer Science and Engineering who has conducted researches 
    on identifying different types of Post-Translational Modifications (PTM). Also Experienced Secretary 
    with a demonstrated history of working in Nonprofit Organizations. About 2+ years of research 
    experience in Machine Learning, Bioinformatics, Computational Proteomics, Protein Sequence Analysis, 
    Feature Engineering, etc. Research interest includes Machine Learning, Data Science, and Artificial 
    Intelligence. About 1 year of development experience in AI driven Musculoskeletal Health Management 
    System.
    </p>
    <br>
    <h4><strong> Featured Skills </strong></h4>
    <strong> Web Development </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Data Science </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 45%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Bioinformatics </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Team Player </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <strong> Analytical Skill </strong>
    <div class="progress myIcon-space">
      <div class="progress-bar bg-success myIcon" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
        <p class="card-text"> Parallel to the academic study, an active researcher and a 
          committed apprentice who is currently mastering on Data Science and DevOps Concepts. Has
          demonstrated organizing and managing experience. Also, has about 2+ years 
          of research and 1 year of 
          development experiences.
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
          <h5 class="card-title"><strong> 25+ Projects </strong></h5>
          <p class="card-text"> Built numerous projects which cover Full Stack Web Development, 
            Cross-platform Applications, Real-time AI Applications, Data Science, 
            Image Processing, Containerized RESTfull API, Machine Learning, Docker, iOS App,
            etc..
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
