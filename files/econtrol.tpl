<title>Контроль входа</title>
<style>
  .title {
    margin: 20px 0px;
    font-size: 23px;
    font-weight: bold;
  }
  .input_def_settings {
     padding: 10px 0px 10px 0px; 
     text-align: left;
     width: 430px;
  }
  .input_def_settings:last-child {
     margin-bottom:20px;
  }
  .input_def_settings input[type="text"]
  {
    float:right;
  }
  img.def_preview {
    height:120px;
  }
</style>
<form method="post">
    <div style="padding: 100px 0px 50px 0px; text-align: center">
        <span style="font-size: 60pt;">{$cur_date}&nbsp; &nbsp;</span><span id="cur_time" style="font-size: 60pt;">{$cur_time}</span><br />
        {if {$user_duty}}<span style="font-size: 24pt;">(деж. КО - {$user_duty})</span>{/if}<br /><br />
        <input type="password" name="bar_code" id="bar_code" style="font-size: 48pt; height: auto" size="20" />
    </div>
</form>
<h1 style="color: green; text-align: center; margin-bottom: 40px; font-size: 32pt" id="login_message">{$message2}</h1>
<h1 style="color: green; text-align: center; margin-bottom: 40px; font-size: 32pt" id="login_message">{$message}</h1>

{if $audio}
<audio src="{$audio}" autoplay>
    Your browser does not support the <code>audio</code> element.
</audio>
{/if}

<script type="text/javascript">
  let input_bar_code = document.getElementById("bar_code");
  input_bar_code.focus();

  setInterval(() => {
    if (document.activeElement.tagName == 'BODY') {
      input_bar_code.focus();
    };
  }, 7000);

  setTimeout("document.getElementById('login_message').style.display='none'", 30000);
  setTimeout("window.location.href='report.php?id=16'", 1800000);
  var tsp = {$timestamp};
  function goTime()
    {
      var newTsp = new Date(tsp);
      var hours =  newTsp.getHours();
      if (hours < 10)
          hours = "0" + hours;
      var minutes =  newTsp.getMinutes();
      if (minutes < 10)
          minutes = "0" + minutes;
      var seconds =  newTsp.getSeconds();
      if (seconds < 10)
          seconds = "0" + seconds;

      document.getElementById("cur_time").innerHTML = hours + ":" + minutes + ":" + seconds;

      if (hours == "18" && minutes == "40" && seconds == "00")
           document.getElementById("login_message").innerHTML = "<audio src=\"ring.wav\" autoplay></audio>";

      tsp += 1000;
      setTimeout("goTime()", 1000);
    }
  goTime();
</script>