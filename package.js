Package.describe({
      summary: "Upload files using Filepicker.io as the backend."
});

Package.on_use(function (api) {
    api.add_files('filepicker-load.js', 'client');
    api.export('Filepicker');
});
