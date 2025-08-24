<template>
  <div class="container">
    <div>
      Passionate Spanish software engineer diving into 3D graphics, game development, and high-performance computing. 
      Skilled in C++ and GPU programming — building interactive worlds where code meets creativity.
    </div>
  </div>

  <!-- Tech Stack -->
  <div class="section">
    <h2>Tech Stack</h2>
    <div class="stack">
      C++ • WebGPU • MPI • WGSL • OpenGL • Linux • Godot
      <br />
      VueJS • JavaScript • Python • CMake • Git
    </div>
  </div>

  <!-- Current Projects -->
  <div class="section">
    <h2>Projects</h2>
    <div class="project-card">
      <h3>Copper</h3>
      <p>Cross-platform 3D modeling app using SDFs and ray marching in WebGPU.</p>
      <a href="https://github.com/pabloxeo/copper" target="_blank">View on GitHub</a>
    </div>
    <div class="project-card">
      <h3>Untitled Game</h3>
      <p>Developing a game in Godot as a learning project.</p>
      <a href="" target="_blank">On progress</a>
    </div>
  </div>

  <div class="section">
		<h2>Experience</h2>
		<div class="project-card">
			<p>
                Worked as an Intern at Constella Intelligence, as data engineer, building tools to fix data pipelines and improve data quality.
                <br />
                Developed data validation tools using Python, Pandas and pySpark.
			</p>
			<a> July - September (2024)</a>
		</div>
        <p class="separator">|</p>
        <div class="project-card">
            <p>Searching for my first fresh graduate role</p>
            <a>Currently</a>
        </div>
    </div>
    
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');

.container {
    background-color: white;
    margin: auto;
    margin-top: 2em;
    border-radius: 1em;
    color: black;
    padding: 1em;
    font-family: 'Pixelify Sans', sans-serif;
    font-size: 1.2em; 
    width: 50%;
    outline: 2px solid black;
}
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

b {
    font-family: 'VT323', monospace;
    font-size: 0.9em;

}
.section {
    margin: 2em auto;
    width: 50%;
    background-color: #fdf5f5;
    padding: 1em;
    border-radius: 0.5em;
    outline: 2px solid black;
    font-family: 'Pixelify Sans', sans-serif;
    font-size: 1.2em;
}

.section h2 {
    margin-top: 0;
    font-size: 1.4em;
}

.stack {
    background-color: #784242;
    padding: 0.5em;
    border-radius: 0.3em;
    color: white;
    outline: 2px solid black;
    text-align: center;
}

.project-card {

    margin-top: 1em;
    background-color: #784242;
    padding: 0.8em; 
    border-radius: 0.3em;
    color: white;
    outline: 2px solid black;
}

.project-card h3 {
    margin-top: 0;
}

.project-card a {
    color: #E68B64;
    text-decoration: none;
    font-weight: bold;
}

.section ul {
    margin: 0;
    padding-left: 1em;
}
</style>