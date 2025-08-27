<template>
	<div class="container">
		<div>
			I'm Pablo — a 23-year-old Spanish software engineer born in Granada, Spain. Studied Computer Science at the University of Granada (2020-2025).
		</div>
	</div>

	<div class="section">
		<h2>What I'm into</h2>
		<div class="stack">
			Games • Linux • Coffee • Jack of all trades
		</div>
	</div>

	<div class="section">
		<h2>Outside the code</h2>
		<ul>
			<li>• Reading Brandon Sanderson.</li>
            <li>• Worked in one of the best coffee shops in Granada while studying.</li>
            <li>• Intermediate snowboarder.</li>
            <li>• Japanese culture.</li>
		</ul>
	</div>

	<!-- Wins -->
  <div class="section">
    <h2>Highlights</h2>
    <ul>
      <li>- 2nd place national university Valorant tournament.</li>
      <li>- Really good at making coffee.</li>
    </ul>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.container {
	background-color: white;
	margin: auto;
	margin-top: 2em;
	border-radius: 1em;
	color: black;
	padding: 1em;
	width: 50%;
	outline: 2px solid black;
}

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
	font-size: 1.0em;
}

.section h2 {
	margin-top: 0;
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
.separator {
	text-align: center;
	font-weight: bold;
	font-size: 2rem;
}
</style>
