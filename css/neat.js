/* blackviper.com */
/* snowcatman@yahoo.com edited this */

/* Cookie API  v1.0.1 keep this snowcatman */
function setCookie( name, value, expires, path, domain, secure )
{
var curCookie = name + "=" + escape(value) +
((expires) ? "; expires=" + expires.toGMTString() : "; path=/") +
((domain) ? "; domain=" + domain : "") +
((secure) ? "; secure" : "");
document.cookie = curCookie;
}
function getCookie( name )
{
var dc = document.cookie;
var prefix = name + "=";
var begin = dc.indexOf( "; " + prefix );
if ( begin == -1 )
{
begin = dc.indexOf(prefix);
if (begin !== 0) {return null;}
}
else
{
begin += 2;
}
var end = document.cookie.indexOf( ";", begin );
if ( end == -1 )
{
end = dc.length;
}
return unescape(dc.substring(begin + prefix.length, end));
}
function deleteCookie( name, path, domain )
{
var value = getCookie( name );
if ( value !== null )
{
document.cookie = name + "=; path=/" + 
((domain) ? "; domain=" + domain : "") +
"; expires=Thu, 01-Jan-70 00:00:01 GMT";
}

return value;
}

/* standard trim */
function trim( str )
{return str.replace(/^\s*|\s*$/g,"");}

/* StyleSheet Switcher */
function setActiveStyleSheet( title , group )
{
var i, a, b, g, t;
if ( !title || !group )
{
return;
}
for ( i = 0; ( a = document.getElementsByTagName( "link" )[ i ] ); i++ ) 
{
if ( a.getAttribute( "rel" ).indexOf( "style" ) != -1 && a.getAttribute( "title" ) )
{
b = ( a.getAttribute( "title" ) ).split( ":" );
g = trim( b[ b.length - 1 ] );
if ( g.toLowerCase() == group.toLowerCase() )
{
a.disabled = true;
t = trim( ( a.getAttribute( "title" ) ).substring( 0, a.getAttribute( "title" ).length - b[ b.length - 1 ].length - 1 ) );
if( t.toLowerCase() == title.toLowerCase() )
{
a.disabled = false;
}
}
setCookie( "style_" + g.toLowerCase() , title );
}
}
}
function getPreferredStylesheet ( group )
{
return ( getCookie ( "style_" + group ) );
}
