<?php
require __DIR__ . '/lib/toro.php';

class PostHandler {

	public function get($pageId) {
		header("Access-Control-Allow-Origin: *");
		if ($pageId > 1) {
			$res = json_decode(file_get_contents("data/rss_catch.json"), true);
			$item = array_slice($res["channel"]["item"], $pageId * 9, 10);
		} else {

			$xml_array = simplexml_load_file('http://www.36kr.com/feed', 'SimpleXMLElement', LIBXML_NOCDATA);
			$res = json_decode(json_encode((array) $xml_array), true);
			$fp = fopen("data/rss_catch.json", "w");
			fwrite($fp, json_encode($res));
			//$res = Parse('http://www.36kr.com/feed');
			//$res = json_decode($res);
			$item = array_slice($res["channel"]["item"], 0, 10);
			//$item = cdataXML2Arr('http://www.36kr.com/feed');
		}

		echo json_encode($item);

	}
}

Toro::serve(array(
	"/" => "PostHandler",
	"/posts/:alpha" => "PostHandler",
));
