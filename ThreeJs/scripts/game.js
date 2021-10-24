const game  = new function()    {
    
    this.init = () => {
        const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: "#12ff90" } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = -50;
    camera.position.x = -3;
    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        cube.rotation.x+=0.01;
        cube.rotation.y+=0.01;
        camera.position.z+=-0.1;
        if (camera.position.z<=-30 && camera.position.z>=-70)
        {
            camera.rotation.y-=0.007
        }
    }
        document.body.appendChild( renderer.domElement );
        animate();
    };
}
