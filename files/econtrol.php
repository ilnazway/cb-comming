<?php
$config['script_noauth'] = 1;
$config['disable_csrf'] = 1;
include 'common.php';
$report = sql_select_array(REPORTS_TABLE, 'id = 16');
eval($report['code']);
echo $smarty->display('econtrol.tpl'); 