Package.describe({
    summary: "bootstrap3 wysiwyg HTML5 editor"
});

Package.on_use(function (api) {
    api.use(['jquery'], 'client');
    api.add_files('lib/wysihtml-toolbar.js', 'client', {bare:true});
    api.add_files('lib/advanced_and_extended.js', 'client', {bare:true});
    api.export(['wysihtml5'],['client']);
    api.export(['wysihtml5ParserRules'],['client']);
});
