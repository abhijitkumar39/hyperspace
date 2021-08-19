{/* <script type="text/javascript" content-type="application/javascript;charset=utf-8" src="/assets/js/typewriter.js"></script> */}

var app = document.getElementById('app');
							
var typewriter = new Typewriter(app, {
					loop: true
					});
							
				typewriter.typeString('Programmer')
						.pauseFor(1200)
						.deleteAll()
// 						.typeString('Tech Writer')
// 						.pauseFor(1200)
// 						.deleteAll()
						.typeString('Time Pass Chef ;)')
						.pauseFor(1200)
						.start();
							
