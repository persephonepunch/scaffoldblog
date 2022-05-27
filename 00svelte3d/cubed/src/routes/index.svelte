
<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
</script>

<SC.Canvas antialias background={new THREE.Color('lt-grey')}>
	<SC.Mesh 
    material={new THREE.MeshStandardMatrial }
    geometry={new THREE.BoxGeometry()} />
	<SC.PerspectiveCamera position={[1, 1, 3]} />
    <SC.OrbitControls />
</SC.Canvas>