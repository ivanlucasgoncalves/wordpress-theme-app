<?php
/**
 * WP React functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WP React
 */

/**
 * Enqueue scripts and styles.
 */
function wp_react_scripts()
{
  global $wp_query;

  if (!is_admin()) {
      wp_deregister_script('jquery');
      wp_deregister_script('wp-embed');
  }
  wp_enqueue_style('wp-style', get_stylesheet_uri());
  wp_enqueue_style('style-css', get_template_directory_uri() . '/dist/css/app.css', false, filemtime(get_stylesheet_directory() . '/dist/css/app.css'));
  wp_enqueue_script('script-js', get_template_directory_uri() . '/dist/js/app.js', false, filemtime(get_stylesheet_directory().'/dist/js/app.js'), true);
  
  $url = trailingslashit(home_url());
  $path = trailingslashit(parse_url($url, PHP_URL_PATH));

  wp_scripts()->add_data('script-js', 'data', sprintf('var WPSettings = %s;', wp_json_encode(
      array(
        'URL' => array(
          'api' => esc_url_raw(get_rest_url(null, '/wp/v2')),
          'root' => esc_url_raw($url)
        )
      )
  )));


}
add_action('wp_enqueue_scripts', 'wp_react_scripts');


/**
 * Removing
 */
remove_action('wp_head', 'rsd_link'); // remove really simple discovery link
remove_action('wp_head', 'wp_generator'); // remove wordpress version

remove_action('wp_head', 'feed_links', 2); // remove rss feed links (make sure you add them in yourself if youre using feedblitz or an rss service)
remove_action('wp_head', 'feed_links_extra', 3); // removes all extra rss feed links

remove_action('wp_head', 'index_rel_link'); // remove link to index page
remove_action('wp_head', 'wlwmanifest_link'); // remove wlwmanifest.xml (needed to support windows live writer)

// Turn off oEmbed auto discovery.
add_filter('embed_oembed_discover', '__return_false');

// Don't filter oEmbed results.
remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);

// Remove oEmbed discovery links.
remove_action('wp_head', 'wp_oembed_add_discovery_links');

// Remove oEmbed-specific JavaScript from the front-end and back-end.
remove_action('wp_head', 'wp_oembed_add_host_js');

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('admin_print_styles', 'print_emoji_styles');

/**
* Handles JavaScript detection.
*
* Adds a js class to the root <html> element when JavaScript is detected.
*/
function javascript_detection() {
 echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";
}
add_action( 'wp_head', 'javascript_detection', 0 );
