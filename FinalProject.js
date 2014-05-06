var camera, scene, renderer;
var geometry, material, mesh;

function init() {
	scene = new THREE.Scene();
	var width = window.innerWidth;
	var height = window.innerHeight;

	camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
	camera.position.set(0, 200, 700);
	scene.add(camera);

	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(1, 1, 1);
	scene.add(light);

	material = new THREE.MeshLambertMaterial({color: 0x006633});

	var texture = THREE.ImageUtils.loadTexture("wrapping4.jpg");
	wrapping1 = new THREE.MeshLambertMaterial({map: texture});

	var texture2 = new THREE.ImageUtils.loadTexture("wrapping1.jpg");
	wrapping = new THREE.MeshLambertMaterial({map: texture2});

	var texture3 = new THREE.ImageUtils.loadTexture("wrapping3.jpg");
	wrapping2 = new THREE.MeshLambertMaterial({map: texture3});

	var texture4 = new THREE.ImageUtils.loadTexture("wrappin2.jpg");
	wrapping3 = new THREE.MeshLambertMaterial({map: texture4});

	var christmas = new Date();
	christmas.setFullYear(2014, 11, 25);
	var today = new Date();

	if (christmas == today){
		geometry = new THREE.TextGeometry("YES", {size: 40, height: 10, surveSegments: 20, font: "helvetiker", bevelEnabled: true, bevelThickness: 4, bevelSize: 2});

		for (var i = 0; i < 1000; i++) {
			var mesh = new THREE.Mesh(geometry, material);
			mesh.position.x = (Math.random() - 0.5) * 5000;
			mesh.position.y = (Math.random() - 0.5) * 5000;
			mesh.position.z = (Math.random() - 0.5) * 5000;
			mesh.updateMatrix();
			mesh.matrixAutoUpdate = false;
			scene.add(mesh);
		}

		geometryb = new THREE.CubeGeometry(50, 50, 50);

		for (var i = 0; i < 1000; i++) {
			var meshb = new THREE.Mesh(geometryb, wrapping1);
			meshb.position.x = (Math.random() - 0.5) * 5000;
			meshb.position.y = (Math.random() - 0.5) * 5000;
			meshb.position.z = (Math.random() - 0.5) * 5000;
			meshb.updateMatrix();
			meshb.matrixAutoUpdate = false;
			scene.add(meshb);
		}

		var materialArray = [];

		xpos = THREE.ImageUtils.loadTexture('posx.jpg');
		materialArray.push(new THREE.MeshBasicMaterial({map: xpos}));

		xneg = THREE.ImageUtils.loadTexture('negx.jpg');
		materialArray.push(new THREE.MeshBasicMaterial({map: xneg}));

		ypos = THREE.ImageUtils.loadTexture('posy.jpg');
		materialArray.push(new THREE.MeshBasicMaterial({map: ypos}));

		yneg = THREE.ImageUtils.loadTexture('negy.jpg');
		materialArray.push(new THREE.MeshBasicMaterial({map: yneg}));

		zpos = THREE.ImageUtils.loadTexture('posz.jpg');
		materialArray.push(new THREE.MeshBasicMaterial({map: zpos}));

		zneg = THREE.ImageUtils.loadTexture('negz.jpg');
		materialArray.push(new THREE.MeshBasicMaterial({map: zneg}));

		for (var i = 0; i < 6; i++) {
			materialArray[i].side = THREE.BackSide;
		}

		var skyboxMaterial = new THREE.MeshFaceMaterial(materialArray);
		var skyboxGeometry = new THREE.BoxGeometry(5000, 5000, 5000);
		var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
		scene.add(skybox);
	}

	else {
		geometry = new THREE.TextGeometry("NOPE", {size: 80, height: 10, surveSegments: 20, font: "helvetiker", bevelEnabled: true, bevelThickness: 4, bevelSize: 2});
		mesh = new THREE.Mesh(geometry, material);

	var planeTexture = THREE.ImageUtils.loadTexture("RedVelvet.jpg");
	planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	planeMaterial = new THREE.MeshLambertMaterial({map: planeTexture, side: THREE.DoubleSide});
	plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.rotation.x = Math.PI / -2;
	plane.receiveShadow = true;
	scene.add(plane);
	}

	geometry.computeBoundingBox();
	textWidth = geometry.boundingBox.max.x - geometry.boundingBox.min.x;

	mesh.position.set(-0.5 * textWidth, 50, 0);
	mesh.castShadow = true;
	scene.add(mesh);	

	cubeGeometry = new THREE.CubeGeometry(150, 150, 150);
	cube = new THREE.Mesh(cubeGeometry, wrapping);
	cube.position.y = 135;
	cube.position.x = -400;
	cube.castShadow = true;
	scene.add(cube);

	cube2Geometry = new THREE.CubeGeometry(100, 100, 100);
	cube2 = new THREE.Mesh(cubeGeometry, wrapping1);
	cube2.position.y = 125;
	cube2.position.x = -250;
	cube2.position.z = -300
	cube2.castShadow = true;
	scene.add(cube2);		

	boxGeometry = new THREE.CubeGeometry(250, 250, 250);
	box = new THREE.Mesh(cubeGeometry, wrapping2);
	box.position.y = 145;
	box.position.x = 400;
	box.castShadow = true;
	scene.add(box);	

	box2Geometry = new THREE.CubeGeometry(250, 250, 250);
	box2 = new THREE.Mesh(cubeGeometry, wrapping3);
	box2.position.y = 135;
	box2.position.z = -250;
	box2.castShadow = true;
	scene.add(box2);

	box3Geometry = new THREE.CubeGeometry(250, 250, 250);
	box3 = new THREE.Mesh(cubeGeometry, wrapping);
	box3.position.y = 145;
	box3.position.x = 250;
	box3.position.z = -300;
	box3.castShadow = true;
	scene.add(box3);	

	renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
	renderer.setSize(width, height);
	renderer.shadowMapEnabled = true;

	controls = new THREE.OrbitControls(camera, renderer.domElement);
	
	document.body.appendChild(renderer.domElement);
}

function windowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.y += -0.01;
	cube.rotation.x += -0.01;

	box.rotation.y += 0.015;
	box.rotation.x += 0.015;

	box2.rotation.y += -0.01;
	box2.rotation.x += -0.01;

	cube2.rotation.y += 0.02;
	cube2.rotation.x += 0.02;

	box3.rotation.y += -0.027;
	box3.rotation.x += -0.027;

	controls.update();
	renderer.render(scene, camera);
}

init();
animate();

window.addEventListener('resize', windowResize, false);
