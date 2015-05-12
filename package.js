Package.describe({
    summary: "bootstrap3 wysiwyg HTML5 editor",
    version: "1.0.0"
});

Package.on_use(function (api) {
    api.use(['templating','less','jquery'], 'client');
    api.add_files('lib/wysihtml-toolbar.js', 'client', {bare:true});
    api.add_files('lib/advanced_and_extended.js', 'client', {bare:true});
    api.add_files('lib/menuWysihtml.html', 'client');
    api.add_files('lib/menuWysihtml.less', 'client');
    api.export(['wysihtml5'],['client']);
    api.export(['wysihtml5ParserRules'],['client']);
});
