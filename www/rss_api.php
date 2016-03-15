<?php
require __DIR__ . '/lib/toro.php';

function Parse($url)
{

    $fileContents = file_get_contents($url);

    $fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);

    $fileContents = trim(str_replace('"', "'", $fileContents));

    $simpleXml = simplexml_load_string($fileContents);

    $json = json_encode($simpleXml);

    return $json;

}

class PostHandler
{

    public function get($pageId)
    {
        header("Access-Control-Allow-Origin: *");
        if ($pageId > 1) {
            $res = json_decode(file_get_contents("data/rss_catch.json"), true);
            $item = array_slice($res["channel"]["item"], $pageId * 9, 10);
        } else {
            /*
            $xml_array = simplexml_load_file('http://www.36kr.com/feed');
            $res = json_decode(json_encode((array) $xml_array), true);
            $fp = fopen("data/rss_catch.json", "w");
            fwrite($fp, json_encode($res));
            $item = array_slice($res["channel"]["item"], 0, 10);*/
            //$res = Parse('http://www.36kr.com/feed');
            //$res = json_decode($res);
            //$item = array_slice($res["channel"]["item"], 0, 10);

        }
        echo json_decode($res);

    }
}

Toro::serve(array(
    "/" => "PostHandler",
    "/posts/:alpha" => "PostHandler",
));
