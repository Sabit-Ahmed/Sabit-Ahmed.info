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
