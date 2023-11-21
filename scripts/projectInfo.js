var info = [
	{
		name: "3D Rasterizer Engine",
		description: "Witten in Python, featuring advanced features such as normal maps and water simulation using the Gertsner wave system. The engine also includes a post-processing stack with volumetric lighting and ACES tonemapping, as well as shadow mapping to enhance the realism of the rendered scenes.",
		features: [
			"Normal maps for realistic surface detail",
			"Water simulation using the Gertsner wave system",
			"Moving grass using a vertex shader",
			"Post-processing stack with volumetric lighting and ACES tonemapping",
			"Shadow mapping for enhanced realism",
			"Custom 3D model importer",
			"Day Night cycle system with dynamic skybox",
			"Quaternion based camera system",
			"Custom scripting system allowing to create custom scripts for objects",
			"Procedurally generated terrain using Perlin noise",
			"GPU Instancing for rendering large amounts of objects",
		],
		image: "./images/3d render engine/image1.png",
		tags: ["OpenGL", "Python","3D","Rendering","Graphics","Engine","Math"],
		link: `<a class="custom-link" href="https://github.com/killereks/3D-experiments/tree/main/Proper%20Rasterizer" target="_blank">Available on GitHub <i class="external alternate icon"></i></a>`,
		video: "https://www.youtube.com/embed/7nZc5_vhYms",
		searchTags: ["game engine", "maths"]
	},
	{
		name: "3D Raymarching Engine",
		description: "Written in Python and OpenGL. is a powerful 3D rendering engine that is capable of drawing an endless variety of fractals. With its advanced set operations, you can easily intersect or XOR objects to create complex shapes and patterns. The engine also includes a feature for distorting space, which allows you to rotate or stretch shapes in unique and creative ways. Whether you're an artist looking to create stunning visual effects or a developer looking for a versatile tool for creating interactive 3D environments.",
		features: [
			"Capability to draw many different types of fractals, including sierpinski triangle, mandelbrot set, julia set, and many more.",
			"Advanced set operations, including union, intersection, and XOR.",
			"Distortion feature, which allows you to rotate or stretch shapes in unique and creative ways.",
			"Smooth and responsive performance with no FPS drops"
		],
		link: `<a class="custom-link" href="https://github.com/killereks/3D-experiments" target="_blank">Available on GitHub <i class="external alternate icon"></i></a>`,
		image: "./images/3d raymarching engine/image1.png",
		tags: ["OpenGL", "Python","3D","Rendering","Graphics","Engine","Math"],
		searchTags: ["game engine", "maths"]
	},
	{
		name: "3D Game Engine v2",
		description: "Custom built 3D engine with ECS architecture. This engine is capable of rendering 3D models with shadow mapping. It also includes a custom built physics system to be able to raycast and click on objects.",
		features: [
			"Rendering 3D models",
			"Shadow mapping",
			"Raycasting",
			"Physics system",
			"Custom built ECS architecture",
		],
		link: `<a class="custom-link" href="https://github.com/killereks/CPP-Game-Engine" target="_blank">Available on GitHub <i class="external alternate icon"></i></a>`,
		image: "./images/3d game engine v2/image1.png",
		tags: ["C++","3D","Rendering","Graphics","Engine","Math","OpenGL"],
		searchTags: ["game engine", "maths"]
	},
	{
		name: "3D Path Tracer",
		description: "A path tracer written in C++ capable of rendering complex scenes with realistic lighting.",
		features: [
			"Path tracing",
			"Rendering complex scenes",
			"Realistic lighting"
		],
		link: `<a class="custom-link" href="https://github.com/killereks/CPP-Path-Tracer" target="_blank">Available on GitHub <i class="external alternate icon"></i></a>`,
		image: "./images/path tracer/image1.png",
		tags: ["C++","3D","Rendering","Graphics","Engine","Math", "OpenGL"],
		searchTags: ["game engine", "maths"]
	},
	{
		name: "Reinforcement Learning for Air Traffic Control (FULL)",
		description: "A paper that explores the use of reinforcement learning for air traffic control using different techniques. This paper also explores the pros and cons of using reinforcement learning for ATC.",
		features: [
			"Reinforcement Learning using DDQN",
			"Trained using Transfer Learning",
			"Explains the mathematical concepts behind reinforcement learning",
		],
		link: `<a class="custom-link" href="./papers/dissertation.html" target="_blank">Available on this website <i class="external alternate icon"></i></a>`,
		image: "./stock images/plane.jpg",
		tags: ["Machine Learning","Paper","Maths"],
		searchTags: ["paper","ai","maths"]
	},
	{
		name: "Picture Classifier",
		description: "A simple picture classifier that uses a custom built neural network to classify pictures. The neural network is trained on cat/dog dataset (~8000 images). Images are of size 32x32 and neural network contains 32x32x3 number of inputs and 2 outputs. It needs to determine if picture is a cat or dog.",
		features: [
			"Custom built neural network",
			"Reaches accuracy of 75%+ with image size of 32x32",
			"Custom built image processing system",
		],
		link: "N/A",
		image: "./images/photo detector/image1.jpg",
		tags: ["Neural Network","C#","Machine Learning","Image Processing"],
		searchTags: ["ai", "maths"]
	},
	{
		name: "KiRoX OS",
		description: "Dark web horror game with a custom built Operating System (KiRoX) inspired by internet mysteries such as Cicada 3301.",
		features: [
			"Fake operating system featuring various files types like text, image, music and executable.",
			"Working fake internet including fake websites. Some websites have an extra database for the backend.",
			"Making sure the code is scalable, maintainable and modular.",
			"Custom editors to make creating websites easy and fast."
		],
		link: "Not available yet.",
		image: "./images/ComeFindMe/kirox.gif",
		tags: ["Unity","Horror","OS"],
		searchTags: ["game", "ai"]
	},
	{
		name: "3D Game Engine",
		description: "A custom built 3D game engine with a custom built physics engine inspired by the old doom games.",
		features: [
			"Rendering sprites and text using cameras",
			"Smooth camera system",
			"Raycasting",
			"Great optimisation allowing for 1500 fps using one core",
			"2D UI system can use physics to allow for satisfying interactions and animations",
		],
		link: `<a class="custom-link" href="https://www.youtube.com/watch?v=UEIQejr02_s" target="_blank">Available on YouTube <i class="external alternate icon"></i></a>`,
		image: "./images/3d game engine/image1.jpg",
		video: "https://www.youtube.com/embed/UEIQejr02_s",
		tags: ["JavaScript","3D","Rendering","Graphics","Engine","Math"],
		searchTags: ["game engine", "maths", "game"]
	},
	{
		name: "Self Driving Cars",
		description: "A custom built Neural Network with a Genetic Algorithm makes these cars learn how to drive on their own. This is a version 2 of my old exactly same project. This project has much better optimisation, allowing for 500 cars instead of 50.",
		features: [
			"Efficient collision detection.",
			"Efficient raycasting.",
			"Better 2D driving model.",
			"10x faster collision detection than version 1.0"
		],
		link: `<a class="custom-link" href="self-driving-cars.html" target="_blank">Available online <i class="external alternate icon"></i></a>`,
		image: "./images/cars/xdtuwTPVVa.gif",
		tags: ["Neural Network","Genetic Algorithm","C#"],
		searchTags: ["ai", "maths"]
	},
	{
		name: "2D Game Engine",
		description: "A custom built 2D game engine with a custom built physics engine.",
		features: [
			"Rendering sprites and text using cameras",
			"Smooth camera system",
			"Custom built physics engine",
			"Custom built collision detection",
			"Custom built raycasting",
			"Custom built particle system",
			"Cutscene and dialogue system",
		],
		link: `<a class="custom-link" href="https://www.youtube.com/watch?v=qLL0lCnOeB8" target="_blank">See online <i class="youtube icon"></i></a>`,
		image: "./images/2dengine/img1.png",
		video: "https://www.youtube.com/embed/qLL0lCnOeB8",
		tags: ["Game Engine","HTML","CSS","JavaScript"],
		searchTags: ["game engine", "game"]
	},
	{
		name: "Perplex Experiment",
		description: "Applied my 3D math experience making a physics based puzzle game with parkour elements. Custom character controller made specifically for this project supports wallrunning, grappling hook swinging, launchpads. Fluidity of movement intertwines with creatively designed puzzles, blurring the line between the genres.",
		features: [
			"Mathematics behind procedural animations and projectile type questions.",
			"Physics based movement (wallrunning, sliding, grappling hook).",
			"Designing difficult puzzles with unique solutions."
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/the-perplex-experiment" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/PerplexExperiment/perplexexperiment.gif",
		tags: ["3D Math","Puzzle","Parkour","Physics"],
		searchTags: ["game"]
	},
	
	{
		name: "Screenshot",
		description: "Screenshot is a first person shooter where any mistake means game over. To overcome this player must use their reflexes, stealth and a unique mechanic that turns cameras lethal. Player is able to shoot through the camera screens and can even use recursion which makes the projectile receive special abilities.",
		features: [
			"Camera frustrum mathematics that map projectile to the corresponding camera pixel.",
			"IK for enemies.",
			"Patrolling AI with deadly accuracy."
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/screenshot" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/screenshot/screenshot.gif",
		tags: ["3D Math","IK","Stealth","FPS"],
		winner: "UDC Jam #1 Place",
		searchTags: ["game", "maths"]
	},

	{
		name: "Jacob & Gauss-Seidel Method",
		description: "Powerful numerical analysis tool that allows you to solve systems of linear equations using the Jacobi and Gauss-Seidel methods. With its user-friendly API, you can quickly and accurately find solutions to complex problems.",
		features: [
			"Jacobi and Gauss-Seidel methods.",
			"User-friendly API.",
			"Detailed step-by-step solution.",
			"Option to choose number of iterations and the error tolerance.",
			"Grapical representation of the solution."
		],
		tags: ["Python","Math"],
		link: `<a class="custom-link" href="https://www.youtube.com/watch?v=CRqCU-vqx_s" target="_blank">See online <i class="youtube icon"></i></a>`,
		image: "./images/linear_solver/image1.jpg",
		video: "https://www.youtube.com/embed/CRqCU-vqx_s",
		searchTags: ["maths"]
	},

	{
		name: "Unlit Souls",
		description: "Made in 3 days as a test of abilities. Inspired heavily by the dark souls series. Combat enemies (stealthly or full on) and defeat the final boss.",
		features: [
			"IK solution to match limbs to the surfaces.",
			"Enemy AI capable of predicting player's actions.",
			"Fluid movement with stamina system, makes player think about every action in advance.",
			"Inventory system for equipping armour and weapons. Items have custom properties giving players a stat boost."
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/unlitsouls" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/unlitsouls/combat.gif",
		tags: ["IK","Stealth","FPS","AI","Inventory"],
		searchTags: ["game"]
	},
	
	{
		name: "Infirun",
		description: "A procedural infinite runner created in 24 hours for the Exeter Jam. Includes a global leaderboard to compare times against other players.",
		features: [
			"Working with server leaderboards.",
			"Procedural level generation.",
			"Dividing the work up with my team to ship the product in a tight deadline."
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/infirun" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/InfiRun/gif1.gif",
		tags: ["Procedural Generation","Leaderboards"],
		winner: "Exeter Jam #1 Place",
		searchTags: ["game", "web dev"]
	},
	
	{
		name: "Rocket Jumper",
		description: "Rocket jumping speedrun game focused on multiplayer scores.",
		features: [
			"A custom server with REST API to serve various leaderboard and player data.",
			"Secure Login/Register system.",
			"Saving replays of the runs locally.",
			"World Record runs being saved on the server, with ability to watch anyone's run.",
			"Custom made self-updating launcher to update the game remotely.",
			"Data compression to reduce replay file size, with up to 70% size reduction."
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/rocket-jumper" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/RocketJumper/gif1.gif",
		tags: ["Leaderboards","REST API","Secure Login","Replays","Launcher","Data Compression","Physics","Parkour"],
		searchTags: ["game", "web dev"]
	},

	{
		name: "Nycto",
		description: "You are trapped in deep caves with no lights.  Thankfully you found a gun that allows you to see briefly whenever you shoot. Risk yourself deeper in search of an exit, battle ancient monsters and solve riddles that survived ages.",
		features: [
			"Aggressive AI that will chase you down.",
			"Use muzzle flash to see where you are.",
			"Global speedrun leaderboard.",
		],
		link: `<a class="custom-link" href="https://panpan58.itch.io/nycto" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/nycto/fight_alien.gif",
		tags: ["AI","Leaderboards","FPS","Stealth","Puzzle"],
		winner: "UDC Jam #2 Place",
		searchTags: ["game", "ai"]
	},
	
	{
		name: "Dimension Shifter",
		description: "You are a wizard's apprentice and you perform a ritual that splits time and space. Now you must travel between time and space between your room and find the items to re-do the ritual.",
		features: [
			"Use time travel and dimension portals to solve puzzles.",
			"Liquid shader for pickupable bottles.",
			"Working UV light shader.",
			"Functional computer using KiRoX Operating System.",
			"Seamless teleportation and time travel."
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/dimension-shifter" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/dimensionshifter/dimensionshifter.gif",
		tags: ["Puzzle","Time Travel","Dimension Portals","UV Light","Liquid Shader","Computer"],
		searchTags: ["game", "maths"]
	},

	{
		name: "GimSim",
		description: "Life simulator aimed at giving player as much freedom as possible. Player can create their own life and choose their own path.",
		features: [
			"Purchasing groceries and cooking food (cutting vegetables, frying eggs, etc) with visual feedback.",
			"Working various jobs (delivery, construction, etc).",
			"Relationships with other characters.",
			"Computer with custom OS.",
			"Inventory system.",
			"Working day/night cycle.",
			"Illnesses and injuries.",
			"Character customization.",
			"WIP crime system with police and jail.",
			"Localisation support."
		],
		link: `Not available. (Abandoned due to scale of the project)`,
		image: "./images/gimsim/gimsim.jpg",
		tags: ["Life Simulator","Inventory","Jobs","Relationships","Computer","Day/Night Cycle","Illnesses","Injuries","Character Customization","Crime","Localisation"],
		video: "https://www.youtube.com/embed/R7I6oTdTMn4",
		searchTags: ["game"]
	},
	
	{
		name: "Multiplayer FPS",
		description: "Basic Multiplayer FPS game.",
		features: [
			"3 different weapons with unique properties",
			"Sounds synchronized between players",
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/multiplayer-fps" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/multiplayerfps/multiplayerfps.gif",
		tags: ["FPS","Multiplayer","Networking"],
		searchTags: ["game", "networking"]
	},

	{
		name: "Multiplayer FPS 2",
		description: "Improved room based multiplayer FPS game with more weapon variety.",
		features: [
			"Custom game launcher to update the game remotely.",
			"King Of The Hill game mode where a player that stands longest in an area wins.",
			"Grappling hook, sliding, vaulting mechanics.",
			"Projectile and hitscan weapons.",
			"Special kill icons, e.g. Headshot, Last Bullet, Through Object, No Scope"
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/multiplayer-fps-v2" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/multiplayerfps/multiplayerfps2.gif",
		tags: ["Multiplayer","Launcher","King Of The Hill","Grappling Hook","Vaulting","Projectile","Hitscan","Kill Icons"],
		searchTags: ["game", "networking"]
	},

	{
		name: "Pitch of the Damned",
		description: "Infinite arena shooter with upgrades.",
		features: [
			"Upgrades with interesting dilemmas, forcing player to balance between both offensive and defensive upgrades.",
			"Different enemy types, including bosses.",
			"Procedural IK animations for weapons.",
			"Great sound design."
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/pitchofthedamned" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/PitchOfTheDamned/upgrades.gif",
		tags: ["Procedural Generation","Procedural IK Animations","Bosses", "Enemy Variety","Sound Design"],
		winner: "#1 in Gameplay & Fun",
		searchTags: ["game", "ai"]
	},

	{
		name: "Project Aravoid",
		description: "An attempt at a realistic horror game, heavily relying on reactive AI.",
		features: [
			"AI that is spatially aware, i.e. will predict where the player ran off to.",
			"AI is able to remember where intersections are, so will go back to a different path after finding a dead end."
		],
		link: `Not available yet.`,
		image: "./images/aravoid/aravoid.gif",
		tags: ["AI","Horror","Space Awareness","Memory"],
		searchTags: ["game", "ai", "maths"]
	},

	{
		name: "Magic Cube",
		description: "A puzzle game about changing sizes and time travel.",
		features: [
			"Time Travel mechanic that keeps track of position, velocity and rotation.",
			"Mind bending puzzles.",
			"Refractive portal shader."
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/magic-box" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/magiccube/magiccube.gif",
		tags: ["Puzzle","Time Travel","Shaders"],
		searchTags: ["game"]
	},

	{
		name: "Raymarched Fractal",
		description: "A raymarched fractal with glowing, ambient occlusion and directional lighting.",
		features: [
			"Raymarched fractal",
			"Directional lighting",
			"Ambient occlusion",
			"Glowing effect"
		],
		link: `<a class="custom-link" href="https://www.shadertoy.com/view/wllXz7" target="_blank">Available on shadertoy.com <i class="external alternate icon"></i></a>`,
		image: "./images/raymarch/img1.jpg",
		tags: ["Raymarching","Fractal","Directional Lighting","Shader","Custom Render Pipeline"],
		searchTags: ["maths"]
	},

	{
		name: "Who Murdered William Etnor?",
		description: "Puzzle game about a detective trying to solve a case using only found evidence.",
		features: [
			"Ability to inspect evidence and combine them to find clues",
			"Working computer with a google search system",
			"Place evidence in a 3D environment to physically link clues together",
			"Custom notes system to keep track of clues",
			"Pins to mark and connect important evidence",
		],
		link: `<a class="custom-link" href="https://killereks.itch.io/who-murdered-william-etnor" target="_blank">Available on itch.io <i class="external alternate icon"></i></a>`,
		image: "./images/williametnor/williametnor.gif",
		tags: ["Puzzle","Evidence","Notes","Computer","Detective"],
		searchTags: ["game"]
	},

	{
		name: "Student Network",
		description: "A student network which promotes interaction within the student community. This aims to provide social opportunities by encouraging students to engage with each other in a fun and friendly online environment.",
		features: [
			"Custom profile page with a profile picture, bio, and a list of skills and hobbies",
			"Ability to create posts of different types, such as text, images, and videos",
			"Ability to like and comment on posts",
			"Ability to follow other users",
			"Ability to search for users and posts",
			"Achievements to encourage users to engage with the site",
			"Create custom quizzes and flashcards to help with studying",
		],
		link: `<a class="custom-link" href="https://github.com/IsaacCheng9/student-network" target="_blank">Available on GitHub <i class="external alternate icon"></i></a>`,
		image: "./images/studentnetwork/img1.png",
		tags: ["HTML","CSS","JavaScript","SQLITE3","Flask","Python"],
		searchTags: ["web dev"]
	},

	{
		name: "Travel Buddy",
		description: "A travel companion to help plan your journey while saving both money and the planet by providing route analysis and a carpool marketplace.",
		features: [
			"Ability to search for routes and view the route on a map",
			"Ability to view the route's carbon footprint and cost using car petrol prices",
			"Suggests alternative routes to reduce carbon footprint and save money",
			"Ability to create a carpool and search for carpool matches",
			"Ability to view carpool matches on a map",
			"Compete with other users to see who can reduce their carbon footprint the most",
			"Electrical car suggestion feature to save money and reduce carbon footprint",
		],
		link: `<a class="custom-link" href="https://github.com/IsaacCheng9/travel-buddy" target="_blank">Available on GitHub <i class="external alternate icon"></i></a>`,
		image: "./images/travelbuddy/img1.png",
		tags: ["HTML","CSS","JavaScript","SQLITE3","Flask","Python"],
		winner: "Finalist",
		searchTags: ["web dev"]
	},

	{
		name: "Farming Idle",
		description: "Popular idle game with a farming theme. Played by over 250,000 people.",
		features: [
			"Ability to buy and upgrade crops",
			"Multiple game modes to choose from",
			"Save game feature to pick up where you left off",
			"Updated based on player feedback",
			"Changing seasons forces the player to adapt their strategy",
			"Fully functional skill tree",
			"Achievements that boost your progress",
			"Statistics page to track your progress",
		],
		link: `<a class="custom-link" href="https://codepen.io/killerek/full/oBqvLN" target="_blank">Available on CodePen <i class="external alternate icon"></i></a>`,
		image: "./images/farming idle/image1.png",
		tags: ["HTML","CSS","JavaScript"],
		searchTags: ["game", "web dev"]
	},

	{
		name: "Procedural FPS Animation System",
		description: "AAA style animation system for first person shooters. This system allows for the creation of complex animations using a simple interface.",
		features: [
			"Easily create complex animations using a simple interface",
			"Procedurally generates animations based on player input (movement, mouse) for a more natural feel",
			"Modular weapon system allows to mix and match different weapon systems (reload, shooting, aiming, etc.)",
		],
		image: "./images/AAA fps system/maxresdefault.jpg",
		link: `<a class="custom-link" href="https://www.youtube.com/watch?v=HRe3cyntDJc" target="_blank">Available on YouTube <i class="external alternate icon"></i></a>`,
		video: "https://www.youtube.com/embed/HRe3cyntDJc",
		tags: ["Animation", "FPS","Unity","C#"],
		searchTags: ["maths"]
	},
	{
		name: "Machine Learning using Unconventional Methods",
		description: "A paper that explores different types of machine learning techniques and how they differ. This paper also explores the pros and cons of each technique.",
		features: [
			"Explains the different types of machine learning techniques",
			"Explains the pros and cons of each technique",
			"Explains how each technique works",
		],
		link: `<a class="custom-link" href="./papers/outsideTheBox.html" target="_blank">Available on this website <i class="external alternate icon"></i></a>`,
		image: "./stock images/ml.jpg",
		tags: ["Machine Learning","Paper","Maths"],
		searchTags: ["paper","maths","ai"]
	},
	{
		name: "Jacob & Gauss-Seidel Methods",
		description: "A paper that explores the Jacob and Gauss-Seidel methods for solving linear equations. This paper also explores the pros and cons of each method.",
		features: [
			"Explains the Jacob and Gauss-Seidel methods",
			"Explains the pros and cons of each method",
			"Explains how each method works",
		],
		link: `<a class="custom-link" href="./papers/algorithms.html" target="_blank">Available on this website <i class="external alternate icon"></i></a>`,
		image: "./stock images/maths.jpg",
		tags: ["Maths","Paper"],
		searchTags: ["paper","maths"]
	},
	{
		name: "Predicting Company Success",
		description: "A paper that explores the different factors that contribute to a company's success. This paper also explores the pros and cons of each factor.",
		features: [
			"Explains the different factors that contribute to a company's success",
			"Explains the pros and cons of each factor",
			"Explains how each factor works",
		],
		link: `<a class="custom-link" href="./papers/lfd.html" target="_blank">Available on this website <i class="external alternate icon"></i></a>`,
		image: "./stock images/company.jpg",
		tags: ["Machine Learning","Paper","Maths"],
		searchTags: ["paper","ai"]
	},
	{
		name: "Reinforcement Learning for ATC",
		description: "A paper that explores the use of reinforcement learning for air traffic control. This paper also explores the pros and cons of using reinforcement learning for ATC.",
		features: [
			"Explains the use of reinforcement learning for air traffic control",
			"Explains the pros and cons of using reinforcement learning for ATC",
			"Explains how reinforcement learning works",
		],
		link: `<a class="custom-link" href="./papers/lit review.html" target="_blank">Available on this website <i class="external alternate icon"></i></a>`,
		image: "./stock images/atc.jpg",
		tags: ["Machine Learning","Paper","Maths"],
		searchTags: ["paper","ai","maths"]
	}
]