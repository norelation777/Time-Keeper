<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js"></script>
	<script src="jehava.js"></script>
</head>
<body>
	<div class="container">
		<div class="container">
			<div class="row">
				<button type="button" class="btn btn-primary col-sm-6" id="clockInButton" onclick="clockIn()">Clock In</button>
				<button type="button" class="btn btn-primary col-sm-6 disabled" id="clockOutButton" onclick="clockOut()">Clock Out </button>
			</div>
		</div>
		<div class="row">
			<div class="container col-sm-6">
				<div class="dropdown">
  					<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    				Clock In/Out Times
    				<span class="caret"></span>
  					</button>
  					<ul class="dropdown-menu list-group" aria-labelledby="dropdownMenu1" id="inOutKeeper"></ul>
				</div>
			</div>
			<div class="container col-sm-6">
				<div class="dropdown">
  					<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    				Time Worked
    				<span class="caret"></span>
  					</button>
  					<ul class="dropdown-menu list-group" aria-labelledby="dropdownMenu2" id="timeWorked"></ul>
				</div>
			</div>
		</div>
	</div>
</body>