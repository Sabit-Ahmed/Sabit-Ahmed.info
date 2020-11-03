<template>
  <div class="col-md-8 myClass">
    <h3><strong>Projects</strong></h3>
    <br>
    <div>
      <h4> Web-Based Projects </h4>
      <ul>
        <li><strong> Vue-folio </strong></li>
        <div>
          <strong> Project Details: </strong>
            A basic portfolio website built with Vue.js. The concept 'Single Page Application' (SPA) was implemented
            while playing around with this progressive JavaScript framework. Being a static website, the scope was 
            limited. But you could find out that your browser does not require any page reloading in this website.
          <br>
          <strong> Timeline: </strong> October 2020.<br>
          <strong> Language and Tools: </strong> Vue CLI, vue Router, HTML, CSS and Bootstrap.<br>
          <strong> GitHub Repository: </strong> 
          <a href="https://github.com/Sabit-Ahmed/Sabit-Ahmed.info">https://github.com/Sabit-Ahmed/Sabit-Ahmed.info</a>
        </div>
        <br>
        <li><strong> Containerized CRUD API </strong></li>
        <div>
          <strong> Project Details: </strong>
            A simple containerized CRUD application based on the Representational State Transfer (REST). 
            The first version included one single container and the later version included two separate 
            containers (i.e. API and database) with a shared network.
          <br>
          <strong> Timeline: </strong> October 2020.<br>
          <strong> Language and Tools: </strong> Docker, Flask, Python, HTML, CSS, and MySQL.<br>
          <strong> GitHub Repository: </strong> 
          <a href="https://github.com/Sabit-Ahmed/Containerized-CRUDpy">https://github.com/Sabit-Ahmed/Containerized-CRUDpy</a>
        </div>
        <br>
        <li><strong> Web Scraping API </strong></li>
        <div>
          <strong> Project Details: </strong>
            A simple Flask application where customer reviews can be scraped based on the query product. 
            In addition to that, another scraping application was constructed for scraping the query images from google.
          <br>
          <strong> Timeline: </strong> September 2020.<br>
          <strong> Language and Tools: </strong> Flask, Python, HTML, CSS, and MongoDB.<br>
          <strong> GitHub Repository: </strong> 
          <a href="https://github.com/Sabit-Ahmed/Python-Practice">https://github.com/Sabit-Ahmed/Python-Practice</a>
        </div>
        <br>
        <li><strong> A Service Providing Application </strong></li>
        <div>
          <strong> Project Details: </strong>
            A service providing application. Both customers and workers could register. Workers would be ready for 
            the delivery of the desired service ordered by the customers.
          <br>
          <strong> Timeline: </strong> March 2018 – August 2018.<br>
          <strong> Language and Tools: </strong> PHP, HTML, CSS, and MySQL.<br>
          <strong> GitHub Repository: </strong> 
          <a href="https://github.com/Sabit-Ahmed/3-1-project">https://github.com/Sabit-Ahmed/3-1-project</a>
        </div>
      </ul>
    </div>
    <br><br>
    <div>
      <h4> Image Processing: </h4>
        <div>
          <strong> Project Details: </strong>
            Various types of image filtering techniques were utilized for image smoothing, image sharpening, 
            and many other operations.
          <br>
          <strong> Timeline: </strong> August 2019 – November 2019.<br>
          <strong> Language and Tools: </strong> MATLAB.<br>
          <strong> GitHub Repository: </strong> 
          <a href="https://github.com/Sabit-Ahmed/Image-Processing-Matlab">https://github.com/Sabit-Ahmed/Image-Processing-Matlab</a>
        </div>
    </div>
    <br><br>
    <div>
      <h4> Research Projects </h4>
      <ul>
        <li><strong> Post-Translational Modifications </strong></li>
        <div>
          <strong> Project Details: </strong>
            This project aims to identify protein's post-translational modifications both individually and 
            simultaneously with higher efficacy. We have worked on Formylation, Malonylation, Phosphoglycerylation, 
            Glycation, Acetylation, Crotonylation, Methylation, Succinylation, and Glutarylation so far. We have 
            developed two single label predictors such as FormylPred and predPhogly-Site for Formylation and 
            Phosphoglycerylation site prediction and two multi-label predictors, one is predML-Site for predicting 
            Acetylation, Crotonylation, Methylation, and Succinylation simultaneously and the other one is still in 
            process. More information could be found in the publications section.
          <br>
          <strong> Timeline: </strong> August 2019 – Present.<br>
          <strong> Language and Tools: </strong> MATLAB, Python, Scikit-learn, Django, HTML, and CSS.<br>
          <strong> Web-Servers: </strong> 
          <ul>
            <li>
              <strong> predML-Site: </strong>
              <a href="http://103.99.176.239/predML-Site">http://103.99.176.239/predML-Site</a>
            </li>
            <li>
              <strong> predPhogly-Site: </strong>
              <a href="http://103.99.176.239/predML-Site">http://103.99.176.239/predPhogly-Site</a>
            </li>
          </ul>
        </div>
      </ul>
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
</style>
