	<div id="top_login">
  
	  
	  <?
    if(!$_SESSION['userid'] )
	{
?>
          <a href="login_form.php">로그인</a>  <a class="aa" href="member_conditions.html">회원가입</a> 
<?
	}
	else
	{
?>
		<?=$_SESSION['userid']?> 
		<a href="logout.php">로그아웃</a> <a class="bb" href="member_conditions.html">회원가입</a>  
<?
	}
?>
	  
     </div>
  
