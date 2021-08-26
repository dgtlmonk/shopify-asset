<script lang="ts">
export let show = false;
</script>

<style type="text/scss">
	.badge {
      width: 20px;
      height: 20px;
      padding: 0rem;
      border-radius: 50%;
      perspective: 1px;
      position: absolute;
      font-size: .9rem;
      transition: all .2s ease-in-out!important;
			font-size: xx-small;
      bottom: 62px;
      right: 78px;
		  z-index: 90;
	}
</style>

<div class="badge bg-red-500 text-white flex items-center justify-center shadow-md { show ? 'visible' : 'hidden' }">1</div>