let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );


//Sky
const widthSky = 600;
const heightSky = 300;
const depthSky = 2;
const skyGeometry = new THREE.BoxBufferGeometry(widthSky, heightSky, depthSky);

let skyTexture = new THREE.TextureLoader().load( 'assets/textures/sky.jpg' );
let skyMaterial= new THREE.MeshBasicMaterial( {map: skyTexture} );
let sky = new THREE.Mesh( skyGeometry, skyMaterial );
sky.position.set(0,0,-50);
scene.add( sky );


//ground
const widthGround = 130;
const heightGround = 2;
const depthGround = 10;
const groundGeometry = new THREE.BoxBufferGeometry(widthGround, heightGround, depthGround);

let groundTexture = new THREE.TextureLoader().load( 'assets/textures/grasss.jpg' );
let groundMaterial = new THREE.MeshBasicMaterial( {map: groundTexture} );
let ground = new THREE.Mesh( groundGeometry, groundMaterial );
ground.position.set(0,15,-1);
scene.add( ground );



//Sea
const widthSea = 130;
const heightGroundSea = 2;
const depthGroundSea = 2;
const seaGeometry = new THREE.BoxBufferGeometry(widthSea, heightGroundSea, depthGroundSea);

// let texture = new THREE.TextureLoader().load( 'textures/grasss.jpg' );
let seaMaterial = new THREE.MeshBasicMaterial( {color: 0xadd8e6} );
let sea = new THREE.Mesh( seaGeometry, seaMaterial );
sea.position.set(0,15,-7);
scene.add( sea );


//castle ground
const widthCastleGround = 180;
const heightCastleGround = 2;
const depthCastleGround = 5;
const castleGroundGeometry = new THREE.BoxBufferGeometry(widthCastleGround, heightCastleGround, depthCastleGround);

let castlegroundTexture = new THREE.TextureLoader().load( 'assets/textures/grasss.jpg' );
let castlegroundMaterial = new THREE.MeshBasicMaterial( {map: castlegroundTexture} );
let castleground = new THREE.Mesh( castleGroundGeometry, castlegroundMaterial );
castleground.position.set(0,20,-15);
scene.add( castleground );


//right Tower
const radiusTopRightTower = 3;
const radiusBottomRightTower = 3;
const heightRightTower = 30;
const radialSegmentsRightTower = 10;
const rightTowerGeometry = new THREE.CylinderBufferGeometry(radiusTopRightTower, radiusBottomRightTower, 
                                                        heightRightTower, radialSegmentsRightTower);
let rightTowerTexture = new THREE.TextureLoader().load( 'assets/textures/stonewall.jpg' );
let rightTowerMaterial = new THREE.MeshBasicMaterial( { map: rightTowerTexture} );
let rightTower = new THREE.Mesh( rightTowerGeometry, rightTowerMaterial );
rightTower.position.x = -40;
rightTower.position.z = -10;
rightTower.position.y = 2;
scene.add( rightTower );

//right MidBody Tower
const radiusTopMidRTower = 4;
const radiusBottomMidRTower = 4;
const heightMidRTower = 5;
const radialSegmentsMidRTower = 12;
const midRTowerGeometry = new THREE.CylinderBufferGeometry(radiusTopMidRTower, radiusBottomMidRTower, 
                                                        heightMidRTower, radialSegmentsMidRTower);
// let texture = new THREE.TextureLoader().load( 'textures/s.jpg' );
let midRTowerMaterial = new THREE.MeshBasicMaterial( { color: 0xB5651D} );
let MidRTower = new THREE.Mesh( midRTowerGeometry, midRTowerMaterial );
MidRTower.position.x = -40;
MidRTower.position.z = -10;
MidRTower.position.y = -16;
scene.add( MidRTower );

//right tower Roof
const radiusRightTowerRoof = 6;
const heightRightTowerRoof = -18;
const segmentsRightTowerRoof = 6;
const RightTowerRoofgeometry = new THREE.ConeBufferGeometry(radiusRightTowerRoof, heightRightTowerRoof, segmentsRightTowerRoof);

