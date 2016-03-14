<?php
$xmlurl = "http://news.163.com/special/00011K6L/rss_newsattitude.xml";
//$xmlurl="http://ethanluo.tuchong.com/feeds/";

header('Content-Type:text/html;charset= UTF-8');

$xml_array = simplexml_load_file('http://www.36kr.com/feed');

//echo htmlspecialchars($xml_array->asXML());

//输出xml
$dom = dom_import_simplexml($xml_array)->ownerDocument;
$dom->formatOutput = true;
//echo $dom->saveXML();

function xml2array($xmlObject, $out = array())
{
    foreach ((array) $xmlObject as $index => $node) {
        $out[$index] = (is_object($node)) ? xml2array($node) : $node;
    }

    return $out;
}

$array = json_decode(json_encode((array) $xml_array), true);
echo json_encode($array);
