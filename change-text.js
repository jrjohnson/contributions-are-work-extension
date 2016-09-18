var html = $('.contrib-legend').html();
html = html.replace('Less', 'Less Work');
html = html.replace('More', 'More Work')
$('.contrib-legend').html(html);

$('.contrib-legend li:eq(0)').css('background-color', '#090');
$('.contrib-legend li:eq(1)').css('background-color', '#e00').css('opacity', .25);
$('.contrib-legend li:eq(2)').css('background-color', '#e00').css('opacity', .5);
$('.contrib-legend li:eq(3)').css('background-color', '#e00').css('opacity', .75);
$('.contrib-legend li:eq(4)').css('background-color', '#e00').css('opacity', 1);