let rightTowerRoofMaterial = new THREE.MeshBasicMaterial( { color: 0x000080} );
let rigthTowerRoof = new THREE.Mesh( RightTowerRoofgeometry, rightTowerRoofMaterial );
rigthTowerRoof.position.x = -39;
rigthTowerRoof.position.z = -10;
rigthTowerRoof.position.y = -27;
scene.add( rigthTowerRoof );



//left Tower
const radiusTopLeftTower = 2.5;
const radiusBottomLeftTower = 2.5;
const heightLeftTower = 24;
const radialSegmentsLeftTower = 10;
const leftTowerGeometry = new THREE.CylinderBufferGeometry(radiusTopLeftTower, radiusBottomLeftTower, heightLeftTower, radialSegmentsLeftTower);

let leftTowerTexture = new THREE.TextureLoader().load( 'assets/textures/stonewall.jpg' );
let leftTowerMaterial = new THREE.MeshBasicMaterial( { map: leftTowerTexture} );
let leftTower = new THREE.Mesh( leftTowerGeometry, leftTowerMaterial );
leftTower.position.x = 40;
leftTower.position.z = -10;
leftTower.position.y = 4;
scene.add( leftTower );

//left MidBody Tower
const radiusTopMidLTower = 2;
const radiusBottomMidLTower = 2;
const heightMidLTower = 5;
const radialSegmentsMidRLTower = 12;
const midLTowerGeometry = new THREE.CylinderBufferGeometry(radiusTopMidLTower, radiusBottomMidLTower, 
                                                        heightMidLTower, radialSegmentsMidRLTower);
// let texture = new THREE.TextureLoader().load( 'textures/f.jpg' );
let midLTowerMaterial = new THREE.MeshBasicMaterial( { color: 0xB5651D} );
let MidLTower = new THREE.Mesh( midRTowerGeometry, midRTowerMaterial );
MidLTower.position.x = 39;
MidLTower.position.z = -10;
MidLTower.position.y = -10;
scene.add( MidLTower );

//left tower Roof
const radiusLeftTowerRoof = 5;
const heightLeftTowerRoof = -18;
const segmentsLefttTowerRoof = 6;
const LeftTowerRoofgeometry = new THREE.ConeBufferGeometry(radiusLeftTowerRoof, heightLeftTowerRoof, segmentsLefttTowerRoof);

let LeftTowerRoofMaterial = new THREE.MeshBasicMaterial( { color: 0x000080} );
let LeftTowerRoof = new THREE.Mesh( LeftTowerRoofgeometry, LeftTowerRoofMaterial );
LeftTowerRoof.position.x = 38;
LeftTowerRoof.position.z = -10;
LeftTowerRoof.position.y = -22;
scene.add( LeftTowerRoof );


//Bottom castle wall
const widthBottomCastle = 70;
const heightBottomCastle = 10;
const depthBottomCastle = 2;
const castleBottomGeometry = new THREE.BoxBufferGeometry(widthBottomCastle, heightBottomCastle, depthBottomCastle);

let castleBottomWallTexture = new THREE.TextureLoader().load( 'assets/textures/bottomwall.jpg' );
let castleBottomWallMaterial = new THREE.MeshBasicMaterial( {map: castleBottomWallTexture} );
let castleBottomWall = new THREE.Mesh( castleBottomGeometry, castleBottomWallMaterial );
castleBottomWall.position.set(-12,15,-18);
scene.add( castleBottomWall );


//Upper castle wall
const widthUpperWallCastle = 70;
const heightUpperWallCastle = 25;
const depthUpperWallCastle = 2;
const castleUpperWallGeometry = new THREE.BoxBufferGeometry(widthUpperWallCastle, heightUpperWallCastle, depthUpperWallCastle);


let castleUpperWallTexture = new THREE.TextureLoader().load( 'assets/textures/bottomwall.jpg' );
let castleUpperWallMaterial= new THREE.MeshBasicMaterial( {map: castleUpperWallTexture} );
let castleUpperWall = new THREE.Mesh( castleUpperWallGeometry, castleUpperWallMaterial );
castleUpperWall.position.set(-12,-2,-18);
scene.add( castleUpperWall );


