<html>
<head>
    <meta http-equiv="Content-Type" content="text/html">
    <title>Queries</title>
</head>
<body>
<div>
    <?php connect() ?>
    <section>
        <article>
            <form action="linkFile.php" method="GET">
                Choose the query you want to run:<br/>
                <select name="dropdown" id="querySelector" onChange="chgAction()">
                    <option value="q1">List recent prices for all companies</option>
                    <option value="q2">Highest Stock Price in last 10 days</option>
                    <option value="q3">Average Stock Price over last year</option>
                    <option value="q4">Lowest Stock Price over last year</option>
                </select>
                <br/>
                <select name="companyName" id="compName" style="display: none">
                    <option value="amazon">Amazon</option>
                    <option value="apple">Apple</option>
                    <option value="facebook">Facebook</option>
                    <option value="hp">HP</option>
                </select>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </article>
    </section>
</div>
<script type="application/javascript">
    function chgAction(){
        if($("#querySelector").val() == "q1"){
            $("#compName").hide();
        }
        else{
            $("#compName").show();
        }
    }
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="queryCSS.css">
</body>
</html>

<?php
	
	if(isset($_GET['dropdown']) && !empty($_GET['dropdown'])){
		$querySelected = $_GET['dropdown'];
		switch($querySelected){
			case "q1":
				$query = "SELECT * FROM 'stockinfo' WHERE (company = 'Amazon' and date = '0000-00-00') or (company = 'Apple' and date = '0000-00-00') or (company = 'Facebook' and date = '0000-00-00') or (company = 'HP' and date = '0000-00-00')";
				break;
			case"q2":
				$company = $_GET['companyName'];
				$query = "SELECT MAX(value) FROM 'stockinfo' WHERE (date > date_add( '0000-00-00', interval -7 date)) and (company = $company);";
				break;
			case "q3":
				$company = $_GET['companyName'];
				$query = "SELECT AVG(value) FROM 'stockinfo' WHERE (date > date_add( '0000-00-00', interval -7 date)) and (company = $company);";
				break;
			case "q4":
				$company = $_GET['companyName'];
				$query = "SELECT MIN(value) FROM 'stockinfo' WHERE (date > date_add( '0000-00-00', interval -7 date)) and (company = $company);";
				break;
		}
		
		if($query_run = mysql_query[$query]){
			if($querySelected == "q1"){
				while($query_row = mysql_fetch_assoc($query_run)){
					$cName = $query_row['company'];
					$cValue = $query_row['value'];
					echo $cName.' has price : '.$cValue.'<br/>';
				}
			}
			else{
				$cValue = $query_row['value'];
				echo 'Required value is : '.$cValue.'<br/>';
			}
		}
		
	}

	function connect(){
		$conn_error = "Could not connect";
	
		$mysql_host = 'localhost';
		$mysql_user = 'root';
		$mysql_pass = '';
		
		$mysql_db = 'stockdata';
		
		if(!@mysql_connect($mysql_host, $mysql_user, $mysql_pass) || !@mysql_select_db($mysql_db)){
			die($conn_error);
		}
	}
	
?>

