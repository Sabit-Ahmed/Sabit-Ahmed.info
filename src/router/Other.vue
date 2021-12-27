<template>
  <div class="col-md-8 myClass">
    <h3><strong>Additional Information</strong></h3>
    <strong> Interests: </strong>
    <ul>
        <li> Literature </li>
        <li> History </li>
        <li> Mythology </li>
        <li> Astronomy </li>
    </ul>
    <strong> Leisure Activities: </strong>
    <ul>
        <li> Travelling </li>
        <li> Gaming </li>
        <li> Football </li>
        <li> Cricket </li>
        <li> Movies </li>
    </ul>
    <br>
    <h4> REFERENCES: </h4>
    <div class="grid-container">
      
      <div class="grid-child-1">
        <strong> Dr. Md Al Mehedi Hasan </strong><br>
          Professor<br>
          Department of Computer Science and Engineering<br>
          Rajshahi University of Engineering and Technology<br>
          Rajshahi-6204, Bangladesh<br>
          Postdoctoral Researcher<br>
          University of Aizu, Japan<br>
          Email: <a href = "mailto: mehedi.hasan@cse.ruet.ac.bd">mehedi.hasan@cse.ruet.ac.bd</a>
          <a href = "mailto: mehedi_ru@yahoo.com">mehedi_ru@yahoo.com</a><br>
          Phone: +8801712205360
          <br>
          <br>
          <strong> Dr. Shamim Ahmad </strong><br>
          Professor<br>
          Department of Computer Science and Engineering<br>
          University of Rajshahi, Rajshahi-6205, Bangladesh<br>
          Email: <a href = "mailto: shamim_cst@ru.ac.bd">shamim_cst@ru.ac.bd</a>
          <a href = "mailto: shamim_cst@yahoo.com">shamim_cst@yahoo.com</a><br>
          Phone: +8801713140107<br>
      </div>

      <div class="grid-child-2">
        <strong> Dr. Abdollah Dehzangi </strong><br>
          Assistant Professor<br>
          Department of Computer Science<br>
          Center for Computational and Integrative Biology (CCIB)<br>
          Rutgers University, Camden, NJ 08102, USA<br>
          Email: <a href = "mailto: i.dehzangi@gmai.com">i.dehzangi@gmai.com</a><br>
          Phone: +1 443 558 8006
          <br>
          <br>
          <br>
          <br>
          <strong> Nowfel Mashnoor </strong><br>
          Sr. Software Engineer<br>
          Upay Ltd.<br>
          Email: <a href = "mailto: nmmashnoor@gmail.com">nmmashnoor@gmail.com</a><br>
          Phone: +8801826636115<br>
      <div>
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
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
</style>