//castle Roof
const castleRoofRadius = 7;
const castleRoofGeometry = new THREE.TetrahedronBufferGeometry(castleRoofRadius);

// let castleRoofTexture = new THREE.TextureLoader().load( 'assets/textures/bridge.jpg' );
let castleRoofMaterial = new THREE.MeshBasicMaterial( { color: 0x000080} );
let castleRoofe = new THREE.Mesh( castleRoofGeometry, castleRoofMaterial );
castleRoofe.position.set(-20,-17,-18);
castleRoofe.position.set(-20,-17,-18);
scene.add( castleRoofe );


//Castle gate Tower
const widthGateTowerCastle = 20;
const heightGateTowerCastle = 45;
const depthGateTowerCastle = 2;
const castleGateTowerGeometry = new THREE.BoxBufferGeometry(widthGateTowerCastle, heightGateTowerCastle, depthGateTowerCastle);

let castleGateTowerTexture = new THREE.TextureLoader().load( 'assets/textures/stonewall.jpg' );
let castleGateTowerMaterial = new THREE.MeshBasicMaterial( {map: castleGateTowerTexture} );
let castleGateTower = new THREE.Mesh( castleGateTowerGeometry, castleGateTowerMaterial );
castleGateTower.position.set(0,5,-18);
scene.add( castleGateTower );


//Castle tower Roof
const radiusCastleTowerRoof = 13;
const heightCastleTowerRoof = -25;
const segmentsCastleTowerRoof = 6;
const CastleRoofgeometry = new THREE.ConeBufferGeometry(radiusCastleTowerRoof, heightCastleTowerRoof, segmentsCastleTowerRoof);

let CastleTowerRoofMaterial = new THREE.MeshBasicMaterial( { color: 0x000080} );
let CastleTowerRoof = new THREE.Mesh( CastleRoofgeometry, CastleTowerRoofMaterial );
CastleTowerRoof.position.x = 0;
CastleTowerRoof.position.z = -18;
CastleTowerRoof.position.y = -28;
scene.add( CastleTowerRoof );



//Castle gate
const widthCastleGate = 18;
const heightCastleGate = 25;
const depthCastleGate = 2;
const castleGateGeometry = new THREE.BoxBufferGeometry(widthCastleGate, heightCastleGate, depthCastleGate);

let castleGateTexture = new THREE.TextureLoader().load( 'assets/textures/gate.png' );
let castleGateMaterial = new THREE.MeshBasicMaterial( {map: castleGateTexture , transparent: true} );
let castleGater = new THREE.Mesh( castleGateGeometry, castleGateMaterial );
castleGater.position.set(0,7,-18);
scene.add( castleGater );


//bridge
const widthBridge = 13;
const heightBridge = 0;
const depthBridge = 5;
const bridgeeGeometry = new THREE.BoxBufferGeometry(widthBridge, heightBridge, depthBridge);

let bridgeTexture = new THREE.TextureLoader().load( 'assets/textures/bridge.jpg' );
let bridgeMaterial = new THREE.MeshBasicMaterial( {map: bridgeTexture} );
let bridge = new THREE.Mesh( bridgeeGeometry, bridgeMaterial );
bridge.position.set(0,14,-8);
scene.add( bridge );


//road
const widthCircle = 10;
const heightCircle = 1;
const depthCircle = 7;
const circleGeometry = new THREE.BoxBufferGeometry(widthCircle, heightCircle, depthCircle);

let circleMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
let circle = new THREE.Mesh( circleGeometry, circleMaterial );
circle.position.set(0,13,-0);
scene.add( circle );


camera.position.z = 8;


let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
function animate() {
   requestAnimationFrame( animate );
   // circle.rotation.y += 0.01;
   // MidLTower.rotation.y += 0.01;
   renderer.render( scene, camera );
}
animate();