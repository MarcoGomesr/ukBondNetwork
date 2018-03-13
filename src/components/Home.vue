<template>
    
  <div>
 <section class="signup">  
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-12  col-sm-12 col-xs-12">      
        <img src="../assets/img/plus500.png" alt="imac">
      </div>

      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <h1>Everything You Need In One <strong>Platform</strong></h1>
        <p>When you’re ready for the real thing you can begin trading with as little as $.</p>
        <form>
          <div class="form-group">
            <input type="name" class="form-control"  placeholder="First Name" v-model="userData.first">
            <!-- <small v-if="isSubmitted && !userData.first">Name is invalid</small> -->
          </div>
          <div class="form-group">
            <input type="text" class="form-control"  placeholder="Last Name" v-model="userData.last">
          </div>
          <div class="form-group">
            <input type="email" class="form-control"  placeholder="Email" v-model="userData.email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control"  placeholder="Password" v-model="userData.password">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">I would like to receive newsletters, special promotions, messages and updates.</label>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="onSubmit()">Create Account</button>
        </form>
      </div>

    </div>
  </div>
</section>

 <div class="tradewithus bg-light">
       <div class="container">
          <div class="row">
            <div class="col-md-12">              
              <h2 class="text-center tradewithus__title">Why Trade With US?</h2>
            </div>
          </div>
          <div class="row">
           <div class="col-md-6">
             <ul>
                <li class="tradewithus__item"><icon name="check" class="tick"></icon> Fixed &amp; Floating Spreads</li>
                <li class="tradewithus__item"><icon name="check" class="tick"></icon> FREE advanced trading tools</li>
                <li class="tradewithus__item"><icon name="check" class="tick"></icon> 250+ FX pairs, commodities, indices, stocks and more</li>
                <li class="tradewithus__item"><icon name="check" class="tick"></icon> Daily exclusive institutional analysis</li>
                <li class="tradewithus__item"><icon name="check" class="tick"></icon> 24/5 trading and customer service</li>
              </ul>
           </div>


           <div class="col-md-6">
             <ul>
              <li class="tradewithus__item"><icon name="check" class="tick"></icon> Trade immediately by credit card, PayPal or Web-Money</li>
              <li class="tradewithus__item"><icon name="check" class="tick"></icon> Start trading with as little as $<i class="minimumDepositAmount"></i></li>
              <li class="tradewithus__item"><icon name="check" class="tick"></icon> 400:1 leverage*</li>
              <li class="tradewithus__item"><icon name="check" class="tick"></icon> Learn to trade with videos, tutorials &amp; more</li>
              <li class="tradewithus__item"><icon name="check" class="tick"></icon> Withdraw instantly with Ava Debit Card</li>
              </ul>
           </div>           
         </div>
        </div>
       </div><!-- tradewithus -->
  </div>
</template>

<script>
/*eslint-env jquery*/
export default {
  name: 'Signup',
  data(){
    return{
      isSubmitted: false,
      userData:{
        first: '',
        last: '',
        email: '',
        password: ''
      }
    }
  },

  methods:{
    onSubmit(){
      this.isSubmitted = true;
      if( this.isSubmitted ){
        this.$router.push('/demo');      
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 img{
  width: 100%;
 }

 button{
  margin-top: 20px;
  width: 100%;
 }

 .signup{
  margin-top: 30px;
 }
</style>
