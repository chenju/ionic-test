<?php
$xmlurl = "http://news.163.com/special/00011K6L/rss_newsattitude.xml";
//$xmlurl="http://ethanluo.tuchong.com/feeds/";

header('Content-Type:text/html;charset= UTF-8');

$rss = simplexml_load_file('rss_newsattitude.xml');

echo $rss;
