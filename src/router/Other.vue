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
    <h4> References: </h4>
    <div class="grid-container">
      
      <div class="grid-child-1">
        <strong> Dr. Md Al Mehedi Hasan </strong>
          Postdoctoral Researcher<br>
          University of Aizu, Japan<br>
          Email: mehedi_ru@yahoo.com<br>
          Phone: +8801712205360<br>
          <br>
          <strong> Nowfel Mashnoor </strong>
          Sr. Software Engineer<br>
          Evident BD Ltd.<br>
          Email: nmmashnoor@gmail.com<br>
          Phone: +8801826636115<br>
      </div>

      <div class="grid-child-2">
        <strong> Dr. Md. Nazrul Islam Mondal </strong>
          Professor<br>
          Department of CSE<br>
          Rajshahi University of Engineering and Technology<br>
          Email: mondal@cse.ruet.ac.bd<br>
          Phone: +8801720662278<br>
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
