<?php
$xmlurl = "http://news.163.com/special/00011K6L/rss_newsattitude.xml";
//$xmlurl="http://ethanluo.tuchong.com/feeds/";

header('Content-Type:text/html;charset= UTF-8');

$xml_array = simplexml_load_file('http://www.36kr.com/feed');
echo htmlspecialchars($xml_array->asXML());
foreach ($xml_array as $tq) {
	echo $tq->rss;
	echo "fc";
}
