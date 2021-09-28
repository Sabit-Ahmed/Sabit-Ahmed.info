<template>
    <div class="col-md-3 myClass">
      <img src="./images/Sabit.png" class="img-fluid" alt="Responsive image"/>
        <p> 
          <strong>SABIT AHMED</strong><br>
          2nd March 1998, Bangladesh<br>
          <strong>Address:</strong> 1/1/B, Jahurabad, Mirpur-1, Dhaka-1216, Bangladesh.<br>
          <strong>Mobile:</strong>	+8801521320850<br>
          <strong>E-mail:</strong>	
          <ul>
          <li><a href="mailto:sabit.a.sirat@gmail.com">sabit.a.sirat@gmail.com</a></li>
          <li><a href="1503056@student.ruet.ac.bd">1503056@student.ruet.ac.bd</a></li>
          </ul>
          <a href="https://www.linkedin.com/in/sabitahmed/">
              <img src="./images/linkedin-logo.png" alt="Linkedin"  style="width:42px;height:42px;padding:5px;">
          </a>&nbsp;
          <a href="https://www.researchgate.net/profile/Sabit_Ahmed2">
              <img src="./images/rg.png" alt="ResearchGate"  style="width:42px;height:42px;padding:5px;">
          </a>&nbsp;
          <a href="https://github.com/Sabit-Ahmed">
              <img src="./images/GitHub.png" alt="GitHub"  style="width:42px;height:42px;padding:5px;">
          </a>&nbsp;
          <a itemprop="sameAs" 
          content="https://orcid.org/0000-0002-4830-0657" href="https://orcid.org/0000-0002-4830-0657" 
          target="orcid.widget" rel="me noopener noreferrer">
          <img src="./images/orcid.png" 
          style="width:42px;height:42px;padding:5px;" alt="ORCID"></a>&nbsp;
          <a href="https://www.facebook.com/sabit.a.sirat">
              <img src="./images/fb.png" alt="facebook"  style="width:55px;height:55px;padding:5px;">
          </a>
          <br><br>
          <a href="./images/Resume.pdf" download="Resume">
           Download Resume
          </a>
      </p>
      <p> Last updated on 27 September 2021</p>
    </div>
</template>

<script>
export default {
  name: 'CardLeft',
}
</script>

<style scoped>
.myClass{
  background-color: #eee;
  margin: 10px 10px;
  padding: 20px 20px;
}

img{
  height: auto;
  width: 20vw;
  padding-left: 30px;;
}

p{
  margin: 20px 20px;
}
</style>