<template>	
	<div>
		<div class="container">			
			<div class="row">
				<div class="alert alert-primary text-center" role="alert" >get up to $10,000 Bonus on your deposit <a href="" class="btn btn-primary">Upgrade</a> </div>
			</div>
		</div>
		
		<div class="row">
			<div class="col-md-12 col-sm-12 col-xs-12"> 
				<img src="../assets/img/plus-2.png" alt="plus">
				<img src="../assets/img/plus-chart.png" alt="plus 2">
			</div>			
		</div>

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="text-center">Upgrade and get up to $10,000 Bonus on your deposit</p>
      </div>
      <div class="modal-footer">        
        <button type="button" class="btn btn-primary">Upgrade Now</button>
      </div>
    </div>
  </div>
</div>


	</div>
	


</template>

<style>
	img, .alert{
		width: 100%;
	}


</style>


<script>
/*eslint-env jquery*/
export default{
	mounted() {
		this.$nextTick( () => {
			$('#exampleModalCenter').modal()
		} )
	}
}
// 	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
//   Launch demo modal
// </button>
</script>
